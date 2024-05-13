import { ClientBuilder as ClientBuilderV3 } from '@commercetools/ts-client/src'
import {
  authMiddlewareOptions,
  httpMiddlewareOptionsV3,
  projectKey,
} from '../test-utils'
import { createApiBuilderFromCtpClient } from '../../../src'

describe('testing error cases', () => {
  it('should throw error when a product type is not found', async () => {
    try {
      const ctpClientV3 = new ClientBuilderV3()
        .withHttpMiddleware(httpMiddlewareOptionsV3)
        .withConcurrentModificationMiddleware()
        .withClientCredentialsFlow(authMiddlewareOptions)
        .build()

      const apiRootV3 = createApiBuilderFromCtpClient(
        ctpClientV3
      ).withProjectKey({
        projectKey,
      })

      await apiRootV3
        .productTypes()
        .withId({ ID: 'non-existing-id' })
        .get()
        .execute()

      throw new Error('Should have thrown an error')
    } catch (e) {
      expect(e.statusCode).toEqual(404)
    }
  })
})
