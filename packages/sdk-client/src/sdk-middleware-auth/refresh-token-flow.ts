import {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  RefreshAuthMiddlewareOptions,
  Task,
  TokenCache,
  TokenStore,
  RequestState,
  RequestStateStore,
} from '../types/sdk.d'
import authMiddlewareBase from './base-auth-flow'
import { buildRequestForRefreshTokenFlow } from './build-requests'
import store from './utils'

export default function createAuthMiddlewareForRefreshTokenFlow(
  options: RefreshAuthMiddlewareOptions
): Middleware {
  const tokenCache =
    options.tokenCache ||
    store<TokenStore, TokenCache>({
      token: '',
      expirationTime: -1,
    })

  const pendingTasks: Array<Task> = []

  const requestState = store<RequestState, RequestStateStore>(false)
  return (next: Next): Next =>
    (request: MiddlewareRequest, response: MiddlewareResponse) => {
      // Check if there is already a `Authorization` header in the request.
      // If so, then go directly to the next middleware.
      if (
        (request.headers && request.headers.authorization) ||
        (request.headers && request.headers.Authorization)
      ) {
        next(request, response)
        return
      }
      const params = {
        request,
        response,
        ...buildRequestForRefreshTokenFlow(options),
        pendingTasks,
        requestState,
        tokenCache,
        fetch: options.fetch,
      } as any
      authMiddlewareBase(params, next)
    }
}
