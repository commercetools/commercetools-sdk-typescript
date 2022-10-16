import {
  Next,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  HttpMiddlewareOptions,
  JsonObject,
  QueryParam,
  HttpOptions,
  HttpClientConfig,
  IClientOptions,
  ClientResult,
} from '../types/types'
import { validateHttpOptions, isBuffer, getHeaders } from '../utils'
import { executor, constants } from '../utils'
import { Buffer } from 'buffer/'

export type TResponse = {
  statusCode: number
  headers: JsonObject<QueryParam>
  data: {
    statusCode?: number
    errors?: any
    error?: string
    message: string
    // [k: string | number | symbol]: unknown
  }
}

export default function createHttpMiddleware(
  options: HttpMiddlewareOptions
): Middleware {
  // validate response
  validateHttpOptions(options)

  const {
    host = 'https://auth.europe-west1.gcp.commercetools.com',
    credentialsMode,
    httpClient,

    // getAbortController,
    httpClientOptions,
  } = options

  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      //
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

      const clientOptions: IClientOptions = {
        method: request.method,
        headers: requestHeader,
        ...httpClientOptions,
      }

      if (credentialsMode) {
        clientOptions.credentialsMode = clientOptions.credentialsMode
      }

      if (body) {
        clientOptions.body = body
      }

      // get result from executed request
      const response = await executeRequest({ url, clientOptions, httpClient })

      const responseWithRequest = {
        ...request,
        response,
      }

      return next(responseWithRequest)
    }
  }
}

async function executeRequest({
  url,
  clientOptions,
  httpClient,
}: HttpOptions): Promise<ClientResult> {
  let parsed: TResponse
  try {
    const response: TResponse = await executor({
      url,
      ...clientOptions,
      httpClient,
      method: clientOptions.method,
      ...(clientOptions.body ? { body: clientOptions.body } : {}),
    } as HttpClientConfig)

    if (response.statusCode < 400) {
      if (clientOptions.method == 'HEAD') {
        return {
          statusCode: response.statusCode,
          headers: getHeaders(response.headers),
        }
      }

      return {
        body: response.data || response,
        statusCode: response.statusCode,
        headers: getHeaders(response.headers),
      }
    }

    /**
     * handle non-ok (error) response
     * build error body
     */
    return {
      error: {
        message: response.data.message,
        statusCode: response.data.statusCode,
        ...parsed,
      },
      statusCode: response.statusCode || response.data.statusCode,
      headers: getHeaders(response.headers),
      ...(typeof response === 'object'
        ? { message: response.data.message, body: response.data }
        : { message: response, body: response }),
    }
  } catch (error) {
    // log error for now
    // console.log(error)

    return {
      error: {
        message: error.response.data.message,
        statusCode: error.response.status,
        ...parsed,
      },
      statusCode: error.response.status || error.response.data.statusCode,
      headers: getHeaders(error.response.headers),
      ...(typeof error === 'object'
        ? { message: error.response.data.message, body: error.response.data }
        : { message: error, body: error }),
    }
  }
}
