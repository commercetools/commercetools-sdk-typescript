import { HttpClientConfig, IResponse, TResponse } from '../types/types'
import { calculateRetryDelay, sleep, validateRetryCodes } from '../utils'

function hasResponseRetryCode(
  retryCodes: Array<string | number>,
  response: any
) {
  return (
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
      const { enableRetry, retryConfig, timeout, getAbortController } = rest
      const {
        retryCodes = [],
        maxDelay = Infinity,
        maxRetries = 3,
        backoff = true,
        retryDelay = 200,
        // If set to true reinitialize the abort controller when the timeout is reached and apply the retry config
        retryOnAbort = true,
      } = retryConfig || {}

      let result: string,
        data: any,
        retryCount: number = 0,
        timer: ReturnType<typeof setTimeout>

      // validate the `retryCodes` option
      validateRetryCodes(retryCodes)

      async function execute() {
        return httpClient(url, {
          ...options,
          ...rest,
          headers: {
            ...rest.headers,

            // axios header encoding
            'Accept-Encoding': 'application/json',
          },

          // for axios
          ...(rest.body ? { data: rest.body } : {}),
          withCredentials: options.credentialsMode === 'include',
        })
      }

      function initializeAbortController() {
        const abortController =
          (getAbortController ? getAbortController() : null) ||
          new AbortController()
        rest.abortController = abortController
        rest.signal = abortController.signal
        return abortController
      }

      async function executeWithRetry<T = any>(): Promise<T> {
        const executeWithTryCatch = async (
          retryCodes: (string | number)[],
          retryWhenAborted: boolean
        ) => {
          let _response = {} as any
          if (timeout) {
            let abortController = initializeAbortController()

            timer = setTimeout(() => {
              abortController.abort()
              abortController = initializeAbortController()
            }, timeout)
          }

          try {
            _response = await execute()
            if (
              _response.status > 399 &&
              hasResponseRetryCode(retryCodes, _response)
            ) {
              return { _response, shouldRetry: true }
            }
          } catch (e) {
            //  in nodejs v18, the error is AbortError, in nodejs v20, the error is TimeoutError
            //  https://github.com/nodejs/undici/issues/2590
            if (
              (e.name.includes('AbortError') ||
                e.name.includes('TimeoutError')) &&
              retryWhenAborted
            ) {
              return { _response: e, shouldRetry: true }
            } else {
              throw e
            }
          } finally {
            clearTimeout(timer)
          }

          return { _response, shouldRetry: false }
        }

        // first attempt
        let { _response, shouldRetry } = await executeWithTryCatch(
          retryCodes,
          retryOnAbort
        )
        // retry attempts
        while (enableRetry && shouldRetry && retryCount < maxRetries) {
          retryCount++

          // delay next retry attempt
          await sleep(
            calculateRetryDelay({
              retryCount,
              retryDelay,
              maxRetries,
              backoff,
              maxDelay,
            })
          )

          const execution = await executeWithTryCatch(retryCodes, retryOnAbort)
          _response = execution._response
          shouldRetry = execution.shouldRetry
        }

        return _response
      }

      const response: IResponse = await executeWithRetry()
      try {
        // try to parse the `fetch` response as text
        if (response.text && typeof response.text == 'function') {
          result =
            (await response.text()) ||
            response[Object.getOwnPropertySymbols(response)[1]]
          data = JSON.parse(result)
        } else {
          // axios response
          data = response.data || response
        }
      } catch (err) {
        throw err
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

    /**
     * we want to suppress axios internal
     * error handling behaviour to make it
     * consistent with native fetch.
     */
    { validateStatus: (status: number) => true }
  )

  return data
}
