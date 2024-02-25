const { ClientBuilder } = require('@commercetools/sdk-client-v2')
const { createTelemetryMiddleware } = require('@commercetools/ts-sdk-apm')
const { createApiBuilderFromCtpClient } = require('@commercetools/platform-sdk')
const fetch = require('node-fetch')

const projectKey = process.env.CTP_PROJECT_KEY
const authMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: process.env.CTP_CLIENT_ID,
    clientSecret: process.env.CTP_CLIENT_SECRET,
    // user: {
    //   username: process.env.CTP_CLIENT_USERNAME,
    //   password: process.env.CTP_CLIENT_PASSWORD,
    // },
  },
  scopes: [`manage_project:${projectKey}`],
  fetch,
}

const httpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  includeRequestInErrorResponse: false,
  includeOriginalRequest: true,
  fetch,
}

// newrelic options
const agent = require('path').join(__dirname, 'tracer.js')
const telemetryOptions = {
  createTelemetryMiddleware,
  userAgent: 'typescript-sdk-middleware-datadog',
  tracer: require(agent).init(),
  // apm: () => require('dd-trace').init()
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
