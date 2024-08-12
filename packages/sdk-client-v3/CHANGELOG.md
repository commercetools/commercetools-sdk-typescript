# @commercetools/ts-client

## 2.0.2

### Patch Changes

- [#777](https://github.com/commercetools/commercetools-sdk-typescript/pull/777) [`38c7035`](https://github.com/commercetools/commercetools-sdk-typescript/commit/38c703557964a2355c4419b0bf8f0ea0a6361ce5) Thanks [@lojzatran](https://github.com/lojzatran)! - Bug fixes for @commercetools/ts-client

## 2.0.1

### Patch Changes

- [#767](https://github.com/commercetools/commercetools-sdk-typescript/pull/767) [`d82a9e0`](https://github.com/commercetools/commercetools-sdk-typescript/commit/d82a9e0e6666e076183172a9229ffcda8e28905a) Thanks [@ajimae](https://github.com/ajimae)! - Fix issues with request state not being reset back to default on error when fetching token.

## 2.0.0

### Major Changes

- [#708](https://github.com/commercetools/commercetools-sdk-typescript/pull/708) [`e7e5ac7`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e7e5ac73de07a8ce141ec0bc2b2abf492462ec73) Thanks [@lojzatran](https://github.com/lojzatran)! - Make ts-sdk-v3 consistent with v2

## 1.2.1

### Patch Changes

- [#684](https://github.com/commercetools/commercetools-sdk-typescript/pull/684) [`a1b43c0`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a1b43c048fac3eba3d53470314b61d36e74f0a51) Thanks [@ajimae](https://github.com/ajimae)! - Fix bug 'Error not throw' for sdk-client-v3

## 1.2.0

### Minor Changes

- [#645](https://github.com/commercetools/commercetools-sdk-typescript/pull/645) [`bfbdfe6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/bfbdfe65042f2b8d011d40859c9542666187dd22) Thanks [@lojzatran](https://github.com/lojzatran)! - Add Datadog APM to SDK

## 1.1.1

### Patch Changes

- [#620](https://github.com/commercetools/commercetools-sdk-typescript/pull/620) [`f0028a3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f0028a343fe3417bbc3caeb76cc6658a5d7bff73) Thanks [@lojzatran](https://github.com/lojzatran)! - Fix issue with concurrent modification middleware functionality.

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
