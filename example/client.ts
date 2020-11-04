import * as dotenv from "dotenv"

import { createClient } from '@commercetools/sdk-client'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createLoggerMiddleware } from '@commercetools/sdk-middleware-logger'
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createUserAgentMiddleware } from '@commercetools/sdk-middleware-user-agent'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import { createCorrelationIdMiddleware } from '@commercetools/sdk-middleware-correlation-id'

dotenv.config({path:'.env'})

const maxRetries: number = process.env.CTP_MAX_RETRIES ? +process.env.CTP_MAX_RETRIES : 5
const retryDelay = process.env.CTP_RETRY_DELAY ? +process.env.CTP_RETRY_DELAY : 250
const maxRetryDelay = process.env.CTP_MAX_RETRY_DELAY ? +process.env.CTP_MAX_RETRY_DELAY : 60000

export function client(projectKey) {
    const scopes = [
      `manage_products:${projectKey}`
    ]
    const newClient = createClient({
      middlewares: [
        createAuthMiddlewareForClientCredentialsFlow({
          host:
          process.env.CTP_AUTH_URL ?? 'https://auth.europe-west1.gcp.commercetools.com',
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
          // createCorrelationIdMiddleware({
          //   optionally you can generate unique operation id here.
          // }),
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
        // createLoggerMiddleware({

        // }),
      ],
    })
    return newClient
}

export const ctpApi = (projectKey: string) =>
  createApiBuilderFromCtpClient(client(projectKey)).withProjectKey({
    projectKey,
  })
