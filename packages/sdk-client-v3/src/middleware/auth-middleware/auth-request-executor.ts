import { Buffer } from 'buffer/'
import {
  ClientRequest,
  executeRequestOptions,
  IBuiltRequestParams,
  Task,
  TokenInfo,
} from '../../types/types'
import { calculateExpirationTime, executor, mergeAuthHeader } from '../../utils'
import { buildRequestForRefreshTokenFlow } from './auth-request-builder'

export async function executeRequest(
  options: executeRequestOptions
): Promise<ClientRequest> {
  const {
    request,
    httpClient,
    tokenCache,
    tokenCacheKey,
    requestState,
    userOption,
    next,
  } = options

  let url = options.url
  let body = options.body
  let basicAuth = options.basicAuth

  // get the pending object from option
  let pendingTasks: Array<Task> = options.pendingTasks

  if (!httpClient || typeof httpClient !== 'function')
    throw new Error(
      'an `httpClient` is not available, please pass in a `fetch` or `axios` instance as an option or have them globally available.'
    )

  /**
   * If there is a token in the tokenCache, and it's not
   * expired, append the token in the `Authorization` header.
   */
  const tokenCacheObject = tokenCache.get(tokenCacheKey)
  if (
    tokenCacheObject &&
    tokenCacheObject.token &&
    Date.now() < tokenCacheObject.expirationTime
  ) {
    const requestWithAuth = mergeAuthHeader(tokenCacheObject.token, request)

    return {
      ...requestWithAuth,
    }
  }

  /**
   * Keep pending tasks until a token is fetched
   * Save next function as well, to call it once the token has been fetched, which prevents
   * unexpected behaviour in a context in which the next function uses global vars
   * or Promises to capture the token to hand it to other libraries, e.g. Apollo
   */
  pendingTasks.push({ request, next })

  // // if a token is currently being fetched, then wait
  // if (requestState.get()) return
  //
  // // signal that a token is being fetched
  // requestState.set(true)

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
      // requestState.set(false)
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
        'Conent-Length': Buffer.byteLength(body).toString(),
      },
      httpClient,
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
      tokenCache.set({ token, expirationTime, refreshToken })

      // signal that a token fetch is complete
      // requestState.set(false)

      /**
       * Freeze and copy pending queue, reset
       * original one for accepting new pending tasks
       */
      const requestQueue = pendingTasks.slice()

      // reset pendingTask queue
      pendingTasks = []

      if (requestQueue.length === 1) {
        return mergeAuthHeader(token, requestQueue.pop().request)
      }

      // execute all pending tasks if any
      for (let i = 0; i < requestQueue.length; i++) {
        const task: Task = requestQueue[i]
        const requestWithAuth = mergeAuthHeader(token, task.request)

        // execute task
        task.next(requestWithAuth)
      }

      return
    }

    const error = new Error(
      response.data.message
        ? response.data.message
        : JSON.stringify(response.data)
    )
    /**
     * reject the error immediately
     * and free up the middleware chain and
     * release the requestState by setting it to false
     */
    // requestState.set(false)
    request.reject({
      ...request,
      headers: { ...request.headers },
      response: {
        statusCode: response.statusCode || response.data.statusCode,
        error: { error, body: response },
      },
    })
  } catch (error) {
    /**
     * on error release the state by setting it to false
     */
    // requestState.set(false)
    return {
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
    }
  }
}
