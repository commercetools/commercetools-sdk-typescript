import {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  RefreshAuthMiddlewareOptions,
  TokenStore,
} from '../../types/types'
import { buildTokenCacheKey, store } from '../../utils'
import { buildRequestForRefreshTokenFlow } from './auth-request-builder'
import { authProcessor } from './auth-request-processor'

export default function createAuthMiddlewareForRefreshTokenFlow(
  options: RefreshAuthMiddlewareOptions
): Middleware {
  const tokenCache =
    options.tokenCache ||
    store({
      token: '',
      tokenCacheKey: null,
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
        buildRequestForRefreshTokenFlow,
        options,
        next
      )
    }
  }
}
