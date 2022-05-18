# Commercetools Composable Commerce TypeScript SDK client

## Usage examples

### Browser environment

```html
<script src="https://unpkg.com/@commercetools/sdk-client-v2@latest/dist/commercetools-sdk-client-v2.umd.js"></script>
<script src="https://unpkg.com/@commercetools/platform-sdk@latest/dist/commercetools-platform-sdk.umd.js"></script>
```

```html
<script>
  // global: @commercetools/sdk-client-v2
  // global: @commercetools/platform-sdk
  ;(function () {
    //  We can now access the sdk-client-v2 and platform-sdk object as:
    //  const { ClientBuilder } = this['@commercetools/sdk-client-v2']
    //  const { createApiBuilderFromCtpClient } = this['@commercetools/platform-sdk']
    //  or
    //  const { ClientBuilder } = window['@commercetools/sdk-client-v2']
    //  const { createApiBuilderFromCtpClient } = window['@commercetools/platform-sdk']
  })()
</script>
```

See full usage example [here](https://github.com/commercetools/commercetools-sdk-typescript/blob/master/examples/browser/browser.html)

### Node environment

```bash
npm install --save @commercetools/sdk-client-v2
npm install --save @commercetools/platform-sdk
```

```ts
const {
  ClientBuilder,
  createAuthForClientCredentialsFlow,
  createHttpClient,
} = require('@commercetools/sdk-client-v2')
const { createApiBuilderFromCtpClient } = require('@commercetools/platform-sdk')
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
  host: 'https://api.europe-west1.gcp.commercetools.com',
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

// calling the Composable Commerce functions
// get project details
apiRoot
  .withProjectKey({
    projectKey,
  })
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

// -----------------------------------------------------------------------
// The sdk-client-v2 also has support for the old syntax
import {
  createClient,
  createHttpClient,
  createAuthForClientCredentialsFlow,
} from '@commercetools/sdk-client-v2'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
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
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
})

const ctpClient = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

const apiRoot = createApiBuilderFromCtpClient(ctpClient)

apiRoot
  .withProjectKey({
    projectKey,
  })
  .get()
  .execute()
  .then((x) => {
    /*...*/
  })

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

See full usage example [here](https://github.com/commercetools/commercetools-sdk-typescript/blob/master/examples/node/node.js)
