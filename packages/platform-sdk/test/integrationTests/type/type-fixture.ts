import { apiRoot } from '../test-utils'
import {
  CustomFieldEnumValue,
  FieldDefinition,
  FieldType,
  TypeDraft,
} from '../../../src'
import { randomUUID } from 'crypto'

const key = 'test-key-type' + randomUUID()

const fieldTypeLocalized: FieldType = {
  name: 'LocalizedString',
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
    type: fieldTypeLocalized,
    name: randomUUID(),
    label: { en: 'test-label' + randomUUID() },
    required: false,
  },
  {
    type: fieldTypeEnum,
    name: randomUUID(),
    label: { en: 'test-label' + randomUUID() },
    required: false,
  },
  {
    type: fieldTypeEnum,
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

export function createType() {
  return apiRoot.types().post({ body: typeDraft }).execute()
}

export function deleteType(responseCreatedType) {
  return apiRoot
    .types()
    .withId({ ID: responseCreatedType.body.id })
    .delete({ queryArgs: { version: responseCreatedType.body.version } })
    .execute()
}
