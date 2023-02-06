import { createRetryMiddleware } from '../../src/middleware'

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

describe.skip('Retry Middleware', () => {
  test('should be able to validate retry codes', async () => {
    const response = createTestResponse({})
    const retryMiddlewareOptions = {
      retryCodes: null, // <--------- should be an array of retry codes e.g 503, 500, etc
      maxDelay: Infinity,
      maxRetries: 3,
      backoff: true,
      retryDelay: 200,
    }

    const next = () => response
    expect(
      createRetryMiddleware(retryMiddlewareOptions)(next)(createTestRequest({}))
    ).rejects.toEqual(expect.any(Error))
  })

  test('should be able to retry using the default retry config or policy', async () => {
    const response = createTestResponse({ statusCode: 503 })
    const request = createTestRequest({})

    const retryMiddlewareOptions = {
      retryCodes: [503], // <--------- retry for 503 error
      maxRetries: 3,
    }

    const next = jest.fn((req) => response)
    ;(await createRetryMiddleware(retryMiddlewareOptions)(next)(request)) as any
    expect(next).toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(retryMiddlewareOptions.maxRetries)
    expect(next).toHaveBeenCalledTimes(3)
    expect(next).toHaveBeenCalledWith(request)
  })

  test('should at least call `next` function once even if `maxRetries` is zero (0)', async () => {
    const response = createTestResponse({ statusCode: 503 })
    const request = createTestRequest({})

    const retryMiddlewareOptions = {
      retryCodes: [503], // <--------- retry for 503 error
      maxRetries: 0,
    }

    const next = jest.fn((req) => response)
    ;(await createRetryMiddleware(retryMiddlewareOptions)(next)(request)) as any
    expect(next).toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith(request)
  })

  test('should not retry if `statusCode` is not part of retryCodes is array', async () => {
    const response = createTestResponse({ statusCode: 200 })
    const request = createTestRequest({})

    const retryMiddlewareOptions = {
      retryCodes: [503], // <--------- retry for 503 error
      maxRetries: 3,
    }

    const next = jest.fn((req) => response)
    ;(await createRetryMiddleware(retryMiddlewareOptions)(next)(request)) as any
    expect(next).toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith(request)
  })

  test('should retry if error (message) is part of the `retryCodes`', async () => {
    const response = createTestResponse({ error: { message: 'ETIMEDOUT' } })
    const request = createTestRequest({})

    const retryMiddlewareOptions = {
      retryCodes: [503, 'ETIMEDOUT'], // <--------- retry for 503 and ETIMEDOUT (timeout) error
      maxRetries: 3,
    }

    const next = jest.fn((req) => response)
    ;(await createRetryMiddleware(retryMiddlewareOptions)(next)(request)) as any
    expect(next).toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(3)
    expect(next).toHaveBeenCalledWith(request)
  })

  test('should use exponential backOff when retrying.', async () => {
    const response = createTestResponse({ error: { message: 'ETIMEDOUT' } })
    const request = createTestRequest({})

    const retryMiddlewareOptions = {
      retryCodes: [503, 'ETIMEDOUT'], // <--------- retry for 503 and ETIMEDOUT (timeout) error
      maxRetries: 2,
      backoff: false,
      retryDelay: 300,
    }

    const next = jest.fn((req) => response)
    ;(await createRetryMiddleware(retryMiddlewareOptions)(next)(request)) as any
    expect(next).toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(2)
    expect(next).toHaveBeenCalledWith(request)
  }, 2400) // retryDelay * 2 ** retryCount (retryDelay of 300 * 2 ** 3)
})
