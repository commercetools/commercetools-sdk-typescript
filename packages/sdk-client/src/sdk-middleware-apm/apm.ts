import type {
  ApmMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
} from '../types/sdk.d'

export default function apmMiddleware(
  options: ApmMiddlewareOptions
): Middleware {
  return (next: Next): Next =>
    (request: MiddlewareRequest, response: MiddlewareResponse) => {
      const nextRequest = {
        ...request,
        apm: require('newrelic'),
        ...options,
      }

      next(nextRequest, response)
    }
}
