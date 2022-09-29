import fetch from 'node-fetch'
import {
  Next,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  PasswordAuthMiddlewareOptions,
} from '../../types/types'
import { executeRequest } from './auth-request-executor'
import { buildRequestForPasswordFlow } from './auth-request-builder'
// import store from './utils'

export default function createAuthMiddlewareForPasswordFlow(
  options: PasswordAuthMiddlewareOptions
): Middleware {
  // const tokenCache = store({})
  // const pendingTasks: Array<Task> = []
  // const requestState = store(false)

  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      if (
        request.headers &&
        (request.headers.Authorization || request.headers.authorization)
      ) {
        return next(request)
      }

      const requestOptions = {
        request,
        httpClient: options.httpClient || fetch,
        ...buildRequestForPasswordFlow(options),
      }

      // make request to coco
      const requestWithAuth = await executeRequest(requestOptions)
      if (requestWithAuth) {
        return next(requestWithAuth)
      }
    }
  }
}
