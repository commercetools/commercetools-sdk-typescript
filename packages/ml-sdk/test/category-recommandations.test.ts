import { withProduct } from './fixtures/product_fixtures'
import { mlApiBuilder } from './helpers/api-helpers'

test.skip('test project recommendations', async () => {
  await withProduct(async (product) => {
    const resp = await mlApiBuilder
      .recommendations()
      .projectCategories()
      .withProductId({
        productId: product.id,
      })
      .get()
      .execute()
    expect(resp.statusCode).toBe(200)
  })
}, 10000)
