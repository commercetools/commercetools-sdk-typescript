import {
  AuthMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  TokenCache,
  TokenStore,
} from '../../types/types'
import { buildTokenCacheKey, store } from '../../utils'
import { buildRequestForAnonymousSessionFlow } from './auth-request-builder'
import { authProcessor } from './auth-request-processor'

export default function createAuthMiddlewareForAnonymousSessionFlow(
  options: AuthMiddlewareOptions
): Middleware {
  const tokenCache =
    options.tokenCache ||
    store<TokenStore, TokenCache>({
      token: '',
      expirationTime: -1,
    })

  let tokenCacheObject: TokenStore
  let tokenFetchPromise: Promise<boolean> | null = null
  const tokenCacheKey = buildTokenCacheKey(options)

  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      return authProcessor(
        request,
        tokenFetchPromise,
        tokenCacheObject,
        tokenCacheKey,
        tokenCache,
        buildRequestForAnonymousSessionFlow,
        options,
        next
      )
    }
  }
}
