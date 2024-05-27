# Newrelic APM Example App (Using ExpressJs)

Example to show how the Newrelic APM can be used in the TypeScript SDK.

## Requirements

- A Composable Commerce Project with a configured [API Client](https://docs.commercetools.com/sdk/js-sdk-getting-started).
- Your Project must have existing Products containing Variants, and at least one Customer.
- If your Project is currently empty, you can install the [SUNRISE sample data](https://github.com/commercetools/commercetools-sunrise-data).
- For Newrelic setup, follow the instructions stated on our [official documentation website](https://docs.commercetools.com/sdk/observability/newrelic#typescript-sdk) to properly install and set up the newrelic agent.

## Installation

1. Clone/Download the example folder.
2. Navigate to the path `newrelic-express-apm/host-agent/`.
3. Create a `.env` file in this path, add and update the content of `.env.sample`, the `DD_API_KEY` is required
4. Run `yarn install` (`npm` can also be used) to install all dependencies

```bash
# commercetools env
CTP_PROJECT_KEY=<commercetools_project_key>
CTP_CLIENT_ID=<commercetools_client_id>
CTP_CLIENT_SECRET=<commercetools_client_secret>

CTP_CLIENT_USERNAME=<customer_username>
CTP_CLIENT_PASSWORD=<customer_password>

# newrelic envs
PORT=8000
NEW_RELIC_APP_NAME=demo-monitoring-app
NEW_RELIC_LICENSE_KEY=<new_relic_api_key>

OTEL_EXPORTER_OTLP_ENDPOINT=https://otlp.eu01.nr-data.net:4317
OTEL_TRACES_EXPORTER=none
OTEL_EXPORTER_OTLP_HEADERS=api-key=<new_relic_api_key>
OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT=4095
```

### Start the server

1. After the installation completes, run `yarn start` to start the development server.
2. Curl or send a request using any HTTP client to the following endpoints:

```http
- GET https://localhost:9000/project
- GET https://localhost:9000/customers
- GET https://localhost:9000/products
- GET https://localhost:9000/cart
- GET https://localhost:9000/cart-discount
```

3. Browse through [Newrelic](https://one.newrelic.com/) for the details (metrics, traces and logs) of the application.
