import { Mutex } from 'async-mutex'
import {
  ClientRequest,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  RefreshAuthMiddlewareOptions,
  Task,
} from '../../types/types'
import { store } from '../../utils'
import { buildRequestForRefreshTokenFlow } from './auth-request-builder'
import { executeRequest } from './auth-request-executor'

export default function createAuthMiddlewareForRefreshTokenFlow(
  options: RefreshAuthMiddlewareOptions
): Middleware {
  const tokenCache =
    options.tokenCache ||
    store({
      token: '',
      tokenCacheKey: null,
    })

  const pendingTasks: Array<Task> = []
  const requestState = new Mutex()

  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      if (
        request.headers &&
        (request.headers.Authorization || request.headers.authorization)
      ) {
        return next(request)
      }

      // prepare request options
      const requestOptions = {
        request,
        requestState,
        tokenCache,
        pendingTasks,
        httpClient: options.httpClient || fetch,
        ...buildRequestForRefreshTokenFlow(options),
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
