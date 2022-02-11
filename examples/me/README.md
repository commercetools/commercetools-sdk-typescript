# ME Endpoint Checkout App

PoC to show how the ME endpoints can be used with the TypeScript SDK.

### Installation

- Clone/Download the example folder
- Create a `.env` file with the following entries

```txt
PORT=8085
CTP_CLIENT_ID=
CTP_PROJECT_KEY=
CTP_CLIENT_SECRET=
```

These credentials can be gotten from the commercetools [merchant center](https://mc.europe-west1.gcp.commercetools.com/login?reason=unauthorized&redirectTo=https%3A%2F%2Fmc.europe-west1.gcp.commercetools.com)

- Open up a Terminal window and navigate to `examples/me/server` and run `yarn install` feel free to use `npm` if you wish
- After the installation completes, run `yarn start:dev` within the (same) server directory, this should spin up the server.
- On a separate Terminal window, navigate to `examples/me/client` and run `yarn install` also, feel free to use `npm` if you wish
- Also, once the installation completes, run `yarn start:dev` within the (same) server directory, this will open up a browser Tab with a list of products, assuming everything went well.

### Note

Ensure there are products already and at least a customer enlisted and registered respectively within the project being used.
