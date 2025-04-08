import { apiRoot, randomString } from '../test-utils'
import { StandalonePricesFixtures } from './standalone-prices-fixtures'

describe('testing standalone prices API calls', function () {
  it('should create a standalone price', async function () {
    const key = `standalone-key-${randomString()}`

    await StandalonePricesFixtures.withStandalonePrice(
      (draft) =>
        StandalonePricesFixtures.defaultStandaloneDraftWithKey(draft, key),
      (standalonePrice) => {
        expect(standalonePrice.body?.key).toEqual(key)
      }
    )
  })

  it('should retrieve a standalone price by key', async function () {
    const key = `standalone-key-${randomString()}`

    await StandalonePricesFixtures.withStandalonePrice(
      (draft) =>
        StandalonePricesFixtures.defaultStandaloneDraftWithKey(draft, key),
      async (standalonePrice) => {
        const res = await apiRoot
          .standalonePrices()
          .withId({ ID: standalonePrice.body!.id })
          .get()
          .execute()

        expect(res.body.key).toEqual(key)
        expect(res.body.key).toEqual(standalonePrice.body?.key)
      }
    )
  })
})
