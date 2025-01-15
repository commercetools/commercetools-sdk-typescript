import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'

describe('testing standalone prices API calls', function () {
  it('should create and delete a standalone price by ID', async function () {
    const responseCreatedStandalonePrices = await apiRoot
      .standalonePrices()
      .post({
        body: {
          value: {
            currencyCode: 'USD',
            centAmount: 1000,
          },
          sku: 'test-sku-' + randomUUID(),
        },
      })
      .execute()

    expect(responseCreatedStandalonePrices.statusCode).toEqual(201)

    const responseDeletedStandalonePrices = await apiRoot
      .standalonePrices()
      .withId({ ID: responseCreatedStandalonePrices.body.id })
      .delete({
        queryArgs: { version: responseCreatedStandalonePrices.body.version },
      })
      .execute()

    expect(responseDeletedStandalonePrices.statusCode).toEqual(200)
  })
})
