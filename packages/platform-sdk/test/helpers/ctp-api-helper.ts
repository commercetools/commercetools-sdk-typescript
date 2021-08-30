import {
  createAuthForClientCredentialsFlow,
  createHttpClient,
  createClient,
} from '@commercetools/sdk-client-v2'
import fetch from 'node-fetch'
import { requireEnvVar } from './test-utils'
import {
  ApiRoot,
  executeRequest,
  createExecutorFromMiddlewares,
} from '../../src'

const projectKey = requireEnvVar('CTP_PROJECT_KEY')
const clientId = requireEnvVar('CTP_CLIENT_ID')
const clientSecret = requireEnvVar('CTP_CLIENT_SECRET')
const authURL = requireEnvVar('CTP_AUTH_URL')
const ctp_host = requireEnvVar('CTP_API_URL')

const authMiddleware = createAuthForClientCredentialsFlow({
  host: authURL,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
  },
  fetch,
})

const httpMiddleware = createHttpClient({
  host: ctp_host,
  fetch,
})

const ctpClient = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

const executor: executeRequest = createExecutorFromMiddlewares(
  ctpClient.execute
)

export const ctpApiBuilder = new ApiRoot({
  executeRequest: executor,
  baseUri: ctp_host,
}).withProjectKey({ projectKey })
