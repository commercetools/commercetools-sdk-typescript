import {
  createClient,
  createAuthForClientCredentialsFlow,
  createHttpClient,
} from '../../../sdk-client/src/index'
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
const ml_host = requireEnvVar('CTP_ML_API_URL')

const authMiddleware = createAuthForClientCredentialsFlow({
  host: authURL,
  projectKey,
  credentials: {
    clientId,
    clientSecret,
  },
  scopes: [`manage_project:${projectKey} manage_api_clients:${projectKey}`],
  fetch,
})

const httpMiddleware = createHttpClient({
  host: ml_host,
  fetch,
})

const ctpClient = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

const executor: executeRequest = createExecutorFromMiddlewares(
  ctpClient.execute
)

export const mlApiBuilder = new ApiRoot({
  executeRequest: executor,
  baseUri: ml_host,
}).withProjectKey({ projectKey })
