import {
  Middleware,
  MiddlewareRequest,
  Next,
  CorrelationIdMiddlewareOptions,
} from '../types/types'

export default function createCorrelationIdMiddleware(
  options: CorrelationIdMiddlewareOptions
): Middleware {
  return (next: Next) => (request: MiddlewareRequest) => {
    const nextRequest = {
      ...request,
      headers: {
        ...request.headers,
        'X-Correlation-ID': options.generate(),
      },
    }

    return next(nextRequest)
  }
}
