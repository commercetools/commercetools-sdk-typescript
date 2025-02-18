# @commercetools/ts-sdk-apm

## 3.2.0

### Minor Changes

- [#933](https://github.com/commercetools/commercetools-sdk-typescript/pull/933) [`be7e9d3`](https://github.com/commercetools/commercetools-sdk-typescript/commit/be7e9d39fb01c696ecb5c5056e50f1376900405d) Thanks [@ajimae](https://github.com/ajimae)! - Release latest typescript apm monitoring package

## 3.1.0

### Minor Changes

- [#861](https://github.com/commercetools/commercetools-sdk-typescript/pull/861) [`e8a0e92`](https://github.com/commercetools/commercetools-sdk-typescript/commit/e8a0e928e2ab48bd47d6ff6384f385b24e485755) Thanks [@ajimae](https://github.com/ajimae)! - Add custom metric

## 3.0.0

### Major Changes

- [#896](https://github.com/commercetools/commercetools-sdk-typescript/pull/896) [`f9b8cb6`](https://github.com/commercetools/commercetools-sdk-typescript/commit/f9b8cb605d99fe5ece13bdc3c152eb4818e19b3b) Thanks [@lojzatran](https://github.com/lojzatran)! - Remove support of nodejs 16

## 2.0.0

### Major Changes

- [#564](https://github.com/commercetools/commercetools-sdk-typescript/pull/564) [`db69db1`](https://github.com/commercetools/commercetools-sdk-typescript/commit/db69db1f2a1f6ca69858c272f3905b96b6180bd2) Thanks [@ajimae](https://github.com/ajimae)! - - remove newrelic as dependency in `@commercetools/ts-sdk-apm` package
  - add useragent key with a default `typescript-sdk-apm-middleware` string
  - add example express app on how to add `dynatrace` monitoring in the ts sdk

## 1.0.2

### Patch Changes

- [#551](https://github.com/commercetools/commercetools-sdk-typescript/pull/551) [`9e7939a`](https://github.com/commercetools/commercetools-sdk-typescript/commit/9e7939a1df234fd1f4f77c60f4ff75b31d7fc3fd) Thanks [@github-actions](https://github.com/apps/github-actions)! - BREAKING CHANGE:

  - fix URI parameters to be URI encoded

- [#545](https://github.com/commercetools/commercetools-sdk-typescript/pull/545) [`a6d0df2`](https://github.com/commercetools/commercetools-sdk-typescript/commit/a6d0df2034b72504db2aa2d13a8d3726d97cc881) Thanks [@ajimae](https://github.com/ajimae)! - - fix user-agent header
  - remove User-Agent key from the middleware request header

## 1.0.1

### Patch Changes

- [#537](https://github.com/commercetools/commercetools-sdk-typescript/pull/537) [`ae8677d`](https://github.com/commercetools/commercetools-sdk-typescript/commit/ae8677d8ac1d28bdfb367ab8929c71686a7142ce) Thanks [@ajimae](https://github.com/ajimae)! - add useragent header

## 1.0.0

### Major Changes

- [#458](https://github.com/commercetools/commercetools-sdk-typescript/pull/458) [`c2bf0a5`](https://github.com/commercetools/commercetools-sdk-typescript/commit/c2bf0a5cac18fdcf181dacc8c6714eb760704523) Thanks [@ajimae](https://github.com/ajimae)! - - add newrelic `APM` (application performance monitoring) to the sdk
  - add `withTelemetryMiddleware()` middleware creator method to ClientBuilder class
  - add basic `newrelic` application configuration module
  - add examples to repository example folder to demonstrate how this feature can be used
