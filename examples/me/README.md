# ME Endpoint Checkout App

Example to show how the ME endpoints can be used with the TypeScript SDK.

## Requirements

- A Composable Commerce Project with a configured [API Client](https://docs.commercetools.com/tutorials/getting-started#creating-an-api-client).
- Your Project must have existing Products containing Variants, and at least one Customer.
- If your Project is currently empty, you can install the [SUNRISE sample data](https://docs.commercetools.com/sdk/sunrise-data).

## Installation

1. Clone/Download the example folder.
2. Navigate to the path `me/client/`.
3. Create a `.env` file in this path and add the following code:

```txt
REACT_APP_BASE_URL=http://localhost:8085
```

4. Navigate to the path `me/server/`.
5. Create a `.env` file in this path and add the following code:

```bash
PORT=8085
CTP_CLIENT_ID={clientID}
CTP_PROJECT_KEY={projectKey}
CTP_CLIENT_SECRET={clientSecret}
DEFAULT_CURRENCY=EUR
```

6. Replace `{clientID}`, `{projectKey}`, and `{clientSecret}` with the respective values from your API Client. The `DEFAULT_CURRENCY` can be changed based on your Composable Commerce Project settings.

## Using the ME Endpoint Checkout App

You should start the server before the client and keep both running in separate Terminal windows.

### Start the server

1. Open a new Terminal.
2. Navigate to `examples/me/server`.
3. Run `yarn install` (`npm` can also be used).
4. After the installation completes, run `yarn start:dev`.
5. The server starts.

### Start the client

1. Open a new Terminal
2. Navigate to `examples/me/client`.
3. Run `yarn install` (`npm` can also be used).
4. After the installation completes, run `yarn start:dev`.
5. A new web browser window opens and displays the Checkout app. A list of Products should appear.
