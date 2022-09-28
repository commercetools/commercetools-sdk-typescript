import {
  Next,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  LoggerMiddlewareOptions,
} from '../types/types'

// error, info, success
export default function createLoggerMiddleware(
  options: LoggerMiddlewareOptions
): Middleware {
  return (next: Next) =>
    async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      const { loggerFn } = options
      if (loggerFn && typeof loggerFn == 'function') {
        const res = await next(request)
        loggerFn(res)

        return res
      }

      // log request to stdout
      const res = await next(request)
      console.log('Response: ', res)
    }
}
