import {
  type MiddlewareRequest,
  type MiddlewareResponse,
  createTelemetryMiddleware,
} from '../../src'

jest.mock('../../opentelemetry', () => {})

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
  const request = createTestRequest({
    headers: {
      Authorization: '123',
    },
  })

  describe('apm test - null tracer configurations', () => {
    const response = createTestResponse({})
    const telemetryMiddleware = createTelemetryMiddleware({
      apm: null,
      tracer: null,
    })

    const next = (req: MiddlewareRequest) => {
      test('retains existing request (headers)', () => {
        expect(req.headers?.Authorization).toBe('123')
      })

      test('should use default apm and tracing configurations', () => {
        expect(req['apm']).toBeTruthy()
        expect(req['tracer']).toBeTruthy()

        expect(typeof req['apm']).toEqual('function')
        expect(typeof req['tracer']).toEqual('function')
      })
    }

    telemetryMiddleware(next)(request, response)
  })

  describe('should use provided apm and tracer configurations', () => {
    const options = {
      apm: jest.fn(() => ({ a: 'apm-module' })),
      tracer: jest.fn(() => ({ t: 'tracer-module' })),
    }

    const response = createTestResponse({})
    const telemetryMiddleware = createTelemetryMiddleware(options)

    const next = (req: MiddlewareRequest) => {
      test('adds an `apm` and `tracer` properties in request object', () => {
        expect(req['apm']).toBeTruthy()
        expect(req['tracer']).toBeTruthy()

        expect(typeof req['apm']).toEqual('function')
        expect(typeof req['tracer']).toEqual('function')

        expect(req['apm']()).toEqual({ a: 'apm-module' })
        expect(req['tracer']()).toEqual({ t: 'tracer-module' })

        expect(req['apm']).toHaveReturned()
        expect(req['tracer']).toHaveReturned()

        expect(options.apm).toHaveBeenCalled()
        expect(options.tracer).toHaveBeenCalled
      })
    }

    telemetryMiddleware(next)(request, response)
  })
})
