import { ClientBuilder } from '@commercetools/ts-client'
import {
  MiddlewareRequest,
  OTelemetryMiddlewareOptions,
  Next,
} from '@commercetools/ts-sdk-apm'
import datadog from 'dd-trace'
import newrelic from 'newrelic'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'

const time = () => performance.now()

// record for datadog
const recordDatadog = (
  metric: number,
  tags?: { [tag: string]: string | number }
): void => {
  datadog
    .init()
    .dogstatsd.gauge(`Commercetools_Client_Response_Total`, metric, tags)
}

// record for newrelic
const recordNewrelic = (metric: number | newrelic.Metric): void => {
  newrelic.recordMetric(`Commercetools/Client/Response/Total`, metric)
}

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

          // record stats
          recordNewrelic(responseTime)
          recordDatadog(responseTime)
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
  })

  it('should not record custom metric is option is not enabled', async () => {
    const _middleware = (options?: OTelemetryMiddlewareOptions) => {
      expect(options.customMetrics).toEqual(undefined)

      return (next: Next) => {
        return async (req: MiddlewareRequest) => {
          const startTime = time()

          const res = await next(req)

          if (options?.customMetrics) {
            const endTime = time()
            const responseTime = endTime - startTime
            res['response_time'] = responseTime

            // simulate the actual `createTelemetryMiddleware` middleware
            options.customMetrics.newrelic && recordNewrelic(responseTime)
            options.customMetrics.datadog &&
              recordDatadog(responseTime, { env: 'dev' })
          }

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
    expect(result['response_time']).toBeUndefined()
    expect(typeof result['response_time']).toEqual('undefined')
  })

  it('should record custom metric is option is enabled', async () => {
    const _middleware = (options?: OTelemetryMiddlewareOptions) => {
      expect(typeof options.customMetrics).toEqual('object')
      expect(options.customMetrics.newrelic).toEqual(true)

      return (next: Next) => {
        return async (req: MiddlewareRequest) => {
          const startTime = time()

          const res = await next(req)

          if (options?.customMetrics) {
            const endTime = time()
            const responseTime = endTime - startTime
            res['response_time'] = responseTime

            // simulate the actual `createTelemetryMiddleware` middleware
            options.customMetrics.newrelic && recordNewrelic(responseTime)
            options.customMetrics.datadog &&
              recordDatadog(responseTime, { env: 'dev' })
          }

          return res
        }
      }
    }

    const telemetryOptions = {
      userAgent: 'typescript-sdk-middleware-newrelic',
      createTelemetryMiddleware: _middleware,
      customMetrics: {
        newrelic: true,
      },
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
  })
})
