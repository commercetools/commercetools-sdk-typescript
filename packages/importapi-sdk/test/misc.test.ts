import { ctpApiBuilder } from './helpers/ctp-api-helper'

test.skip('check can get project info', async () => {
  const res = await ctpApiBuilder
    .importContainers()
    .get({ queryArgs: { limit: 1, offset: 0 } })
    .execute()
  expect(res.statusCode).toEqual(200)
})
