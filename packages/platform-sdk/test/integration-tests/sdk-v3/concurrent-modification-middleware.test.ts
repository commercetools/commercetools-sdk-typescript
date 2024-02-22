import { apiRootV3 } from '../test-utils'

describe('Concurrent Modification Middleware', () => {
  it('should retry the request with correct version when the first time the version is wrong', async () => {
    const {
      body: {
        results: [product],
      },
    } = await apiRootV3
      .productProjections()
      .get({ queryArgs: { limit: 1 } })
      .execute()

    const productUpdateResponse = await apiRootV3
      .products()
      .withId({ ID: product.id })
      .post({
        body: {
          version: product.version + 1,
          actions: [
            {
              action: 'changeName',
              name: { en: 'test-name' + new Date().getTime() },
            },
          ],
        },
      })
      .execute()
    expect(productUpdateResponse.statusCode).toBe(200)
  })
})
