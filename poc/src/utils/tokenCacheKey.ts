import { AuthMiddlewareOptions, TokenCacheOptions } from '../types/types'

export default function buildTokenCacheKey(
  options: AuthMiddlewareOptions
): TokenCacheOptions {
  return {
    clientId: options.credentials.clientId,
    host: options.host,
    projectKey: options.projectKey,
  }
}
