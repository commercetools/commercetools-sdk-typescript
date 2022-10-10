import {
  Task,
  ClientRequest,
  TokenInfo,
  HttpErrorType,
  executeRequestOptions,
  IBuiltRequestParams,
  MiddlewareResponse,
} from '../../types/types'
import { buildRequestForRefreshTokenFlow } from './auth-request-builder'
import { Buffer } from 'buffer/'
import { calculateExpirationTime, mergeAuthHeader, executor } from '../../utils'

export async function executeRequest(
  options: executeRequestOptions
): Promise<ClientRequest | HttpErrorType> {
  let _data: TokenInfo,
    parsed: any,
    text: string,
    taskResponse: MiddlewareResponse

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

  if (!httpClient && typeof httpClient === 'undefined')
    throw new Error(
      'an `httpClient` is not available, please pass in a `fetch` or `axios` instance as an option or have them globally available.'
    )

  /**
   * If there was a token in the tokenCache, and it's not
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

  // if a token is currently being fetched, then wait
  if (requestState.get()) return

  // signal that a token is being fetched
  requestState.set(true)

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
    if (!userOption) throw new Error('Missing required options.')
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
  try {
    // const response = await httpClient(url, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Basic ${basicAuth}`,
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Conent-Length': Buffer.byteLength(body).toString(),
    //   },
    //   body
    // })
    const response = await executor({
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

    if (response.ok) {
      _data = await response.json()
      const {
        access_token: token,
        expires_in: expiresIn,
        expires_at: expiresAt,
        refresh_token: refreshToken,
      }: TokenInfo = _data

      // calculate token expiration time
      const expirationTime = calculateExpirationTime(expiresIn)

      // cache new generated token, refreshToken and expiration time
      tokenCache.set({ token, expirationTime, refreshToken })

      // Execute all pending requests
      requestState.set(false)

      /**
       * Freeze and copy pending queue, reset
       * original one for accepting new pending tasks
       */
      const requestQueue = pendingTasks.slice()
      // const lastTask = requestQueue.pop()

      // reset pendingTask queue
      pendingTasks = []

      // execute all pending tasks
      for (let i = 0; i < requestQueue.length; i++) {
        const task: Task = requestQueue[i]
        const requestWithAuth = mergeAuthHeader(token, task.request)

        // execute task
        taskResponse = await task.next(requestWithAuth)
      }

      // if there was a response then return
      if (taskResponse) return

      // requestQueue.forEach((task: Task) => {
      //   const requestWithToken = mergeAuthHeader(token, request)

      //   task.next(requestWithToken)
      // })

      // update the request object and move on
      return {
        ...request,
        headers: { ...request.headers, Authorization: `Bearer ${token}` },
      }
    }

    try {
      text = await response.text()
      parsed = JSON.parse(text)
    } catch (e) {
      parsed = text
    }

    const error: any = new Error(parsed ? parsed.message || parsed : text)
    if (parsed) error.body = parsed

    /**
     * reject the error immediately
     * and free up the middleware chain
     */
    request.reject({
      ...request,
      headers: { ...request.headers },
      response: {
        error,
        statusCode: response.statusCode || response.status,
      },
    })
  } catch (error) {
    // for now - log error to stdout
    console.log(error)
  }
}
