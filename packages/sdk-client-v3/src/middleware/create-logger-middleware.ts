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
      const originalResponse = Object.assign({}, response)

      const {
        loggerFn = console.log,
        // logLevel = 'ERROR',
        maskSensitiveHeaderData = true,
        includeOriginalRequest = true,
        includeResponseHeaders = true,
        // includeRequestInErrorResponse
      } = options || {}

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
        // return originalResponse
      }

      // console.log({ Response: response })
      return originalResponse
    }
  }
}
