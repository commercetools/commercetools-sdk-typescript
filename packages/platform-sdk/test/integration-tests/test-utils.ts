import { ClientBuilder } from '@commercetools/sdk-client-v2'
import {
  HttpMiddlewareOptions,
  TokenCache,
  TokenStore,
  TokenCacheOptions,
} from '@commercetools/ts-client'
import { createApiBuilderFromCtpClient } from '../../src'
import { requireEnvVar } from '../helpers/test-utils'
const fetch = require('node-fetch')

export const projectKey = requireEnvVar('CTP_PROJECT_KEY')
const clientId = requireEnvVar('CTP_CLIENT_ID')
const clientSecret = requireEnvVar('CTP_CLIENT_SECRET')
const authURL = requireEnvVar('CTP_AUTH_URL')
const ctp_host = requireEnvVar('CTP_API_URL')

export const SORT_ORDER = parseFloat(Math.random().toFixed(5)).toString()

function _tokenCache<T, V, S = TokenCacheOptions>(val: T): V {
  let initialVal = val
  return {
    get(TokenCacheOption?: S) {
      return initialVal
    },
    set(value: T, TokenCacheOption?: S) {
      initialVal = value
    },
  } as V
}

const tokenCache = _tokenCache<TokenStore, TokenCache>({
  token: '',
  expirationTime: -1,
})

const httpMiddlewareOptions = {
  host: ctp_host,
  fetch,
}

export const httpMiddlewareOptionsV3: HttpMiddlewareOptions = {
  host: ctp_host,
  httpClient: fetch,
}

export const authMiddlewareOptions = {
  host: authURL,
  projectKey,
  credentials: {
    clientId: clientId,
    clientSecret: clientSecret,
  },
  tokenCache,
  scopes: [`manage_project:${projectKey}`],
  fetch,
}

export const authMiddlewareOptionsV3 = {
  host: authURL,
  projectKey,
  credentials: {
    clientId: clientId,
    clientSecret: clientSecret,
  },
  tokenCache,
  scopes: [`manage_project:${projectKey}`],
  httpClient: fetch,
}

const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  // .withLoggerMiddleware()
  .build()

export const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey,
})
