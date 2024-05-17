import {
  LoggerMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
} from '../types/types'

export default function createLoggerMiddleware(
  options?: LoggerMiddlewareOptions
): Middleware {
  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      let response = await next(request)
      const originalResponse = Object.assign({}, response)

      const {
        loggerFn = console.log,
      } = options || {}

      if (loggerFn && typeof loggerFn == 'function') {
        loggerFn(response)
      }

      return originalResponse
    }
  }
}
