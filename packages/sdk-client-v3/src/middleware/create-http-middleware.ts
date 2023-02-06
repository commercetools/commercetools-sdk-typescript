import {
  Next,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  HttpMiddlewareOptions,
  JsonObject,
  QueryParam,
  HttpOptions,
  HttpErrorType,
  HttpClientConfig,
  HttpClientOptions,
  ClientResult,
  TResponse,
} from '../types/types'
import {
  validateHttpOptions,
  isBuffer,
  getHeaders,
  executor,
  constants,
  createError,
  NetworkError,
} from '../utils'
import { Buffer } from 'buffer/'

async function executeRequest({
  url,
  httpClient,
  clientOptions,
}: HttpOptions): Promise<ClientResult> {
  let timer: ReturnType<typeof setTimeout>

  const { timeout, request, abortController, includeRequestInErrorResponse } =
    clientOptions

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

    if (response.statusCode >= 200 && response.statusCode < 300) {
      if (clientOptions.method == 'HEAD') {
        return {
          body: null,
          statusCode: response.statusCode,
          retryCount: response.retryCount,
          headers: getHeaders(response.headers),
        }
      }

      return {
        body: response.data,
        statusCode: response.statusCode,
        retryCount: response.retryCount,
        headers: getHeaders(response.headers),
      }
    }

    const error: HttpErrorType = createError({
      message: response.data.message || response.message,
      statusCode: response.statusCode || response.data.statusCode,
      headers: getHeaders(response.headers),
      method: clientOptions.method,
      body: response.data,
      retryCount: response.retryCount,
      ...(includeRequestInErrorResponse ? { originalRequest: request } : {}),
    })

    /**
     * handle non-ok (error) response
     * build error body
     */
    return {
      body: response.data,
      code: response.statusCode,
      statusCode: response.statusCode,
      headers: getHeaders(response.headers),
      error,
      // error: {
      //   statusCode: response.statusCode || response.data.statusCode,
      //   message: response.data.message,
      //   method: clientOptions.method,
      //   ...response.data,
      // },
    }
  } catch (e) {
    const error: HttpErrorType = new NetworkError(e.message, {
      statusCode: 0,
      body: e,
      error: e,
    })
    return {
      // We know that this is a network error
      statusCode: 0,
      body: error,
      error,
    }
  } finally {
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
    includeRequestInErrorResponse,
    httpClientOptions,
  } = options

  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      let abortController: AbortController

      if (timeout || getAbortController)
        abortController =
          (getAbortController ? getAbortController() : null) ||
          new AbortController()

      const url = host.replace(/\/$/, '') + request.uri
      const requestHeader: JsonObject<QueryParam> = { ...request.headers }

      // validate header
      if (!(requestHeader['Content-Type'] || requestHeader['content-type'])) {
        requestHeader['Content-Type'] = 'application/json'
      }

      // Ensure body is a string if content type is application/{json|graphql}
      const body: string | Buffer =
        (constants.HEADERS_CONTENT_TYPES.indexOf(
          requestHeader['Content-Type'] as string
        ) > -1 &&
          typeof request.body === 'string') ||
        isBuffer(request.body)
          ? request.body
          : JSON.stringify(request.body || undefined)

      if (body && (typeof body === 'string' || isBuffer(body))) {
        requestHeader['Content-Length'] = Buffer.byteLength(
          body as string
        ).toString()
      }

      const clientOptions: HttpClientOptions = {
        enableRetry,
        retryConfig,
        request: request,
        method: request.method,
        headers: requestHeader,
        includeRequestInErrorResponse,
        ...httpClientOptions,
      }

      if (credentialsMode) {
        clientOptions.credentialsMode = clientOptions.credentialsMode
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

      const responseWithRequest = {
        ...request,
        includeOriginalRequest,
        response,
      }

      return next(responseWithRequest)
    }
  }
}
