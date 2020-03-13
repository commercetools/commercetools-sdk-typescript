# Typescript SDK for commercetools machine learning API

## Install

```bash
npm install --save @commercetools/ml-sdk
```

#### Browser

```html
<script src="https://unpkg.com/browse/@commercetools/ml-sdk/dist/ml-sdk.umd.js"></script>
<script>
  // global: mlSdk
</script>
```

#### Usage example

```ts
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createClient } from '@commercetools/sdk-client'
import { createApiBuilderFromCtpClient, ApiRoot } from '@commercetools/ml-sdk'
import fetch from 'node-fetch'

const projectKey = 'some_project_key'

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: 'https://auth.europe-west1.gcp.commercetools.com/',
  projectKey,
  credentials: {
    clientId: 'some_id',
    clientSecret: 'some_secret',
  },
  fetch,
})

const httpMiddleware = createHttpMiddleware({
  host: 'https://ml-eu.europe-west1.gcp.commercetools.com',
  fetch,
})

const ctpClient = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

const apiRoot: ApiRoot = createApiBuilderFromCtpClient(ctpClient)

apiRoot
  .withProjectKey({ projectKey })
  .recommendations()
  .projectCategories()
  .withProductId({
    productId: product.id,
  })
  .get()
  .execute()
  .then(x => {
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
  .then(x => {
    /*...*/
  })
```
