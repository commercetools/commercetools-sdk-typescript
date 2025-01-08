import { createTestResponse } from './fixtures'
import { createLoggerMiddleware } from '../../src/middleware'

function createTestRequest(options) {
  return {
    uri: '',
    method: 'GET',
    body: null,
    headers: {
      Authorization: 'token-12345',
    },
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
