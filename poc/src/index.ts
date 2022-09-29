import {
  createLoggerMiddleware,
  createRetryMiddleware,
  createHttpMiddleware,
  createQueueMiddleware,
  createUserAgentMiddleware,
  createCorrelationIdMiddleware,
  createAuthMiddlewareForAnonymousSessionFlow,
  createAuthMiddlewareForClientCredentialsFlow
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
    // createAuthMiddlewareForClientCredentialsFlow({
    //   host: 'https://auth.europe-west1.gcp.commercetools.com',
    //   projectKey: 'demo-1',
    //   credentials: {
    //     clientId: process.env.CTP_CLIENT_ID,
    //     clientSecret: process.env.CTP_CLIENT_SECRET
    //   },
    // }),
    createAuthMiddlewareForAnonymousSessionFlow({
      host: 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey: 'demo-1',
      credentials: {
        clientId: process.env.CTP_CLIENT_ID,
        clientSecret: process.env.CTP_CLIENT_SECRET,
        anonymousId: 'anonymouse-id-123'
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

execute().catch(error => console.error(error, '<<<--', JSON.stringify(error)))
