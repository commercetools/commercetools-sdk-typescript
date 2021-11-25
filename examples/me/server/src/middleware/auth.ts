import fetch from 'node-fetch'
import Auth, { TokenProvider } from '../utils/auth'
import { decrypt } from '../utils/helper'

const config = {
  host: 'https://auth.commercetools.com',
  projectKey: process.env.CTP_PROJECT_KEY,
  credentials: {
    clientId: process.env.CTP_CLIENT_ID,
    clientSecret: process.env.CTP_CLIENT_SECRET,
  },
  fetch,
}

export async function isAuthenticated(req, res, next): Promise<void> {
  // decode token here before passing
  let { token } = req.headers
  token = token === 'null' || !token ? token : decrypt(token)
  const isExpired = TokenProvider._isTokenExpired(token)

  if (!isExpired) {
    req.headers.token = token
    return next()
  }

  const tokenProvider = new TokenProvider(
    {
      sdkAuth: new Auth(config),
      fetchTokenInfo: (sdkAuth) => sdkAuth.anonymousFlow(),
    },
    token
  )

  req.headers.token = await tokenProvider.getTokenInfo()
  next()
}

export async function authenticateUser(req, res, next) {
  let { token, anonymousid: anonymousId } = req.headers

  res.locals.credentials = {
    ...req.header,
    anonymousId,
    token,
  }

  const { email: username, password } = req.body
  const tokenProvider = new TokenProvider(
    {
      sdkAuth: new Auth(config),
      fetchTokenInfo: (sdkAuth) =>
        sdkAuth.customerPasswordFlow({ username, password }),
    },
    token
  )

  req.headers.token = await tokenProvider.getTokenInfo()
  next()
}

export async function invalidateToken(req, res, next) {
  let { token } = req.headers
  token = token === 'null' || !token ? token : decrypt(token)
  const isExpired = TokenProvider._isTokenExpired(token)

  const tokenProvider = new TokenProvider(
    {
      sdkAuth: new Auth(config),
      fetchTokenInfo: (sdkAuth) => sdkAuth.anonymousFlow(),
    },
    token
  )

  if (!isExpired) {
    req.headers.token = null
    if (req.locals.credentials) req.locals.credentials = null
    tokenProvider.invalidateTokenInfo()

    return next()
  }

  tokenProvider.invalidateTokenInfo()
  next()
}
