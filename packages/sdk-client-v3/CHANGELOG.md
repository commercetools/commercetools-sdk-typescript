# @commercetools/ts-client

## 2.1.3

### Patch Changes

- [#860](https://github.com/commercetools/commercetools-sdk-typescript/pull/860) [`878aacc`](https://github.com/commercetools/commercetools-sdk-typescript/commit/878aacc187bdd1f3e43ab545d8d2ed43c5f61586) Thanks [@ajimae](https://github.com/ajimae)! - delay first retry attempt by the provided retryDelay

## 2.1.2

### Patch Changes

- [#848](https://github.com/commercetools/commercetools-sdk-typescript/pull/848) [`39c5298`](https://github.com/commercetools/commercetools-sdk-typescript/commit/39c5298c8b6abb71bce47ef437e6e7359c3e8195) Thanks [@ajimae](https://github.com/ajimae)! - - add `httpClientOptions` to all supported `authMiddlewareOption` and `httpMiddlewareOptions`
  - add options used for configuring the behaviour of the supported `httpClients` (fetch and axios)

## 2.1.1

### Patch Changes

- [#835](https://github.com/commercetools/commercetools-sdk-typescript/pull/835) [`b2c62ba`](https://github.com/commercetools/commercetools-sdk-typescript/commit/b2c62ba105b7fb9fe2eb6a4ae1b95c8d5b67d428) Thanks [@ajimae](https://github.com/ajimae)! - Fix issues with counting special characters' length

## 2.1.0

### Minor Changes

- [#814](https://github.com/commercetools/commercetools-sdk-typescript/pull/814) [`57a16d7`](https://github.com/commercetools/commercetools-sdk-typescript/commit/57a16d75ded60923bf080ef2270c3396fe8bc0e5) Thanks [@ajimae](https://github.com/ajimae)! - Restructure middleware logic

## 2.0.5

### Patch Changes

- [#807](https://github.com/commercetools/commercetools-sdk-typescript/pull/807) [`dfbe4ce`](https://github.com/commercetools/commercetools-sdk-typescript/commit/dfbe4cec72156668055cd73a05d03abc59749168) Thanks [@ajimae](https://github.com/ajimae)! - Fix concurrency issues in TypeScript v3 SDK

## 2.0.4

### Patch Changes

- [#803](https://github.com/commercetools/commercetools-sdk-typescript/pull/803) [`94a35e7`](https://github.com/commercetools/commercetools-sdk-typescript/commit/94a35e78924ce63df8727d95ddfaed071cd90140) Thanks [@ajimae](https://github.com/ajimae)! - Fix type error in executor function headers options

## 2.0.3

### Patch Changes

- [#782](https://github.com/commercetools/commercetools-sdk-typescript/pull/782) [`238e99a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/238e99a3600886c71db4770c128bfff6f37347a8) Thanks [@ajimae](https://github.com/ajimae)! - Fix error when retrying due to redacted oauth token.

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
