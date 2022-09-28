import {
  createCorrelationIdMiddleware,
  createUserAgentMiddleware,
  createAuthMiddleware,
  createLoggerMiddleware,
  createRetryMiddleware,
  createHttpMiddleware,
  createQueueMiddleware
} from './middleware'
import fetch from 'node-fetch'
import { logger, generate } from './utils'
import { createClient } from './client'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'

const client = createClient({
  // this will come from the `ClientBuilder` class
  middlewares: [
    createCorrelationIdMiddleware({ generate }),
    createUserAgentMiddleware({}),
    createAuthMiddleware({
      host: 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey: 'demo-1',
      credentials: {
        clientId: process.env.CTP_CLIENT_ID,
        clientSecret: process.env.CTP_CLIENT_SECRET
      },
    }),
    createQueueMiddleware({ concurrency: 5 }),
    createLoggerMiddleware({ loggerFn: logger }),
    createRetryMiddleware({ enableRetry: true }),
    createHttpMiddleware({
      host: 'https://api.europe-west1.gcp.commercetools.com',
      httpClient: fetch
    }),
  ],
});

// const clientRequest = { method: 'GET' } // initial request will come from middleware options

// CreateClient
// client.execute(clientRequest).catch(console.error)
// client.execute(clientRequest).then(console.log).catch(console.error)

// ApiRoot
const apiRoot = createApiBuilderFromCtpClient(client)

function execute() {
  return apiRoot
    .withProjectKey({ projectKey: 'demo-1' })
    .get()
    .execute()
}

execute().catch(console.error)
