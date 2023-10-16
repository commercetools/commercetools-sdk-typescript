import type {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  OTelemetryMiddlewareOptions,
} from '../types/types'
import packageJson from '../package.json'

/**
 * default newrelic APM and
 * opentelemetry tracer modules
 */
const defaultOptions = {
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
    (request: MiddlewareRequest, response: MiddlewareResponse) => {
      const nextRequest = {
        ...request,
        headers: {
          ...request.headers,
          'User-Agent': `typescript-sdk-newrelic-middleware-${packageJson.version}`,
        },
        ...options,
      }

      next(nextRequest, response)
    }
}
