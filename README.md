[![CircleCI](https://circleci.com/gh/commercetools/commercetools-typescript-sdks/tree/master.svg?style=svg&circle-token=7a93133a45212d777d0fc3c5a3af660e65bc4881)](https://circleci.com/gh/commercetools/commercetools-typescript-sdks/tree/master)

# commercetools-typescript-sdks

This repo contains commercetools SDKs.

## Requirements

- Have java (`> 8`) installed in your environment.
- have [`rm-codegen`](https://github.com/commercetools/rmf-codegen#install-rmf-codegen-cli) cli installed.

## Building the projects

- `yarn install`
- `yarn build`

## Generating the sdks

run `yarn generate` to generate the sdks. (make sure the environement variables are set first)

## Environment variables

| Variable name |                                                    Description                                                    |
| ------------- | :---------------------------------------------------------------------------------------------------------------: |
| ML_API_REF    | The path to commercetools [machine learning RAML api](https://github.com/commercetools/ml-services-api-reference) |
| API_RAML_FILE |        The path to commercetools [RAML api](https://github.com/commercetools/commercetools-api-reference)         |

## Test environnement variables

| Variable name     |                                               Description                                                |
| ----------------- | :------------------------------------------------------------------------------------------------------: |
| CTP_PROJECT_KEY   |                                        commercetools project key                                         |
| CTP_CLIENT_ID     |                                              the client id                                               |
| CTP_CLIENT_SECRET |                                            the client secret                                             |
| CTP_API_URL       |                              the api url (contains infos about the region)                               |
| CTP_AUTH_URL      |                              the auth url (contains infos about the region)                              |
| CTP_ML_API_URL    | the ml api uses a pattern a bit different from the platform, that needs to be used to access ml services |
