import fetch from 'node-fetch'
import {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  PasswordAuthMiddlewareOptions,
  TokenStore,
} from '../../types/types'
import { buildTokenCacheKey, mergeAuthHeader, store } from '../../utils'
import { buildRequestForPasswordFlow } from './auth-request-builder'
import { executeRequest } from './auth-request-executor'

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
      // if here is a token in the header, then move on to the next middleware
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

      const requestOptions = {
        request,
        tokenCache,
        tokenCacheKey,
        httpClient: options.httpClient || fetch,
        ...buildRequestForPasswordFlow(options),
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
