import fetch from 'node-fetch'
import {
  AuthMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  TokenCache,
  TokenStore,
} from '../../types/types'
import { buildTokenCacheKey, mergeAuthHeader, store } from '../../utils'
import { buildRequestForAnonymousSessionFlow } from './auth-request-builder'
import { executeRequest } from './auth-request-executor'

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
      // if here is a token in the header, then move on to the next middleware
      if (
        request.headers &&
        (request.headers.Authorization || request.headers.authorization)
      ) {
        // move on
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
        tokenCacheKey,
        httpClient: options.httpClient || fetch,
        ...buildRequestForAnonymousSessionFlow(options),
        userOption: options,
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
