import {
  LoggerMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
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
        maskSensitiveHeaderData = true,
        includeOriginalRequest = true,
        includeResponseHeaders = true,
      } = options || {}

      if (includeOriginalRequest) {
        response.request = request
        if (maskSensitiveHeaderData) {
          maskAuthData(response.request)
        }
      } else {
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
