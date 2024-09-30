import AbortController from 'abort-controller'
import {
  ClientResult,
  HttpClientConfig,
  HttpClientOptions,
  HttpErrorType,
  HttpMiddlewareOptions,
  HttpOptions,
  JsonObject,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  QueryParam,
  TResponse,
} from '../types/types'
import {
  byteLength,
  constants,
  createError,
  executor,
  getHeaders,
  isBuffer,
  maskAuthData,
  responseCache,
  validateHttpOptions,
} from '../utils'

let result: ClientResult
const cache = responseCache()

async function executeRequest({
  url,
  httpClient,
  clientOptions,
}: HttpOptions): Promise<ClientResult> {
  let timer: ReturnType<typeof setTimeout>

  // don't make further api calls
  if (clientOptions.request['continue']) {
    delete clientOptions.request['continue']
    return cache.get()
  }

  const {
    timeout,
    request,
    abortController,
    maskSensitiveHeaderData,
    includeRequestInErrorResponse,
    includeResponseHeaders,
  } = clientOptions

  try {
    if (timeout)
      timer = setTimeout(() => {
        abortController.abort()
      }, timeout)

    const response: TResponse = await executor({
      url,
      ...clientOptions,
      httpClient,
      method: clientOptions.method,
      ...(clientOptions.body ? { body: clientOptions.body } : {}),
    } as HttpClientConfig)

    if (!includeResponseHeaders) {
      response.headers = null
    }

    if (response.statusCode >= 200 && response.statusCode < 400) {
      if (clientOptions.method == 'HEAD') {
        const _result = {
          body: null,
          statusCode: response.statusCode,
          retryCount: response.retryCount,
          headers: getHeaders(response.headers),
        }

        cache.set(_result)
        return _result
      }

      result = {
        body: response.data,
        statusCode: response.statusCode,
        retryCount: response.retryCount,
        headers: getHeaders(response.headers),
      }

      return result
    }

    const error: HttpErrorType = createError({
      message: response?.data?.message || response?.message,
      statusCode: response.statusCode || response?.data?.statusCode,
      headers: getHeaders(response.headers),
      method: clientOptions.method,
      body: response.data,
      retryCount: response.retryCount,
      ...(includeRequestInErrorResponse
        ? {
            originalRequest: maskSensitiveHeaderData
              ? maskAuthData(request)
              : request,
          }
        : { uri: request.uri }),
    })

    /**
     * handle non-ok (error) response
     * build error body
     */
    result = {
      body: response.data,
      code: response.statusCode,
      statusCode: response.statusCode,
      headers: getHeaders(response.headers),
      error,
    }

    return result
  } catch (e) {
    // We know that this is a network error
    const headers = includeResponseHeaders
      ? getHeaders(e.response?.headers)
      : null
    const statusCode = e.response?.status || e.response?.data || 0
    const message = e.response?.data?.message

    const error: HttpErrorType = createError({
      statusCode,
      code: statusCode,
      status: statusCode,
      message: message || e.message,
      headers,
      body: e.response?.data || e,
      error: e.response?.data,
      ...(includeRequestInErrorResponse
        ? {
            originalRequest: maskSensitiveHeaderData
              ? maskAuthData(request)
              : request,
          }
        : { uri: request.uri }),
    })

    result = {
      body: error,
      error,
    }

    return result
  } finally {
    /**
     * finally cache the response
     */
    cache.set(result)
    clearTimeout(timer)
  }
}

export default function createHttpMiddleware(
  options: HttpMiddlewareOptions
): Middleware {
  // validate response
  validateHttpOptions(options)

  const {
    host,
    credentialsMode,
    httpClient,
    timeout,
    enableRetry,
    retryConfig,
    getAbortController,
    includeOriginalRequest,
    includeRequestInErrorResponse = true,
    includeResponseHeaders = true,
    maskSensitiveHeaderData,
    httpClientOptions,
  } = options

  return (next: Next) => {
    return async (
      request: MiddlewareRequest
    ): Promise<MiddlewareResponse | any> => {
      let abortController: AbortController

      if (timeout || getAbortController)
        abortController =
          (getAbortController ? getAbortController() : null) ||
          new AbortController()

      const url = host.replace(/\/$/, '') + request.uri
      const requestHeader: JsonObject<QueryParam> = { ...request.headers }

      // validate header
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

      // Ensure body is a string if content type is application/{json|graphql}
      const body: Record<string, any> | string | Uint8Array =
        (constants.HEADERS_CONTENT_TYPES.indexOf(
          requestHeader['Content-Type'] as string
        ) > -1 &&
          typeof request.body === 'string') ||
        isBuffer(request.body)
          ? request.body
          : JSON.stringify(request.body || undefined)

      if (body && (typeof body === 'string' || isBuffer(body))) {
        requestHeader['Content-Length'] = byteLength(body)
      }

      const clientOptions: HttpClientOptions = {
        enableRetry,
        retryConfig,
        request: request,
        method: request.method,
        headers: requestHeader,
        includeRequestInErrorResponse,
        maskSensitiveHeaderData,
        includeResponseHeaders,
        ...httpClientOptions,
      }

      if (credentialsMode) {
        clientOptions.credentialsMode = credentialsMode
      }

      if (abortController) {
        clientOptions.signal = abortController.signal
      }

      if (timeout) {
        clientOptions.timeout = timeout
        clientOptions.abortController = abortController
      }

      if (body) {
        clientOptions.body = body
      }

      // get result from executed request
      const response = await executeRequest({ url, clientOptions, httpClient })

      if (request['firstAttempt']) {
        return response
      }

      const responseWithRequest = {
        ...request,
        includeOriginalRequest,
        maskSensitiveHeaderData,
        response,
      }

      return next(responseWithRequest)
    }
  }
}
