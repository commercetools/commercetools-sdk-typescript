import createAuthMiddlewareForPasswordFlow from './password-flow'
import createAuthMiddlewareForAnonymousSessionFlow from './anonymous-session-flow'
import createAuthMiddlewareForClientCredentialsFlow from './client-credentials-flow'
import createAuthMiddlewareForRefreshTokenFlow from './refresh-token-flow'
import createAuthMiddlewareForExistingTokenFlow from './existing-token-flow'

export {
  createAuthMiddlewareForPasswordFlow,
  createAuthMiddlewareForAnonymousSessionFlow,
  createAuthMiddlewareForClientCredentialsFlow,
  createAuthMiddlewareForRefreshTokenFlow,
  createAuthMiddlewareForExistingTokenFlow
}
