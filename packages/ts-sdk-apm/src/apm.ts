import type {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  OTelemetryMiddlewareOptions,
} from '../types/types'
import { time } from './helpers/performanceHelper'
import { recordDatadog } from './helpers/datadogHelper'

export default function createTelemetryMiddleware(
  options: OTelemetryMiddlewareOptions
): Middleware {
  // trace
  function trace() {
    // validate apm and tracer
    if (!(options?.apm && typeof options.apm == 'function')) {
      throw new Error(
        'APM is missing or not a function. Please check your telemetry setup.'
      )
    }

    if (!(options?.tracer && typeof options.tracer == 'function')) {
      throw new Error(
        'Tracer is missing or not a function. Please check your telemetry setup.'
      )
    }
  }

  trace() // expose tracing modules

  return (next: Next): Next =>
    async (request: MiddlewareRequest) => {
      // get start (high resolution milliseconds) timestamp
      const start = time()

      const nextRequest = {
        ...request,
        ...options,
      }

      const response: MiddlewareResponse = await next(nextRequest)
      const response_time = time() - start

      // send `response_time` to APM platforms
      if (options?.customMetrics) {
        if (options.customMetrics.datadog) {
          recordDatadog(response_time, { env: process.env.NODE_ENV || 'dev' })
        }
        if (options.customMetrics.newrelic) {
          // Lazy load New Relic only if necessary otherwise it will require to have set the env variable NEW_RELIC_APP_NAME
          const { recordNewRelic } = await import('./helpers/newRelicHelper.js')
          recordNewRelic(response_time)
        }
      }

      return response
    }
}
