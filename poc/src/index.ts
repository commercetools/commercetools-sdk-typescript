import {
  createLoggerMiddleware,
  createRetryMiddleware,
  createHttpMiddleware,
  createQueueMiddleware,
  createUserAgentMiddleware,
  createCorrelationIdMiddleware,

  // createAuthMiddlewareForPasswordFlow,
  // createAuthMiddlewareForAnonymousSessionFlow,

  createAuthMiddlewareForClientCredentialsFlow
} from './middleware'

// import axios from 'axios'
import { Agent } from 'https'
import fetch from 'node-fetch'

import { logger, generate } from './utils'
import { createClient } from './client'
import { IClientOptions } from './types/types'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'

const httpsAgent = new Agent({
  keepAlive: true,
  maxSockets: 100
})

function fetchWithAgent(url: string, fetchOptions: IClientOptions) {
  fetchOptions.httpsAgent = httpsAgent;
  fetchOptions.headers['x-app-name'] = 'new-agent'

  return fetch(url, fetchOptions)
}

const client = createClient({
  // this will come from the `ClientBuilder` class
  middlewares: [
    createCorrelationIdMiddleware({ generate }),
    createUserAgentMiddleware({}),
    createAuthMiddlewareForClientCredentialsFlow({
      host: 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey: 'demo-1',
      credentials: {
        clientId: process.env.CTP_CLIENT_ID,
        clientSecret: process.env.CTP_CLIENT_SECRET
      },
    }),
    // createAuthMiddlewareForAnonymousSessionFlow({
    //   host: 'https://auth.europe-west1.gcp.commercetools.com',
    //   projectKey: 'demo-1',
    //   credentials: {
    //     clientId: process.env.CTP_CLIENT_ID,
    //     clientSecret: process.env.CTP_CLIENT_SECRET,
    //     anonymousId: 'anonymouse-id-123'
    //   },
    // }),
    // createAuthMiddlewareForPasswordFlow({
    //   host: 'https://auth.europe-west1.gcp.commercetools.com',
    //   projectKey: 'demo-1',
    //   credentials: {
    //     clientId: process.env.CTP_CLIENT_ID,
    //     clientSecret: process.env.CTP_CLIENT_SECRET,
    //     user: {
    //       username: 'willy.wonka@commercetools.com',
    //       password: '*****'
    //     }
    //   },
    // }),
    createQueueMiddleware({ concurrency: 5 }),
    createLoggerMiddleware({ loggerFn: logger }),
    createRetryMiddleware({ enableRetry: true }),
    createHttpMiddleware({
      host: 'https://api.europe-west1.gcp.commercetools.com',
      // httpClient: fetch
      httpClient: fetchWithAgent
      // @ts-ignore
      // httpClient: (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
    }),
  ],
});

// ApiRoot
const apiRoot = createApiBuilderFromCtpClient(client)

function execute() {
  return apiRoot
    .withProjectKey({ projectKey: 'demo-1' })
    .get()
    .execute()
}

// execute().catch(error => console.error(error, '<<<--', JSON.stringify(error)))
execute().catch(() => null)
