import { apiRoot } from '../test-utils'
import {
  _Money,
  ShippingMethodDraft,
  ShippingRateDraft,
  TaxCategoryResourceIdentifier,
  ZoneRateDraft,
  ZoneResourceIdentifier,
} from '../../../src'
import { randomUUID } from 'crypto'

export function createShippingMethodDraft(taxCategory, zone) {
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
  return shippingMethodDraft
}

export function createShippingMethod(shippingMethodDraft) {
  return apiRoot.shippingMethods().post({ body: shippingMethodDraft }).execute()
}

export function deleteShippingMethod(shippingMethod) {
  return apiRoot
    .shippingMethods()
    .withId({ ID: shippingMethod.body.id })
    .delete({ queryArgs: { version: shippingMethod.body.version } })
    .execute()
}
