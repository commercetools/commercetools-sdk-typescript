import {
  IBuiltRequestParams,
  AuthMiddlewareOptions,
  RefreshAuthMiddlewareOptions,
} from '../../types/types'
import { Buffer } from 'buffer/'

/**
 *
 * @param {AuthMiddlewareOptions} options
 * @returns { IBuiltRequestParams } *
 */
export function buildRequestForClientCredentialsFlow(
  options: AuthMiddlewareOptions
): IBuiltRequestParams {
  // Validate options
  if (!options) throw new Error('Missing required options')
  if (!options.host) throw new Error('Missing required option (host)')
  if (!options.projectKey)
    throw new Error('Missing required option (projectKey)')
  if (!options.credentials)
    throw new Error('Missing required option (credentials)')

  const { clientId, clientSecret } = options.credentials
  if (!(clientId && clientSecret))
    throw new Error('Missing required credentials (clientId, clientSecret)')

  const scope = options.scopes ? options.scopes.join(' ') : undefined
  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    'base64'
  )
  // This is mostly useful for internal testing purposes to be able to check
  // other oauth endpoints.
  const oauthUri = options.oauthUri || '/oauth/token'
  const url = options.host.replace(/\/$/, '') + oauthUri
  const body = `grant_type=client_credentials${scope ? `&scope=${scope}` : ''}`

  return {
    url,
    body,
    basicAuth,
  }
}

/**
 *
 * @param {AuthMiddlewareOptions} options
 * @returns {IBuiltRequestParams} *
 */
export function buildRequestForAnonymousSessionFlow(
  options: AuthMiddlewareOptions
): IBuiltRequestParams {
  if (!options) throw new Error('Missing required options')
  if (!options.projectKey)
    throw new Error('Missing required option (projectKey)')

  const projectKey = options.projectKey
  options.oauthUri = options.oauthUri || `/oauth/${projectKey}/anonymous/token`
  const result = buildRequestForClientCredentialsFlow(options)

  if (options.credentials.anonymousId)
    result.body += `&anonymous_id=${options.credentials.anonymousId}`

  return {
    ...result,
  }
}

/**
 *
 * @param {RefreshAuthMiddlewareOptions} options
 * @returns {IBuiltRequestParams}
 */
export function buildRequestForRefreshTokenFlow(
  options: RefreshAuthMiddlewareOptions
): IBuiltRequestParams {
  if (!options) throw new Error('Missing required options')

  if (!options.host) throw new Error('Missing required option (host)')

  if (!options.projectKey)
    throw new Error('Missing required option (projectKey)')

  if (!options.credentials)
    throw new Error('Missing required option (credentials)')

  if (!options.refreshToken)
    throw new Error('Missing required option (refreshToken)')

  const { clientId, clientSecret } = options.credentials

  if (!(clientId && clientSecret))
    throw new Error('Missing required credentials (clientId, clientSecret)')

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    'base64'
  )
  // This is mostly useful for internal testing purposes to be able to check
  // other oauth endpoints.
  const oauthUri = options.oauthUri || '/oauth/token'
  const url = options.host.replace(/\/$/, '') + oauthUri
  const body = `grant_type=refresh_token&refresh_token=${encodeURIComponent(
    options.refreshToken
  )}`

  return { basicAuth, url, body }
}
