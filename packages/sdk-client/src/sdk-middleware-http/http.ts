import { Buffer } from 'buffer/'
import getErrorByCode, { HttpError, NetworkError } from '../sdk-client/errors'
import {
  ClientRequest,
  HttpErrorType,
  HttpMiddlewareOptions,
  JsonObject,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  QueryParam,
  RequestOptions,
} from '../types/sdk.d'
import parseHeaders from './parse-headers'

// performs a proper buffer check
function isBuffer(obj: any): boolean {
  return (
    obj != null &&
    obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' &&
    obj.constructor.isBuffer(obj)
  )
}

function createError({
  statusCode,
  message,
  ...rest
}: JsonObject<any>): HttpErrorType {
  let errorMessage = message || 'Unexpected non-JSON error response'
  if (statusCode === 404) {
    errorMessage = `URI not found: ${rest.originalRequest?.uri || rest.uri}`
    delete rest.uri // remove the `uri` property from the response
  }

  const ResponseError = getErrorByCode(statusCode)
  if (ResponseError) return new ResponseError(errorMessage, rest)
  return new HttpError(statusCode, errorMessage, rest)
}

// calculates the delay duration exponentially
// More info about the algorithm use here https://goo.gl/Xk8h5f
function calcDelayDuration(
  retryCount: number,
  retryDelay: number,
  maxRetries: number,
  backoff: boolean,
  maxDelay: number
): number {
  if (backoff)
    return retryCount !== 0 // do not increase if it's the first retry
      ? Math.min(
          Math.round((Math.random() + 1) * retryDelay * 2 ** retryCount),
          maxDelay
        )
      : retryDelay
  return retryDelay
}

function maskAuthData(
  request: ClientRequest,
  maskSensitiveHeaderData: boolean | undefined
) {
  if (maskSensitiveHeaderData) {
    if (request && request.headers && request.headers.authorization)
      request.headers.authorization = 'Bearer ********'
    if (request && request.headers && request.headers.Authorization)
      request.headers.Authorization = 'Bearer ********'
  }
}

