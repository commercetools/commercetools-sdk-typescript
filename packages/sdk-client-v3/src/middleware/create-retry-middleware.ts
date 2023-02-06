import {
  Next,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  RetryMiddlewareOptions,
} from '../types/types'
import { sleep, validateRetryCodes, calculateRetryDelay } from '../utils'

function predicate(
  retryCodes: Array<string | number>,
  response: MiddlewareResponse
) {
  return !(
    retryCodes.includes(response?.error?.message) ||
    [503, ...retryCodes].includes(response?.statusCode)
  )
}

// error, info, warn
export default function createRetryMiddleware(
  options: RetryMiddlewareOptions
): Middleware {
  return (next: Next) =>
    async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      const {
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
        // first attenpt
        // retryCount++

        response = await next(request)
        if (predicate(retryCodes, response)) {
          request.resolve({ ...response })

          return {
            ...response,
            // retryCount
          }
        }

        while (retryCount < maxRetries) {
          // check if the response if worth retrying for subsequest calls
          retryCount++

          response = await next({ ...request, retryCount })
          if (predicate(retryCodes, response)) {
            // request.resolve({
            //   ...response,
            //   retryCount
            // })

            return {
              ...response,
              retryCount,
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
        }

        // response.reject({
        //   ...response,
        //   retryCount
        // })

        return {
          ...response,
          retryCount,
        }
      }

      // invoke executeRequest
      return executeRequest<MiddlewareResponse>()
    }
}
