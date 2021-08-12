import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import fetch from 'node-fetch'
import {
  ApiRoot,
  createExecutorFromMiddlewares,
  executeRequest,
} from '../../src'
import { requireEnvVar } from './test-utils'

const projectKey = requireEnvVar('CTP_PROJECT_KEY')
const clientId = requireEnvVar('CTP_CLIENT_ID')
const clientSecret = requireEnvVar('CTP_CLIENT_SECRET')
const authURL = requireEnvVar('CTP_AUTH_URL')
const history_host = requireEnvVar('CTP_HISTORY_URL')

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: authURL,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
  },
  fetch,
})

const httpMiddleware = createHttpMiddleware({
  host: history_host,
  fetch,
})

const ctpClient = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

const executor: executeRequest = createExecutorFromMiddlewares(
  ctpClient.execute
)

export const historyApiBuilder = new ApiRoot({
  executeRequest: executor,
  baseUri: history_host,
}).withProjectKeyValue({ projectKey })