export default function createHttpMiddleware({
  host,
  credentialsMode,
  includeResponseHeaders,
  includeOriginalRequest,
  includeRequestInErrorResponse = true,
  maskSensitiveHeaderData = true,
  headersWithStringBody = [],
  enableRetry,
  timeout,
  retryConfig: {
    // encourage exponential backoff to prevent spamming the server if down
    maxRetries = 10,
    backoff = true,
    retryDelay = 200,
    maxDelay = Infinity,
    // If set to true reinitialize the abort controller when the timeout is reached and apply the retry config
    retryOnAbort = false,
    retryCodes = [503],
  } = {},
  fetch: fetcher,
  getAbortController,
}: HttpMiddlewareOptions): Middleware {
  //nodejs v18 has the fetch available and not the version 16
  if (!fetcher)
    throw new Error(
      '`fetch` is not available. Please pass in `fetch` as an option or have it globally available.'
    )
  if (timeout && !getAbortController)
    throw new Error(
      '`AbortController` is not available. Please pass in `getAbortController` as an option or have AbortController globally available when using timeout.'
    )
  let fetchFunction: typeof fetch
  if (fetcher) {
    fetchFunction = fetcher
  } else {
    // `fetcher` is set here rather than the destructuring to ensure fetch is
    // declared before referencing it otherwise it would cause a `ReferenceError`.
    // For reference of this pattern: https://github.com/apollographql/apollo-link/blob/498b413a5b5199b0758ce898b3bb55451f57a2fa/packages/apollo-link-http/src/httpLink.ts#L49
    fetchFunction = fetch
  }

  if (!Array.isArray(retryCodes)) {
    throw new Error(
      '`retryCodes` option must be an array of retry status (error) codes.'
    )
  }

  if (!Array.isArray(headersWithStringBody)) {
    throw new Error(
      '`headersWithStringBody` option must be an array of strings'
    )
  }

  return (next: Next): Next =>
    (request: MiddlewareRequest, response: MiddlewareResponse) => {
      const url = host.replace(/\/$/, '') + request.uri
      const requestHeader: JsonObject<QueryParam> = { ...request.headers }

      // If no content-type is provided, defaults to application/json
      if (
        !(
          Object.prototype.hasOwnProperty.call(requestHeader, 'Content-Type') ||
          Object.prototype.hasOwnProperty.call(requestHeader, 'content-type')
        )
      ) {
        requestHeader['Content-Type'] = 'application/json'
      }

      // Unset the content-type header if explicitly asked to (passing `null` as value).
      if (requestHeader['Content-Type'] === null) {
        delete requestHeader['Content-Type']
      }

      // Ensure body is a string if content type is application/json or application/graphql
      const body =
        ([
          'application/json',
          'application/graphql',
          ...headersWithStringBody,
        ].indexOf(requestHeader['Content-Type'] as string) > -1 &&
          typeof request.body === 'string') ||
        isBuffer(request.body)
          ? request.body
          : JSON.stringify(request.body || undefined)

      if (body && (typeof body === 'string' || isBuffer(body))) {
        requestHeader['Content-Length'] = Buffer.byteLength(body).toString()
      }
      const fetchOptions: RequestOptions = {
        method: request.method,
        headers: requestHeader,
      }
      if (credentialsMode) {
        fetchOptions.credentialsMode = credentialsMode
      }
      if (body) {
        fetchOptions.body = body
      }
      let retryCount = 0
      // wrap in a fn so we can retry if error occur
      function executeFetch() {
        // Kick off timer for abortController directly before fetch.
        let timer: ReturnType<typeof setTimeout>
        let abortController: any
        if (timeout) {
          // Initialize the abort controller in case we do a retry on an aborted request to rest the signal
          abortController =
            (getAbortController ? getAbortController() : null) ||
            new AbortController()
          fetchOptions.signal = abortController.signal
          // Set the timer
          timer = setTimeout(() => {
            abortController.abort()
          }, timeout)
        }
        fetchFunction(url, fetchOptions)
          .then(
            (res: Response) => {
              if (res.ok) {
                if (fetchOptions.method === 'HEAD') {
                  next(request, {
                    ...response,
                    statusCode: res.status,
                  })
                  return
                }

                res
                  .text()
                  .then((result) => {
                    // Try to parse the response as JSON
                    let parsed
                    try {
                      parsed = result.length > 0 ? JSON.parse(result) : {}
                    } catch (err) {
                      if (enableRetry && retryCount < maxRetries) {
                        setTimeout(
                          executeFetch,
                          calcDelayDuration(
                            retryCount,
                            retryDelay,
                            maxRetries,
                            backoff,
                            maxDelay
                          )
                        )
                        retryCount += 1
                        return
                      }
                      parsed = result
                    }

                    const parsedResponse: any = {
                      ...response,
                      body: parsed,
                      statusCode: res.status,
                    }

                    if (includeResponseHeaders)
                      parsedResponse.headers = parseHeaders(res.headers)

                    if (includeOriginalRequest) {
                      parsedResponse.request = {
                        ...fetchOptions,
                      }
                      maskAuthData(
                        parsedResponse.request,
                        maskSensitiveHeaderData
                      )
                    }
                    next(request, parsedResponse)
                  })
                  .catch((err) => {
                    if (enableRetry && retryCount < maxRetries) {
                      setTimeout(
                        executeFetch,
                        calcDelayDuration(
                          retryCount,
                          retryDelay,
                          maxRetries,
                          backoff,
                          maxDelay
                        )
                      )
                      retryCount += 1
                      return
                    }

                    const error = new NetworkError(err.message, {
                      ...(includeRequestInErrorResponse
                        ? { originalRequest: request }
                        : {}),
                      retryCount,
                    })
                    maskAuthData(error.originalRequest, maskSensitiveHeaderData)

                    next(request, { ...response, error, statusCode: 0 })
                  })
                return
              }

              // Server responded with an error. Try to parse it as JSON, then
              // return a proper error type with all necessary meta information.
              res.text().then((text: any) => {
                // Try to parse the error response as JSON
                let parsed
                try {
                  parsed = JSON.parse(text)
                } catch (error) {
                  parsed = text
                }

                const error: HttpErrorType = createError({
                  statusCode: res.status,
                  ...(includeRequestInErrorResponse
                    ? { originalRequest: request }
                    : res.status === 404
                     ? { uri: request.uri }
                     : {}),
                  retryCount,
                  headers: parseHeaders(res.headers),
                  ...(typeof parsed === 'object'
                    ? { message: parsed.message, body: parsed }
                    : { message: parsed, body: parsed }),
                })

                if (
                  enableRetry &&
                  (retryCodes.indexOf(error.statusCode) !== -1 ||
                    retryCodes?.indexOf(error.message) !== -1)
                ) {
                  if (retryCount < maxRetries) {
                    setTimeout(
                      executeFetch,
                      calcDelayDuration(
                        retryCount,
                        retryDelay,
                        maxRetries,
                        backoff,
                        maxDelay
                      )
                    )
                    retryCount += 1
                    return
                  }
                }

                maskAuthData(error.originalRequest, maskSensitiveHeaderData)
                // Let the final resolver to reject the promise
                const parsedResponse = {
                  ...response,
                  error,
                  statusCode: res.status,
                }
                next(request, parsedResponse)
              })
            },
            // We know that this is a "network" error thrown by the `fetch` library
            (e: Error) => {
              // Retry when enabled and either the request was not aborted or retryOnAbort is enabled
              if (
                enableRetry &&
                (retryOnAbort || !abortController || !abortController.signal)
              ) {
                if (retryCount < maxRetries) {
                  setTimeout(
                    executeFetch,
                    calcDelayDuration(
                      retryCount,
                      retryDelay,
                      maxRetries,
                      backoff,
                      maxDelay
                    )
                  )
                  retryCount += 1
                  return
                }
              }

              const error = new NetworkError(e.message, {
                ...(includeRequestInErrorResponse
                  ? { originalRequest: request }
                  : {}),
                retryCount,
              })
              maskAuthData(error.originalRequest, maskSensitiveHeaderData)
              next(request, { ...response, error, statusCode: 0 })
            }
          )
          .finally(() => {
            clearTimeout(timer)
          })
      }
      executeFetch()
    }
}
