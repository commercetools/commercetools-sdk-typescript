# @commercetools/ts-client

## 1.1.0

### Minor Changes

- [#478](https://github.com/commercetools/commercetools-sdk-typescript/pull/478) [`98c6bac`](https://github.com/commercetools/commercetools-sdk-typescript/commit/98c6bace1608889c16373e1a83451cf5d7a7d140) Thanks [@ajimae](https://github.com/ajimae)! - remove all remaining `querystring` package instances.

## 1.0.0

### Major Changes

- [#434](https://github.com/commercetools/commercetools-sdk-typescript/pull/434) [`ea0a6c6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/ea0a6c6008ffc6d89608039eabf69d16b37d288a) Thanks [@ajimae](https://github.com/ajimae)! - Introduce the new typescript client package with the following eatures and middleware
  - [x] add client and middleware composer
  - [x] add http-middleware
  - [x] add error-middleware
  - [x] add logger-middleware
  - [x] add auth-middleware
    - [x] add with-client-credentials-flow
    - [x] add with-anonymous-session-flow
    - [x] add with-password-flow
    - [x] add with-refresh-token-flow
    - [x] add with-existing-token-flow
    - [x] add token cache
  - [x] add retry-middleware
  - [x] add correlation-id-middleware
  - [x] add queue-middleware
  - [x] add user-agent-middleware
  - [x] add concurrent-modification-middleware
  - [x] add axios and node-fetch support
