import { ClientBuilder } from '@commercetools/ts-client'
import { createApiBuilderFromCtpClient } from '../../src'
import { requireEnvVar } from './test-utils'

const projectKey = requireEnvVar('CTP_PROJECT_KEY')
const clientId = requireEnvVar('CTP_CLIENT_ID')
const clientSecret = requireEnvVar('CTP_CLIENT_SECRET')
const authURL = requireEnvVar('CTP_AUTH_URL')
const ctp_host = requireEnvVar('CTP_CHECKOUT_URL')

const authMiddleware = {
  host: authURL,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
  },
  httpClient: fetch,
}

const httpMiddleware = {
  host: ctp_host || 'https://checkout.europe-west1.gcp.commercetools.com',
  httpClient: fetch,
}

const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddleware)
  .withHttpMiddleware(httpMiddleware)
  .build()

export type { Transaction } from '../../src'
export const ctpApiBuilder = createApiBuilderFromCtpClient(
  ctpClient,
  'https://checkout.europe-west1.gcp.commercetools.com'
).withProjectKey({ projectKey })
