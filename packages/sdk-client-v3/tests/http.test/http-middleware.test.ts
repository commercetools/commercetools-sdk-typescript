import { HttpMiddlewareOptions, MiddlewareRequest } from '../../src'
import { createHttpMiddleware } from '../../src/middleware'

function createTestRequest(options) {
  return {
    uri: '',
    method: 'GET',
    body: null,
    headers: {},
    ...options,
  }
}

function createTestResponse(options) {
  return {
    ...options,
  }
}

class FormDataMockClass {
  append
  constructor() {
    this.append = jest.fn()
  }
}

describe('Http Middleware.', () => {
  test('should throw if host is not provided.', async () => {
    const response = createTestResponse({})
    const httpMiddlewareOptions = {
      host: null as any,
      httpClient: jest.fn(),
    }

    try {
      const next = () => response
      await createHttpMiddleware(httpMiddlewareOptions)(next)(
        createTestRequest({})
      )
    } catch (err) {
      expect(err).toBeDefined()
      expect(err.message).toMatch(
        'Request `host` or `url` is missing or invalid'
      )
    }
  })

  test('should throw if httpClient is provided but not a function.', async () => {
    const response = createTestResponse({})

    const httpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: null as any,
    }

    try {
      const next = () => response
      await createHttpMiddleware(httpMiddlewareOptions)(next)(
        createTestRequest({})
      )
    } catch (err) {
      expect(err).toBeDefined()
      expect(err.message).toMatch(
        'An `httpClient` is not available, please pass in a `fetch` or `axios` instance'
      )
    }
  })

  test('should throw if the set timeout value elapses', async () => {
    const response = createTestResponse({ statusCode: 0 })
    const httpMiddlewareOptions: HttpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: jest.fn(() => response),
      timeout: 10,
      getAbortController: jest.fn(),
      credentialsMode: 'include',
    }

    const next = (req: MiddlewareRequest) => {
      expect(httpMiddlewareOptions.getAbortController).toHaveBeenCalled()
      expect(req.response?.error).toBeTruthy()
      expect(req.response?.code).toEqual(0)
      expect(req.response?.error?.status).toEqual(0)
      expect(req.response?.statusCode).toEqual(0)
      expect(req.response?.error?.name).toEqual('NetworkError')
      expect(req.response?.error?.message).toEqual(
        'Unexpected non-JSON error response'
      )

      return response
    }

    await createHttpMiddleware(httpMiddlewareOptions)(next)(
      createTestRequest({})
    )
  })

  test('should execute a GET request and return a json body.', async () => {
    const response = createTestResponse({
      body: {},
      statusCode: 200,
      headers: {
        'server-time': '05:07',
      },
    })

    const httpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: jest.fn(() => response),
    }

    const next = (req: MiddlewareRequest) => {
      expect(typeof req.response).toEqual('object')
      expect(req.response?.statusCode).toEqual(200)
      return response
    }

    createHttpMiddleware(httpMiddlewareOptions)(next)(createTestRequest({}))
  })

  test('execute a GET request which does not return a json response', () => {
    const response = createTestResponse({
      data: 'this is a string response data',
      statusCode: 200,
      headers: {
        'server-time': '05:07',
      },
    })

    const httpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: jest.fn(() => response),
    }

    const next = (req: MiddlewareRequest) => {
      expect(typeof req.response).toEqual('object')
      expect(typeof req.response?.body).toEqual('string')
      expect(req.response?.statusCode).toEqual(200)
      return response
    }

    createHttpMiddleware(httpMiddlewareOptions)(next)(createTestRequest({}))
  })

  test('execute a GET request with a timeout option [success].', () => {
    const response = createTestResponse({
      data: {},
      statusCode: 200,
      headers: {
        'server-time': '05:07',
      },
    })

    const httpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: jest.fn(() => response),
      timeout: 1000,
      getAbortController: jest.fn(),
    }

    const next = (req: MiddlewareRequest) => {
      expect(typeof req.response).toEqual('object')
      expect(typeof req.response?.body).toEqual('object')
      expect(req.response?.statusCode).toEqual(200)
      return response
    }

    createHttpMiddleware(httpMiddlewareOptions)(next)(createTestRequest({}))
  })

  test('execute a GET request with a timeout option [failure].', () => {
    const response = createTestResponse({
      data: {},
      statusCode: 200,
      headers: {
        'server-time': '05:07',
      },
    })

    const httpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: jest.fn(() => response),
      timeout: 10,
      getAbortController: jest.fn(),
    }

    const next = (req: MiddlewareRequest) => response

    createHttpMiddleware(httpMiddlewareOptions)(next)(createTestRequest({}))
    expect(httpMiddlewareOptions.getAbortController).toHaveBeenCalled()
    expect(httpMiddlewareOptions.getAbortController).toHaveBeenCalledTimes(1)
  })

  test('should accept HEAD request and return without response body', () => {
    const response = createTestResponse({
      data: {},
      statusCode: 200,
      headers: {
        'server-time': '05:07',
      },
    })

    const httpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: jest.fn(() => response),
      getAbortController: jest.fn(),
    }

    const next = (req: MiddlewareRequest) => {
      expect(req.response?.body).toBeFalsy()
      expect(req.method).toEqual('HEAD')
      return response
    }

    createHttpMiddleware(httpMiddlewareOptions as any)(next)(
      createTestRequest({ method: 'HEAD' })
    )
  })

  test('should accept a Buffer body', () => {
    const response = createTestResponse({
      data: {},
      statusCode: 200,
      headers: {
        'server-time': '05:07',
      },
    })

    const request = createTestRequest({
      method: 'POST',
      body: Buffer.from('buffer body'),
    })

    const httpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: jest.fn(() => response),
      getAbortController: jest.fn(),
    }

    const next = (req: MiddlewareRequest) => {
      expect(req.response?.body).toBeDefined()
      expect(req.method).toEqual('POST')
      expect(Buffer.isBuffer(req.body)).toEqual(true)
      expect(req.body?.toString()).toEqual('buffer body')
      return response
    }

    createHttpMiddleware(httpMiddlewareOptions as any)(next)(request)
  })

  test('should accept a `FormData` body', () => {
    const formData = new FormDataMockClass()
    formData.append('file', 'file content', 'file123')

    const response = createTestResponse({
      data: {},
      statusCode: 200,
      headers: {
        'server-time': '05:07',
      },
    })

    const request = createTestRequest({
      uri: '/import/file-upload',
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': null,
      },
    })

    const httpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: jest.fn(() => response),
      getAbortController: jest.fn(),
    }

    const next = (req: MiddlewareRequest) => {
      expect(req.headers?.['Content-Type']).toEqual(null)
      expect(req.response?.body).toBeDefined()
      expect(req.body).toHaveProperty('append')
      expect(req.method).toEqual('POST')
      return response
    }

    createHttpMiddleware(httpMiddlewareOptions as any)(next)(request)
  })

  test('should mask sensitive header contents', () => {
    const response = createTestResponse({
      data: {},
      statusCode: 504,
      headers: {
        'server-time': '05:07',
      },
    })

    const request = createTestRequest({
      uri: '/default-header/content-type',
      method: 'POST',
      body: { id: 'test-id' },
      headers: {
        'Content-Type': 'image/jpeg',
        authorization: 'Bearer xbghRywRe===',
      },
    })

    const httpMiddlewareOptions: HttpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: jest.fn(() => response),
      maskSensitiveHeaderData: true,
      includeOriginalRequest: true,
      includeRequestInErrorResponse: true,
    }

    const next = (req: MiddlewareRequest) => {
      expect(req.response?.error?.originalRequest).toBeTruthy()
      expect(
        req.response?.error?.originalRequest?.headers?.authorization
      ).toEqual('Bearer ********')
      return response
    }

    createHttpMiddleware(httpMiddlewareOptions as any)(next)(request)
  })

  test('should not default other header content-type to application/json', () => {
    const response = createTestResponse({
      data: {},
      statusCode: 200,
      headers: {
        'server-time': '05:07',
      },
    })

    const request = createTestRequest({
      uri: '/default-header/content-type',
      method: 'POST',
      body: { id: 'test-id' },
      headers: {
        'Content-Type': 'image/jpeg',
      },
    })

    const httpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: jest.fn(() => response),
      getAbortController: jest.fn(),
    }

    const next = (req: MiddlewareRequest) => {
      expect(req.headers?.['Content-Type']).toEqual('image/jpeg')
      expect(req.headers).toEqual({ 'Content-Type': 'image/jpeg' })
      return response
    }

    createHttpMiddleware(httpMiddlewareOptions as any)(next)(request)
  })

  test('should throw if `httpClient` is not a function', async () => {
    const response = createTestResponse({
      data: {},
      statusCode: 200,
      headers: {
        'server-time': '05:07',
      },
    })

    const request = createTestRequest({
      uri: '/api-custom-url',
      method: 'POST',
      body: { id: 'test-id' },
      headers: {
        'Content-Type': 'image/jpeg',
      },
    })

    const httpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: {} as any,
    }

    const next = (req: MiddlewareRequest) => {
      return response
    }

    try {
      await createHttpMiddleware(httpMiddlewareOptions as any)(next)(request)
    } catch (err) {
      expect(err).toBeDefined()
      expect(err.error).toBeDefined()
      expect(err.error.message).toEqual('httpClient is not a function')
    }
  })

  test('should return a text encoded response as a parsed json', async () => {
    const _response = {
      data: {},
      statusCode: 200,
    }

    const response = createTestResponse({
      text: () => JSON.stringify(_response),
    })

    const request = createTestRequest({
      uri: '/error-url/retry',
      method: 'POST',
      body: { id: 'test-id' },
      headers: {
        'Content-Type': 'image/jpeg',
      },
    })

    const httpMiddlewareOptions: HttpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: jest.fn(() => response),
      enableRetry: false,
    }

    const next = (req: MiddlewareRequest) => {
      expect(typeof req.response).toEqual('object')
      expect(req.response?.body).toEqual(_response)

      return response
    }

    await createHttpMiddleware(httpMiddlewareOptions)(next)(request)
  })

  test('should throw an error if it is unable to parse a text response', async () => {
    const _response = {
      data: {},
      statusCode: 200,
    }

    const response = createTestResponse({
      text: () => _response, // this is not a text response
    })

    const request = createTestRequest({
      uri: '/error-url/retry',
      method: 'POST',
      body: { id: 'test-id' },
      headers: {
        'Content-Type': 'image/jpeg',
      },
    })

    const httpMiddlewareOptions: HttpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: jest.fn(() => response),
      enableRetry: false,
    }

    const next = (req: MiddlewareRequest) => {
      expect(typeof req.response).toEqual('object')
      expect(req.response?.body).toEqual(_response)

      return response
    }

    try {
      await createHttpMiddleware(httpMiddlewareOptions)(next)(request)
    } catch (e) {
      expect(e.body).toEqual(null)
      expect(e.error.statusCode).toEqual(0)
      expect(e.error.name).toEqual('NetworkError')
    }
  })

  describe('::retry test', () => {
    test('should throw if `retryCode` is not an array', async () => {
      const response = createTestResponse({
        data: {},
        statusCode: 503,
      })

      const request = createTestRequest({
        uri: '/error-url/retry',
        method: 'POST',
        body: { id: 'test-id' },
        headers: {
          'Content-Type': 'image/jpeg',
        },
      })

      const httpMiddlewareOptions: HttpMiddlewareOptions = {
        host: 'http://api-host.com',
        httpClient: jest.fn(() => response),
        enableRetry: true,
        retryConfig: {
          maxRetries: 2,
          backoff: true,
          retryDelay: 200,
          retryCodes: {} as any,
        },
      }

      const next = (req: MiddlewareRequest) => {
        return response
      }

      try {
        await createHttpMiddleware(httpMiddlewareOptions)(next)(request)
      } catch (err) {
        expect(err).toBeDefined()
        expect(err.error).toBeDefined()
        expect(err.error.message).toEqual(
          '`retryCodes` option must be an array of retry status (error) codes and/or messages.'
        )
      }
    })

    test('should retry request based on response status code', async () => {
      const response = createTestResponse({
        data: {},
        status: 504,
      })

      const request = createTestRequest({
        uri: '/error-url/retry',
        method: 'POST',
        body: { id: 'test-id' },
        headers: {
          'Content-Type': 'image/jpeg',
        },
      })

      const httpMiddlewareOptions: HttpMiddlewareOptions = {
        host: 'http://api-host.com',
        httpClient: jest.fn(() => response),
        enableRetry: true,
        retryConfig: {
          maxRetries: 3,
          backoff: false,
          retryDelay: 200,
          retryCodes: [504],
        },
      }

      const next = (req: MiddlewareRequest) => {
        expect(req.response?.error?.statusCode).toEqual(504)
        expect(req.response?.error?.message).toBeTruthy()
        expect(req.response?.error?.name).toEqual('HttpError')
        expect(req.response?.error?.retryCount).toEqual(
          httpMiddlewareOptions?.retryConfig?.maxRetries
        ) // 3

        return response
      }

      await createHttpMiddleware(httpMiddlewareOptions)(next)(request)
    })

    test('should retry request with exponential backoff', async () => {
      const response = createTestResponse({
        data: {},
        status: 503,
      })

      const request = createTestRequest({
        uri: '/error-url/retry',
        method: 'POST',
        body: { id: 'test-id' },
        headers: {
          'Content-Type': 'image/jpeg',
        },
      })

      const httpMiddlewareOptions: HttpMiddlewareOptions = {
        host: 'http://api-host.com',
        httpClient: jest.fn(() => response),
        enableRetry: true,
        retryConfig: {
          maxRetries: 2,
          backoff: true,
          retryDelay: 200,
          retryCodes: [503],
        },
      }

      const next = (req: MiddlewareRequest) => {
        expect(req.response?.error?.statusCode).toEqual(503)
        expect(req.response?.error?.message).toBeTruthy()
        expect(req.response?.error?.name).toEqual('ServiceUnavailable')
        expect(req.response?.error?.retryCount).toEqual(
          httpMiddlewareOptions?.retryConfig?.maxRetries
        ) // 2

        return response
      }

      await createHttpMiddleware(httpMiddlewareOptions)(next)(request)
    })

    test('should not retry request by default when aborted', async () => {
      const request = createTestRequest({
        uri: '/delay/1',
        method: 'GET',
      })

      const next = (req: MiddlewareRequest) => {
        return createTestResponse(req.response)
      }

      const httpMiddlewareOptions: HttpMiddlewareOptions = {
        host: 'https://httpbin.org',
        httpClient: fetch,
        timeout: 500,
        enableRetry: true,
        retryConfig: {
          maxRetries: 2,
          retryOnAbort: false,
        },
      }

      try {
        await createHttpMiddleware(httpMiddlewareOptions)(next)(request)
      } catch (err) {
        expect(err).toBeDefined()
        expect(err.error).toBeDefined()
        expect(err.error?.message).toContain('aborted')
      }
    })

    test('should throw an error when httpClient is invalid', async () => {
      const request = createTestRequest({
        uri: '/test',
        method: 'GET',
      })

      const testResponse = createTestResponse({
        data: {},
        statusCode: 503,
      })

      const next = (req: MiddlewareRequest) => {
        return testResponse
      }
      const testError = new Error()

      const httpMiddlewareOptions: HttpMiddlewareOptions = {
        host: 'https://httpbin.org',
        httpClient: jest.fn(() => {
          throw testError
        }),
        timeout: 500,
        enableRetry: true,
        retryConfig: {
          maxRetries: 2,
          retryOnAbort: false,
        },
      }

      try {
        await createHttpMiddleware(httpMiddlewareOptions)(next)(request)
      } catch (err) {
        expect(err.error.body).toEqual(testError)
      }
    })

    test('should retry request on aborted when retryOnAbort=true', async () => {
      const testData = 'this is a string response data'

      const request = createTestRequest({
        uri: '/delay/1',
        method: 'GET',
      })

      const next = (req: MiddlewareRequest) => {
        return createTestResponse(req.response)
      }

      let httpClientCalled = false

      const httpMiddlewareOptions: HttpMiddlewareOptions = {
        host: 'https://httpbin.org',
        httpClient: (url, options) => {
          if (httpClientCalled) {
            return createTestResponse({
              data: testData,
              statusCode: 200,
              headers: {
                'server-time': '05:07',
              },
            })
          } else {
            httpClientCalled = true
            return fetch(url, options)
          }
        },
        timeout: 500,
        enableRetry: true,
        retryConfig: {
          maxRetries: 2,
          retryDelay: 500,
          retryOnAbort: true,
        },
      }

      const response = await createHttpMiddleware(httpMiddlewareOptions)(next)(
        request
      )

      expect(response.error).toBeUndefined()
      expect(response.statusCode).toEqual(200)
      expect(response.body).toEqual(testData)
    })

    test('should retry CTP request when retry=true and retryOnAbort=false', async () => {
      const testData = 'this is a string response data'
      const testResponse = createTestResponse({
        data: {},
        statusCode: 504,
      })

      const request = createTestRequest({
        uri: '/error-url/retry',
        method: 'POST',
        body: { id: 'test-id' },
        headers: {
          'Content-Type': 'image/jpeg',
        },
      })

      let httpClientCalled = false

      const httpMiddlewareOptions: HttpMiddlewareOptions = {
        host: 'https://httpbin.org',
        httpClient: (url, options) => {
          if (httpClientCalled) {
            return createTestResponse({
              data: testData,
              statusCode: 200,
              headers: {
                'server-time': '05:07',
              },
            })
          } else {
            httpClientCalled = true
            return testResponse
          }
        },
        enableRetry: true,
        retryConfig: {
          maxRetries: 3,
          backoff: false,
          retryDelay: 200,
          retryCodes: [504],
          retryOnAbort: false,
        },
      }

      const next = (req: MiddlewareRequest) => {
        return testResponse
      }

      const response = await createHttpMiddleware(httpMiddlewareOptions)(next)(
        request
      )

      expect(response).toBeDefined()
    })
  })
})
