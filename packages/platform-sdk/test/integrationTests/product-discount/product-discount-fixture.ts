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
  sortOrder: '0.419',
  isActive: false,
}

export function createProductDiscount() {
  return apiRoot
    .productDiscounts()
    .post({ body: productDiscountDraft })
    .execute()
}

export function deleteProductDiscount(responseCreatedProductDiscount) {
  return apiRoot
    .productDiscounts()
    .withId({ ID: responseCreatedProductDiscount.body.id })
    .delete({
      queryArgs: { version: responseCreatedProductDiscount.body.version },
    })
    .execute()
}
