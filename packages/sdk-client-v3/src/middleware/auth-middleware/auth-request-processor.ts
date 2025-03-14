import {
  AuthMiddlewareOptions,
  IBuiltRequestParams,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  TokenCache,
  TokenCacheOptions,
  TokenStore,
} from '../../types/types'
import { mergeAuthHeader } from '../../utils'
import { executeRequest } from './auth-request-executor'

export async function authProcessor<T extends AuthMiddlewareOptions>(
  request: MiddlewareRequest,
  tokenFetchPromise: Promise<boolean> | null = null,
  tokenCacheObject: TokenStore,
  tokenCacheKey: TokenCacheOptions,
  tokenCache: TokenCache,
  builder: (options: T) => IBuiltRequestParams,
  options: T,
  next: Next
) {
  // prepare request options
  const requestOptions = {
    request,
    tokenCache,
    httpClient: options.httpClient || fetch,
    httpClientOptions: options.httpClientOptions,
    ...builder(options),
    userOption: options,
    next,
  }

  /**
   * check to see if the response for 401 errors
   * @param r MiddlewareResponse
   * @returns response
   */
  const checkAndRetryUnauthorizedError = async (r: MiddlewareResponse) => {
    let _response = Object.assign({}, r)

    if (_response.statusCode == 401) {
      tokenFetchPromise = executeRequest(requestOptions)
      await tokenFetchPromise
      tokenFetchPromise = null

      tokenCacheObject = tokenCache.get(tokenCacheKey)
      _response = await next(mergeAuthHeader(tokenCacheObject.token, request))
    }

    return _response
  }

  if (
    request.headers &&
    (request.headers.Authorization || request.headers.authorization)
  ) {
    // move on
    return checkAndRetryUnauthorizedError(await next(request))
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
    return checkAndRetryUnauthorizedError(
      await next(mergeAuthHeader(tokenCacheObject.token, request))
    )
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

  // Now the token is present in the tokenCache and can be accessed
  tokenCacheObject = tokenCache.get(tokenCacheKey)
  return next(mergeAuthHeader(tokenCacheObject.token, request))
}
