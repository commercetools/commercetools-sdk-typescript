import { createErrorMiddleware } from '../../src/middleware'
import { ErrorHandlerOptions, MiddlewareRequest } from '../../src'

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
      code: 'invalid_request',
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
      })
    )
  })

  test('should update the request object before calling `next`', async () => {
    const request = createTestRequest({
      method: 'GET',
      host: 'http://app.not-found-url.com',
    })

    const response = createTestResponse({
      code: 'NotFound',
      message: 'uri not found',
      statusCode: 404,
      body: null,
      error: {
        statusCode: 404,
        message: 'not_found',
      },
    })

    const handler = (args: ErrorHandlerOptions) => {
      if (args.error && args.error.statusCode == 404) {
        args.request.host = 'http://app.working-url.com'
        args.request.method = 'POST'
      }

      return args.next(args.request)
    }

    expect(request.method).toEqual('GET')
    expect(response.statusCode).toEqual(404)
    expect(request.host).toEqual('http://app.not-found-url.com')

    const next = (req: MiddlewareRequest) => {
      return {
        ...req,
        ...response,
        originalRequest: {
          uri: req.host,
          method: req.method,
        },
      }
    }

    const res = await createErrorMiddleware({ handler })(next)(request)
    expect(res.originalRequest.uri).toEqual('http://app.working-url.com')
    expect(res.originalRequest.method).toEqual('POST')
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
