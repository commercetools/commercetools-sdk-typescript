# ME Endpoint Checkout App

PoC to show how the ME endpoints can be used with the TypeScript SDK.

### Installation

- Clone/Download the example folder
- Create a `.env` file in the path `me/client/.env` with the following entry

```txt
REACT_APP_BASE_URL=http://localhost:8085
```

- Create a `.env` file in the path `me/server/.env` with the following entries

```bash
PORT=8085 #default to 8085
CTP_CLIENT_ID=
CTP_PROJECT_KEY=
CTP_CLIENT_SECRET=
DEFAULT_CURRENCY=EUR #default to EUR
```

These credentials can be gotten from the commercetools [merchant center](https://mc.europe-west1.gcp.commercetools.com/login?reason=unauthorized&redirectTo=https%3A%2F%2Fmc.europe-west1.gcp.commercetools.com)

- Open up a Terminal window and navigate to `examples/me/server` and run `yarn install` feel free to use `npm` if you wish
- After the installation completes, run `yarn start:dev` within the (same) server directory, this should spin up the server.
- On a separate Terminal window, navigate to `examples/me/client` and run `yarn install` also, feel free to use `npm` if you wish
- Also, once the installation completes, run `yarn start:dev` within the (same) server directory, this will open up a browser Tab with a list of products, assuming everything went well.

### Note

Ensure there are products and at least a customer already enlisted and registered respectively within the project being used, if you don't please follow this [link](https://github.com/commercetools/commercetools-sunrise-data) for further instructions.
