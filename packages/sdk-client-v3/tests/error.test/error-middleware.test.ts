import { createErrorMiddleware } from '../../src/middleware'

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

describe('Error Middleware.', () => {
  test('should properly structure an error response.', async () => {
    const request = createTestRequest({})
    const response = createTestResponse({
      body: null,
      error: {
        statusCode: 400,
        message: 'unknown user input.',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    })

    const next = jest.fn(() => response)
    const res = await createErrorMiddleware()(next)(request)

    expect(res).toEqual(
      expect.objectContaining({
        ...response,
        statusCode: response.error.statusCode,
        headers: response.error.headers,
        body: null,
        error: {
          ...response.error,
          body: response.error,
        },
      })
    )
  })

  test('should move over non error responses and call the `next` middleware.', async () => {
    const request = createTestRequest({})
    const response = createTestResponse({
      body: {
        statusCode: 200,
        message: 'success.',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      error: null,
    })

    const next = jest.fn(() => response)
    const res = await createErrorMiddleware()(next)(request)

    expect(next).toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith(request)

    expect(res).toEqual(response)
  })
})
