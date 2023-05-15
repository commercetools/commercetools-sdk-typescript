import fetch from 'node-fetch'
import {
  AuthMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  RequestState,
  RequestStateStore,
  Task,
  TokenCache,
  TokenStore,
} from '../../types/types'
import { buildTokenCacheKey, store } from '../../utils'
import { buildRequestForClientCredentialsFlow } from './auth-request-builder'
import { executeRequest } from './auth-request-executor'

export default function createAuthMiddlewareForClientCredentialsFlow(
  options: AuthMiddlewareOptions
): Middleware {
  const requestState = store<RequestState, RequestStateStore>(false)
  const pendingTasks: Array<Task> = []
  const tokenCache =
    options.tokenCache ||
    store<TokenStore, TokenCache>({
      token: '',
      expirationTime: -1,
    })

  const tokenCacheKey = buildTokenCacheKey(options)
  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      // if here is a token in the header, then move on to the next middleware
      if (
        request.headers &&
        (request.headers.Authorization || request.headers.authorization)
      ) {
        // move on
        return next(request)
      }

      // prepare request options
      const requestOptions = {
        request,
        requestState,
        tokenCache,
        pendingTasks,
        tokenCacheKey,
        httpClient: options.httpClient || fetch,
        ...buildRequestForClientCredentialsFlow(options),
        next,
      }

      // make request to coco
      const requestWithAuth = await executeRequest(requestOptions)
      if (requestWithAuth) {
        // make the request and inject the token into the header
        return next(requestWithAuth)
      }
    }
  }
}
