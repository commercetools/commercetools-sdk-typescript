import { historyApiBuilder } from './helpers/api-helpers'

test('check can get project info', async () => {
  const res = await historyApiBuilder
    .get({ queryArgs: { limit: 1, offset: 0 } })
    .execute()
  expect(res.statusCode).toEqual(200)
})
