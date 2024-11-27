import { ClientBuilder } from '@commercetools/ts-client'
import {
  type MiddlewareRequestLegacy,
  type MiddlewareResponseLegacy,
  createTelemetryMiddlewareV2,
  MiddlewareRequest,
  OTelemetryMiddlewareOptions,
  Next,
} from '../../src'
import { recordNewrelic, time } from '../../src/helpers'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'

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

function createTestResponse(options): MiddlewareResponseLegacy {
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
    const telemetryMiddleware = createTelemetryMiddlewareV2({
      apm: null as any,
      tracer: null as any,
    })

    const next = (req: MiddlewareRequestLegacy) => {
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
    const telemetryMiddleware = createTelemetryMiddlewareV2(options)

    const next = (req: MiddlewareRequestLegacy) => {
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

  describe('custom metrics', () => {
    const projectKey = process.env.CTP_PROJECT_KEY as string
    const authMiddlewareOptions = {
      host: 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey,
      credentials: {
        clientId: process.env.CTP_CLIENT_ID as string,
        clientSecret: process.env.CTP_CLIENT_SECRET as string,
      },
      scopes: [`manage_project:${projectKey}`],
      httpClient: fetch,
    }

    const httpMiddlewareOptions = {
      host: 'https://api.europe-west1.gcp.commercetools.com',
      httpClient: fetch,
    }

    it('should get request response time', async () => {
      const _middleware = (options?: OTelemetryMiddlewareOptions) => {
        return (next: Next) => {
          return async (req: MiddlewareRequest) => {
            const startTime = time()

            const res = await next(req)

            const endTime = time()
            const responseTime = endTime - startTime
            res['response_time'] = responseTime

            // record stats for newrelic
            recordNewrelic(responseTime)
            return res
          }
        }
      }

      const telemetryOptions = {
        userAgent: 'typescript-sdk-middleware-newrelic',
        createTelemetryMiddleware: _middleware,
      }

      const client = new ClientBuilder()
        .withTelemetryMiddleware(telemetryOptions)
        .withAnonymousSessionFlow(authMiddlewareOptions)
        .withHttpMiddleware(httpMiddlewareOptions)
        .build()

      const api = createApiBuilderFromCtpClient(client)
      const result = await api.withProjectKey({ projectKey }).get().execute()

      expect(typeof result).toEqual('object')
      expect(result).toHaveProperty('response_time')
      expect(typeof result['response_time']).toEqual('number')
    }, 15000)
  })
})
