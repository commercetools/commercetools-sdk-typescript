const { ClientBuilder } = require('@commercetools/ts-client')
const { createTelemetryMiddleware } = require('@commercetools/ts-sdk-apm')
const { createApiBuilderFromCtpClient } = require('@commercetools/platform-sdk')
const fetch = require('node-fetch')

const agent = require('newrelic')

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

// newrelic options
const telemetryOptions = {
  createTelemetryMiddleware,
  userAgent: 'typescript-sdk-middleware-newrelic',
  apm: () => agent,
  customMetrics: {
    newrelic: true,
  },
}

const client = new ClientBuilder()
  .withPasswordFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withTelemetryMiddleware(telemetryOptions) // telemetry middleware
  .build()

const apiRoot = createApiBuilderFromCtpClient(client).withProjectKey({
  projectKey,
})

module.exports = {
  apiRoot,
}
