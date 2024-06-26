import type {
  CorrelationIdMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
} from '../types/sdk.d'

export default function createCorrelationIdMiddleware(
  options: CorrelationIdMiddlewareOptions
): Middleware {
  return (next: Next): Next =>
    (request: MiddlewareRequest, response: MiddlewareResponse) => {
      const nextRequest = {
        ...request,
        headers: {
          ...request.headers,
          'X-Correlation-ID': options.generate(),
        },
      }
      next(nextRequest, response)
    }
}
