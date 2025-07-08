import {
  ExecuteRequestOptions,
  IBuiltRequestParams,
  TokenInfo,
} from '../../types/types'
import {
  byteLength,
  calculateExpirationTime,
  createError,
  executor,
} from '../../utils'
import { buildRequestForRefreshTokenFlow } from './auth-request-builder'

export async function executeRequest(options: ExecuteRequestOptions) {
  const {
    httpClient,
    httpClientOptions,
    tokenCache,
    userOption,
    tokenCacheObject,
    tokenCacheKey,
  } = options

  let url = options.url
  let body = options.body
  let basicAuth = options.basicAuth

  if (!httpClient || typeof httpClient !== 'function')
    throw new Error(
      'an `httpClient` is not available, please pass in a `fetch` or `axios` instance as an option or have them globally available.'
    )

  /**
   * use refreshToken flow if there is refresh-token
   * and there's either no token or the token is expired
   */
  if (
    tokenCacheObject &&
    tokenCacheObject.refreshToken &&
    (!tokenCacheObject.token ||
      (tokenCacheObject.token && Date.now() > tokenCacheObject.expirationTime))
  ) {
    if (!userOption) {
      throw new Error('Missing required options.')
    }

    const opt: IBuiltRequestParams = {
      ...buildRequestForRefreshTokenFlow({
        ...userOption,
        refreshToken: tokenCacheObject.refreshToken,
      }),
    }

    // reassign values
    url = opt.url
    body = opt.body
    basicAuth = opt.basicAuth
  }

  // request a new token
  let response
  try {
    response = await executor({
      url,
      method: 'POST',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': byteLength(body),
      },
      httpClient,
      httpClientOptions,
      body,
    })

    if (response.statusCode >= 200 && response.statusCode < 300) {
      const {
        access_token: token,
        expires_in: expiresIn,
        refresh_token: refreshToken,
      }: TokenInfo = response?.data

      // calculate token expiration time
      const expirationTime = calculateExpirationTime(expiresIn)

      // cache new generated token, refreshToken and expiration time
      const cache = { token, expirationTime, refreshToken }
      await tokenCache.set(cache, tokenCacheKey)
      return Promise.resolve(true)
    }

    // bubble up the error for the catch block
    throw createError({
      code: response.data.error,
      statusCode: response.data.statusCode,
      message: response.data.message,
      error: response.data.errors,
    })
  } catch (error) {
    // throw error and free up the middleware chain
    throw error
  }
}
