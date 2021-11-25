import {
  createAuthForPasswordFlow,
  createAuthWithExistingToken,
  createAuthForAnonymousSessionFlow,
} from '@commercetools/sdk-client-v2'
import fetch from 'node-fetch'

export function getOptions(headers = null) {
  let authMiddleware
  let { token } = headers

  if (token?.access_token) {
    authMiddleware = createAuthWithExistingToken(
      `Bearer ${token.access_token}`,
      { force: true }
    )
  } else {
    authMiddleware = createAuthForAnonymousSessionFlow({
      host: 'https://auth.commercetools.com',
      projectKey: process.env.CTP_PROJECT_KEY || '',
      credentials: {
        clientId: process.env.CTP_CLIENT_ID || '',
        clientSecret: process.env.CTP_CLIENT_SECRET || '',
      },
      scopes: [`manage_project:${process.env.CTP_PROJECT_KEY}`],
      fetch,
    })
  }

  // return option
  return {
    authMiddleware,
    projectKey: process.env.CTP_PROJECT_KEY,
    httpMiddlewareOptions: {
      host: 'https://api.europe-west1.gcp.commercetools.com',
      fetch,
    },
  }
}

export function getUserOptions(credentials) {
  const authMiddleware = createAuthForPasswordFlow({
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey: process.env.CTP_PROJECT_KEY,
    credentials: {
      clientId: process.env.CTP_CLIENT_ID || '',
      clientSecret: process.env.CTP_CLIENT_SECRET || '',
      user: {
        ...credentials,
      },
    },
    scopes: [`manage_project:${process.env.CTP_PROJECT_KEY}`],
    fetch,
  })

  return {
    authMiddleware,
    projectKey: process.env.CTP_PROJECT_KEY,
    httpMiddlewareOptions: {
      host: 'https://api.europe-west1.gcp.commercetools.com',
      fetch,
    },
  }
}
