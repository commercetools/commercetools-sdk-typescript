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
} from '../types/types'
import { validateHttpOptions, isBuffer, getHeaders } from '../utils'
import { Buffer } from 'buffer/'

const HEADERS = ['application/json', 'application/graphql']

export default function createHttpMiddleware(
  options: HttpMiddlewareOptions
): Middleware {
  // validate response
  validateHttpOptions(options)

  const {
    host = 'https://auth.europe-west1.gcp.commercetools.com',
    credentialsMode,
    includeHeaders,
    includeResponseHeaders,
    includeOriginalRequest,
    includeRequestInErrorResponse,
    httpClient,
    abortController,
    getAbortController,
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
        (HEADERS.indexOf(requestHeader['Content-Type'] as string) > -1 &&
          typeof request.body === 'string') ||
        isBuffer(request.body)
          ? request.body
          : JSON.stringify(request.body || undefined)

      if (body && (typeof body === 'string' || isBuffer(body))) {
        requestHeader['Content-Length'] = Buffer.byteLength(
          body as string
        ).toString()
      }

      const clientOptions: JsonObject = {
        method: request.method,
        headers: requestHeader,
      }

      if (credentialsMode) {
        clientOptions.credentialsMode = credentialsMode
      }

      if (body) {
        clientOptions.body = body
      }

      // get result from executed request
      const response = await executeRequest({ url, clientOptions, httpClient })

      const responseWithRequest = {
        ...request,
        response,
        // request: { ...request },
      }

      return next(responseWithRequest)
    }
  }
}

async function executeRequest({
  url,
  clientOptions,
  httpClient,
}: HttpOptions): Promise<{
  body?: object | string
  statusCode: number
  error?: HttpErrorType
  headers: JsonObject<string>
}> {
  let text: string, parsed: HttpErrorType, _data: object
  try {
    const response = await httpClient(url, clientOptions)

    if (response.ok) {
      _data = await response.json()

      if (clientOptions.method == 'HEAD') {
        return {
          statusCode: response.status,
          headers: getHeaders(response.headers),
        }
      }

      return {
        body: _data,
        statusCode: response.status,
        headers: getHeaders(response.headers),
      }
    }

    // handle non ok (error) response
    try {
      text = response.text()
      parsed = JSON.parse(text)
    } catch (e) {
      parsed = text as any
    }

    // build error body
    return {
      error: parsed,
      statusCode: response.status,
      headers: getHeaders(response.headers),
      ...(typeof parsed === 'object'
        ? { message: parsed.message, body: parsed }
        : { message: parsed, body: parsed }),
    }
  } catch (error) {
    // log error for now
    console.log(error)
  }
}
