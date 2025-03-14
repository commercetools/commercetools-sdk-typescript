# Dynatrace APM Example App (Using ExpressJs)

Example to show how the Dynatrace APM can be used in the TypeScript SDK.

## Requirements

- A Composable Commerce Project with a configured [API Client](https://docs.commercetools.com/sdk/js-sdk-getting-started).
- Your Project must have existing Products containing Variants, and at least one Customer.
- If your Project is currently empty, you can install the [SUNRISE sample data](https://github.com/commercetools/commercetools-sunrise-data).
- For Dynatrace setup, follow the instructions stated in our [official documentation website](https://docs.commercetools.com/sdk/observability/dynatrace#typescript-sdk) to properly install and set up the Dynatrace agent.

## Installation

1. Clone/Download the example folder.
2. Navigate to the path `dynatrace-express-apm`.
3. Create a `.env` file in the src folder by copying the contents of `.env.sample`, then update the values as needed. The variables required to run the demo app are: `CTP_PROJECT_KEY`, `CTP_CLIENT_ID`, `CTP_CLIENT_SECRET`,`CTP_AUTH_URL`,`CTP_API_URL` and `DT_ENV_ID` (Dynatrace environment ID) and `DT_OPEN_TOKEN` (Dynatrace Token).
4. Run `yarn install` (`npm` can also be used) to install all dependencies

### Start the application

1. After the installation completes, run `yarn start` to start the development server.
2. Curl or send a request using any HTTP client to the following endpoints:

```http
- GET https://localhost:9000/project
- GET https://localhost:9000/customers
- GET https://localhost:9000/products
```

Please check the [official documentation](https://docs.commercetools.com/sdk/observability/dynatrace#include-the-monitoring-package-in-your-sdk) for more details.
