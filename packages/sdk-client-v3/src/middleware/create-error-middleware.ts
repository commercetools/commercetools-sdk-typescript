import {
  ErrorMiddlewareOptions,
  HttpErrorType,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
} from '../types/types'
import { getHeaders } from '../utils'

export default function createErrorMiddleware(
  options?: ErrorMiddlewareOptions
): Middleware {
  return (next: Next): Next =>
    async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      const response = await next(request)
      if (response.error) {
        const { error } = response
        return {
          ...response,
          statusCode: error.statusCode || 0,
          headers: error.headers || getHeaders({}),
          error: {
            ...error,
            body: error.data || error,
          } as HttpErrorType,
        }
      }

      return response
    }
}
