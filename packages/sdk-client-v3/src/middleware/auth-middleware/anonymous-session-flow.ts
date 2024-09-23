import { Mutex } from 'async-mutex'
import fetch from 'node-fetch'
import {
  AuthMiddlewareOptions,
  ClientRequest,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  Task,
  TokenCache,
  TokenStore,
} from '../../types/types'
import { buildTokenCacheKey, store } from '../../utils'
import { buildRequestForAnonymousSessionFlow } from './auth-request-builder'
import { executeRequest } from './auth-request-executor'

export default function createAuthMiddlewareForAnonymousSessionFlow(
  options: AuthMiddlewareOptions
): Middleware {
  const pendingTasks: Array<Task> = []
  const requestState = new Mutex()
  const tokenCache =
    options.tokenCache ||
    store<TokenStore, TokenCache>({
      token: '',
      expirationTime: -1,
    })

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

      // prepare request options
      const requestOptions = {
        request,
        requestState,
        tokenCache,
        pendingTasks,
        tokenCacheKey,
        httpClient: options.httpClient || fetch,
        ...buildRequestForAnonymousSessionFlow(options),
        userOption: options,
        next,
      }

      // make request to coco
      let requestWithAuth: ClientRequest

      try {
        await requestState.acquire()
        requestWithAuth = await executeRequest(requestOptions)
      } finally {
        requestState.release()
      }

      if (requestWithAuth) {
        return next(requestWithAuth)
      }
    }
  }
}
