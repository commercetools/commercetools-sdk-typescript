import {
  ErrorMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
} from '../types/types'
import { getHeaders } from '../utils'

export default function createErrorMiddleware(
  options: ErrorMiddlewareOptions = {}
): Middleware {
  return (next: Next): Next =>
    async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      const response = await next(request)
      if (response.error) {
        const { error } = response

        if (options.handler && typeof options.handler == 'function') {
          return options.handler({ error, request, response, next })
        }

        return {
          ...response,
          statusCode: error.statusCode || 0,
          headers: error.headers || getHeaders({}),
          body: error,
          error,
        }
      }

      return response
    }
}
