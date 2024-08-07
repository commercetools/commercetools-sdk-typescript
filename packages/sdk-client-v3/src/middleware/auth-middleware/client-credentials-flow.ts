import fetch from 'node-fetch'
import { Mutex } from 'async-mutex'
import {
  AuthMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  RequestState,
  RequestStateStore,
  Task,
  TokenCache,
  TokenStore,
} from '../../types/types'
import { buildTokenCacheKey, store } from '../../utils'
import { buildRequestForClientCredentialsFlow } from './auth-request-builder'
import { executeRequest } from './auth-request-executor'

export default function createAuthMiddlewareForClientCredentialsFlow(
  options: AuthMiddlewareOptions
): Middleware {
  const requestState = new Mutex()
  const pendingTasks: Array<Task> = []
  const tokenCache = options.tokenCache || null

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
        ...buildRequestForClientCredentialsFlow(options),
        next,
      }

      // make request to coco
      let requestWithAuth
      try {
        await requestState.acquire()
        requestWithAuth = await executeRequest(requestOptions)
      } finally {
        await requestState.release()
      }
      if (requestWithAuth) {
        // make the request and inject the token into the header
        return next(requestWithAuth)
      }
    }
  }
}
