# Commercetools Composable Commerce (Improved) TypeScript SDK client

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
  createHttpMiddleware,
  createConcurrentModificationMiddleware,
  createAuthMiddlewareForClientCredentialsFlow,
  ClientBuilder,
} from '@commercetools/ts-client'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'

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
  retryCodes: [503],
}

const loggerFn = (response) => {
  // log response object
  console.log(response)
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
  .withLoggerMiddleware({ loggerFn })
  .withCorrelationIdMiddleware({
    generate: () => 'fake-correlation-id' + Math.floor(Math.random() + 2),
  })
  .withHttpMiddleware(httpMiddlewareOptions)
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

<!-- > [!WARNING]
> Do not add the built-in middlewares using `withMiddleware` method. Adding by this method does not respect the ordering of the middlewares and could lead to unexpected behavior. -->

The `withMiddleware` method can be used to add middleware functions (both built-in and custom middleware) in an ordered fashion.

```ts
// Example
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

const logger = () => {
  return (next) => async (request) => {
    // log request object
    console.log('Request:', request)
    const response = await next(request)

    // log response object
    console.log('Response', response)
    return response
  }
}

const client = new ClientBuilder()
  .withMiddleware(
    createAuthMiddlewareForClientCredentialsFlow(authMiddlewareOptions)
  )
  .withMiddleware(createHttpMiddleware(httpMiddlewareOptions))
  .withMiddleware(createConcurrentModificationMiddleware())
  .withMiddleware(logger())
  .build()
```

This will add the middleware in an ordered fashion starting with the:

1. createAuthMiddlewareForClientCredentialsFlow
2. createHttpMiddleware
3. createConcurrentModificationMiddleware
4. logger

Note that when using the `withMiddleware` function to add a custom middleware along side other in built middleware functions, it will add the custom middleware to the start of the execution chain.

```ts
// Example
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

const logger = () => {
  return (next) => async (request) => {
    // log request object
    console.log('Request:', request)
    const response = await next(request)

    // log response object
    console.log('Response', response)
    return response
  }
}

const client = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withConcurrentModificationMiddleware()
  .withMiddleware(logger())
  .build()
```

The order of execution is as follows:

1. withMiddleware <------ the custom middleware
2. withClientCredentialsFlow
3. withHttpMiddleware
4. withConcurrentModificationMiddleware
