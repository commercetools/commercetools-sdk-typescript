import { apiRoot } from '../test-utils'
import { CartDiscountResourceIdentifier, DiscountCodeDraft } from '../../../src'
import { randomUUID } from 'crypto'

export const createDiscountCodeDraft = (cartDiscount) => {
  const cartDiscountResourceIdentifier: CartDiscountResourceIdentifier[] = [
    {
      typeId: 'cart-discount',
      id: cartDiscount.body.id,
    },
  ]

  const discountCodeDraft: DiscountCodeDraft = {
    name: { en: 'test-discount-code-' + randomUUID() },
    code: randomUUID(),
    cartDiscounts: cartDiscountResourceIdentifier,
    cartPredicate: 'country="DE"',
    isActive: false,
  }

  return discountCodeDraft
}

export const createDiscountCode = async (discountCodeDraft) =>
  apiRoot.discountCodes().post({ body: discountCodeDraft }).execute()

export const deleteDiscountCode = async (discountCode) =>
  apiRoot
    .discountCodes()
    .withId({ ID: discountCode.body.id })
    .delete({ queryArgs: { version: discountCode.body.version } })
    .execute()
