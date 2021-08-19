import { ctpApiBuilder } from './helpers/api-helpers'

test.skip('check can get project info', async () => {
  const res = await ctpApiBuilder
    .get({ queryArgs: { limit: 1, offset: 0 } })
    .execute()
  expect(res.statusCode).toEqual(200)
})
