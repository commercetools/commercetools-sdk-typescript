import fetch from 'node-fetch'
import {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  PasswordAuthMiddlewareOptions,
  RequestState,
  RequestStateStore,
  Task,
} from '../../types/types'
import { buildTokenCacheKey, store } from '../../utils'
import { buildRequestForPasswordFlow } from './auth-request-builder'
import { executeRequest } from './auth-request-executor'

export default function createAuthMiddlewareForPasswordFlow(
  options: PasswordAuthMiddlewareOptions
): Middleware {
  const tokenCache =
    options.tokenCache ||
    store({
      token: '',
      expirationTime: -1,
    })

  const pendingTasks: Array<Task> = []
  const requestState = store<RequestState, RequestStateStore>(false)

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
