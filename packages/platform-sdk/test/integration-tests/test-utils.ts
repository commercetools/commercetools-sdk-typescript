import {
  ClientBuilder,
  TokenCache,
  TokenStore,
} from '@commercetools/sdk-client-v2'
import { createApiBuilderFromCtpClient } from '../../src'
import { requireEnvVar } from '../helpers/test-utils'
import store from '@commercetools/sdk-client-v2/src/sdk-middleware-auth/utils'
const fetch = require('node-fetch')

export const projectKey = requireEnvVar('IT_CTP_PROJECT_KEY')
const clientId = requireEnvVar('IT_CTP_CLIENT_ID')
const clientSecret = requireEnvVar('IT_CTP_CLIENT_SECRET')
const authURL = requireEnvVar('CTP_AUTH_URL')
const ctp_host = requireEnvVar('CTP_API_URL')

const httpMiddlewareOptions = {
  host: ctp_host,
  fetch,
}
const authMiddlewareOptions = {
  host: authURL,
  projectKey,
  credentials: {
    clientId: clientId,
    clientSecret: clientSecret,
  },
  tokenCache: store<TokenStore, TokenCache>({
    token: '',
    expirationTime: -1,
  }),
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
