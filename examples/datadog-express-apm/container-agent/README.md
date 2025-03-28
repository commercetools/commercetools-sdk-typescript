# Datadog APM Example App (Using ExpressJs)

Example to show how the Datadog APM can be used in the TypeScript SDK.

## Requirements

- A Composable Commerce Project with a configured [API Client](https://docs.commercetools.com/sdk/js-sdk-getting-started).
- Your Project must have existing Products containing Variants, and at least one Customer.
- If your Project is currently empty, you can install the [SUNRISE sample data](https://github.com/commercetools/commercetools-sunrise-data).
- For Datadog setup, follow the instructions stated in our [official documentation website](https://docs.commercetools.com/sdk/observability/datadog#typescript-sdk) to properly install and set up the Datadog agent.
  - Make sure that `Node js` has been installed as [Integration](https://docs.datadoghq.com/integrations/) to run this Demo application.

## Installation

1. Clone/Download the example folder.
2. Navigate to the path `datadog-express-apm/container-agent/`.
3. Create a `.env` file in the src folder by copying the contents of `.env.sample`, then update the values as needed. The variables required to run the demo app are: `CTP_PROJECT_KEY`, `CTP_CLIENT_ID`, `CTP_CLIENT_SECRET`,`CTP_AUTH_URL`,`CTP_API_URL` and `DD_API_KEY` (Datadog API Key).
   - Make sure that the `name` in the `package.json` matches with the `DD_SERVICE` environment variable value.
4. Go back to the root folder and run `yarn install` (`npm` can also be used) to install all dependencies

### Start the application

1. After the installation completes, run `docker compose up` in the root folder to start the development server.
2. Curl or send a request using any HTTP client to the following endpoints:

```http
- GET https://localhost:9000/project
- GET https://localhost:9000/customers
- GET https://localhost:9000/products
```

3. Browse through [Datadog](https://app.datadoghq.eu/) for the details (metrics, traces and logs) of the application.
