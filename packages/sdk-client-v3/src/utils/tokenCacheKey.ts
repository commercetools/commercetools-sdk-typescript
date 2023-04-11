import { AuthMiddlewareOptions, TokenCacheOptions } from '../types/types'

export default function buildTokenCacheKey(
  options: AuthMiddlewareOptions
): TokenCacheOptions {
  if (!options?.credentials?.clientId || !options.projectKey || !options.host)
    throw new Error('Missing required options.')

  return {
    clientId: options.credentials.clientId,
    host: options.host,
    projectKey: options.projectKey,
  }
}
