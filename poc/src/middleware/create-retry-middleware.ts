import {
  Next,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  RetryMiddlewareOptions,
} from '../types/types'
import { calculateRetryDelay, validateRetryCodes } from '../utils'

// error, info, warn
export default function createRetryMiddleware(
  options: RetryMiddlewareOptions
): Middleware {
  return (next: Next) =>
    async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      // TODO: default these options
      const {
        enableRetry = false,
        retryCodes = [],
        maxDelay = Infinity,
        maxRetries = 2,
        backoff = true,
        retryDelay = 200,
      } = options

      let retryCount = options.retryCount || 0

      // validate the `retryCodes` option
      validateRetryCodes(retryCodes)

      // check if the response if worth retrying
      // const executeRequest = (): Promise<MiddlewareResponse> => next(request)

      async function executeRequest() {
        const response = await next(request)

        if (
          enableRetry &&
          [503, ...retryCodes].includes(response?.statusCode) &&
          retryCount < maxRetries
        ) {
          // retry request here
          setTimeout(
            executeRequest,
            calculateRetryDelay(
              retryCount,
              retryDelay,
              maxRetries,
              backoff,
              maxDelay
            )
          )

          retryCount++
          // error block this could be rejected or thrown
          return {
            ...response,
            retryCount,
          }
        }

        // success block
        return {
          ...response,
          retryCount,
        }
      }

      // execute
      return executeRequest()
    }
}
