# Typescript SDK for Composable Commerce Audit log (history) APIs.

## Usage examples

### Browser environment

```html
<script src="https://unpkg.com/@commercetools/sdk-client-v2@latest/dist/commercetools-sdk-client-v2.umd.js"></script>
<script src="https://unpkg.com/@commercetools/history-sdk@latest/dist/commercetools-history-sdk.umd.js"></script>
```

```html
<script>
  // global: @commercetools/sdk-client-v2
  // global: @commercetools/history-sdk
  ;(function () {
    //  We can now access the sdk-client-v2 and history-sdk object as:
    //  const { ClientBuilder } = this['@commercetools/sdk-client-v2']
    //  const { createApiBuilderFromCtpClient } = this['@commercetools/history-sdk']
    //  or
    //  const { ClientBuilder } = window['@commercetools/sdk-client-v2']
    //  const { createApiBuilderFromCtpClient } = window['@commercetools/history-sdk']
  })()
</script>
```

### Node environment

```bash
npm install --save @commercetools/sdk-client-v2
npm install --save @commercetools/history-sdk
```

```ts
const {
  ClientBuilder,
  createAuthForClientCredentialsFlow,
  createHttpClient,
} = require('@commercetools/sdk-client-v2')
const { createApiBuilderFromCtpClient } = require('@commercetools/history-sdk')
const fetch = require('node-fetch')

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
  fetch,
}

const httpMiddlewareOptions = {
  host: 'https://history.europe-west1.gcp.commercetools.com',
  fetch,
}

const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withMiddleware(createAuthForClientCredentialsFlow(authMiddlewareOptions))
  .withMiddleware(createHttpClient(httpMiddlewareOptions))
  .withUserAgentMiddleware()
  .build()

// or
const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withUserAgentMiddleware()
  .build()

const apiRoot = createApiBuilderFromCtpClient(client)

// calling the history-sdk functions
// get project details
apiRoot
  .withProjectKey({ projectKey })
  .recommendations()
  .projectCategories()
  .withProductId({
    productId: product.id,
  })
  .get()
  .execute()
  .then((x) => {
    /*...*/
  })

apiRoot
  .withProjectKey({ projectKey })
  .imageSearch()
  .post({
    queryArgs: {
      limit: 20,
    },
    body: image,
    headers: {
      'Content-Type': 'image/jpeg',
    },
  })
  .execute()
  .then((x) => {
    /*...*/
  })

// -----------------------------------------------------------------------
// The sdk-client-v2 also has support for the old syntax
import {
  createClient,
  createHttpClient,
  createAuthForClientCredentialsFlow,
} from '@commercetools/sdk-client-v2'
import { createApiBuilderFromCtpClient } from '@commercetools/history-sdk'
import fetch from 'node-fetch'

const projectKey = 'some_project_key'

const authMiddleware = createAuthForClientCredentialsFlow({
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: 'some_id',
    clientSecret: 'some_secret',
  },
  fetch,
})

const httpMiddleware = createHttpClient({
  host: 'https://history.europe-west1.gcp.commercetools.com',
  fetch,
})

const ctpClient = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

const apiRoot = createApiBuilderFromCtpClient(ctpClient)

apiRoot
  .withProjectKey({ projectKey })
  .recommendations()
  .projectCategories()
  .withProductId({
    productId: product.id,
  })
  .get()
  .execute()
  .then((x) => {
    /*...*/
  })

apiRoot
  .withProjectKey({ projectKey })
  .imageSearch()
  .post({
    queryArgs: {
      limit: 20,
    },
    body: image,
    headers: {
      'Content-Type': 'image/jpeg',
    },
  })
  .execute()
  .then((x) => {
    /*...*/
  })
```
