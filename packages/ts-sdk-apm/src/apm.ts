import type {
  ApmMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
} from '../types/types'

export default function apmMiddleware(
  options?: ApmMiddlewareOptions
): Middleware {
  return (next: Next): Next =>
    (request: MiddlewareRequest, response: MiddlewareResponse) => {
      const nextRequest = {
        ...request,
        ...options,
      }

      next(nextRequest, response)
    }
}
