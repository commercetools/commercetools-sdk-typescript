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

const attributeDefinitionDraftProduct: AttributeDefinitionDraft[] = [
  {
    type: {
      name: 'text',
    },
    name: 'test-text',
    label: { en: 'test-text' },
    isRequired: false,
  },
  {
    type: {
      name: 'number',
    },
    name: 'test-number',
    label: { en: 'test-number' },
    isRequired: false,
  },
  {
    type: {
      name: 'number',
    },
    name: 'test-integer',
    label: { en: 'test-integer' },
    isRequired: false,
  },
  {
    type: {
      name: 'enum',
      values: [
        {
          key: 'test',
          label: 'test',
        },
      ],
    },
    name: 'test-enum',
    label: { en: 'test-enum' },
    isRequired: false,
  },
  {
    type: {
      name: 'set',
      elementType: { name: 'text' },
    },
    name: 'test-set-text',
    label: { en: 'test-set-text' },
    isRequired: false,
  },
  {
    type: {
      name: 'set',
      elementType: { name: 'number' },
    },
    name: 'test-set-number',
    label: { en: 'test-set-number' },
    isRequired: false,
  },
  {
    type: {
      name: 'set',
      elementType: { name: 'number' },
    },
    name: 'test-set-integer',
    label: { en: 'test-set-integer' },
    isRequired: false,
  },
]

const productTypeDraft: ProductTypeDraft = {
  key: randomUUID(),
  name: 'test-name-productType-' + randomUUID(),
  description: randomUUID(),
  attributes: [attributeDefinitionDraft],
}

export const productTypeDraftForProduct: ProductTypeDraft = {
  key: 'test-productType-key-' + randomUUID(),
  name: 'test-name-productType-' + randomUUID(),
  description: 'test-productType-description-' + randomUUID(),
  attributes: attributeDefinitionDraftProduct,
}

export const createProductType = async (productTypeDraftBody?) => {
  return await apiRoot
    .productTypes()
    .post({ body: productTypeDraftBody || productTypeDraft })
    .execute()
}

export const deleteProductType = async (responseCreatedProductType) => {
  return await apiRoot
    .productTypes()
    .withId({ ID: responseCreatedProductType.body.id })
    .delete({
      queryArgs: { version: responseCreatedProductType.body.version },
    })
    .execute()
}
