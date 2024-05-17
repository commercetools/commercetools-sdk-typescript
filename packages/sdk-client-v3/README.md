# Commercetools Composable Commerce (Improved) TypeScript SDK client (beta)

This is the new and improved Typescript SDK client.

## Usage examples

```bash
npm install --save @commercetools/ts-client
npm install --save @commercetools/platform-sdk

or

yarn add @commercetools/ts-client
yarn add @commercetools/platform-sdk
```

```ts
import {
  type Next,
  type HttpMiddlewareOptions,
  type AuthMiddlewareBaseOptions,
  type ClientRequest,
  type MiddlewareRequest,
  type MiddlewareResponse,
  type Client,
  ClientBuilder,
} from '@commercetools/ts-client'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import fetch from 'node-fetch'

const projectKey = 'mc-project-key'
const authMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: 'mc-client-id',
    clientSecret: 'mc-client-secrets',
  },
  oauthUri: '/oauth/token', // - optional: custom oauthUri
  scopes: [`manage_project:${projectKey}`],
  httpClient: fetch,
}

const httpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  httpClient: fetch,
}

const retryOptions = {
  maxRetries: 3,
  retryDelay: 200,
  backoff: true,
  retryCodes: [200],
}

// custom middleware
function middleware(options) {
  return (next: Next) =>
    async (request: MiddlewareRequest): Promise<MiddlewareResponse> => {
      const { response, ...rest } = request

      // other actions can also be carried out here e.g logging,
      // error handling, injecting custom headers to http requests etc.
      console.log({ response, rest })
      return next({ ...request })
    }
}

const client: Client = new ClientBuilder()
  .withPasswordFlow(authMiddlewareOptions)
  .withLoggerMiddleware({
    includeOriginalRequest: false,
    includeResponseHeaders: false,
  })
  .withCorrelationIdMiddleware({
    generate: () => 'fake-correlation-id' + Math.floor(Math.random() + 2),
  })
  .withHttpMiddleware(httpMiddlewareOptions)
  .withRetryMiddleware(retryOptions)
  .withMiddleware(middleware({})) // <<<------------------- add the custom middleware here
  .build()

const apiRoot = createApiBuilderFromCtpClient(client)

// calling the Composable Commerce `api` functions
// get project details
apiRoot
  .withProjectKey({ projectKey })
  .get()
  .execute()
  .then((x) => {
    /*...*/
  })

// create a productType
apiRoot
  .withProjectKey({ projectKey })
  .productTypes()
  .post({
    body: { name: 'product-type-name', description: 'some description' },
  })
  .execute()
  .then((x) => {
    /*...*/
  })

// create a product
apiRoot
  .withProjectKey({ projectKey })
  .products()
  .post({
    body: {
      name: { en: 'our-great-product-name' },
      productType: {
        typeId: 'product-type',
        id: 'some-product-type-id',
      },
      slug: { en: 'some-slug' },
    },
  })
  .execute()
  .then((x) => {
    /*...*/
  })
```

## Create a client

To create a client, use the `ClientBuilder` class. The `ClientBuilder` class provides a fluent API to configure the client.

```ts
const authMiddlewareOptions = {
  credentials: {
    clientId: 'xxx',
    clientSecret: 'xxx',
  },
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: 'xxx',
}

const httpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  httpClient: fetch,
}

const client = new ClientBuilder()
  .withHttpMiddleware(httpMiddlewareOptions)
  .withConcurrentModificationMiddleware()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .build()
```

> [!WARNING]
> Do not add the built-in middlewares using `withMiddleware` method. Adding by this method does not respect the ordering of the middlewares and could lead to unexpected behavior.

```ts
// WRONG CODE!!!!!
const authMiddlewareOptions = {
  credentials: {
    clientId: 'xxx',
    clientSecret: 'xxx',
  },
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: 'xxx',
}

const httpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  httpClient: fetch,
}

const client = new ClientBuilder()
  .withMiddleware(
    createAuthMiddlewareForClientCredentialsFlow(authMiddlewareOptions)
  )
  .withMiddleware(createHttpMiddleware(httpMiddlewareOptions))
  .withMiddleware(createConcurrentModificationMiddleware())
  .build()
// WRONG CODE!!!!!
```
