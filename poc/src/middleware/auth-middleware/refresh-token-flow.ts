import {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  RefreshAuthMiddlewareOptions,
  // Task,
} from '../../types/types'
import { executeRequest } from './auth-request-executor'
import { buildRequestForRefreshTokenFlow } from './auth-request-builder'
// import store from './utils'

export default function createAuthMiddlewareForRefreshTokenFlow(
  options: RefreshAuthMiddlewareOptions
): Middleware {
  // const tokenCache = store({})
  // const pendingTasks: Array<Task> = []

  // const requestState = store(false)
  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      if (
        request.headers &&
        (request.headers.Authorization || request.headers.authorization)
      ) {
        return next(request)
      }

      // prepare request options
      const requestOptions = {
        request,
        httpClient: options.httpClient || fetch,
        ...buildRequestForRefreshTokenFlow(options),
      }

      // make request to coco
      const requestWithAuth = await executeRequest(requestOptions)
      if (requestWithAuth) {
        return next(requestWithAuth)
      }
    }
  }
}
