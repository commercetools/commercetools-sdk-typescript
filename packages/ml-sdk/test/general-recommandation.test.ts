import { mlApiBuilder } from './helpers/api-helpers'

test.skip('test general recommendations nominal scenario', async () => {
  const resp = await mlApiBuilder
    .recommendations()
    .generalCategories()
    .get({
      queryArgs: {
        productName: 'vase',
      },
    })
    .execute()

  expect(resp.statusCode).toEqual(200)
  expect(resp.body.results).toBeDefined()
})
