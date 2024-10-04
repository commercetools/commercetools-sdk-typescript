import {
  TokenStore,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  RefreshAuthMiddlewareOptions,
  TokenCache,
} from '../../types/types'
import { buildTokenCacheKey, mergeAuthHeader, store } from '../../utils'
import { buildRequestForRefreshTokenFlow } from './auth-request-builder'
import { executeRequest } from './auth-request-executor'

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
      if (
        request.headers &&
        (request.headers.Authorization || request.headers.authorization)
      ) {
        return next(request)
      }

      /**
       * If there is a token in the tokenCache, and it's not
       * expired, append the token in the `Authorization` header.
       */
      tokenCacheObject = tokenCache.get(tokenCacheKey)
      if (
        tokenCacheObject &&
        tokenCacheObject.token &&
        Date.now() < tokenCacheObject.expirationTime
      ) {
        return next(mergeAuthHeader(tokenCacheObject.token, request))
      }

      // prepare request options
      const requestOptions = {
        request,
        tokenCache,
        httpClient: options.httpClient || fetch,
        ...buildRequestForRefreshTokenFlow(options),
        next,
      }

      // If a token is already being fetched, wait for it to finish
      if (tokenFetchPromise) {
        await tokenFetchPromise
      } else {
        // Otherwise, fetch the token and let others wait for this process to complete
        tokenFetchPromise = executeRequest(requestOptions)
        await tokenFetchPromise
        tokenFetchPromise = null
      }

      // Now the token is present in the tokenCache
      tokenCacheObject = tokenCache.get(tokenCacheKey)
      return next(mergeAuthHeader(tokenCacheObject.token, request))
    }
  }
}
