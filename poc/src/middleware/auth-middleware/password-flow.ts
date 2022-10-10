import fetch from 'node-fetch'
import {
  Next,
  Task,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  PasswordAuthMiddlewareOptions,
} from '../../types/types'
import { executeRequest } from './auth-request-executor'
import { buildRequestForPasswordFlow } from './auth-request-builder'
import { getHeaders, store, buildTokenCacheKey } from '../../utils'

export default function createAuthMiddlewareForPasswordFlow(
  options: PasswordAuthMiddlewareOptions
): Middleware {
  const tokenCache = store({})
  const pendingTasks: Array<Task> = []
  const requestState = store(false)

  const tokenCacheKey = buildTokenCacheKey(options)

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
        requestState,
        tokenCache,
        pendingTasks,
        tokenCacheKey,
        httpClient: options.httpClient || fetch,
        ...buildRequestForPasswordFlow(options),
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
