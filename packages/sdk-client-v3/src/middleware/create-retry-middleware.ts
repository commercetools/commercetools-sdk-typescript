import {
  Next,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  RetryMiddlewareOptions,
} from '../types/types'
import { sleep, validateRetryCodes, calculateRetryDelay } from '../utils'

// error, info, warn
export default function createRetryMiddleware(
  options: RetryMiddlewareOptions
): Middleware {
  return (next: Next) =>
    async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      const {
        enableRetry = false,
        retryCodes = [],
        maxDelay = Infinity,
        maxRetries = 3,
        backoff = true,
        retryDelay = 200,
      } = options || {}

      let response,
        retryCount = 0

      // validate the `retryCodes` option
      validateRetryCodes(retryCodes)
      async function executeRequest<T>(): Promise<T> {
        if (!enableRetry) response = await next(request)

        while (enableRetry && retryCount < maxRetries) {
          // check if the response if worth retrying
          response = await next(request)

          if (
            !(
              retryCodes.includes(response.error?.message) ||
              [503, ...retryCodes].includes(response?.statusCode)
            )
          ) {
            return {
              ...response,
              // retryCount
            }
          }

          // delay next execution
          const timer = calculateRetryDelay({
            retryCount,
            retryDelay,
            maxRetries,
            backoff,
            maxDelay,
          })

          await sleep(timer)
          retryCount++
        }

        return {
          ...response,
          retryCount,
        }
      }

      // invoke executeRequest
      return executeRequest<MiddlewareResponse>()
    }
}
