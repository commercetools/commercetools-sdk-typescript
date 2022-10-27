import {
  Next,
  Task,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  RefreshAuthMiddlewareOptions,
  RequestState,
  RequestStateStore,
} from '../../types/types'
import { executeRequest } from './auth-request-executor'
import { buildRequestForRefreshTokenFlow } from './auth-request-builder'
import { store } from '../../utils'

export default function createAuthMiddlewareForRefreshTokenFlow(
  options: RefreshAuthMiddlewareOptions
): Middleware {
  const tokenCache =
    options.tokenCache ||
    store({
      token: '',
      tokenCacheKey: null,
    })

  const pendingTasks: Array<Task> = []
  const requestState = store<RequestState, RequestStateStore>(false)

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
        requestState,
        tokenCache,
        pendingTasks,
        httpClient: options.httpClient || fetch,
        ...buildRequestForRefreshTokenFlow(options),
        next,
      }

      // make request to coco
      const requestWithAuth = await executeRequest(requestOptions)
      if (requestWithAuth) {
        return next(requestWithAuth)
      }
    }
  }
}
