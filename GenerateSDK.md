# Composable Commerce TypeScript SDKs Generation

This repo contains Composable Commerce SDKs and this is a guide on how to generate the Typescript SDK.

## Requirements

- Have java (`> 8`) installed in your environment.
- have [`rm-codegen`](https://github.com/commercetools/rmf-codegen#install-rmf-codegen-cli) cli installed.

## Building the projects

- `yarn install`
- `yarn build`

## Generating the sdks

run `yarn generate` to generate the sdks. (make sure the environment variables are set first)

## Environment variables

| Variable name |                                                    Description                                                     |
| ------------- | :----------------------------------------------------------------------------------------------------------------: |
| API_RAML_FILE | The path to Composable Commerce [HTTP API reference](https://github.com/commercetools/commercetools-api-reference) |

## Test environnement variables

| Variable name     |                  Description                   |
| ----------------- | :--------------------------------------------: |
| CTP_PROJECT_KEY   |        Composable Commerce Project key         |
| CTP_CLIENT_ID     |                 the client id                  |
| CTP_CLIENT_SECRET |               the client secret                |
| CTP_API_URL       | the API url (contains infos about the region)  |
| CTP_AUTH_URL      | the auth url (contains infos about the region) |
