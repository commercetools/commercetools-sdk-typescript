import { type MiddlewareRequest, createTelemetryMiddleware } from '../../src'
import { recordDatadog } from '../../src/helpers/datadogHelper'
import datadog from 'dd-trace'

jest.mock('../../opentelemetry', () => {})
jest.mock('dd-trace', () => ({
  init: jest.fn(),
  dogstatsd: {
    gauge: jest.fn(),
  },
}))

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

    test('retains existing request (headers)', async () => {
      const telemetryMiddleware = createTelemetryMiddleware({
        apm: null as any,
        tracer: null as any,
      })

      const next = (req: MiddlewareRequest) => {
        expect(req.headers?.Authorization).toBe('123')
        return response
      }

      await telemetryMiddleware(next)(request)
    })

    test('should use default apm and tracing configurations', async () => {
      const telemetryMiddleware = createTelemetryMiddleware({
        apm: null as any,
        tracer: null as any,
      })
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
    test('adds an `apm` and `tracer` properties in request object', async () => {
      const options = {
        apm: jest.fn(() => ({ a: 'apm-module' })),
        tracer: jest.fn(() => ({ t: 'tracer-module' })),
      }

      const response = createTestResponse({})
      const telemetryMiddleware = createTelemetryMiddleware(options)

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
        expect(options.tracer).toHaveBeenCalled()

        return response
      }

      await telemetryMiddleware(next)(request)
    })

    test('should ensure `apm` function is being called', async () => {
      const opts = {
        apm: jest.fn(),
      }

      const response = createTestResponse({})
      const telemetryMiddleware = createTelemetryMiddleware(opts)

      const next = async (req: MiddlewareRequest) => {
        expect(req['apm']).toBeDefined()
        expect(opts.apm).toHaveBeenCalled()
        return response
      }

      await telemetryMiddleware(next)({ method: 'POST' })
    })

    test('should ensure `tracer` function is being called', async () => {
      const opts = {
        tracer: jest.fn(),
      }

      const response = createTestResponse({})
      const telemetryMiddleware = createTelemetryMiddleware(opts)

      const next = async (req: MiddlewareRequest) => {
        expect(req['tracer']).toBeDefined()
        expect(opts.tracer).toHaveBeenCalled()
        return response
      }

      await telemetryMiddleware(next)({ method: 'POST' })
    })
  })

  describe('metric recordings', () => {
    test('should record `datadog` metrics', () => {
      recordDatadog(200, { env: 'telemetry-service' })

      expect(datadog.dogstatsd.gauge).toHaveBeenCalledWith(
        'client_response_time',
        200,
        { env: 'telemetry-service' }
      )
    })

    test('should only record datadog data', async () => {
      const next = async (req: any) => ({
        statusCode: 200,
        ...req,
      })

      const res = await createTelemetryMiddleware({
        customMetrics: { datadog: true, newrelic: false },
      })(next)({ method: 'POST' })

      expect(res.statusCode).toEqual(200)
    })

    test('should only record newrelic data', async () => {
      const next = async (req: any) => ({
        statusCode: 200,
        ...req,
      })

      const res = await createTelemetryMiddleware({
        customMetrics: { datadog: false, newrelic: true },
      })(next)({ method: 'POST' })

      expect(res.statusCode).toEqual(200)
    })
  })
})
