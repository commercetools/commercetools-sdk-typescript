import { randomUUID } from 'crypto'
import { apiRoot, SORT_ORDER } from '../test-utils'
import {
  ProductDiscountDraft,
  ProductDiscountValueRelativeDraft,
} from '../../../src'

const productDiscountValueDraft: ProductDiscountValueRelativeDraft = {
  type: 'relative',
  permyriad: 10,
}

const productDiscountDraft: ProductDiscountDraft = {
  key: randomUUID(),
  name: { en: 'test-name-productDiscount' + randomUUID() },
  value: productDiscountValueDraft,
  predicate: 'product.key="random-key"',
  sortOrder: SORT_ORDER,
  isActive: false,
}

export const createProductDiscount = async () => {
  return await apiRoot
    .productDiscounts()
    .post({ body: productDiscountDraft })
    .execute()
}

export const deleteProductDiscount = async (responseCreatedProductDiscount) => {
  const productDiscount = await apiRoot
    .productDiscounts()
    .withKey({ key: responseCreatedProductDiscount.body.key })
    .get()
    .execute()

  await apiRoot
    .productDiscounts()
    .withId({ ID: productDiscount.body.id })
    .delete({
      queryArgs: { version: productDiscount.body.version },
    })
    .execute()
}
