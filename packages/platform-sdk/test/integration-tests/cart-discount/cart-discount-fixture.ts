import {
  CartDiscountDraft,
  CartDiscountShippingCostTarget,
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
  sortOrder: '0.12345',
  isActive: false,
  requiresDiscountCode: true,
}

export const createCartDiscount = async (cartDiscountDraftBody?) => {
  return await apiRoot
    .cartDiscounts()
    .post({ body: cartDiscountDraftBody || cartDiscountDraft })
    .execute()
}
export const deleteCartDiscount = async (responseCreatedCartDiscount) => {
  return await apiRoot
    .cartDiscounts()
    .withId({ ID: responseCreatedCartDiscount.body.id })
    .delete({
      queryArgs: { version: responseCreatedCartDiscount.body.version },
    })
    .execute()
}
