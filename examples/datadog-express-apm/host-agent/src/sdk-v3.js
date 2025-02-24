const { ClientBuilder } = require('@commercetools/ts-client')
const { createTelemetryMiddleware } = require('@commercetools/ts-sdk-apm')
const { createApiBuilderFromCtpClient } = require('@commercetools/platform-sdk')
const fetch = require('node-fetch')

const projectKey = process.env.CTP_PROJECT_KEY
const authMiddlewareOptions = {
  host: process.env.CTP_AUTH_URL,
  projectKey,
  credentials: {
    clientId: process.env.CTP_CLIENT_ID,
    clientSecret: process.env.CTP_CLIENT_SECRET,
    user: {
      username: process.env.CTP_CLIENT_USERNAME,
      password: process.env.CTP_CLIENT_PASSWORD,
    },
  },
  scopes: [`manage_project:${projectKey}`],
  httpClient: fetch,
}

const httpMiddlewareOptions = {
  host: process.env.CTP_API_URL,
  includeRequestInErrorResponse: false,
  includeOriginalRequest: true,
  httpClient: fetch,
}

// datadog options
const telemetryOptions = {
  createTelemetryMiddleware,
  tracer: async () => await import('dd-trace').init(),
  customMetrics: {
    datadog: true,
  },
}

const client = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withTelemetryMiddleware(telemetryOptions) // telemetry middleware
  .build()

const apiRoot = createApiBuilderFromCtpClient(client).withProjectKey({
  projectKey,
})

module.exports = {
  apiRoot,
}
