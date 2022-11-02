import {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  PasswordAuthMiddlewareOptions,
  Task,
  RequestState,
  RequestStateStore,
} from '../types/sdk.d'
import authMiddlewareBase from './base-auth-flow'
import { buildRequestForPasswordFlow } from './build-requests'
import store from './utils'

export default function createAuthMiddlewareForPasswordFlow(
  options: PasswordAuthMiddlewareOptions
): Middleware {
  const tokenCache = options.tokenCache || store({})
  const pendingTasks: Array<Task> = []
  const requestState = store<RequestState, RequestStateStore>(false)

  return (next: Next): Next =>
    (request: MiddlewareRequest, response: MiddlewareResponse) => {
      // Check if there is already a `Authorization` header in the request.
      // If so, then go directly to the next middleware.
      if (
        (request.headers && request.headers.authorization) ||
        (request.headers && request.headers.Authorization)
      ) {
        next(request, response)
        return
      }
      const params = {
        request,
        response,
        ...buildRequestForPasswordFlow(options),
        pendingTasks,
        requestState,
        tokenCache,
        fetch: options.fetch,
      } as any
      authMiddlewareBase(params, next, options)
    }
}
