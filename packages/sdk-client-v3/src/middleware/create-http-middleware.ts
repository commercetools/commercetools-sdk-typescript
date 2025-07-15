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
  validateHttpClientOptions,
  validateStringBodyHeaderOptions,
} from '../utils'

async function executeRequest({
  url,
  httpClient,
  clientOptions,
}: HttpOptions): Promise<ClientResult> {
  const {
    request,
    maskSensitiveHeaderData,
    includeRequestInErrorResponse,
    includeResponseHeaders,
  } = clientOptions

  try {
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
      code: response.data?.errors?.[0].code,
      message: response?.data?.message || response?.message,
      statusCode: response.statusCode || response?.data?.statusCode,
      method: clientOptions.method,
      headers: getHeaders(response.headers),
      /**
       * @deprecated use `error` instead
       */
      body: response.data,
      error: response.data,
      retryCount: response.retryCount,
      ...(includeRequestInErrorResponse
        ? {
            originalRequest: maskSensitiveHeaderData
              ? maskAuthData(request)
              : request,
          }
        : { uri: request.uri }),
    })

    return { ...error, error }
  } catch (e) {
    // We know that this is a network error
    const headers = includeResponseHeaders
      ? getHeaders(e.response?.headers)
      : null
    const statusCode =
      e.response?.status ||
      e.response?.statusCode ||
      e.response?.data.statusCode ||
      0
    const message = e.response?.data?.message

    const error: HttpErrorType = createError({
      statusCode,
      code: 'NetworkError',
      status: statusCode,
      message: message || e.message,
      headers,
      /**
       * @deprecated use `error` instead
       */
      body: e.response?.data || e,
      error: e.response?.data || e,
      ...(includeRequestInErrorResponse
        ? {
            originalRequest: maskSensitiveHeaderData
              ? maskAuthData(request)
              : request,
          }
        : { uri: request.uri }),
    })

    throw {
      // because body and error should be mutually exclusive
      body: null,
      error,
    }
  }
}

export default function createHttpMiddleware(
  options: HttpMiddlewareOptions
): Middleware {
  // validate options
  validateHttpClientOptions(options)

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
    stringBodyContentTypes = [],
  } = options

  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      const url = host.replace(/\/$/, '') + request.uri
      const requestHeader: JsonObject<QueryParam> = { ...request.headers }

      // validate custom header
      validateStringBodyHeaderOptions(stringBodyContentTypes)

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
        ([
          ...constants.HEADERS_CONTENT_TYPES,
          ...stringBodyContentTypes,
        ].indexOf(requestHeader['Content-Type'] as string) > -1 &&
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

      if (timeout) {
        clientOptions.timeout = timeout
        clientOptions.getAbortController = getAbortController
      }

      if (body) {
        clientOptions.body = body
      }

      // get result from executed request
      const response = await executeRequest({ url, clientOptions, httpClient })

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
