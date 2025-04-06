import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import {
  _Money,
  ShippingMethodDraft,
  ShippingRateDraft,
  TaxCategoryResourceIdentifier,
  ZoneRateDraft,
  ZoneResourceIdentifier,
} from '../../../src'
import { ensureTaxCategory } from '../tax-category/tax-category-fixture'
import { createZone, deleteZone } from '../zone/zone-fixture'
import {
  createShippingMethod,
  createShippingMethodDraft,
  deleteShippingMethod,
} from './shipping-method-fixture'

describe('testing shipping method API calls', () => {
  let shippingMethod, zone
  it('should create a shipping method', async () => {
    zone = await createZone()
    const taxCategory = await ensureTaxCategory()
    const taxCategoryResourceIdentifier: TaxCategoryResourceIdentifier = {
      typeId: 'tax-category',
      id: taxCategory.body.id,
    }
    const zoneResourceIdentifier: ZoneResourceIdentifier = {
      typeId: 'zone',
      id: zone.body.id,
    }
    const money: _Money = {
      centAmount: 1000,
      currencyCode: 'EUR',
    }

    const shippingRateDraft: ShippingRateDraft = {
      price: money,
    }

    const zoneRateDraft: ZoneRateDraft = {
      zone: zoneResourceIdentifier,
      shippingRates: [shippingRateDraft],
    }

    const shippingMethodDraft: ShippingMethodDraft = {
      key: 'test-key-shopping-list' + randomUUID(),
      name: 'test-name-shopping-list-' + randomUUID(),
      taxCategory: taxCategoryResourceIdentifier,
      zoneRates: [zoneRateDraft],
      isDefault: false,
    }

    shippingMethod = await apiRoot
      .shippingMethods()
      .post({ body: shippingMethodDraft })
      .execute()

    expect(shippingMethod.body).toBeDefined()
    expect(shippingMethod.statusCode).toEqual(201)
  })

  it('should get a shipping method by ID', async () => {
    const getShippingMethod = await apiRoot
      .shippingMethods()
      .withId({ ID: shippingMethod.body.id })
      .get()
      .execute()

    expect(getShippingMethod).toBeDefined()
    expect(getShippingMethod.body.id).toEqual(shippingMethod.body.id)
  })

  it('should get a shipping method by key', async () => {
    const getShippingMethod = await apiRoot
      .shippingMethods()
      .withKey({ key: shippingMethod.body.key })
      .get()
      .execute()

    expect(getShippingMethod).toBeDefined()
    expect(getShippingMethod.body.key).toEqual(shippingMethod.body.key)
  })

  it('should query a shipping method', async () => {
    const queryShippingMethod = await apiRoot
      .shippingMethods()
      .get({
        queryArgs: {
          where: 'id=' + '"' + shippingMethod.body.id + '"',
        },
      })
      .execute()
    expect(queryShippingMethod).toBeDefined()
    expect(queryShippingMethod.body.results[0].id).toEqual(
      shippingMethod.body.id
    )
  })

  it('should update a shipping method by ID', async () => {
    const newKey = 'test-new-key-' + randomUUID()
    const updateShippingMethod = await apiRoot
      .shippingMethods()
      .withId({ ID: shippingMethod.body.id })
      .post({
        body: {
          version: shippingMethod.body.version,
          actions: [
            {
              action: 'setKey',
              key: newKey,
            },
          ],
        },
      })
      .execute()

    expect(updateShippingMethod.statusCode).toEqual(200)
    expect(updateShippingMethod.body.version).not.toEqual(
      shippingMethod.body.version
    )
    shippingMethod = updateShippingMethod
  })

  it('should update a shipping method by key', async () => {
    const newKey = 'test-new-key-' + randomUUID()
    const updateShippingMethod = await apiRoot
      .shippingMethods()
      .withKey({ key: shippingMethod.body.key })
      .post({
        body: {
          version: shippingMethod.body.version,
          actions: [
            {
              action: 'setKey',
              key: newKey,
            },
          ],
        },
      })
      .execute()

    expect(updateShippingMethod.statusCode).toEqual(200)
    expect(updateShippingMethod.body.version).not.toEqual(
      shippingMethod.body.version
    )

    shippingMethod = updateShippingMethod
  })

  afterAll(async () => {
    await deleteShippingMethod(shippingMethod)
    await deleteZone(zone)
  })
})
