import { HttpMiddlewareOptions, MiddlewareRequest } from '../../src'
import { Buffer } from 'buffer/'
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
  test('should throw if host is not provided.', () => {
    const response = createTestResponse({})
    const httpMiddlewareOptions = {
      host: null,
      httpClient: jest.fn(),
    }

    const next = () => response
    expect(() =>
      createHttpMiddleware(httpMiddlewareOptions)(next)(createTestRequest({}))
    ).toThrow()
  })

  test('should throw if host is not provided.', () => {
    const response = createTestResponse({})
    const httpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: null,
    }

    const next = () => response
    expect(() =>
      createHttpMiddleware(httpMiddlewareOptions)(next)(createTestRequest({}))
    ).toThrow()
  })

  test('should throw if timeout is provided and `AbortController` is not.', () => {
    const response = createTestResponse({})
    const httpMiddlewareOptions = {
      host: 'http://api-host.com',
      httpClient: jest.fn(),
      timeout: 2000,
      getAbortController: null,
    }

    const next = () => response
    expect(() =>
      createHttpMiddleware(httpMiddlewareOptions)(next)(createTestRequest({}))
    ).toThrow(
      /`AbortController` is not available. Please pass in `getAbortController` as an option or have AbortController globally available when using timeout./
    )
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
      expect(req.response.error).toBeTruthy()
      expect(req.response.code).toEqual(0)
      expect(req.response.error.status).toEqual(0)
      expect(req.response.statusCode).toEqual(0)
      expect(req.response.error.name).toEqual('NetworkError')
      expect(req.response.error.message).toEqual(
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
      expect(req.response.statusCode).toEqual(200)
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
      expect(typeof req.response.body).toEqual('string')
      expect(req.response.statusCode).toEqual(200)
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
      expect(typeof req.response.body).toEqual('object')
      expect(req.response.statusCode).toEqual(200)
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
      expect(req.response.body).toBeFalsy()
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
      expect(req.response.body).toBeDefined()
      expect(req.method).toEqual('POST')
      expect(Buffer.isBuffer(req.body)).toEqual(true)
      expect(req.body.toString()).toEqual('buffer body')
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
      expect(req.headers['Content-Type']).toEqual(null)
      expect(req.response.body).toBeDefined()
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
      expect(req.response.error.originalRequest).toBeTruthy()
      expect(req.response.error.originalRequest.headers.authorization).toEqual(
        'Bearer ********'
      )
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
      expect(req.headers['Content-Type']).toEqual('image/jpeg')
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
      expect(req.response.error).toBeTruthy()
      expect(req.response.error.statusCode).toEqual(0)
      expect(req.response.error.message).toEqual('httpClient is not a function')

      return response
    }

    await createHttpMiddleware(httpMiddlewareOptions as any)(next)(request)
  })

  test('should return a parse a text encoded response as json', async () => {
    const _response = {
      data: {},
      statusCode: 200,
    }

    const response = createTestResponse({
      // text: jest.fn(() => _response)
      text: () => _response,
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
      expect(req.response.body).toEqual(_response)

      return response
    }

    await createHttpMiddleware(httpMiddlewareOptions)(next)(request)
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
        expect(req.response.error.statusCode).toEqual(0)
        expect(req.response.error.message).toEqual(
          '`retryCodes` option must be an array of retry status (error) codes and/or messages.'
        )
        expect(req.response.error.name).toEqual('NetworkError')

        return response
      }

      await createHttpMiddleware(httpMiddlewareOptions)(next)(request)
    })

    test('should retry request based on response status code', async () => {
      const response = createTestResponse({
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
        expect(req.response.error.statusCode).toEqual(504)
        expect(req.response.error.message).toBeTruthy()
        expect(req.response.error.name).toEqual('HttpError')
        expect(req.response.error.retryCount).toEqual(
          httpMiddlewareOptions.retryConfig.maxRetries
        ) // 3

        return response
      }

      await createHttpMiddleware(httpMiddlewareOptions)(next)(request)
    })

    test('should retry request with exponential backoff', async () => {
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
          retryCodes: [503],
        },
      }

      const next = (req: MiddlewareRequest) => {
        expect(req.response.error.statusCode).toEqual(503)
        expect(req.response.error.message).toBeTruthy()
        expect(req.response.error.name).toEqual('ServiceUnavailable')
        expect(req.response.error.retryCount).toEqual(
          httpMiddlewareOptions.retryConfig.maxRetries
        ) // 2

        return response
      }

      await createHttpMiddleware(httpMiddlewareOptions)(next)(request)
    })
  })
})
