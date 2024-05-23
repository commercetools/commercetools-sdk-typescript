import { HttpClientConfig, IResponse, TResponse } from '../types/types'
import { calculateRetryDelay, sleep, validateRetryCodes } from '../utils'

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
  return sendRequest().catch((error) => Promise.reject(error))
}

export default async function executor(request: HttpClientConfig) {
  const { url, httpClient, ...rest } = request

  const data: TResponse = await executeHttpClientRequest(
    async (options: HttpClientConfig): Promise<TResponse> => {
      const { enableRetry, retryConfig, abortController } = rest
      const {
        retryCodes = [],
        maxDelay = Infinity,
        maxRetries = 3,
        backoff = true,
        retryDelay = 200,
        // If set to true reinitialize the abort controller when the timeout is reached and apply the retry config
        retryOnAbort = false,
      } = retryConfig || {}

      let result: string,
        data: any,
        retryCount: number = 0

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
        const executeWithTryCatch = async (retryCodes) => {
          let _response = {} as any
          try {
            _response = await execute()
            if (predicate(retryCodes, _response)) return _response
          } catch (e) {
            if (e.name.includes('AbortError')) {
              _response = e
            } else {
              throw e
            }
          }
          return _response
        }

        // first attempt
        let _response = await executeWithTryCatch(retryCodes)
        // retry attempts
        while (
          enableRetry &&
          (retryOnAbort || !abortController || !abortController.signal) &&
          retryCount < maxRetries
        ) {
          retryCount++
          _response = await executeWithTryCatch(retryCodes)

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

      const response: IResponse = await executeWithRetry()
      try {
        // try to parse the `fetch` response as text
        if (response.text && typeof response.text == 'function') {
          result = await response.text()
          data = JSON.parse(result)
        } else {
          // axios response
          data = response.data || response
        }
      } catch (err) {
        data = result
      }

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
