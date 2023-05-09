const {
  ClientBuilder,
  /**
   * TODO:
   * replace relative import with
   * actual @commercetools/sdk-client-v2
   * module import once released
   */
} = require('../../../../packages/sdk-client/dist/commercetools-sdk-client-v2.cjs.prod')
const { createTelemetryMiddleware } = require('@commercetools/ts-sdk-apm')
const fetch = require('node-fetch')

const { createApiBuilderFromCtpClient } = require('@commercetools/platform-sdk')

const projectKey = process.env.CTP_PROJECT_KEY
const authMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: process.env.CTP_CLIENT_ID,
    clientSecret: process.env.CTP_CLIENT_SECRET,
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
const telemetryOptions = {
  createTelemetryMiddleware,
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
