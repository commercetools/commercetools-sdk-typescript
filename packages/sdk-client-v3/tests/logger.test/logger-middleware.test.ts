import { createTestResponse } from './fixtures'
import { createLoggerMiddleware } from '../../src/middleware'

function createTestRequest(options) {
  return {
    uri: '',
    method: 'GET',
    body: null,
    headers: {},
    ...options,
  }
}

const response = createTestResponse({})

describe('Logger Middleware', () => {
  beforeEach(() => {
    console.log = jest.fn()
  })

  test('should include log response with default options.', async () => {
    const request = createTestRequest({})
    const next = (req): any => response
    const loggerMiddlewareOptions = { loggerFn: jest.fn() }

    await createLoggerMiddleware(loggerMiddlewareOptions)(next)(request)
    expect(loggerMiddlewareOptions.loggerFn).toHaveBeenCalled()
    expect(loggerMiddlewareOptions.loggerFn).toHaveBeenCalledWith(response)
  })

  test('should not include original request in the response object.', async () => {
    const request = createTestRequest({})
    const next = (req): any => response
    const loggerMiddlewareOptions = {
      includeOriginalRequest: false,
      loggerFn: jest.fn(),
    }

    const { request: req, ...rest } = response
    await createLoggerMiddleware(loggerMiddlewareOptions)(next)(request)
    expect(loggerMiddlewareOptions.loggerFn).toHaveBeenCalled()
    expect(loggerMiddlewareOptions.loggerFn).toHaveBeenCalledWith(rest)
  })

  test('should not include `response headers` in the response object.', async () => {
    const request = createTestRequest({})
    const next = (req): any => response
    const loggerMiddlewareOptions = {
      includeResponseHeaders: false,
      loggerFn: jest.fn(),
    }

    const { headers, ...rest } = response
    await createLoggerMiddleware(loggerMiddlewareOptions)(next)(request)
    expect(loggerMiddlewareOptions.loggerFn).toHaveBeenCalled()
    expect(loggerMiddlewareOptions.loggerFn).toHaveBeenCalledTimes(1)
    expect(loggerMiddlewareOptions.loggerFn).toHaveBeenCalledWith(rest)
  })

  test('should include original request and mask sensitive headers', async () => {
    const request = createTestRequest({})

    const next = (req): any => response
    const loggerMiddlewareOptions = {
      loggerFn: jest.fn(),
      maskSensitiveHeaderData: true,
      includeOriginalRequest: true,
      includeResponseHeaders: true,
    }

    await createLoggerMiddleware(loggerMiddlewareOptions)(next)(request)
    expect(loggerMiddlewareOptions.loggerFn).toHaveBeenCalled()
    expect(loggerMiddlewareOptions.loggerFn).toHaveBeenCalledWith({
      ...response,
      request: {
        ...response.request,
        headers: {
          ...response.request.headers,
          Authorization: 'Bearer ********', // header `Authorization has been masked.
        },
      },
    })
  })

  test('should return unaltered response [original] response.', async () => {
    const request = createTestRequest({})
    const next = (req): any => response
    const loggerMiddlewareOptions = {
      loggerFn: jest.fn(),
      maskSensitiveHeaderData: true,
      includeOriginalRequest: false,
      includeResponseHeaders: false,
    }

    const { request: req, headers, ...rest } = response

    const originalResponse = await createLoggerMiddleware(
      loggerMiddlewareOptions
    )(next)(request)
    expect(loggerMiddlewareOptions.loggerFn).toHaveBeenCalled()
    expect(loggerMiddlewareOptions.loggerFn).toHaveBeenCalledTimes(1)
    expect(loggerMiddlewareOptions.loggerFn).toHaveBeenCalledWith(rest)
    expect(response).toEqual(originalResponse)
    expect(originalResponse.request).toBeTruthy()
    expect(originalResponse.headers).toBeTruthy()
    expect(originalResponse).toHaveProperty('request')
    expect(originalResponse).toHaveProperty('headers')
  })

  test('should call `console.log` if a loggerFn was not provided.', async () => {
    const next = (req): any => response
    const request = createTestRequest({})
    const loggerMiddlewareOptions = {}
    await createLoggerMiddleware(loggerMiddlewareOptions)(next)(request)

    expect(console.log).toHaveBeenCalled()
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith(response)
  })
})
