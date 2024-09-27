import {
  executeRequestOptions,
  IBuiltRequestParams,
  TokenInfo,
} from '../../types/types'
import { calculateExpirationTime, executor, byteLength } from '../../utils'
import { buildRequestForRefreshTokenFlow } from './auth-request-builder'

export async function executeRequest(
  options: executeRequestOptions
): Promise<any> {
  const {
    request,
    httpClient,
    tokenCache,
    tokenCacheKey,
    userOption,
    tokenCacheObject,
    next,
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
      body,
    })

    if (response.statusCode >= 200 && response.statusCode < 399) {
      const {
        access_token: token,
        expires_in: expiresIn,
        refresh_token: refreshToken,
      }: TokenInfo = response?.data

      // calculate token expiration time
      const expirationTime = calculateExpirationTime(expiresIn)

      // cache new generated token, refreshToken and expiration time
      tokenCache.set({ token, expirationTime, refreshToken })
      return Promise.resolve(true)
    }

    const error = new Error(
      response.data.message
        ? response.data.message
        : JSON.stringify(response.data)
    )
    /**
     * reject the error immediately
     * and free up the middleware chain
     */
    return request.reject({
      ...request,
      headers: { ...request.headers },
      response: {
        statusCode: response.statusCode || response.data.statusCode,
        error: { error, body: response },
      },
    })
  } catch (error) {
    request.reject({
      ...request,
      headers: { ...request.headers },
      response: {
        body: null,
        statusCode: error.statusCode || 0,
        error: {
          ...response,
          error,
          body: response,
        },
      },
    })
  }
}
