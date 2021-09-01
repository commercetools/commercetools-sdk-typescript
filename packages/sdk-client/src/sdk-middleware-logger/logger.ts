import type {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
} from '../types/sdk.d'

export default function createLoggerMiddleware(): Middleware {
  return (next: Next): Next =>
    (request: MiddlewareRequest, response: MiddlewareResponse) => {
      const { error, body, statusCode } = response
      console.log('Request: ', request)
      console.log('Response: ', { error, body, statusCode })
      next(request, response)
    }
}
