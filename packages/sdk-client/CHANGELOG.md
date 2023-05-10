# @commercetools/sdk-client-v2

## 2.2.0

### Minor Changes

- [#458](https://github.com/commercetools/commercetools-sdk-typescript/pull/458) [`c2bf0a5`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c2bf0a5cac18fdcf181dacc8c6714eb760704523) Thanks [@ajimae](https://github.com/ajimae)! - Introduce (newrelic) application performance monitoring

- [#458](https://github.com/commercetools/commercetools-sdk-typescript/pull/458) [`c2bf0a5`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c2bf0a5cac18fdcf181dacc8c6714eb760704523) Thanks [@ajimae](https://github.com/ajimae)! - - add newrelic `APM` (application performance monitoring) to the sdk
  - add `withTelemetryMiddleware()` middleware creator method to ClientBuilder class
  - add basic `newrelic` application configuration module
  - add examples to repository example folder to demonstrate how this feature can be used

## 2.1.6

### Patch Changes

- [#453](https://github.com/commercetools/commercetools-sdk-typescript/pull/453) [`a83e653`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a83e653c986e50f31f71546edc721263d29990b5) Thanks [@ajimae](https://github.com/ajimae)! - - Remove all `querystring` dependency
  - Add qs dependency to requiring package
  - Refactor code to accommodate new implementation

## 2.1.5

### Patch Changes

- [#438](https://github.com/commercetools/commercetools-sdk-typescript/pull/438) [`057e260`](https://github.com/commercetools/commercetools-sdk-typescript/commit/057e260b3330b7ab8df33171bb2d4aa2de0444d9) Thanks [@upperwalker](https://github.com/upperwalker)! - - Handle node-fetch text parse error in sdk client http middleware
  - Adds `catch block` to prevent unhandled promise rejection on parsing response text

## 2.1.4

### Patch Changes

- [#428](https://github.com/commercetools/commercetools-sdk-typescript/pull/428) [`8b4ad04`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8b4ad04e9a43a8b399fa946ab6693500a4af3fb5) Thanks [@ajimae](https://github.com/ajimae)! - fix 415 error when uploading files using this SDK.

## 2.1.3

### Patch Changes

- [#423](https://github.com/commercetools/commercetools-sdk-typescript/pull/423) [`4c87f46`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4c87f46c811788543ee2b3b6d7f70e221e05c07e) Thanks [@ajimae](https://github.com/ajimae)! - Change all instances of `require` to `import`

## 2.1.2

### Patch Changes

- [#415](https://github.com/commercetools/commercetools-sdk-typescript/pull/415) [`caca661`](https://github.com/commercetools/commercetools-sdk-typescript/commit/caca661ff4c91cf256b6ee406135a45478b7ae47) Thanks [@ajimae](https://github.com/ajimae)! - fix uri `notfound error` for 404 error when `includeRequestInErrorResponse` is set to false.

## 2.1.1

### Patch Changes

- [#390](https://github.com/commercetools/commercetools-sdk-typescript/pull/390) [`98d2d7c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/98d2d7ce2abad1d8eb3466f4f3df1b877f144920) Thanks [@barbara79](https://github.com/barbara79)! - chore: add user agent in the client setting

## 2.1.0

### Minor Changes

- [#361](https://github.com/commercetools/commercetools-sdk-typescript/pull/361) [`8cd7b08`](https://github.com/commercetools/commercetools-sdk-typescript/commit/8cd7b08a78e13a886ed2271f6807358380b22ab2) Thanks [@mh-flink](https://github.com/mh-flink)! - Introduce retryOnAbort option to allow retry on timeouts

### Patch Changes

- [#360](https://github.com/commercetools/commercetools-sdk-typescript/pull/360) [`fe5109c`](https://github.com/commercetools/commercetools-sdk-typescript/commit/fe5109c58c17e150e3a8fa953b829b2875cd9f96) Thanks [@ajimae](https://github.com/ajimae)! - Fix (store): add proper generic type for store function

## 2.0.2

### Patch Changes

- [#355](https://github.com/commercetools/commercetools-sdk-typescript/pull/355) [`0db2947`](https://github.com/commercetools/commercetools-sdk-typescript/commit/0db2947dfe0629f833d7c101e9ec78e3a960f999) Thanks [@ajimae](https://github.com/ajimae)! - fix SDK to accept custom tokenCache store
  allow anonymous auth flow to accept custom tokenCache store
  fix refresh token flow and password flow to accept custom tokenCache store also

## 2.0.1

### Patch Changes

- [#347](https://github.com/commercetools/commercetools-sdk-typescript/pull/347) [`f0e84dd`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f0e84ddb2e34b908385a380175c6da596db6817a) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

  Add `quotes()` method for the `My Quote endpoint`

  - [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-17ea32dc184ca17b337fbf5e126f27f16651feadc9c879fae88db2580537cf8eR142)

  **Usage:**

  ```ts
  request: apiRoot
    .withProjectKey({ projectKey: 'test_projectKey' })
    .me()
    .quotes()
    .withId({ ID: 'test_ID' })
    .get({ queryArgs: { expand: 'expand' } }),
  ```

  Add `ByProjectKeyMeQuotesByIDRequestBuilder` class for `quotes-request` model

  - [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-a5bab13a41c9ece596cf0fcc545109385e16b6b1877755e58d8ec064125e2041R12)

  Add `ByProjectKeyMeQuotesKeyByKeyRequestBuilder` class for `quotes-request` model

  - [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-034feddaefb558f6391d5238391e177290d7f018904308b2884dfa016c81bc0dR12)

  Add `ByProjectKeyMeQuotesRequestBuilder` class for `quotes-request` model

  - [Diff Link](https://github.com/commercetools/commercetools-sdk-typescript/pull/347/files#diff-26e9b7a9cef621eaf88d81d1e2bb61858402450c444e1fe4d11bde5b51d22638R13)

## 2.0.0

### Major Changes

- [#341](https://github.com/commercetools/commercetools-sdk-typescript/pull/341) [`385682f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/385682fef6f0efa39a51570434d4d11789e0a220) Thanks [@ajimae](https://github.com/ajimae)! - Upgrade node versions to 14 and set engine to >= 14

## 1.4.2

### Patch Changes

- [#331](https://github.com/commercetools/commercetools-sdk-typescript/pull/331) [`007d9c6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/007d9c6e056c3286c0c521427576b2cc1df664b2) Thanks [@ajimae](https://github.com/ajimae)! - - Fix issues with buffer request body always being converted to json (`stringified`)
  - Abandon the static `Buffer.isBuffer()` method in favour of custom `isBuffer` function

## 1.4.1

### Patch Changes

- [#317](https://github.com/commercetools/commercetools-sdk-typescript/pull/317) [`d921acd`](https://github.com/commercetools/commercetools-sdk-typescript/commit/d921acda35dadf135dffb53419b8825c915477b1) Thanks [@ajimae](https://github.com/ajimae)! - Allow `sdk-client` to accept request headers with `application/graphql` content-type.

* [#311](https://github.com/commercetools/commercetools-sdk-typescript/pull/311) [`588a0f9`](https://github.com/commercetools/commercetools-sdk-typescript/commit/588a0f9b981a538a16a23a449e810c56956f352c) Thanks [@ajimae](https://github.com/ajimae)! - Change token fetch window from 2 hours to 5 minutes

- [#320](https://github.com/commercetools/commercetools-sdk-typescript/pull/320) [`7510e0b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7510e0bf69cc4b63c43d0431d338502d048524aa) Thanks [@JohnMarsden24](https://github.com/JohnMarsden24)! - fix: make options for `withExistingTokenFlow` method optional

## 1.4.0

### Minor Changes

- [#257](https://github.com/commercetools/commercetools-sdk-typescript/pull/257) [`facc47b`](https://github.com/commercetools/commercetools-sdk-typescript/commit/facc47ba50b00056adc232d7c75a2849cdcc6689) Thanks [@ajimae](https://github.com/ajimae)! - release latest sdk

### Patch Changes

- [#248](https://github.com/commercetools/commercetools-sdk-typescript/pull/248) [`7512c3f`](https://github.com/commercetools/commercetools-sdk-typescript/commit/7512c3f1f488645da3952f296d4f4fe3149b7fba) Thanks [@ajimae](https://github.com/ajimae)! - - add an option (`includeRequestInErrorResponse`) to include or exclude original request from error responses.

## 1.3.0

### Minor Changes

- [#241](https://github.com/commercetools/commercetools-sdk-typescript/pull/241) [`85f5be3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/85f5be349a9b0fa46539259981bfd8d5fc2ffdc6) Thanks [@ajimae](https://github.com/ajimae)! - Releasing the TS SDK with the following changelogs

  - added functionalities to extend client user agent
  - custom field added to OrderFromCardDraft

## 1.2.0

### Minor Changes

- [#211](https://github.com/commercetools/commercetools-sdk-typescript/pull/211) [`f3c1e3e`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f3c1e3ea0ca000b309eca1de6163c3ad065d526f) Thanks [@jherey](https://github.com/jherey)! - - Change Import Summaries `processingState` to `processingstate`.
  - Add `sort` to `ByProjectKeyShippingMethodsMatchingLocationRequestBuilder`.
  - New `MyCustomerResetPassword` model added to `ByProjectKeyMePasswordResetRequestBuilder` class.
  - Other changes are detailed here: https://github.com/commercetools/commercetools-sdk-typescript/pull/192/files.

## 1.1.0

### Minor Changes

- [#188](https://github.com/commercetools/commercetools-sdk-typescript/pull/188) [`4c2d9b6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/4c2d9b64b204200dffbeb18130239138dd2ad7d3) Thanks [@ajimae](https://github.com/ajimae)! - February package release

### Patch Changes

- [#149](https://github.com/commercetools/commercetools-sdk-typescript/pull/149) [`08caea9`](https://github.com/commercetools/commercetools-sdk-typescript/commit/08caea93560c01e2158f018538b7a2b9f4be39c1) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

## 1.0.2

### Patch Changes

- [#167](https://github.com/commercetools/commercetools-sdk-typescript/pull/167) [`b31612d`](https://github.com/commercetools/commercetools-sdk-typescript/commit/b31612dbcc3d644847cb42cf67bce407ab202cb0) Thanks [@ajimae](https://github.com/ajimae)! - Add Buffer Dependency

## 1.0.1

### Patch Changes

- [#163](https://github.com/commercetools/commercetools-sdk-typescript/pull/163) [`fcd35a0`](https://github.com/commercetools/commercetools-sdk-typescript/commit/fcd35a0f26b2780d0004c4e9d7b48233a86c2453) Thanks [@ajimae](https://github.com/ajimae)! - Fix issues with Buffer and node process

## 1.0.0

### Major Changes

- [#154](https://github.com/commercetools/commercetools-sdk-typescript/pull/154) [`25f1dea`](https://github.com/commercetools/commercetools-sdk-typescript/commit/25f1dea23eccdfdda01e9144ec2afe968ead58f2) Thanks [@jherey](https://github.com/jherey)! - This is the first major release of the sdk client

## 0.2.0

### Minor Changes

- [#146](https://github.com/commercetools/commercetools-sdk-typescript/pull/146) [`1f6f830`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1f6f830bb25d98c15ac96e06635c5e2aa07fe1e8) Thanks [@ajimae](https://github.com/ajimae)! - release a new version of typescript

## 0.1.2

### Patch Changes

- [#123](https://github.com/commercetools/commercetools-sdk-typescript/pull/123) [`1bdcdcf`](https://github.com/commercetools/commercetools-sdk-typescript/commit/1bdcdcf71669f38c3a157e9d03c8106bb8c7c4d5) Thanks [@ajimae](https://github.com/ajimae)! - Fix issues with SDK not working with Browsers

## 0.1.1

### Patch Changes

- [#108](https://github.com/commercetools/commercetools-sdk-typescript/pull/108) [`026d91a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/026d91a747b445b0913eabb7eb91ecc7f3eb257e) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update generated SDKs

## 0.1.0

### Minor Changes

- [#105](https://github.com/commercetools/commercetools-sdk-typescript/pull/105) [`274baaf`](https://github.com/commercetools/commercetools-sdk-typescript/commit/274baaf85d1cac0379842fea68315a8d28c87821) Thanks [@ajimae](https://github.com/ajimae)! - new sdk version release
