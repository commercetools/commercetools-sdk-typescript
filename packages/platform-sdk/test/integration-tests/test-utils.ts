import { ClientBuilder } from '@commercetools/sdk-client-v2'
import { createApiBuilderFromCtpClient } from '../../src'
const fetch = require('node-fetch')

export const projectKey = process.env.CTP_PROJECT_KEY
const httpMiddlewareOptions = {
  host:
    process.env.CTP_API_URL || 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
}
const authMiddlewareOptions = {
  host:
    process.env.CTP_AUTH_URL ||
    'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: process.env.CTP_CLIENT_ID,
    clientSecret: process.env.CTP_CLIENT_SECRET,
  },
  fetch,
}

const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build()

export const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey,
})
