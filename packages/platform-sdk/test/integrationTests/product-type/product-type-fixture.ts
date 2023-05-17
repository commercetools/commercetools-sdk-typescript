import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { AttributeDefinitionDraft, ProductTypeDraft } from '../../../src'

const attributeDefinitionDraft: AttributeDefinitionDraft = {
  type: {
    name: 'text',
  },
  name: 'test-name-attribute-definition' + randomUUID(),
  label: { en: 'test-label-attribute-definition' + randomUUID() },
  isRequired: true,
  attributeConstraint: 'None',
  inputTip: { en: 'test-inputTip-attribute-definition' + randomUUID() },
  inputHint: 'SingleLine',
  isSearchable: true,
}

const productTypeDraft: ProductTypeDraft = {
  key: randomUUID(),
  name: 'test-name-productType' + randomUUID(),
  description: randomUUID(),
  attributes: [attributeDefinitionDraft],
}

export function createProductType() {
  return apiRoot.productTypes().post({ body: productTypeDraft }).execute()
}

export function deleteProductType(responseCreatedProductType) {
  return apiRoot
    .productTypes()
    .withId({ ID: responseCreatedProductType.body.id })
    .delete({
      queryArgs: { version: responseCreatedProductType.body.version },
    })
    .execute()
}
