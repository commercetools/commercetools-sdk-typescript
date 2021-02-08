/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.vrap.io/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */

import {
  ImportResource,
  LocalizedString,
  ProductTypeKeyReference,
  ReferenceType,
} from './common'

export interface AttributeDefinition {
  /**
   *
   */
  readonly type: AttributeType
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly label: LocalizedString
  /**
   *
   */
  readonly isRequired: boolean
  /**
   *
   */
  readonly attributeConstraint?: AttributeConstraintEnum
  /**
   *
   */
  readonly inputTip?: LocalizedString
  /**
   *
   */
  readonly inputHint?: TextInputHint
  /**
   *
   */
  readonly isSearchable?: boolean
}
export type AttributeType =
  | AttributeBooleanType
  | AttributeDateTimeType
  | AttributeDateType
  | AttributeEnumType
  | AttributeLocalizableTextType
  | AttributeLocalizedEnumType
  | AttributeMoneyType
  | AttributeNestedType
  | AttributeNumberType
  | AttributeReferenceType
  | AttributeSetType
  | AttributeTextType
  | AttributeTimeType
export interface AttributeBooleanType {
  readonly name: 'boolean'
}
export interface AttributeDateTimeType {
  readonly name: 'datetime'
}
export interface AttributeDateType {
  readonly name: 'date'
}
export interface AttributeEnumType {
  readonly name: 'enum'
  /**
   *
   */
  readonly values: AttributePlainEnumValue[]
}
export interface AttributePlainEnumValue {
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly label: string
}
export interface AttributeLocalizableTextType {
  readonly name: 'ltext'
}
export interface AttributeLocalizedEnumType {
  readonly name: 'lenum'
  /**
   *
   */
  readonly values: AttributeLocalizedEnumValue[]
}
export interface AttributeLocalizedEnumValue {
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly label: LocalizedString
}
export interface AttributeMoneyType {
  readonly name: 'money'
}
export interface AttributeNestedType {
  readonly name: 'nested'
  /**
   *	References a product type by its key.
   *
   */
  readonly typeReference: ProductTypeKeyReference
}
export interface AttributeNumberType {
  readonly name: 'number'
}
export interface AttributeReferenceType {
  readonly name: 'reference'
  /**
   *	The type of the referenced resource.
   *
   *
   */
  readonly referenceTypeId: ReferenceType
}
export interface AttributeSetType {
  readonly name: 'set'
  /**
   *
   */
  readonly elementType: AttributeType
}
export interface AttributeTextType {
  readonly name: 'text'
}
export interface AttributeTimeType {
  readonly name: 'time'
}
export type AttributeConstraintEnum =
  | 'None'
  | 'Unique'
  | 'CombinationUnique'
  | 'SameForAll'
export type TextInputHint = 'SingleLine' | 'MultiLine'
/**
 *	Import representation for a product type.
 *
 */
export interface ProductTypeImport extends ImportResource {
  /**
   *	Maps to `ProductType.name`.
   *
   *
   */
  readonly name: string
  /**
   *	Maps to `ProductType.description`.
   *
   *
   */
  readonly description: string
  /**
   *	The product type's attributes.
   *
   *
   */
  readonly attributes?: AttributeDefinition[]
}
