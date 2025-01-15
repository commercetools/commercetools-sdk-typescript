# Fastify Example

This example contains a `fastify` server to show how to use the commercetools typescript SDK.

### Prerequisite

- Git clone this repository and navigate (`cd`) into the `examples/fastify` example directory.
- Rename the `.env.sample` file in the project root to `.env` and fill out the environment entries using your commercetools project credentials. You can get your credentials from our merchant center at [mc eu](https://mc.europe-west1.gcp.commercetools.com/) or [mc us](https://mc.us-central1.gcp.commercetools.com/) depending on your location.

### Installation

Run the command `yarn install` or `npm install` to install all required dependencies

### Usage

- Run the server using the command `yarn [npm] run start` to start the fastify server on port `3000`
- Using your favourite http client, send a `GET` request to the the following endpoints

`http://127.0.0.1:3000/update-project-error` and `http://127.0.0.1:3000/update-project-success`

**Error endpoint**

```bash
# using curl to send a request to the error endpoint
curl http://127.0.0.1:3000/update-project-error
```

**Success endpoint**

```bash
# using curl to send a request to the success endpoint
curl http://127.0.0.1:3000/update-project-error
```

### Explanation

The error endpoint is deliberately configured to return a `409` concurrent modification error from the commercetools api server, when this error is not handled internally in the SDK by not including the `withConcurrentModificationMiddleware()` middleware builder method the 409 is returned to the client as an error response in the `fastify` server response object and also logged in the console if logging is enabled.

On the other hand, the success endpoint has the `withConcurrentModificationMiddleware()` middleware builder method included to handle the concurrent modification error using the currentVersion returned in the error object as the next retry request version to the commercetools api, hence the success response as seen in the fastify response.
