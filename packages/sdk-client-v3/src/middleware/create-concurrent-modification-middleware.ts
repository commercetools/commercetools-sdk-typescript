import {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
} from '../types/types'

export default function createConcurrentModificationMiddleware(
  customLogic?: (
    version: number,
    request: MiddlewareRequest,
    response: MiddlewareResponse
  ) => Promise<{ [key: string]: any } | string | Buffer>
): Middleware {
  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      const response = await next(request)
      if (response.statusCode == 409) {
        /**
         * extract the currentVersion
         * from the error body and update
         * request with the currentVersion
         */
        const version = response.error.body?.errors?.[0]?.currentVersion

        // update the resource version here
        if (version) {
          if (customLogic) {
            request.body = await customLogic(version, request, response)
          } else {
            request.body =
              typeof request.body == 'string'
                ? { ...JSON.parse(request.body), version }
                : { ...request.body, version }
          }

          return next(request)
        }
      }

      return response
    }
  }
}
