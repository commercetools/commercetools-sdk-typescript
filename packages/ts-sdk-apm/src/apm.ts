import type {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  OTelemetryMiddlewareOptions,
} from '../types/types'
import { recordDatadog } from './helpers/datadogHelper'
import { time } from './helpers/performanceHelper'

export default function createTelemetryMiddleware(
  options: OTelemetryMiddlewareOptions
): Middleware {
  // trace
  function trace() {
    // validate apm and tracer
    if (!(options?.apm && typeof options.apm == 'function')) {
      options.apm = () => {}
    }

    if (!(options?.tracer && typeof options.tracer == 'function')) {
      options.tracer = () => {}
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
          const { recordNewRelic } = require('./helpers/newRelicHelper')
          recordNewRelic(response_time)
        }
      }

      return response
    }
}
