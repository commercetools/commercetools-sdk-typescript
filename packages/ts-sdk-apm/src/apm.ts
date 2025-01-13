import type {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  OTelemetryMiddlewareOptions,
} from '../types/types'
import { recordNewrelic, recordDatadog, time } from './helpers'

/**
 * default newrelic APM and
 * opentelemetry tracer modules
 */
const defaultOptions = {
  /**
   * if this is to be used with newrelic, then
   * pass this (apm) as an option in the `createTelemetryMiddleware`
   * function e.g createTelemetryMiddleware({ apm: () => require('newrelic'), ... })
   */
  apm: () => require('newrelic'),
  tracer: () => require('../opentelemetry'),
}

export default function createTelemetryMiddleware(
  options: OTelemetryMiddlewareOptions
): Middleware {
  // trace
  function trace() {
    // validate apm and tracer
    if (!(options?.apm && typeof options.apm == 'function')) {
      options.apm = defaultOptions.apm
    }

    if (!(options?.tracer && typeof options.tracer == 'function')) {
      options.tracer = defaultOptions.tracer
    }

    options.apm()
    options.tracer()
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
      recordNewrelic(response_time)
      recordDatadog(response_time, { env: 'dev' })

      return response
    }
}
