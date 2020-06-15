import { ctpApiBuilder } from './helpers/ctp-api-helper'

test('check can get project info', async () => {
  const res = await ctpApiBuilder.get().execute()
  expect(res.statusCode).toEqual(200)
  expect(res.body.key).toBeDefined()
})
