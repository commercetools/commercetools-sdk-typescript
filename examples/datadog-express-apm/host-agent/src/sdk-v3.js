const {
  ClientBuilder,
  createHttpMiddleware,
  Next,
  MiddlewareRequest,
} = require('@commercetools/ts-client')
const { createTelemetryMiddleware } = require('@commercetools/ts-sdk-apm')
const { initializeAPM } = require('../tracer')

const { createApiBuilderFromCtpClient } = require('@commercetools/platform-sdk')
// const { httpMiddlewareOptionsV3 } = require('@commercetools/platform-sdk/test/integration-tests/test-utils')

const projectKey = process.env.CTP_PROJECT_KEY

const authMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: process.env.PROJECT_KEY || projectKey,
  credentials: {
    clientId: process.env.CTP_CLIENT_ID || '',
    clientSecret: process.env.CTP_CLIENT_SECRET || '',
  },
  oauthUri: process.env.OAUTH_URL || '',
  scopes: [`manage_project:${projectKey}`],
  httpClient: fetch,
}
const httpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
}

// const telemetryOptions = {
//   createTelemetryMiddleware,
//   userAgent: 'typescript-sdk-middleware-datadog',
//   tracer: require('dd-trace'), // Import Datadog's tracer
//   apm: initializeAPM, // Use the APM initialization function
// };

const telemetryOptions = {
  createTelemetryMiddleware, // Ensure this is imported correctly
  apm: () => {
    console.log('APM initialized')
  },
  tracer: () => {
    console.log('Tracing initialized')
  },
  userAgent: 'typescript-sdk-middleware-datadog',
}

const client = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware({
    ...httpMiddlewareOptions,
    fetch: async (url, options) => {
      const response = await fetch(url, options)
      console.log('Raw Response:', await response.clone().text())
      return response
    },
  })

  .withTelemetryMiddleware({
    createTelemetryMiddleware,
    ...telemetryOptions,
  })
  .build()

const apiRoot = createApiBuilderFromCtpClient(client).withProjectKey({
  projectKey,
})

module.exports = {
  apiRoot,
}
