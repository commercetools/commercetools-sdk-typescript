// clients
export { default as createClient } from './sdk-client/client'
export { default as getErrorByCode } from './sdk-client/errors'
export * as errors from './sdk-client/errors'

// auth
export { default as createAuthForClientCredentialsFlow } from './sdk-middleware-auth/client-credentials-flow'
export { default as createAuthForPasswordFlow } from './sdk-middleware-auth/password-flow'
export { default as createAuthForRefreshTokenFlow } from './sdk-middleware-auth/refresh-token-flow'
export { default as createAuthForAnonymousSessionFlow } from './sdk-middleware-auth/anonymous-session-flow'
export { default as createAuthWithExistingToken } from './sdk-middleware-auth/existing-token'
// http
export { default as createHttpClient } from './sdk-middleware-http/http'

// platfrom sdk
// @ts-ignore
// export { createApiBuilderFromCtpClient } from '../../platform-sdk/src/index' // import directly from project structure.
// export { createApiBuilderFromCtpClient } from '@commercetools/typescript-sdk'
export { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
export { default as ApiRootBuilder } from './builder/ApiRootBuilder';
