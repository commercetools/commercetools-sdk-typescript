# Newrelic APM Example App (Using ExpressJs)

Example to show how the Newrelic APM can be used in the TypeScript SDK.

## Requirements

- A Composable Commerce Project with a configured [API Client](https://docs.commercetools.com/sdk/js-sdk-getting-started).
- Your Project must have existing Products containing Variants, and at least one Customer.
- If your Project is currently empty, you can install the [SUNRISE sample data](https://github.com/commercetools/commercetools-sunrise-data).
- For Newrelic setup, follow the instructions stated on our [official documentation website](https://docs.commercetools.com/sdk/observability/newrelic#typescript-sdk) to properly install and set up the newrelic agent.

## Installation

1. Clone/Download the example folder.
2. Navigate to the path `newrelic-express-apm/`.
3. Create a `.env` file in this path, add and update the content of `.env.sample`.The variables required to run the demo app are: `CTP_PROJECT_KEY`, `CTP_CLIENT_ID`, `CTP_CLIENT_SECRET`,`CTP_AUTH_URL`,`CTP_API_URL` and `NEW_RELIC_LICENSE_KEY`(NewRelic API Key).
   The .env.sample file provides a template for the environment variables required by the application. Copy the contents of this file to a new `.env` file and replace the placeholder values with your actual credentials.
4. If you wish to enable OpenTelemetry tracing, copy the OTEL environment variables from the `.env.sample` file into your `.env` file, and populate them with your specific values.
5. For different settings of the OpenTelemetry collector, please set the `opentelemetry.js` file according to your requirements.
6. Run `yarn install` (`npm` can also be used) to install all dependencies

### Start the server

1. After the installation completes, run `yarn start` to start the development server. Alternatively, to run the application with the OpenTelemetry collector, use `node -r ./opentelemetry server.js`.
2. Curl or send a request using any HTTP client to the following endpoints:

```
- GET https://localhost:8000/project
- GET https://localhost:8000/customers
- GET https://localhost:8000/products
- GET https://localhost:8000/cart
- GET https://localhost:8000/cart-discount
```

3. Browse through [Newrelic](https://one.newrelic.com/) for the details (metrics, traces and logs) of the application.
