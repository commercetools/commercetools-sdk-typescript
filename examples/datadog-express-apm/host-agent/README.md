# Datadog APM Example App (Using ExpressJs)

Example to show how the Datadog APM can be used in the TypeScript SDK.

## Requirements

- A Composable Commerce Project with a configured [API Client](https://docs.commercetools.com/sdk/js-sdk-getting-started).
- Your Project must have existing Products containing Variants, and at least one Customer.
- If your Project is currently empty, you can install the [SUNRISE sample data](https://github.com/commercetools/commercetools-sunrise-data).
- For Datadog setup, follow the instructions stated in our [official documentation website](https://docs.commercetools.com/sdk/observability/datadog#typescript-sdk) to properly install and set up the Datadog agent.

## Installation

1. Clone/Download the example folder.
2. Navigate to the path `datadog-express-apm/host-agent/`.
3. Create a `.env` file in this path, add and update the content of `.env.sample`, the `DD_API_KEY` is required
4. Run `yarn install` (`npm` can also be used) to install all dependencies

```bash
# commercetools env
CTP_PROJECT_KEY=<commercetools_project_key>
CTP_CLIENT_ID=<commercetools_client_id>
CTP_CLIENT_SECRET=<commercetools_client_secret>

CTP_CLIENT_USERNAME=<customer_username>
CTP_CLIENT_PASSWORD=<customer_password>

# datadog envs
DD_ENV=dev
DD_LOGS_INJECTION=true
DD_TAGS="env:${DD_ENV}"
DD_PROCESS_AGENT_ENABLED=true
DD_DOGSTATSD_NON_LOCAL_TRAFFIC=true # if expecting external metrics
DD_APM_NON_LOCAL_TRAFFIC=true
DD_APM_ENABLED=true
DD_APM_ANALYZED_SPANS='api-gateway|express.request=1,auth|express.request=1,user|express.request=1'
DD_BIND_HOST=0.0.0.0
DD_LOGS_ENABLED=true
DD_API_KEY=
DD_URL=datadoghq.eu
DD_APM_DD_URL=

DD_LOGS_INJECTION=true
DD_TRACE_SAMPLE_RATE="1"

# custom metric collection
DD_USE_DOGSTATSD=true # default - and is required for custom metrics
# DD_DOGSTATSD_PORT=8125 # default
```

### Start the application

1. After the installation completes, run `yarn start` to start the development server.
2. Curl or send a request using any HTTP client to the following endpoints:

```http
- GET https://localhost:9000/project
- GET https://localhost:9000/customers
- GET https://localhost:9000/products
```

3. Browse through [Datadog](https://app.datadoghq.eu/) for the details (metrics, traces and logs) of the application.
