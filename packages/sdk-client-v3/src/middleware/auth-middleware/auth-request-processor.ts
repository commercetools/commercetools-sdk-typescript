import { executeRequest } from './auth-request-executor'
import {
  AuthMiddlewareOptions,
  IBuiltRequestParams,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  TokenCacheOptions,
  TokenCache,
  TokenStore,
} from '../../types/types'
import { mergeAuthHeader } from '../../utils'

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
   * check to see if the respnse for 401 errors
   * @param r MiddlewareResponse
   * @returns response
   */
  const _0x191 = async (r: MiddlewareResponse) => {
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
    return _0x191(await next(request))
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
    return _0x191(await next(mergeAuthHeader(tokenCacheObject.token, request)))
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
