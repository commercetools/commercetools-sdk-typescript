import {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
} from '../types/types'

export default function createConcurrentModificationMiddleware(
  modifierFunction?: (
    version: number,
    request: MiddlewareRequest,
    response: MiddlewareResponse
  ) => Promise<Record<string, any> | string | Uint8Array>
): Middleware {
  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      request['firsAttempt'] = true
      const response = await next(request)
      if (response.statusCode == 409) {
        /**
         * extract the currentVersion
         * from the error body and update
         * request with the currentVersion
         */
        const version = response.error?.body?.errors?.[0]?.currentVersion

        // update the resource version here
        if (version) {
          if (modifierFunction && typeof modifierFunction == 'function') {
            request.body = await modifierFunction(version, request, response)
          } else {
            request.body =
              typeof request.body == 'string'
                ? { ...JSON.parse(request.body), version }
                : { ...request.body, version }
          }

          return next({ ...request, response })
        }
      }

      request.continue = true
      delete request['firstAttempt']

      return next({ ...request, response })
    }
  }
}
