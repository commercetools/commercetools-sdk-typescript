import { apiRoot } from '../test-utils'

export const createDiscountCode = async (discountCodeDraft) =>
  apiRoot.discountCodes().post({ body: discountCodeDraft }).execute()

export const deleteDiscountCode = async (discountCode) =>
  apiRoot
    .discountCodes()
    .withId({ ID: discountCode.body.id })
    .delete({ queryArgs: { version: discountCode.body.version } })
    .execute()
