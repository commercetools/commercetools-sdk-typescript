import {
  Next,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  ExistingTokenMiddlewareOptions,
} from '../../types/types'

export default function createAuthMiddlewareForExistingTokenFlow(
  authorization: string,
  options?: ExistingTokenMiddlewareOptions
): Middleware {
  return (next: Next) => {
    return async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      if (typeof authorization !== 'string')
        throw new Error('authorization must be a string')

      const force = options?.force === undefined ? true : options.force

      /**
       * The request will not be modified if:
       *  1. no argument is passed
       *  2. force is false and authorization header exists
       */
      if (
        !authorization ||
        (request.headers &&
          (request.headers.Authorization || request.headers.authorization) &&
          force === false)
      ) {
        return next(request)
      }

      const requestWithAuth = {
        ...request,
        headers: {
          ...request.headers,
          Authorization: authorization,
        },
      }

      return next(requestWithAuth)
    }
  }
}
