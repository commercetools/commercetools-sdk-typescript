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
  - [How to effectively use JS/TS SDK middlewares](#how-to-effectively-use-jsts-sdk-middlewares)
  - [How to reuse client (connection)](#how-to-reuse-client-connection)
  - [Configuring the timeout parameter](#configuring-the-timeout-parameter)
  - [How exactly the customers could best utilize the logging feature in our SDKs](#how-exactly-the-customers-could-best-utilize-the-logging-feature-in-our-sdks)
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

## How to effectively use JS/TS SDK middlewares

The JS/TS SDK has a couple of middlewares that can be used to create the client. Also, it is important to note that in the v2 of the SDK, the order in which the middleware builder methods are invoked is immaterial. E.g The two code snippets below will produce the same result, irrespective of the order of the chained middleware builder methods.

```ts
const client = new ClientBuilder()
  .withHttpMiddleware(httpMiddlewareOptions)
  .withProjectKey(projectKey)
  .withUserAgentMiddleware()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withLoggerMiddleware()
  .build()
```

```ts
const client = new ClientBuilder()
  .withLoggerMiddleware()
  .withHttpMiddleware(httpMiddlewareOptions)
  .withUserAgentMiddleware()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withProjectKey(projectKey)
  .build()
```

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

## How exactly the customers could best utilize the logging feature in our SDKs.

The JS/TS SDK has a logger middleware called the withLoggerMiddleware() which can be chained at multiple parts when building the client. The logger middleware logs data like the request headers, body, request and response.

```ts
const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withLoggerMiddleware() // Log the request/response at this point
  .withHttpMiddleware(httpMiddlewareOptions)
  .withUserAgentMiddleware() // Include data from the http-middleware
  .withLoggerMiddleware()
  .build()
```

## The Queue middleware

The queue middleware can be used to control/throttle concurrent requests to a certain amount (limit), this is useful as it restricts the amount of HTTP requests to the platform, if properly implemented can boost performance.

```ts
import { ClientBuilder } from '@commercetools/ts-client'

const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(...)
  .withHttpMiddleware(...)
  .withQueueMiddleware({ concurrency: 5 }) // defaults to 20 concurrent requests
  ...
  .build()
```

## How to refresh a token in the SDK

In the Typescript SDK by default token are automatically fetched using the client credentials flow and injected in the request header. When a request is made, if the token in the header is expired or unavailable, the auth-middleware checks for this and automatically calls the platform to generate a new token and inject it in the header. Hence, no action is required by the customer in handling tokens when using the TS SDK.

```ts
import { ClientBuilder } from '@commercetools/ts-client'

const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(...)
  .withHttpMiddleware(...)
  ...
  .build()
```

## Customizing Responses

The response data gotten from a request can be customized to include certain details and also exclude others. In the JS/TS SDK the `originalRequest` sent to the SDK is included in the response body by default, however, if this behavior is not wanted, they can easily be excluded from both the success and error responses.

This can easily be accomplished in a simple and straightforward way, see example below.

```ts
const httpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  excludeRequestInErrorResponse: true,
  includeOriginalRequest: true,
  ...fetch,
}
```

The `maskSensitiveHeaderData` option redacts sensitive header information like the authorization header bearing the platform token and is enabled by default. The `excludeRequestInErrorResponse` excludes the `originalRequest` information from the response body of the **error response** while `includeOriginalRequest` includes the original client request in the **success response**.

## Client Reuse

The client can be created once and reused throughout the application by creating the `apiRoot` object instance and reuses the object instance throughout the application.

```ts
// client.ts
import ClientBuilder from '@commercetools/ts-client'
import createApiBuilderFromCtpClient from '@commercetools/platform-sdk'
...

const clientObject = new ClientBuilder()
export default clientObject

// apiroot.ts
import clientObject from '../apiroot.ts'
...
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
  httpMiddlewareOptions: {...}
  ...
}

const apiRoot = createApiBuilderFromCtpClient(getClient(options)).withProjectKey({ projectKey: options.projectKey })
export default apiRoot
```

In this way we are sure only a single instance of the client is created and reused to make all the requests within the application.

## Closing Client Connection

In the JS/TS SDK the connection tears down automatically after each request-response cycle and doesn't need the customer to manually close down the connection.

## Customizing the Client

The JS/TS client can be customized in a variety of ways, this can be achieved by passing in middleware options that can take different parameter values.

```ts
import ClientBuilder from '@commercetools/ts-client'
...

// see [this](https://commercetools.github.io/nodejs/sdk/api/#middlewares) on how to configure these options
const authMiddlewareOptions = {}
const httpMiddlewareOptions = {}

const client = new ClientBuilder()
  .withAuthMiddlewareOption(authMiddlewareOptions)
  .withHttpMiddlewareOption(httpMiddlewareOptions)
  ...
  .build()
```

## Error Handling

Internally the JS/TS SDK implements some helper functions that are connected with error handling, given an error code and message, an error object can be constructed.

```ts
import { getErrorByCode } from '@commercetools/ts-client'

const ErrorType = getErrorByCode(400)
const error = new ErrorType('Oops this is an error')

// error is of type
type HttpErrorType = {
  name: string
  message: string
  code: number
  status: number
  statusCode: number
  body: Object
  originalRequest: ClientRequest
  headers?: {
    [key: string]: string
  }
}
```

## Configuring proxies

Proxies can be configured at the http client level in the JS/TS SDK, here we pass the proxy url/ip address

```ts
import HttpsProxyAgent from 'https-proxy-agent'

const fetcherProxy = (url, fetchOptions = {}) => {
   fetchOptions.agent = new HttpsProxyAgent('proxy-url/ip-address') // http://76.253.101.51:8080
   return fetch(url, fetchOptions)
}

const httpMiddlewareOptions = {
  ...
  fetch: fetcherProxy
  ...
}

```

## Logging

The SDK is capable of logging events including success and error responses occurring within the request-response cycle. This logger is a middleware that can be added when building the client. The middleware can be added at different levels in the client builder to log events at those levels.

```ts
import {
  type Client,
  ClientBuilder
} from '@commercetools/ts-client'

cont client: Client = new ClientBuilder()
  .withClientCredentialsFlow(...)
  .withLoggerMiddleware() // Log the request / response at this point in the middleware chain, before it gets to the http-middleware
  .withHttpMiddleware(...)
  .withLoggerMiddleware() // Log the request / response after it's being handled by the http-middleware
  ...
  .build()
```

## Making request to the platform

Requests can be made directly to the platform in different ways, here we will be seeing some of those ways requests can be made directly to the platform. Sometimes the SDK doesn't provide methods to include specific requests to the platform, in this case, we can manually construct the request and send it directly to the platform. In this situation, we can use the execute function to make this call.

```ts
import { ClientBuilder } from '@commercetools/ts-client'

cont client = new ClientBuilder()
  .withClientCredentialsFlow(...)
  .withHttpMiddleware(...)
  ...
  .build()

const request = {
  uri: '/constructed-request', // e.g - `/${projectKey}/in-store/key=${storeKey}/customers/token`,
  method: 'GET',
  headers: {
    Authorization: 'Bearer xxx',
  },
}

client
  .execute(request)
  .then(result => {})
  .catch(error => {})
```

## Using HTTP client

The JS/TS SDK uses [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and its close relatives like [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch), [whatwg-fetch](https://github.com/whatwg/fetch) or [unfetch](https://github.com/developit/unfetch).
It is important to also note that due to changes in version 3 of `node-fetch`, it is expected that all projects using the v3 of `node-fetch` within the SDK must be in ESM (.mjs) module system. The JS/TS SDK fully supports v2 of `node-fetch` without any restrictions.

## The `Process` Function

The JS/TS SDK exposes a `Process` function that can be called to process batch requests. This function takes a request parameter, a callback that will be called on each batch request and an option that is an object with key `total` and a boolean `accumulate`.

```ts
import { Process, ClientBuilder } from '@commercetools/ts-client'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'

...
const apiRoot = createApiBuilderFromCtpClient(
  new ClientBuilder()
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build()
)

// prepare the batch request here.
const request = await apiRoot.withProjectKey({ projectKey }).get().request

// this can be any custom batch processing function
const processFn = (data) => data
const opt = {
  total: 10 // total request to be processed
  accumulate: true, // accumulate all the processed result into an array, default `true`
}

Process(request, processFn, opt).then((response) => {
  // response is an array of processed results
  expect(response[0].body.key).toEqual(process.env.CTP_PROJECT_KEY)
}).catch(console.error)

```

See this [test](https://github.com/commercetools/commercetools-sdk-typescript/blob/bc1c7d7fca1a4820947a7003440586d36777acfa/packages/sdk-client/test/client.test/sdk-client.test.ts) file for more examples on how to use the `Process` function.

## How to read or write fields not included in the SDK

In some rare occasions some object properties can be returned by Composable Commerce that are not part of the SDK response specification. E.g the error response object has some entries which are not specified as part of the TS SDK error types. In this situation, the existing type can be extended with the missing property or ignored entirely. [See this issue](https://github.com/commercetools/commercetools-sdk-typescript/issues/247#issuecomment-1103705075) for more explanation on this.

It is also noteworthy that this omission can be as a result of the entries not being part of the [official docs](https://docs.commercetools.com/api/errors) to get a clear type specification for these entries.
