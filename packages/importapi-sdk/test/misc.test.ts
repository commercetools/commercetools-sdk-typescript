import { ctpApiBuilder } from './helpers/ctp-api-helper'

test('check can get project info', async () => {
  const res = await ctpApiBuilder
    .importSinks()
    .get({ queryArgs: { limit: 1, offset: 0 } })
    .execute()
  expect(res.statusCode).toEqual(200)
})
