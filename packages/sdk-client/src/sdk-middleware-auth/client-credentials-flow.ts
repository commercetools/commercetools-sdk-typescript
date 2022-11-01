import {
  AuthMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  Task,
  TokenCache,
  TokenStore,
  RequestState,
  RequestStateStore,
} from '../types/sdk.d'
import authMiddlewareBase from './base-auth-flow'
import { buildRequestForClientCredentialsFlow } from './build-requests'
import buildTokenCacheKey from './build-token-cache-key'
import store from './utils'

export default function createAuthMiddlewareForClientCredentialsFlow(
  options: AuthMiddlewareOptions
): Middleware {
  const tokenCache =
    options.tokenCache ||
    store<TokenStore, TokenCache>({
      token: '',
      expirationTime: -1,
    })

  const requestState = store<RequestState, RequestStateStore>(false)
  const pendingTasks: Array<Task> = []

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
        ...buildRequestForClientCredentialsFlow(options),
        pendingTasks,
        requestState,
        tokenCache,
        tokenCacheKey: buildTokenCacheKey(options),
        fetch: options.fetch,
      } as any
      authMiddlewareBase(params, next)
    }
}
