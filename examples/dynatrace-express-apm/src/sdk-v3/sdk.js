const { ClientBuilder } = require('@commercetools/ts-client')
const { createTelemetryMiddleware } = require('@commercetools/ts-sdk-apm')
const { createApiBuilderFromCtpClient } = require('@commercetools/platform-sdk')
const fetch = require('node-fetch')
const path = require('path')

const oneagent = path.join(__dirname, '..', '..', 'oneagent-tracer.js')
const tracer = require(oneagent)

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

// dynatrace options
const telemetryOptions = {
  createTelemetryMiddleware,
  userAgent: 'typescript-sdk-middleware-dynatrace',
  tracer: require(oneagent),
  customMetrics: {
    newrelic: false,
    datadog: false,
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
