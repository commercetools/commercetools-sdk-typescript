<h2 align="center">Composable Commerce TypeScript SDKs 💅</h2>
<p align="center">
  <i>✨ Monorepository with generated TypeScript SDKs for the Composable Commerce APIs 🛠</i>
</p>
<p align="center">
  <a href="https://circleci.com/gh/commercetools/commercetools-sdk-typescript">
    <img alt="CircleCI Status" src="https://img.shields.io/circleci/build/github/commercetools/commercetools-sdk-typescript/master">
  </a>
  <a href="https://codecov.io/gh/commercetools/commercetools-sdk-typescript">
   <img alt="Codecov branch" src="https://img.shields.io/codecov/c/github/commercetools/commercetools-sdk-typescript/chore/small-repo-improvement">
   <!-- <img alt="Codecov Coverage Status" src="https://img.shields.io/codecov/c/github/commercetools/nodejs.svg?style=flat-square"> -->
  </a>
  <!-- <a href="https://waffle.io/commercetools/nodejs-tasks-board">
    <img alt="Waffle.io Board" src="https://img.shields.io/badge/Waffle-board-yellow.svg?style=flat-square">
  </a> -->
</p>

## Introduction

This repository contains several SDK packages generated from the commercetools Composable Commerce API reference.

## Documentation

Official documentation, a getting started guide, and usage examples for the TypeScript SDK can be found [here](https://docs.commercetools.com/dev-tooling/typescript-sdk)

The complete Type Documentation, function and class specifications can also be found [here](https://commercetools.github.io/commercetools-sdk-typescript/)

In addition, we created integration tests for each endpoint. Feel free to explore the examples [here](https://github.com/commercetools/commercetools-sdk-typescript/blob/master/packages/platform-sdk/test/integration-tests)

## Support

If you have any urgent issues regarding this repository please create a support request over our [official support channel](http://support.commercetools.com).

## Best Practices

We have a doc with a curated list of best practices designed to assist developers on how best to use and develop applications using the TypeScript SDK. The best practices doc can be found [here](https://docs.commercetools.com/dev-tooling/ts-sdk-best-practices).

## Packages

### SDK

| Package                                    | Version                                                               |
| ------------------------------------------ | --------------------------------------------------------------------- |
| [`platform-sdk`](/packages/platform-sdk)   | [![platform-sdk Version][platform-sdk-icon]][platform-sdk-version]    |
| [`importapi-sdk`](/packages/importapi-sdk) | [![importapi-sdk Version][importapi-sdk-icon]][importapi-sdk-version] |
| [`history-sdk`](/packages/history-sdk)     | [![history-sdk Version][history-sdk-icon]][history-sdk-version]       |
| [`checkout-sdk`](/packages/checkout-sdk)     | [![checkout-sdk Version][checkout-sdk-icon]][checkout-sdk-version]       |
| [`ts-client`](/packages/sdk-client-v3)     | [![client-sdk Version][sdk-client-icon]][sdk-client-version]          |

[platform-sdk-version]: https://www.npmjs.com/package/@commercetools/platform-sdk
[platform-sdk-icon]: https://img.shields.io/npm/v/@commercetools/platform-sdk.svg?style=flat-square
[importapi-sdk-version]: https://www.npmjs.com/package/@commercetools/importapi-sdk
[importapi-sdk-icon]: https://img.shields.io/npm/v/@commercetools/importapi-sdk.svg?style=flat-square
[history-sdk-version]: https://www.npmjs.com/package/@commercetools/history-sdk
[history-sdk-icon]: https://img.shields.io/npm/v/@commercetools/history-sdk.svg?style=flat-square
[checkout-sdk-version]: https://www.npmjs.com/package/@commercetools/checkout-sdk
[checkout-sdk-icon]: https://img.shields.io/npm/v/@commercetools/checkout-sdk.svg?style=flat-square
[sdk-client-version]: https://www.npmjs.com/package/@commercetools/ts-client
[sdk-client-icon]: https://img.shields.io/npm/v/@commercetools/ts-client.svg?style=flat-square
