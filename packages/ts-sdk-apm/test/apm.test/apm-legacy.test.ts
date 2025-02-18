import {
  type MiddlewareRequestLegacy,
  type NextLegacy,
  createTelemetryMiddlewareLegacy,
} from '../../src'

jest.mock('../../opentelemetry', () => {})

function createTestRequest(options): MiddlewareRequestLegacy {
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

describe('apm', () => {
  const request = createTestRequest({
    headers: {
      Authorization: '123',
    },
  })

  // lagacy tests
  describe('apm test - null tracer configurations', () => {
    const response = createTestResponse({})
    const telemetryMiddleware = createTelemetryMiddlewareLegacy({
      apm: null as any,
      tracer: null as any,
    })

    test('retains existing request (headers)', async () => {
      const next = (req: MiddlewareRequestLegacy) => {
        expect(req.headers?.Authorization).toBe('123')
      }

      await telemetryMiddleware(next)(request, response)
    })

    test('should use default apm and tracing configurations', async () => {
      const next = (req: MiddlewareRequestLegacy) => {
        expect(req['apm']).toBeTruthy()
        expect(req['tracer']).toBeTruthy()

        expect(typeof req['apm']).toEqual('function')
        expect(typeof req['tracer']).toEqual('function')
      }

      await telemetryMiddleware(next)(request, response)
    })
  })

  describe('apm test - non-null tracer configuration', () => {
    const options = {
      apm: jest.fn(() => ({ a: 'apm-module' })),
      tracer: jest.fn(() => ({ t: 'tracer-module' })),
    }

    const response = createTestResponse({})
    const telemetryMiddleware = createTelemetryMiddlewareLegacy(options)

    test('adds an `apm` and `tracer` properties in request object', async () => {
      const next = (req: MiddlewareRequestLegacy) => {
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
      }

      await telemetryMiddleware(next)(request, response)
    })
  })
})
