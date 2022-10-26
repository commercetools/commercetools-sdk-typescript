import {
  Next,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  LoggerMiddlewareOptions,
} from '../types/types'
import { maskAuthData } from '../utils'

// error, info, success
export default function createLoggerMiddleware(
  options?: LoggerMiddlewareOptions
): Middleware {
  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      let response = await next(request)

      const {
        loggerFn = null,
        // logLevel = 'ERROR',
        maskSensitiveHeaderData = true,
        includeOriginalRequest = true,
        includeResponseHeaders = true,
        // includeRequestInErrorResponse
      } = options || {}

      // const loggerFn = options?.

      if (includeOriginalRequest && maskSensitiveHeaderData) {
        maskAuthData(response.request)
      }

      if (!includeOriginalRequest) {
        const { request, ...rest } = response
        response = rest
      }

      if (!includeResponseHeaders) {
        const { headers, ...rest } = response
        response = rest
      }

      if (loggerFn && typeof loggerFn == 'function') {
        loggerFn(response)
        return response
      }

      console.log({ Response: response })
      return response
    }
  }
}
