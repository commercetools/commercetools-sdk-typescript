/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
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
   *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
   *	```json
   *	{
   *	  "de": "Hundefutter",
   *	  "en": "dog food"
   *	}
   *	```
   *
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
   *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
   *	```json
   *	{
   *	  "de": "Hundefutter",
   *	  "en": "dog food"
   *	}
   *	```
   *
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
export interface IAttributeType {
  /**
   *
   */
  readonly name: string
}
export interface AttributeBooleanType extends IAttributeType {
  readonly name: 'boolean'
}
export interface AttributeDateTimeType extends IAttributeType {
  readonly name: 'datetime'
}
export interface AttributeDateType extends IAttributeType {
  readonly name: 'date'
}
export interface AttributeEnumType extends IAttributeType {
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
export interface AttributeLocalizableTextType extends IAttributeType {
  readonly name: 'ltext'
}
export interface AttributeLocalizedEnumType extends IAttributeType {
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
   *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
   *	```json
   *	{
   *	  "de": "Hundefutter",
   *	  "en": "dog food"
   *	}
   *	```
   *
   *
   */
  readonly label: LocalizedString
}
export interface AttributeMoneyType extends IAttributeType {
  readonly name: 'money'
}
export interface AttributeNestedType extends IAttributeType {
  readonly name: 'nested'
  /**
   *	References a product type by key.
   *
   */
  readonly typeReference: ProductTypeKeyReference
}
export interface AttributeNumberType extends IAttributeType {
  readonly name: 'number'
}
export interface AttributeReferenceType extends IAttributeType {
  readonly name: 'reference'
  /**
   *	The type of the referenced resource.
   *
   *
   */
  readonly referenceTypeId: ReferenceType
}
export interface AttributeSetType extends IAttributeType {
  readonly name: 'set'
  /**
   *
   */
  readonly elementType: AttributeType
}
export interface AttributeTextType extends IAttributeType {
  readonly name: 'text'
}
export interface AttributeTimeType extends IAttributeType {
  readonly name: 'time'
}
export enum AttributeConstraintEnumValues {
  CombinationUnique = 'CombinationUnique',
  None = 'None',
  SameForAll = 'SameForAll',
  Unique = 'Unique',
}

export type AttributeConstraintEnum =
  | 'CombinationUnique'
  | 'None'
  | 'SameForAll'
  | 'Unique'
  | (string & {})
export enum TextInputHintValues {
  MultiLine = 'MultiLine',
  SingleLine = 'SingleLine',
}

export type TextInputHint = 'MultiLine' | 'SingleLine' | (string & {})
/**
 *	The data representation for a ProductType to be imported that is persisted as a [ProductType](ctp:api:type:ProductType) in the Project.
 *
 */
export interface ProductTypeImport extends ImportResource {
  /**
   *	User-defined unique identifier. If a [ProductType](ctp:api:type:ProductType) with this `key` exists, it will be updated with the imported data.
   *
   */
  readonly key: string
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
   *	The `attributes` of [ProductType](ctp:api:type:ProductType).
   *
   *
   */
  readonly attributes?: AttributeDefinition[]
}
