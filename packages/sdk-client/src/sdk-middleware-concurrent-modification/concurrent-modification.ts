import type {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  ConcurrentModificationMiddlewareOptions,
} from '../types/sdk.d'
const Buffer = require('buffer/').Buffer

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

export default function createConcurrentModificationMiddleware({
  host,
  enableRetry,
  retryConfig: {
    // encourage exponential backoff to prevent spamming the server if down
    maxRetries = 5,
    backoff = true,
    retryDelay = 200,
    maxDelay = Infinity,
  } = {},
  fetch,
}: ConcurrentModificationMiddlewareOptions): Middleware {
  return (next: Next): Next =>
    (request: MiddlewareRequest, response: MiddlewareResponse) => {
      const url = (host ?? request.baseUri).replace(/\/$/, '') + request.uri
      let body =
        typeof request?.body === 'string' || Buffer.isBuffer(request.body)
          ? JSON.parse(request.body)
          : request.body

      let retryCount = 0
      async function invoke() {
        try {
          const _response = await fetch(url, {
            ...request,
            body: JSON.stringify(body),
          })
          let result = await _response.json()

          if (result.statusCode == 409) {
            const version = result.errors[0].currentVersion
            body = { ...body, version }

            if (enableRetry && retryCount < maxRetries) {
              setTimeout(
                invoke,
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

            const errorResponse = {
              ...response,
              body: result,
              error: { body: result, retryCount },
              statusCode: result.statusCode || _response.status,
            }

            return response.reject(errorResponse)
          }

          const successResponse: MiddlewareResponse = {
            ...response,
            body: result,
            statusCode: _response.status,
          }

          response.resolve(successResponse)
        } catch (e) {
          /**
           * if there's a network error or error
           * related to node-fetch send the
           * request to the next middleware
           * to handle the request with a timeout
           * if configured
           */
          next(request, response)
        }
      }

      if (!body || (body && !body?.version)) {
        next(request, response)
        return
      }

      invoke()
    }
}
