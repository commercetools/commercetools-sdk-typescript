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
      // credentialsMode,
      // timeout,
      // getAbortController,
      // httpClientOptions,
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
      // credentialsMode,
      // timeout,
      // getAbortController,
      // httpClientOptions,
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
      // credentialsMode,
      // httpClientOptions,
    }

    const next = () => response
    expect(() =>
      createHttpMiddleware(httpMiddlewareOptions)(next)(createTestRequest({}))
    ).toThrow(
      /`AbortController` is not available. Please pass in `getAbortController` as an option or have AbortController globally available when using timeout./
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
      // credentialsMode,
      // httpClientOptions,
    }

    const next = (req) => {
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
      // credentialsMode,
      // httpClientOptions,
    }

    const next = (req) => {
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
      // credentialsMode,
      // httpClientOptions,
    }

    const next = (req) => {
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
      // credentialsMode,
      // httpClientOptions,
    }

    const next = (req) => response

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
      timeout: 10,
      getAbortController: jest.fn(),
      // credentialsMode,
      // httpClientOptions,
    }

    const next = (req) => {
      expect(req.response.body).toBeUndefined()
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
      timeout: 10,
      getAbortController: jest.fn(),
      // credentialsMode,
      // httpClientOptions,
    }

    const next = (req) => {
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
      timeout: 10,
      getAbortController: jest.fn(),
      // credentialsMode,
      // httpClientOptions,
    }

    const next = (req) => {
      expect(req.headers['Content-Type']).toEqual(null)
      expect(req.response.body).toBeDefined()
      expect(req.body).toHaveProperty('append')
      expect(req.method).toEqual('POST')
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
      timeout: 10,
      getAbortController: jest.fn(),
      // credentialsMode,
      // httpClientOptions,
    }

    const next = (req) => {
      expect(req.headers['Content-Type']).toEqual('image/jpeg')
      expect(req.headers).toEqual({ 'Content-Type': 'image/jpeg' })
      return response
    }

    createHttpMiddleware(httpMiddlewareOptions as any)(next)(request)
  })
})
