import { ClientBuilder as ClientBuilderV3 } from '@commercetools/ts-client/src'
import {
  authMiddlewareOptionsV3,
  httpMiddlewareOptionsV3,
  projectKey,
} from '../test-utils'
import { createApiBuilderFromCtpClient } from '../../../src'

describe('Response serialization test', () => {
  it('should return a `404` error for an unknown extension `KEY`', async () => {
    const client = new ClientBuilderV3()
      .withClientCredentialsFlow(authMiddlewareOptionsV3)
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(client).withProjectKey({
      projectKey,
    })

    apiRootV3
      .extensions()
      .withKey({ key: 'undefined-404-key' })
      .head()
      .execute()
      .catch((error) => {
        expect(error.statusCode).toEqual(404)
        expect(error.message).toMatch('URI not found:')
        expect(error.message).toMatch(
          `/${authMiddlewareOptionsV3.projectKey}/extensions/key=undefined-404-key`
        )
      })
  })

  it('should return appropriate error response for `HEAD` request', async () => {
    const client = new ClientBuilderV3()
      .withClientCredentialsFlow(authMiddlewareOptionsV3)
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(client).withProjectKey({
      projectKey,
    })

    apiRootV3
      .extensions()
      .withKey({ key: 'undefined-404-key' })
      .head()
      .execute()
      .catch((error) => {
        expect(error.statusCode).toEqual(404)
        expect(error.name).toEqual('NotFound')
        expect(error.method).toEqual('HEAD')
      })
  })
})
