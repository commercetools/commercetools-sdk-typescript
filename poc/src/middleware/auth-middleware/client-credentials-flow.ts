import fetch from 'node-fetch'
import {
  Next,
  Middleware,
  MiddlewareRequest,
  AuthMiddlewareOptions,
  MiddlewareResponse,
} from '../../types/types'
import { executeRequest } from './auth-request-executor'
import { buildRequestForClientCredentialsFlow } from './auth-request-builder'
// import { getHeaders } from '../../utils'

export default function createAuthMiddlewareForClientCredentialsFlow(
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
        ...buildRequestForClientCredentialsFlow(options),
      }

      // make request to coco
      const requestWithAuth = await executeRequest(requestOptions)
      if (requestWithAuth) {
        // make the request and inject the token into the header
        return next(requestWithAuth)
      }
    }
  }
}
