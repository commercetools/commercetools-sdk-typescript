import {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
} from '../types/types'

export default function createConcurrentModificationMiddleware(): Middleware {
  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      let response
      try {
        response = await next(request)
      } catch (error) {
        if (error.statusCode == 409) {
          /**
           * extract the currentVersion
           * from the error body and update
           * request with the currentVersion
           */
          const version = error.body?.errors?.[0]?.currentVersion

          // update the resource version here
          if (version) {
            request.body =
              typeof request.body == 'string'
                ? { ...JSON.parse(request.body), version }
                : { ...request.body, version }

            return next(request)
          }
        }
        throw error
      }

      return response
    }
  }
}
