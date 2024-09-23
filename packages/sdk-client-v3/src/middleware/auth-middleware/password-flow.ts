import { Mutex } from 'async-mutex'
import fetch from 'node-fetch'
import {
  ClientRequest,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  PasswordAuthMiddlewareOptions,
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
  const requestState = new Mutex()

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
