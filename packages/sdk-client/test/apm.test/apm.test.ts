import { MiddlewareRequest, MiddlewareResponse } from '../../src'
import { createApmMiddleware } from '../../src/sdk-middleware-apm'

jest.mock(
  'newrelic',
  jest.fn(() => ({ message: 'apm module' }))
)

function createTestRequest(options): MiddlewareRequest {
  return {
    uri: '',
    method: 'GET',
    body: null,
    headers: {},
    ...options,
  }
}

function createTestResponse(options): MiddlewareResponse {
  return {
    ...options,
  }
}

describe('apm test', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  const middlewareOptions = {}

  const request = createTestRequest({
    headers: {
      Authorization: '123',
    },
  })

  const response = createTestResponse(null)

  const apmMiddleware = createApmMiddleware(middlewareOptions)

  const next = (req: MiddlewareRequest) => {
    test('retains existing headers', () => {
      expect(req.headers.Authorization).toBe('123')
    })

    test('adds an `apm` property in request object', () => {
      expect(req['apm']).toBeTruthy()
    })

    test('invokes `apm` on the middleware options', () => {
      expect(req['apm']).toEqual({ message: 'apm module' })
    })
  }

  apmMiddleware(next)(request, response)
})
