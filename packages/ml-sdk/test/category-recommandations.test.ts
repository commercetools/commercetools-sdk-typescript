import { withProduct } from './fixtures/product_fixtures'
import { mlApiBuilder } from './helpers/api-helpers'

test('test project recommendations', async () => {
  await withProduct(async product => {
    const resp = await mlApiBuilder
      .recommendations()
      .projectCategories()
      .withProductidValue({
        product_id: product.id,
      })
      .get()
      .execute()
    expect(resp.statusCode).toBe(200)
  })
})
