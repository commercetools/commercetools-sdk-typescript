import {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  PasswordAuthMiddlewareOptions,
  TokenStore,
} from '../../types/types'
import { buildTokenCacheKey, store } from '../../utils'
import { buildRequestForPasswordFlow } from './auth-request-builder'
import { authProcessor } from './auth-request-processor'

export default function createAuthMiddlewareForPasswordFlow(
  options: PasswordAuthMiddlewareOptions
): Middleware {
  const tokenCache =
    options.tokenCache ||
    store({
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
        buildRequestForPasswordFlow,
        options,
        next
      )
    }
  }
}
