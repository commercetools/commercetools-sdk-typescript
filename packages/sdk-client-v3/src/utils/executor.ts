import { TResponse, HttpClientConfig } from '../types/types'
import { sleep, validateRetryCodes, calculateRetryDelay } from '../utils'

function predicate(retryCodes: Array<string | number>, response: any) {
  return !(
    // retryCodes.includes(response?.error?.message) ||
    [503, ...retryCodes].includes(response?.status || response?.statusCode)
  )
}

async function executeHttpClientRequest(
  fetcher: Function,
  config?: any
): Promise<TResponse> {
  async function sendRequest() {
    const response = await fetcher({
      ...config,
      headers: {
        ...config.headers,
      },
    })

    // validations and error handlings can also be done here
    return response
  }

  // Attempt to send the request.
  return sendRequest().catch((error) => {
    throw error
  })
}

export default async function executor(request: HttpClientConfig) {
  const { url, httpClient, ...rest } = request

  const data: TResponse = await executeHttpClientRequest(
    async (options: HttpClientConfig): Promise<TResponse> => {
      const { enableRetry, retryConfig } = rest
      const {
        retryCodes = [],
        maxDelay = Infinity,
        maxRetries = 3,
        backoff = true,
        retryDelay = 200,
      } = retryConfig || {}

      let retryCount = 0

      // validate the `retryCodes` option
      validateRetryCodes(retryCodes)

      async function execute() {
        return httpClient(url, {
          ...rest,
          ...options,
          headers: {
            ...rest.headers,
            ...options.headers,

            // axios header encoding
            'Accept-Encoding': 'application/json',
          },

          // for axios
          ...(rest.body ? { data: rest.body } : {}),
          withCredentials: options.credentialsMode === 'include',
        })
      }

      async function executeWithRetry<T = any>(): Promise<T> {
        // first attempt
        let _response = await execute()

        if (predicate(retryCodes, _response)) return _response

        // retry attempts
        while (enableRetry && retryCount < maxRetries) {
          retryCount++
          _response = await execute()

          if (predicate(retryCodes, _response)) return _response

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

        return _response
      }

      const response = await executeWithRetry()

      // parse response as json or return the data object (for axios response)
      const data =
        response.json && typeof response.json == 'function'
          ? await response.json()
          : response.data || response

      return {
        data,
        retryCount,
        statusCode: response.status || response.statusCode || data.statusCode,
        headers: response.headers,
      }
    },
    /**
     * get this object from the
     * middleware options or from
     * http client config
     */
    {}
  )

  return data
}
