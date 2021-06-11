import { createClient, createAuthForClientCredentialsFlow, createHttpClient } from '../../../sdk-client/src/index'
// import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
// import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import {
  ApiRoot,
  createExecutorFromMiddlewares,
  executeRequest,
} from './../../src'
import fetch from 'node-fetch'
import { requireEnvVar } from './test-utils'

const projectKey = requireEnvVar('CTP_PROJECT_KEY')
const clientId = requireEnvVar('CTP_CLIENT_ID')
const clientSecret = requireEnvVar('CTP_CLIENT_SECRET')
const authURL = requireEnvVar('CTP_AUTH_URL')
const ctp_host = requireEnvVar('CTP_HISTORY_URL')

// console.log(projectKey,
//   clientId,
//   clientSecret,
//   authURL,
//   ctp_host)

const authMiddleware = createAuthForClientCredentialsFlow({
  host: authURL,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
  },
  fetch
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
}).withProjectKeyValue({ projectKey })
