# @commercetools/sdk-client-v2

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
