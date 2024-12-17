require('dotenv').config()
const { ClientBuilder } = require('@commercetools/ts-client')
const { createApiBuilderFromCtpClient } = require('@commercetools/platform-sdk')
const fetch = require('node-fetch')

const projectKey = process.env.CTP_PROJECT_KEY
const authMiddlewaredOptions = {
  projectKey,
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  credentials: {
    clientId: process.env.CTP_CLIENT_ID,
    clientSecret: process.env.CTP_CLIENT_SECRET,
  },
  scopes: [`manage_project:${projectKey}`], // feel free to use your own scopes
  httpClient: fetch,
}

const httpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  httpClient: fetch,
}

exports.getApiRoot = function getApiRoot(includeConcurrentMiddleware = false) {
  let client
  if (includeConcurrentMiddleware) {
    client = new ClientBuilder()
      .withProjectKey(projectKey)
      .withAnonymousSessionFlow(authMiddlewaredOptions)
      .withHttpMiddleware(httpMiddlewareOptions)
      .withConcurrentModificationMiddleware()
      .build()
  } else {
    client = new ClientBuilder()
      .withProjectKey(projectKey)
      .withAnonymousSessionFlow(authMiddlewaredOptions)
      .withHttpMiddleware(httpMiddlewareOptions)
      .withAfterExecutionMiddleware({
        middleware: (opts) => {
          return (next) => {
            return (req) => {
              return next(req)
            }
          }
        },
      })
      .build()
  }

  return createApiBuilderFromCtpClient(client).withProjectKey({
    projectKey,
  })
}
