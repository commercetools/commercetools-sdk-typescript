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
import {
  createTaxCategory,
  deleteTaxCategory,
} from '../tax-category/tax-category-fixture'
import { createZone, deleteZone } from '../zone/zone-fixture'
import {
  createShippingMethod,
  createShippingMethodDraft,
  deleteShippingMethod,
} from './shipping-method-fixture'

describe('testing shipping method API calls', () => {
  it('should create and delete a shipping method by ID', async () => {
    const zone = await createZone()
    const taxCategory = await createTaxCategory()
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

    const responseCreatedShippingMethod = await apiRoot
      .shippingMethods()
      .post({ body: shippingMethodDraft })
      .execute()

    expect(responseCreatedShippingMethod.statusCode).toEqual(201)
    expect(responseCreatedShippingMethod.body).not.toBe(null)

    const responseShippingMethodDeleted = await apiRoot
      .shippingMethods()
      .withId({ ID: responseCreatedShippingMethod.body.id })
      .delete({
        queryArgs: { version: responseCreatedShippingMethod.body.version },
      })
      .execute()
    await deleteTaxCategory(taxCategory)
    await deleteZone(zone)

    expect(responseShippingMethodDeleted.statusCode).toEqual(200)
  })

  it('should get a shipping method by ID', async () => {
    const zone = await createZone()
    const taxCategory = await createTaxCategory()
    const shippingMethodDraft = await createShippingMethodDraft(
      taxCategory,
      zone
    )
    const shippingMethod = await createShippingMethod(shippingMethodDraft)

    const getShippingMethod = await apiRoot
      .shippingMethods()
      .withId({ ID: shippingMethod.body.id })
      .get()
      .execute()

    expect(getShippingMethod).not.toBe(null)
    expect(getShippingMethod.body.id).toEqual(shippingMethod.body.id)

    await deleteShippingMethod(shippingMethod)
    await deleteTaxCategory(taxCategory)
    await deleteZone(zone)
  })

  it('should get a shipping method by key', async () => {
    const zone = await createZone()
    const taxCategory = await createTaxCategory()
    const shippingMethodDraft = await createShippingMethodDraft(
      taxCategory,
      zone
    )
    const shippingMethod = await createShippingMethod(shippingMethodDraft)

    const getShippingMethod = await apiRoot
      .shippingMethods()
      .withKey({ key: shippingMethod.body.key })
      .get()
      .execute()

    expect(getShippingMethod).not.toBe(null)
    expect(getShippingMethod.body.key).toEqual(shippingMethod.body.key)

    await deleteShippingMethod(shippingMethod)
    await deleteTaxCategory(taxCategory)
    await deleteZone(zone)
  })

  it('should query a shipping method', async () => {
    const zone = await createZone()
    const taxCategory = await createTaxCategory()
    const shippingMethodDraft = await createShippingMethodDraft(
      taxCategory,
      zone
    )
    const shippingMethod = await createShippingMethod(shippingMethodDraft)
    const queryShippingMethod = await apiRoot
      .shippingMethods()
      .get({
        queryArgs: {
          where: 'id=' + '"' + shippingMethod.body.id + '"',
        },
      })
      .execute()
    expect(queryShippingMethod).not.toBe(null)
    expect(queryShippingMethod.body.results[0].id).toEqual(
      shippingMethod.body.id
    )

    await deleteShippingMethod(shippingMethod)
    await deleteTaxCategory(taxCategory)
    await deleteZone(zone)
  })

  it('should update a shipping method by ID', async () => {
    const zone = await createZone()
    const taxCategory = await createTaxCategory()
    const shippingMethodDraft = await createShippingMethodDraft(
      taxCategory,
      zone
    )
    const shippingMethod = await createShippingMethod(shippingMethodDraft)

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

    expect(updateShippingMethod.body.version).not.toBe(
      shippingMethod.body.version
    )
    expect(updateShippingMethod.statusCode).toEqual(200)

    await deleteShippingMethod(updateShippingMethod)
    await deleteTaxCategory(taxCategory)
    await deleteZone(zone)
  })

  it('should update a shipping method by key', async () => {
    const zone = await createZone()
    const taxCategory = await createTaxCategory()
    const shippingMethodDraft = await createShippingMethodDraft(
      taxCategory,
      zone
    )
    const shippingMethod = await createShippingMethod(shippingMethodDraft)

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

    expect(updateShippingMethod.body.version).not.toBe(
      shippingMethod.body.version
    )
    expect(updateShippingMethod.statusCode).toEqual(200)

    await deleteShippingMethod(updateShippingMethod)
    await deleteTaxCategory(taxCategory)
    await deleteZone(zone)
  })

  it('should delete a shipping method by Key', async () => {
    const zone = await createZone()
    const taxCategory = await createTaxCategory()
    const shippingMethodDraft = await createShippingMethodDraft(
      taxCategory,
      zone
    )
    const shippingMethod = await createShippingMethod(shippingMethodDraft)

    const responseShippingMethodDeleted = await apiRoot
      .shippingMethods()
      .withKey({ key: shippingMethod.body.key })
      .delete({
        queryArgs: {
          version: shippingMethod.body.version,
        },
      })
      .execute()

    expect(responseShippingMethodDeleted.statusCode).toEqual(200)
    await deleteTaxCategory(taxCategory)
    await deleteZone(zone)
  })
})
