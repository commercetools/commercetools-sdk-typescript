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
  key: 'test-key-' + randomUUID(),
  name: 'test-name-' + randomUUID(),
  rates: [taxRate],
}

export function createTaxCategory(taxCategoryDraftBody?: TaxCategoryDraft) {
  return apiRoot
    .taxCategories()
    .post({ body: taxCategoryDraftBody || taxCategoryDraft })
    .execute()
}

export function deleteTaxCategory(responseCreatedTaxCategory) {
  return apiRoot
    .taxCategories()
    .withId({ ID: responseCreatedTaxCategory.body.id })
    .delete({
      queryArgs: { version: responseCreatedTaxCategory.body.version },
    })
    .execute()
}
