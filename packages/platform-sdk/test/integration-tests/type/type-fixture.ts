import { apiRoot } from '../test-utils'
import {
  CustomFieldEnumValue,
  CustomFieldLocalizedStringType,
  CustomFieldStringType,
  FieldDefinition,
  FieldType,
  TaxCategoryDraft,
  TypeDraft,
} from '../../../src'
import { randomUUID } from 'crypto'

const key = 'test-key-type' + randomUUID()

const fieldTypeLocalized: CustomFieldLocalizedStringType = {
  name: 'LocalizedString',
}

const fieldTypeString: CustomFieldStringType = {
  name: 'String',
}

const customFieldEnumValue: CustomFieldEnumValue[] = [
  {
    key,
    label: 'test-custom-field-enum' + randomUUID(),
  },
]

const fieldTypeEnum: FieldType = {
  name: 'Enum',
  values: customFieldEnumValue,
}

const fieldDefinitions: FieldDefinition[] = [
  {
    type: fieldTypeString,
    name: 'type-field-name-' + randomUUID(),
    label: { en: 'test-label' + randomUUID() },
    required: false,
  },
  {
    type: fieldTypeLocalized,
    name: 'type-field-name-' + randomUUID(),
    label: { en: 'test-label' + randomUUID() },
    required: false,
  },
  {
    type: fieldTypeEnum,
    name: 'type-field-name-' + randomUUID(),
    label: { en: 'test-label' + randomUUID() },
    required: false,
  },
  {
    type: fieldTypeString,
    name: 'string-field',
    label: { en: 'test-label' + randomUUID() },
    required: false,
    inputHint: 'SingleLine',
  },
]

const typeDraft: TypeDraft = {
  key,
  name: { en: 'test-name-type' + randomUUID() },
  resourceTypeIds: [
    'asset',
    'category',
    'order',
    'payment-interface-interaction',
    'payment',
    'cart-discount',
  ],
  fieldDefinitions,
}

export const createType = async (typeDraftBody?: TypeDraft) => {
  return await apiRoot
    .types()
    .post({ body: typeDraftBody || typeDraft })
    .execute()
}

export const deleteType = async (responseCreatedType) => {
  return await apiRoot
    .types()
    .withId({ ID: responseCreatedType.body.id })
    .delete({ queryArgs: { version: responseCreatedType.body.version } })
    .execute()
}
