import type {
  MiddlewareLegacy,
  MiddlewareRequestLegacy,
  MiddlewareResponseLegacy,
  NextLegacy,
  Next,
  OTelemetryMiddlewareOptions,
} from '../types/types'

/**
 * default newrelic APM and
 * opentelemetry tracer modules
 */
const defaultOptions = {
  /**
   * if this is to be used with newrelic, then
   * pass this (apm) as an option in the `createTelemetryMiddleware`
   * function e.g createTelemetryMiddleware({ apm: () => require('newrelic'), ... })
   * Note: don't forget to install newrelic agent in your project `yarn add newrelic`
   */
  apm: () => {},
  tracer: () => require('../opentelemetry'),
}

/**
 * @deprecated use new `createTelemetryMiddleware`
 * @param options
 * @returns
 */
export default function createTelemetryMiddleware(
  options: OTelemetryMiddlewareOptions
): MiddlewareLegacy {
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
  return (next: NextLegacy): NextLegacy =>
    (request: MiddlewareRequestLegacy, response: MiddlewareResponseLegacy) => {
      const nextRequest = {
        ...request,
        ...options,
      }

      next(nextRequest, response)
    }
}
