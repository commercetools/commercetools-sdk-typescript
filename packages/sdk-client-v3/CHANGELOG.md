# @commercetools/ts-client

## 4.2.1

### Patch Changes

- [#1154](https://github.com/commercetools/commercetools-sdk-typescript/pull/1154) [`0a6ea36`](https://github.com/commercetools/commercetools-sdk-typescript/commit/0a6ea364b2acd57d5e517ca21511de5f77bca6f0) Thanks [@ajimae](https://github.com/ajimae)! - Add meta-headers to auth http requests

## 4.2.0

### Minor Changes

- [#1149](https://github.com/commercetools/commercetools-sdk-typescript/pull/1149) [`af65db6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/af65db6a26fb8d96c0edcccdf720a850c30f9888) Thanks [@ajimae](https://github.com/ajimae)! - add generic type to `execute` method

  ```diff
  - execute(request: ClientRequest): Promise<ClientResult>
  + execute<T extends object = any>(request: ClientRequest): Promise<ClientResult<T>>
  ```

## 4.1.0

### Minor Changes

- [#1129](https://github.com/commercetools/commercetools-sdk-typescript/pull/1129) [`7ccd784`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7ccd784e438235756545c425ddee4e2829b52fc0) Thanks [@ajimae](https://github.com/ajimae)! - Add custom `stringBodyContentTypes` to `HttpMiddlewareOptions`
  Sometimes we might want to `stringify` a request body before sending it over to
  server, this functionality allows the user to add custom `header` entries that
  forces the request body to be `stringified` before it's sent over to the backend.

## 4.0.1

### Patch Changes

- [#1131](https://github.com/commercetools/commercetools-sdk-typescript/pull/1131) [`0a08d42`](https://github.com/commercetools/commercetools-sdk-typescript/commit/0a08d42385a1aba20c413431cb176a68fd3c3eec) Thanks [@ajimae](https://github.com/ajimae)! - Add an `undefined` union type to tokenCache get method return type

  ```diff
  - get: (tokenCacheOptions?: TokenCacheOptions) => Promise<TokenStore>
  + get: (tokenCacheOptions?: TokenCacheOptions) => Promise<TokenStore | undefined>
  ```

## 4.0.0

### Major Changes

- [#1126](https://github.com/commercetools/commercetools-sdk-typescript/pull/1126) [`98415e1`](https://github.com/commercetools/commercetools-sdk-typescript/commit/98415e159e68fc59d7fcdb11cd406e9995fa4430) Thanks [@ajimae](https://github.com/ajimae)! - Add support for async token cache stores

## 3.4.1

### Patch Changes

- [#1080](https://github.com/commercetools/commercetools-sdk-typescript/pull/1080) [`2a458b3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2a458b348a705f4a63befb04bd2680de45fe1c13) Thanks [@bartschriever](https://github.com/bartschriever)! - **Bug Fix**

  Fixed a potential undefined error in the correlation ID middleware by adding optional chaining when checking for the custom generate function. This prevents the middleware from throwing an error when options are not provided.

## 3.4.0

### Minor Changes

- [#1074](https://github.com/commercetools/commercetools-sdk-typescript/pull/1074) [`7aabe1f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7aabe1f5e5d74682d2e95a18db0a1bb6c3ed69ed) Thanks [@ajimae](https://github.com/ajimae)! - new sdk release

## 3.3.1

### Patch Changes

- [#1066](https://github.com/commercetools/commercetools-sdk-typescript/pull/1066) [`3d61678`](https://github.com/commercetools/commercetools-sdk-typescript/commit/3d61678549f5a77690b330fac0b28012acbfbfb0) Thanks [@ajimae](https://github.com/ajimae)! - Improve typescript types definitions

## 3.3.0

### Minor Changes

- [#1044](https://github.com/commercetools/commercetools-sdk-typescript/pull/1044) [`29967a3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/29967a3e5957bd2fc35d90ad95d8e8f2917565e4) Thanks [@ajimae](https://github.com/ajimae)! - add error handler middleware

## 3.2.2

### Patch Changes

- [#1011](https://github.com/commercetools/commercetools-sdk-typescript/pull/1011) [`008f9df`](https://github.com/commercetools/commercetools-sdk-typescript/commit/008f9dfa4fd9ad82c9cdfe90ac4235389d6182b1) Thanks [@ajimae](https://github.com/ajimae)! - Fix typographical error in client user agent

## 3.2.1

### Patch Changes

- [#1009](https://github.com/commercetools/commercetools-sdk-typescript/pull/1009) [`7473c1c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7473c1cf55532db04cf1b67536f5680bee8afcae) Thanks [@ajimae](https://github.com/ajimae)! - Fix issue with user-agents in `unknown` environments e.g react-native

## 3.2.0

### Minor Changes

- [#950](https://github.com/commercetools/commercetools-sdk-typescript/pull/950) [`e5d107d`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e5d107df12aed11cf9486e9da976330b5664fe25) Thanks [@ajimae](https://github.com/ajimae)! - Add retry for 401 errors

## 3.1.1

### Patch Changes

- [#961](https://github.com/commercetools/commercetools-sdk-typescript/pull/961) [`28f0578`](https://github.com/commercetools/commercetools-sdk-typescript/commit/28f057841fcfd26b30ff41167dc88ada3c143371) Thanks [@ajimae](https://github.com/ajimae)! - Release changes for type modification

## 3.1.0

### Minor Changes

- [#936](https://github.com/commercetools/commercetools-sdk-typescript/pull/936) [`f702837`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f702837c3ec7fde11641c94abb5ed4dab138acf9) Thanks [@barbara79](https://github.com/barbara79)! - updated documentation with client v3

### Patch Changes

- [#924](https://github.com/commercetools/commercetools-sdk-typescript/pull/924) [`e002f9d`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e002f9d643d5fe59b00f7057a1e13dd6a039339a) Thanks [@ajimae](https://github.com/ajimae)! - map returned error code field to commercetools error response code

## 3.0.4

### Patch Changes

- [#922](https://github.com/commercetools/commercetools-sdk-typescript/pull/922) [`f59576b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f59576b1d23a85e5bcfea8360e8bfc641cbcdc87) Thanks [@ajimae](https://github.com/ajimae)! - Fix issues with non ascii encoded string length

## 3.0.3

### Patch Changes

- [#920](https://github.com/commercetools/commercetools-sdk-typescript/pull/920) [`9e7987d`](https://github.com/commercetools/commercetools-sdk-typescript/commit/9e7987dc70ece91ce372acdc41864ada789cec16) Thanks [@ajimae](https://github.com/ajimae)! - Remove the `Accept-Encoding` http header entry

## 3.0.2

### Patch Changes

- [#914](https://github.com/commercetools/commercetools-sdk-typescript/pull/914) [`1dfdf4b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1dfdf4bceb41d26d69d3d45a083e15911bb36ce8) Thanks [@ajimae](https://github.com/ajimae)! - Fix issue with response serialization

## 3.0.1

### Patch Changes

- [#902](https://github.com/commercetools/commercetools-sdk-typescript/pull/902) [`a08c782`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a08c78267518c5010940a1f0887319225c8beb6d) Thanks [@ajimae](https://github.com/ajimae)! - remove buffer module and replace with js native String.normalize function

- [#841](https://github.com/commercetools/commercetools-sdk-typescript/pull/841) [`626c403`](https://github.com/commercetools/commercetools-sdk-typescript/commit/626c4035544c804db96a6e5f1c63f6ea9073c649) Thanks [@ajimae](https://github.com/ajimae)! - Improve README.md file

## 3.0.0

### Major Changes

- [#896](https://github.com/commercetools/commercetools-sdk-typescript/pull/896) [`f9b8cb6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f9b8cb605d99fe5ece13bdc3c152eb4818e19b3b) Thanks [@lojzatran](https://github.com/lojzatran)! - Remove support of nodejs 16

## 2.1.7

### Patch Changes

- [#887](https://github.com/commercetools/commercetools-sdk-typescript/pull/887) [`3ee183a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/3ee183a3329012b4bcfe6eb7a6b0044232bbdb5d) Thanks [@lojzatran](https://github.com/lojzatran)! - fix(SUPPORT-30038): clone deep the request object

## 2.1.6

### Patch Changes

- [#884](https://github.com/commercetools/commercetools-sdk-typescript/pull/884) [`3bfcd2e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/3bfcd2e5bae47499bb1694f594bf01d6caa190a2) Thanks [@ajimae](https://github.com/ajimae)! - [Fix][DEVX-514] Fix v3 AbortController Retry Reinitialization

## 2.1.5

### Patch Changes

- [#864](https://github.com/commercetools/commercetools-sdk-typescript/pull/864) [`2d622a1`](https://github.com/commercetools/commercetools-sdk-typescript/commit/2d622a144cc3d3d8d30129af863cde013a0d6102) Thanks [@ajimae](https://github.com/ajimae)! - Fix issue with sdk-client-v3 returning undefined body on error

## 2.1.4

### Patch Changes

- [#869](https://github.com/commercetools/commercetools-sdk-typescript/pull/869) [`c41025e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c41025ed47a83b60d7cd7dc69121fb965bb66c24) Thanks [@barbara79](https://github.com/barbara79)! - fix client v3: make httpClient optional

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
