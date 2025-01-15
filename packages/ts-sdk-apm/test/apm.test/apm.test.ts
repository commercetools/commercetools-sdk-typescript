import { ClientBuilder } from '@commercetools/ts-client'
import { type MiddlewareRequest, createTelemetryMiddleware } from '../../src'

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

  describe('apm test - null tracer configurations', () => {
    const response = createTestResponse({})
    const telemetryMiddleware = createTelemetryMiddleware({
      apm: null as any,
      tracer: null as any,
    })

    test('retains existing request (headers)', async () => {
      const next = (req: MiddlewareRequest) => {
        expect(req.headers?.Authorization).toBe('123')
        return response
      }

      await telemetryMiddleware(next)(request)
    })

    test('should use default apm and tracing configurations', async () => {
      const next = (req: MiddlewareRequest) => {
        expect(req['apm']).toBeTruthy()
        expect(req['tracer']).toBeTruthy()

        expect(typeof req['apm']).toEqual('function')
        expect(typeof req['tracer']).toEqual('function')
        return response
      }

      await telemetryMiddleware(next)(request)
    })
  })

  describe('apm test - non-null tracer configuration', () => {
    const options = {
      apm: jest.fn(() => ({ a: 'apm-module' })),
      tracer: jest.fn(() => ({ t: 'tracer-module' })),
    }

    const response = createTestResponse({})
    const telemetryMiddleware = createTelemetryMiddleware(options)

    test('adds an `apm` and `tracer` properties in request object', () => {
      const next = async (req: MiddlewareRequest) => {
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

        return response
      }

      telemetryMiddleware(next)(request)
    })
  })
})
