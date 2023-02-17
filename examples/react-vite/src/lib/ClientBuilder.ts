// import fetch from 'node-fetch'
import {
  ClientBuilder,
  Client,
  AuthMiddlewareOptions,
  HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2'
import {
  createApiBuilderFromCtpClient,
  ApiRoot,
} from '@commercetools/platform-sdk'

export const projectKey = import.meta.env.VITE_CTP_PROJECT_KEY || ''
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    // clientId: process.env.CTP_CLIENT_ID || '',
    // clientSecret: process.env.CTP_CLIENT_SECRET || '',
    clientId: import.meta.env.VITE_CTP_CLIENT_ID || '',
    clientSecret: import.meta.env.VITE_CTP_CLIENT_SECRET || '',
  },
  scopes: [`manage_project:${projectKey}`],
  fetch,
}

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
}

const client: Client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build()

export const getApiRoot: () => ApiRoot = () => {
  return createApiBuilderFromCtpClient(client)
}
