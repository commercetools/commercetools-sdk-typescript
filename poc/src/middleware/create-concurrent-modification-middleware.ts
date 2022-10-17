import {
  Next,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
} from '../types/types'

export default function createConcurrentModificationMiddleware(): Middleware {
  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      let modifiedRequest
      const response = await next(request)

      if (response.statusCode == 409) {
        /**
         * extract the currentVersion
         * from the error body and update
         * request with the currentVersion
         */
        const version = response.error.body.errors[0].currentVersion

        // update the resource version here
        modifiedRequest =
          typeof request.body == 'string'
            ? { ...JSON.parse(request.body), version }
            : request.body
      }

      // update request
      modifiedRequest = {
        ...request,
        body: modifiedRequest,
      }

      return next(modifiedRequest)
    }
  }
}
