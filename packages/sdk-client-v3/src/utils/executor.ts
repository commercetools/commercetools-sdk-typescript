import { HttpClientConfig } from '../types/types'

async function executeHttpClientRequest(fetcher: Function, config?: any) {
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

  const data = await executeHttpClientRequest(
    async (options: HttpClientConfig) => {
      const response = await httpClient(url, {
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

      const data =
        response.json && typeof response.json == 'function'
          ? await response.json()
          : response.data

      return {
        data,
        statusCode: response.status || response.statusCode,
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
