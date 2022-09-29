import fetch from 'node-fetch'
import {
  Next,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  AuthMiddlewareOptions,
} from '../../types/types'
// import authMiddlewareBase from './base-auth-flow'
import { buildRequestForAnonymousSessionFlow } from './auth-request-builder'
import { executeRequest } from './auth-request-executor'
// import store from './utils'

export default function createAuthMiddlewareForAnonymousSessionFlow(
  options: AuthMiddlewareOptions
): Middleware {
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
        httpClient: options.httpClient || fetch,
        ...buildRequestForAnonymousSessionFlow(options),
      }

      // make request to coco
      const requestWithAuth = await executeRequest(requestOptions)
      if (requestWithAuth) {
        return next(requestWithAuth)
      }
    }
  }
}
