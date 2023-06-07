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

The full documentation and usage example for the TypeScript SDK can be found [here](https://commercetools.github.io/nodejs/sdk/api/typescriptSdk.html#typescript-sdk-client-v2)

In addition, we created integration tests that can be used as examples from you to check how each endpoint works. It can be found [here](https://github.com/commercetools/commercetools-sdk-typescript/blob/8328f9e8a2a27776a46fc1bc2e964d402a7d1a2f/packages/platform-sdk/test/integration-tests)

## Support

If you have any urgent issues regarding this repository please create a support request over our [official support channel](http://support.commercetools.com).

## Best Practices

We have a doc with a currated list of best practices designed to assist developers on how best to use and develop applications using the JavaScript/TypeScript SDK. The best practices doc can be found [here](BEST_PRACTICES.md).

## Packages

### SDK

| Package                                    | Version                                                               |
| ------------------------------------------ | --------------------------------------------------------------------- |
| [`platform-sdk`](/packages/platform-sdk)   | [![platform-sdk Version][platform-sdk-icon]][platform-sdk-version]    |
| [`importapi-sdk`](/packages/importapi-sdk) | [![importapi-sdk Version][importapi-sdk-icon]][importapi-sdk-version] |
| [`ml-sdk`](/packages/ml-sdk)               | [![ml-sdk Version][ml-sdk-icon]][ml-sdk-version]                      |
| [`history-sdk`](/packages/history-sdk)     | [![history-sdk Version][history-sdk-icon]][history-sdk-version]       |
| [`sdk-client-v2`](/packages/sdk-client)    | [![client-sdk Version][sdk-client-icon]][sdk-client-version]          |

[platform-sdk-version]: https://www.npmjs.com/package/@commercetools/platform-sdk
[platform-sdk-icon]: https://img.shields.io/npm/v/@commercetools/platform-sdk.svg?style=flat-square
[importapi-sdk-version]: https://www.npmjs.com/package/@commercetools/importapi-sdk
[importapi-sdk-icon]: https://img.shields.io/npm/v/@commercetools/importapi-sdk.svg?style=flat-square
[ml-sdk-version]: https://www.npmjs.com/package/@commercetools/ml-sdk
[ml-sdk-icon]: https://img.shields.io/npm/v/@commercetools/ml-sdk.svg?style=flat-square
[history-sdk-version]: https://www.npmjs.com/package/@commercetools/history-sdk
[history-sdk-icon]: https://img.shields.io/npm/v/@commercetools/history-sdk.svg?style=flat-square
[sdk-client-version]: https://www.npmjs.com/package/@commercetools/sdk-client-v2
[sdk-client-icon]: https://img.shields.io/npm/v/@commercetools/sdk-client-v2.svg?style=flat-square
