import {
  AuthMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  RequestState,
  Next,
  Task,
  TokenCache,
  TokenStore,
  RequestStateStore,
} from '../types/sdk.d'
import authMiddlewareBase from './base-auth-flow'
import { buildRequestForAnonymousSessionFlow } from './build-requests'
import store from './utils'

export default function createAuthMiddlewareForAnonymousSessionFlow(
  options: AuthMiddlewareOptions
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
        ...buildRequestForAnonymousSessionFlow(options),
        pendingTasks,
        requestState,
        tokenCache,
        fetch: options.fetch,
      } as any
      authMiddlewareBase(params, next, options)
    }
}
