import * as dotenv from "dotenv";

import { createClient } from '@commercetools/sdk-client'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createLoggerMiddleware } from '@commercetools/sdk-middleware-logger'
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import * as NodeCache from 'node-cache'
import { v4 } from 'uuid'
import { createUserAgentMiddleware } from '@commercetools/sdk-middleware-user-agent'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import { createCorrelationIdMiddleware } from '@commercetools/sdk-middleware-correlation-id'
const SECS_PER_H = 60 * 60

const clientCache = new NodeCache({ stdTTL: 1 * SECS_PER_H, useClones: false })

dotenv.config({path:'.env'});

const maxRetries: number = process.env.CTP_MAX_RETRIES ? +process.env.CTP_MAX_RETRIES : 5
const retryDelay = process.env.CTP_RETRY_DELAY ? +process.env.CTP_RETRY_DELAY : 250
const maxRetryDelay = process.env.CTP_MAX_RETRY_DELAY ? +process.env.CTP_MAX_RETRY_DELAY : 60000

export function client(projectKey) {
  
  const cachedClient = clientCache.get(projectKey)
  if (cachedClient === undefined) {
    const privilegedApiClient = process.env.PRIVILEGED_API_CLIENT === 'true'
    const oauthUri = privilegedApiClient ? '/oauth/internal/token' : undefined
    const scopes = [
      `manage_products:${projectKey}`
    ]
    const newClient = createClient({
      middlewares: [
        createAuthMiddlewareForClientCredentialsFlow({
          host:
          process.env.CTP_AUTH_URL ?? 'https://auth.europe-west1.gcp.commercetools.com',
          oauthUri,
          projectKey,
          scopes,
          credentials: {
            clientId: process.env.CTP_CLIENT_ID,
            clientSecret: process.env.CTP_CLIENT_SECRET,
          },
          // Optional if not globally available
          fetch,
        }),
        createUserAgentMiddleware({
            libraryName: 'my-awesome-library',
            libraryVersion: '1.0.0',
            contactUrl: 'https://github.com/commercetools/my-awesome-library',
            contactEmail: 'support@commercetools.com'
          }),
          createCorrelationIdMiddleware({
            generate: () => `prefix/${v4()}`
          }),
        createHttpMiddleware({
          host: process.env.CTP_API_URL ?? 'https://api.europe-west1.gcp.commercetools.com',
          includeResponseHeaders: true,
          includeOriginalRequest: false,
          maskSensitiveHeaderData: true,
          enableRetry: true,
          retryConfig: {
            maxRetries,
            retryDelay,
            maxDelay: maxRetryDelay,
          },
          fetch
        }),
        // Log the request / response after it's being handled by the http-middleware
        createLoggerMiddleware({

        }),
      ],
    })
    clientCache.set(projectKey, newClient)
    return newClient
  }
  return cachedClient
}

export const ctpApi = (projectKey: string) =>
  createApiBuilderFromCtpClient(client(projectKey)).withProjectKey({
    projectKey,
  })
