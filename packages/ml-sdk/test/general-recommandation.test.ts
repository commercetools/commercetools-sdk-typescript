import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createClient } from '@commercetools/sdk-client'

import { ApiRoot, executeRequest, createExecutorFromMiddlewares } from '../src'

import fetch from 'node-fetch'

const projectKey = process.env.CTP_PROJECT_KEY
const clientId = process.env.CTP_CLIENT_ID
const clientSecret = process.env.CTP_CLIENT_SECRET
const authURL = 'https://auth.sphere.io'
const host = 'https://ml-eu.europe-west1.gcp.commercetools.com'

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
  host,
  fetch,
})

const ctpClient = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

const executor: executeRequest = createExecutorFromMiddlewares(
  ctpClient.execute
)

export const mlApiRoot: ApiRoot = new ApiRoot({
  executeRequest: executor,
  baseUri: host,
})

test('tests error with async/await', async () => {
  const resp = await mlApiRoot
    .withProjectKey({ projectKey })
    .recommendations()
    .generalCategories()
    .get({
      queryArgs: {
        productName: 'vase',
      },
    })
    .execute()
  expect(resp.statusCode).toEqual(200)
  expect(resp.body.results).toBeDefined()
  expect(resp.body.results.length).toBeGreaterThan(0)
})
