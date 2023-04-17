import { MiddlewareRequest, MiddlewareResponse } from '../../src'
import { createApmMiddleware } from '../../src'

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

describe('apm', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  const request = createTestRequest({
    headers: {
      Authorization: '123',
    },
  })

  describe('apm test - falsy', () => {
    const response = createTestResponse(null)
    const apmMiddleware = createApmMiddleware()

    const next = (req: MiddlewareRequest) => {
      test('retains existing headers', () => {
        expect(req.headers.Authorization).toBe('123')
      })

      test('should not accept an option parameter', () => {
        expect(req['apm']).toBeFalsy()
        expect(req['apm']).toEqual(undefined)
      })
    }

    apmMiddleware(next)(request, response)
  })

  describe('apm test - truthy', () => {
    const options = {
      apm: jest.fn(() => ({ n: 'module' })),
      createApmMiddleware: jest.fn(),
    }

    const response = createTestResponse({})
    const apmMiddleware = createApmMiddleware(options)

    const next = (req: MiddlewareRequest) => {
      test('adds an `apm` and `createApmMiddleware` properties in request object', () => {
        expect(req['apm']).toBeTruthy()
        expect(req['createApmMiddleware']).toBeTruthy()
      })
    }

    apmMiddleware(next)(request, response)
  })
})
