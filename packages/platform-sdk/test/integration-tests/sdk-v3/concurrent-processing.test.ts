import { createCategory } from '../category/category-fixture'
import {
  authMiddlewareOptionsV3,
  createTokenCache,
  httpMiddlewareOptionsV3,
  projectKey,
} from '../test-utils'
import { ClientBuilder as ClientBuilderV3 } from '@commercetools/ts-client/src'
import { createApiBuilderFromCtpClient } from '../../../src'

describe('Concurrent processing in sdk v3', () => {
  it(`should fetch 2 categories concurrently`, async () => {
    const category1 = await createCategory()
    const category2 = await createCategory()

    const tokenCache = createTokenCache()

    authMiddlewareOptionsV3.tokenCache = tokenCache

    const client = new ClientBuilderV3()
      .withClientCredentialsFlow(authMiddlewareOptionsV3)
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .withConcurrentModificationMiddleware()
      .build()

    const apiRoot = createApiBuilderFromCtpClient(client).withProjectKey({
      projectKey,
    })

    const key = category1.body.key
    const key2 = category2.body.key

    const [response1, response2] = await Promise.all([
      apiRoot.categories().withKey({ key }).get().execute(),
      apiRoot.categories().withKey({ key: key2 }).get().execute(),
    ])

    expect(response1.statusCode).toBe(200)
    expect(response2.statusCode).toBe(200)
  })
})
