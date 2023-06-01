import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
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
  sortOrder: '0.4192',
  isActive: false,
}

export const createProductDiscount = async () => {
  return await apiRoot
    .productDiscounts()
    .post({ body: productDiscountDraft })
    .execute()
}

export const deleteProductDiscount = async (responseCreatedProductDiscount) => {
  return await apiRoot
    .productDiscounts()
    .withId({ ID: responseCreatedProductDiscount.body.id })
    .delete({
      queryArgs: { version: responseCreatedProductDiscount.body.version },
    })
    .execute()
}
