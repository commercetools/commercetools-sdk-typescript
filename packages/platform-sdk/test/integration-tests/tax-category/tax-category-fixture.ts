import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { TaxCategoryDraft, TaxRateDraft } from '../../../src'

const taxRate: TaxRateDraft = {
  name: 'test-tax-rate-name-' + randomUUID(),
  key: 'test-tax-rate-key-' + randomUUID(),
  amount: 0.19,
  includedInPrice: true,
  country: 'DE',
  state: 'Berlin',
}

const taxCategoryDraft: TaxCategoryDraft = {
  key: 'test-key-tax-category',
  name: 'test-name-' + randomUUID(),
  rates: [taxRate],
}

export const ensureTaxCategory = async (
  taxCategoryDraftBody?: TaxCategoryDraft
) => {
  try {
    return await apiRoot
      .taxCategories()
      .withKey({ key: taxCategoryDraftBody?.key || taxCategoryDraft.key })
      .get()
      .execute()
  } catch (e) {
    return await createTaxCategory(taxCategoryDraftBody || taxCategoryDraft)
  }
}

export const createTaxCategory = async (
  taxCategoryDraftBody: TaxCategoryDraft
) => {
  return await apiRoot
    .taxCategories()
    .post({ body: taxCategoryDraftBody })
    .execute()
}

export const deleteTaxCategory = async (responseCreatedTaxCategory) => {
  return apiRoot
    .taxCategories()
    .withId({ ID: responseCreatedTaxCategory.body.id })
    .delete({
      queryArgs: { version: responseCreatedTaxCategory.body.version },
    })
    .execute()
}
