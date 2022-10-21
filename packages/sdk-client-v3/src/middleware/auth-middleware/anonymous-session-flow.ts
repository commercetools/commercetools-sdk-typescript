import fetch from 'node-fetch'
import {
  Next,
  Task,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  AuthMiddlewareOptions,
} from '../../types/types'
// import authMiddlewareBase from './base-auth-flow'
import { buildRequestForAnonymousSessionFlow } from './auth-request-builder'
import { executeRequest } from './auth-request-executor'
import { store, buildTokenCacheKey } from '../../utils'
// import store from './utils'

export default function createAuthMiddlewareForAnonymousSessionFlow(
  options: AuthMiddlewareOptions
): Middleware {
  const requestState = store(false)
  const pendingTasks: Array<Task> = []
  const tokenCache =
    options.tokenCache ||
    store({
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

      // implement every other conditions here - tokenCache, pendingTasks, requestState etc

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
      const requestWithAuth = await executeRequest(requestOptions)
      if (requestWithAuth) {
        return next(requestWithAuth)
      }
    }
  }
}
