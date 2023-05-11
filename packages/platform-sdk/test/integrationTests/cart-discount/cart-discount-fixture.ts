import {
  CartDiscountDraft,
  CartDiscountShippingCostTarget,
  CartDiscountValueDraft,
  CartDiscountValueRelativeDraft,
} from '../../../src'
import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'

const cartDiscountValueDraft: CartDiscountValueRelativeDraft = {
  type: 'relative',
  permyriad: 10,
}

const cartDiscountShippingCostTarget: CartDiscountShippingCostTarget = {
  type: 'shipping',
}
const cartDiscountDraft: CartDiscountDraft = {
  key: randomUUID(),
  name: { en: 'test-name-cartDiscount' + randomUUID() },
  value: cartDiscountValueDraft,
  cartPredicate: 'country="DE"',
  target: cartDiscountShippingCostTarget,
  sortOrder: '0.61',
}

export function createCartDiscount() {
  return apiRoot.cartDiscounts().post({ body: cartDiscountDraft }).execute()
}

export function deleteCartDiscount(responseCreatedCartDiscount) {
  return apiRoot
    .cartDiscounts()
    .withId({ ID: responseCreatedCartDiscount.body.id })
    .delete({
      queryArgs: { version: responseCreatedCartDiscount.body.version },
    })
    .execute()
}
