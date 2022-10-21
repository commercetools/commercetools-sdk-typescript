import {
  Middleware,
  MiddlewareRequest,
  Next,
  CorrelationIdMiddlewareOptions,
} from '../types/types'
import { generate } from '../utils'

export default function createCorrelationIdMiddleware(
  options?: CorrelationIdMiddlewareOptions
): Middleware {
  return (next: Next) => (request: MiddlewareRequest) => {
    const nextRequest = {
      ...request,
      headers: {
        ...request.headers,
        'X-Correlation-ID':
          options.generate && typeof options.generate == 'function'
            ? options.generate()
            : generate(),
      },
    }

    return next(nextRequest)
  }
}
