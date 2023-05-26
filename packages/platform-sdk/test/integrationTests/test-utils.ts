import { ClientBuilder } from '@commercetools/sdk-client-v2/src'
import { createApiBuilderFromCtpClient } from '../../src'
const fetch = require('node-fetch')

export const projectKey = process.env.CTP_PROJECT_KEY
const httpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
}
const authMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: process.env.CTP_CLIENT_ID || '',
    clientSecret: process.env.CTP_CLIENT_SECRET || '',
  },
  oauthUri: process.env.ADMIN_AUTH_URL || '',
  scopes: [`manage_project:${projectKey}`],
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
