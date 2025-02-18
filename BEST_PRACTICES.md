# TypeScript SDK Best Practices

## Contents

- [General](#general)

  - [Use up-to-date SDK](#use-up-to-date-sdk)
  - [Documentation](#documentation)
  - [Issues](#issues)
  - [Resporting Issues](#reporting-issues)
  - [Contribution](#contribution)
  - [Security](#security)
  - [Learning](#learning)

- [Best Practices](#best-practices)
  - [Client Initialization](#client-initialization)
  - [How to effectively use Commercetools JS/TS SDK middlewares](#how-to-effectively-use-commercetools-jsts-sdk-middlewares)
  - [How to reuse client (connection)](#how-to-reuse-client-connection)
  - [Configuring the timeout parameter](#configuring-the-timeout-parameter)
  - [The Queue middleware](#the-queue-middleware)
  - [How to refresh a token in the SDK](#how-to-refresh-a-token-in-the-sdk)
  - [Customizing Responses](#customizing-responses)
  - [Client Reuse](#client-reuse)
  - [Closing Client Connection](#closing-client-connection)
  - [Customizing the Client](#customizing-the-client)
  - [Error Handling](#error-handling)
  - [Configuring proxies](#configuring-proxies)
  - [Logging](#logging)
  - [Making request to the platform](#making-request-to-the-platform)
  - [Using HTTP client](#using-http-client)
  - [The `Process` Function](#the-process-function)
  - [How to read or write fields not included in the SDK](#how-to-read-or-write-fields-not-included-in-the-sdk)

#

# General

## Use up-to-date SDK

Always ensure the SDKs in use are up to date this is important
as to ensure the customer do have all the latest features
offered by the SDK including security and vulnerability fixes.

## Documentation

Ensure to read the [documentation](https://docs.commercetools.com/sdk/javascript-sdk) carefully in order
to correctly and properly implement and/or integrate the SDK.

## Issues

Ensure issues are reported as soon as they are noticed or spotted
as this ensures the SDK is working properly and serves its purpose.

## Reporting Issues

Issues encountered while using or trying to use the SDK can be
reported in the SDK repository [issues](https://github.com/commercetools/commercetools-sdk-typescript/issues) section or contact the [support](https://jira.commercetools.com/servicedesk/customer/portal/1) team directly. Reported issues should have as much details as possible (details such as the SDK version, the specific error message, log or stack trace. You can find the template here

## Contribution

As the saying goes, no software project is 100% complete so is our SDK. As a customer, if you see areas where the SDK can be improved, you are welcome to raise an issue or better still raise a PR.
Part of the version 2 SDKs are generated automatically, so please be careful not to raise PRs for the generated part, please see [this](https://github.com/commercetools/rmf-codegen/tree/main/node/rmf-codegen) for more on generated SDKs.

## Security

Always ensure all the credentials (e.g clientId, clientSecret) used in the SDK are not exposed in any way to the outside world, use environment variables - if necessary to store credentials.

## Learning

There are tests within the SDK [repository](https://github.com/commercetools/commercetools-sdk-typescript) where you can learn how to use certain SDK functionalities just by looking at the tests. Also, we have an example folder that contains examples of how to use the SDK for different environments, such as HTML, Node.js, Vue3, React.

# Best Practices

## Client Initialization

The suggested way to create a Commercetools API client is using the `ClientBuilder`. Here a basic example:

```typescript
import { ClientBuilder } from '@commercetools/ts-client'

const projectKey = 'your-project-key'
const authMiddlewareOptions = {
  host: process.env.CTP_API_HOST,
  projectKey,
  credentials: {
    clientId: process.env.CTP_CLIENT_ID,
    clientSecret: process.env.CTP_CLIENT_SECRET,
  },
  scopes: [process.env.CTP_API_SCOPES],
  httpClient: fetch,
}

const httpMiddlewareOptions = {
  host: process.env.CTP_API_HOST,
  includeRequestInErrorResponse: true, // Include request in error responses
  includeOriginalRequest: true, // Include request in successful responses
  httpClient: fetch,
}

const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withUserAgentMiddleware()
  .withLoggerMiddleware() // Optional: for logging requests
  .build()
```

## How to effectively use Commercetools JS/TS SDK middlewares

Middleware is used to add functionality to the request object in the TypeScript SDK. You can add middleware when creating the TypeScript SDK client. Multiple middleware can be added using a chain of middleware builder methods.

Please check [here](https://docs.commercetools.com/sdk/ts-sdk-middleware-v3) for more details.

## How to reuse client (connection)

[#Related Issue](https://jira.commercetools.com/browse/SUPPORT-9902)

The client is the closest we have to a connection pool, which once created can be used to make requests to the compose commerce API.

This client is highly configurable and can be easily configured to suit most use cases. e.g of this configuration are timeouts, retry policy, abort request etc.

## Configuring the timeout parameter

The following are options that can be passed into the httpMiddlewareOption when building a client.

- `enableRetry` - flag to enable retry on network errors and selected 5xx statusCode responses and it defaults to false.

- `timeout` - Defaults to undefined, if retry features are to be used, then we can easily define a numeric value for it. This ensures that a request that’s taking too long to complete can be aborted when the timeout elapses.

- `maxRetries` - Defaults to maximum 10 retries. Any number however can be chosen depending on the specific use case. This sets the value of the max retry counts in an error event.

- `backoff` - Defaults to true, this ensures that the request backs off exponentially so as not to overload the server with requests.

- `retryDelay` - Amount in milliseconds to wait before retrying the next request, defaults to 200

- `maxDelay` - The maximum duration (milliseconds) to wait before retrying, useful if the delay time grew exponentially more than reasonable.

With all the above options, an optimal combination of retries and request timeouts can be properly configured. Also it is important to note that the values of these parameters are chosen in such a way that it doesn’t affect the experience of the SDK. e.g if requests times out frequently due to connection or networking issues then a higher value for timeout and a lower value for retryDelay can be chosen.

## The Queue middleware

The queue middleware can be used to control/throttle concurrent requests to a certain amount (limit), this is useful as it restricts the amount of HTTP requests to the platform, if properly implemented can boost performance.

```ts
const client = new ClientBuilder()
  //... other configuration...
  .withQueueMiddleware({ concurrency: 5 }) // defaults to 20 concurrent requests
  //... more configuration...
  .build()
```

## How to refresh a token in the SDK

In the Commercetools Typescript SDK tokens are automatically fetched by default using the client credentials flow and injected into the request header.
When a request is made, if the token in the header is expired or unavailable, the auth-middleware checks for this and automatically calls the platform to generate a new token and inject it into the header.
Therefore, no action is required by the customer to handle tokens when using the TS SDK.

## Customizing Responses

The response data gotten from a request can be customized to include or exclude certain details. By default, the Commercetools JS/TS SDK includes the `originalRequest` in the response body.
However, if this behavior is not wanted, they can easily be excluded from both the success and error responses.

To customize the response data, configure the `httpMiddlewareOptions` when initializing the client (see [Client Initialization](#client-initialization)).

This can easily be accomplished in a simple and straightforward way, see example below.

```ts
const httpMiddlewareOptions = {
  host: '<your-host-here>',
  includeRequestInErrorResponse: true,
  includeOriginalRequest: true,
  httpClient: fetch,
}
```

The `maskSensitiveHeaderData` option redacts sensitive header information like the authorization header bearing the platform token and is enabled by default. The `includeRequestInErrorResponse` excludes the `originalRequest` information from the response body of the **error response** while `includeOriginalRequest` includes the original client request in the **success response**.

## Client Reuse

The client can be created once and reused throughout the application by creating the `apiRoot` object instance and reuses the object instance throughout the application.

```ts
// client.ts
import ClientBuilder from '@commercetools/ts-client'
import createApiBuilderFromCtpClient from '@commercetools/platform-sdk'
//...

const clientObject = new ClientBuilder()
export default clientObject

// apiroot.ts
import clientObject from '../apiroot.ts'

function getClient(options) {
  const client = clientObject
    .withProjectKey(options.projectKey)
    .withMiddleware(createAuthForClientCredentialsFlow(options.authMiddlewareOptions))
    .withMiddleware(createHttpClient(options.httpMiddlewareOptions))
    .withUserAgentMiddleware()
    .build()

    return client
}

const options = {
  projectKey: 'some-project-key',
  authMiddlewareOptions: {...},
  httpMiddlewareOptions: {...},
  //...
}

const apiRoot = createApiBuilderFromCtpClient(getClient(options)).withProjectKey({ projectKey: options.projectKey })
export default apiRoot
```

In this way we are sure only a single instance of the client is created and reused to make all the requests within the application.

## Closing Client Connection

In the Commercetools JS/TS SDK the connection tears down automatically after each request-response cycle and doesn't need the customer to manually close down the connection.

## Customizing the Client

The Commercetools JS/TS client can be customized in a variety of ways, this can be achieved by passing in middleware options that can take different parameter values.
Refer to the [Client Initialization](#client-initialization) section for details on how to create the client.
To see how to configure the available middleware options and their configurations, see [this documentation](https://commercetools.github.io/nodejs/sdk/api/#middlewares).

## Error Handling

The Commercetools JS/TS SDK provides helper functions for handling API errors.
`getErrorByCode` retrieves a constructor function (a class) for a specific HTTP error type (for example 400 Bad Request, 404 Not Found). You then use this constructor with `new` to create an instance of the error.

```ts
import { getErrorByCode, HttpErrorType } from '@commercetools/ts-client'

try {
  const BadRequestError = getErrorByCode(400)

  if (BadRequestError) {
    throw new BadRequestError('Invalid request data')
  }
} catch (error) {
  if (error instanceof BadRequestError) {
    console.error('Bad Request:', error.message, error.statusCode)
  } else if (error instanceof Error) {
    console.error('Generic Error:', error.message)
  } else if (error as HttpErrorType) {
    console.error('HTTP Error:', error.message, error.statusCode, error.body)
  } else {
    console.error('Unknown error:', error)
  }
}
```

## Configuring proxies

Proxies can be configured at the HTTP client level in the Commercetools JS/TS SDK, here we pass the proxy url/ip address

```ts
import HttpsProxyAgent from 'https-proxy-agent'

const fetcherProxy = (url, fetchOptions = {}) => {
  fetchOptions.agent = new HttpsProxyAgent('proxy-url/ip-address') // http://76.253.101.51:8080
  return fetch(url, fetchOptions)
}

const httpMiddlewareOptions = {
  //...
  fetch: fetcherProxy,
  //...
}
```

## Logging

The Commercetools JS/TS SDK is capable of logging events including success and error responses occurring within the request-response cycle.
This logger is a middleware that can be added when building the client using the `withLoggerMiddleware()` function. The middleware can be added at different levels in the client builder to log events at those levels.

```ts
import { ClientBuilder } from '@commercetools/ts-client'

const client: Client = new ClientBuilder()
  //... other configuration...
  .withLoggerMiddleware() // Log the request / response at this point in the middleware chain, before it gets to the http-middleware
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Log the request / response after it's being handled by the http-middleware
  //... more configuration...
  .build()
```

## Making request to the platform

Requests can be made directly to the platform in different ways, here we will be seeing some of those ways requests can be made directly to the platform. Sometimes the SDK doesn't provide methods to include specific requests to the platform, in this case, we can manually construct the request and send it directly to the platform. In this situation, we can use the execute function to make this call.

```ts
const request = {
  uri: '/constructed-request', // e.g - `/${projectKey}/in-store/key=${storeKey}/customers/token`,
  method: 'GET',
  headers: {
    Authorization: 'Bearer xxx',
  },
}

client
  .execute(request)
  .then((result) => {})
  .catch((error) => {})
```

## Using HTTP client

The Commercetools JS/TS SDK uses [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and its close relatives like [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch), [whatwg-fetch](https://github.com/whatwg/fetch) or [unfetch](https://github.com/developit/unfetch).
It is important to also note that due to changes in version 3 of `node-fetch`, it is expected that all projects using the v3 of `node-fetch` within the SDK must be in ESM (.mjs) module system. The JS/TS SDK fully supports v2 of `node-fetch` without any restrictions.

## The `Process` Function

The Commercetools JS/TS SDK exposes a `Process` function that can be called to process batch requests. This function takes a request parameter, a callback that will be called on each batch request and an option that is an object with key `total` and a boolean `accumulate`.

```ts
import { Process, ClientBuilder } from '@commercetools/ts-client'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'

//...

const apiRoot = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build()

// prepare the batch request here.
const request = await apiRoot.categories().withId({ ID: 'category-id-1' }).get()
  .request

// this can be any custom batch processing function
const processFn = (data) => data
const opt = {
  total: 10, // total request to be processed
  accumulate: true, // accumulate all the processed result into an array, default `true`
}

Process(request, processFn, opt)
  .then((response) => {
    // response is an array of processed results
    expect(response[0].body.key).toEqual(process.env.CTP_PROJECT_KEY)
  })
  .catch(console.error)
```

See this [test](https://github.com/commercetools/commercetools-sdk-typescript/blob/master/packages/sdk-client-v3/tests/client.test/client.test.ts) file for more examples on how to use the `Process` function.

## How to read or write fields not included in the SDK

In some rare occasions some object properties can be returned by Composable Commerce that are not part of the SDK response specification. E.g the error response object has some entries which are not specified as part of the TS SDK error types. In this situation, the existing type can be extended with the missing property or ignored entirely. [See this issue](https://github.com/commercetools/commercetools-sdk-typescript/issues/247#issuecomment-1103705075) for more explanation on this.

It is also noteworthy that this omission can be as a result of the entries not being part of the [official docs](https://docs.commercetools.com/api/errors) to get a clear type specification for these entries.
