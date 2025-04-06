import { randomUUID } from 'crypto'
import { StandalonePrice } from '@commercetools/platform-sdk'
import { apiRoot, ClientResponse } from '../test-utils'

describe('testing standalone prices API calls', function () {
  let standalonePrice: ClientResponse<StandalonePrice>
  it('should create a standalone price', async function () {
    standalonePrice = await apiRoot
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

    expect(standalonePrice.statusCode).toEqual(201)
  })

  it('should get a standalone price', async () => {
    const _standalonePrice = await apiRoot
      .standalonePrices()
      .withId({ ID: standalonePrice.body.id })
      .get()
      .execute()

    expect(_standalonePrice.statusCode).toEqual(200)
  })

  afterAll(async () => {
    // retrieve latest standalonePrice
    const _standalonePrice = await apiRoot
      .standalonePrices()
      .withId({ ID: standalonePrice.body.id })
      .get()
      .execute()

    await apiRoot
      .standalonePrices()
      .withId({ ID: _standalonePrice.body.id })
      .delete({ queryArgs: { version: _standalonePrice.body.version } })
      .execute()
  })
})
