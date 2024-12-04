/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { ImportResource, LocalizedString } from './common'

/**
 *	Provides a visual representation type for this field. It is only relevant for string-based field types like [CustomFieldStringType](ctp:import:type:CustomFieldStringType) and [CustomFieldLocalizedStringType](ctp:import:type:CustomFieldLocalizedStringType).
 *
 */
export type TypeTextInputHint = 'MultiLine' | 'SingleLine' | string
/**
 *	IDs indicating the [type of resource](ctp:api:type:ResourceTypeId). Maps to `Type.resourceTypeIds`.
 *
 */
export type ResourceTypeId =
  | 'address'
  | 'asset'
  | 'business-unit'
  | 'cart-discount'
  | 'category'
  | 'channel'
  | 'custom-line-item'
  | 'customer'
  | 'customer-group'
  | 'discount-code'
  | 'inventory-entry'
  | 'line-item'
  | 'order'
  | 'order-delivery'
  | 'order-edit'
  | 'order-parcel'
  | 'order-return-item'
  | 'payment'
  | 'payment-interface-interaction'
  | 'product-price'
  | 'product-selection'
  | 'quote'
  | 'review'
  | 'shipping'
  | 'shipping-method'
  | 'shopping-list'
  | 'shopping-list-text-line-item'
  | 'standalone-price'
  | 'store'
  | 'transaction'
  | string
export type FieldType =
  | CustomFieldBooleanType
  | CustomFieldDateTimeType
  | CustomFieldDateType
  | CustomFieldEnumType
  | CustomFieldLocalizedEnumType
  | CustomFieldLocalizedStringType
  | CustomFieldMoneyType
  | CustomFieldNumberType
  | CustomFieldReferenceType
  | CustomFieldSetType
  | CustomFieldStringType
  | CustomFieldTimeType
/**
 *	Field type for Boolean values.
 */
export interface CustomFieldBooleanType {
  readonly name: 'Boolean'
}
/**
 *	Field type for [DateTime](ctp:api:type:DateTime) values.
 */
export interface CustomFieldDateTimeType {
  readonly name: 'DateTime'
}
/**
 *	Field type for [Date](ctp:api:type:Date) values.
 */
export interface CustomFieldDateType {
  readonly name: 'Date'
}
/**
 *	Field type for enum values.
 */
export interface CustomFieldEnumType {
  readonly name: 'Enum'
  /**
   *	Allowed values.
   *
   */
  readonly values: CustomFieldEnumValue[]
}
/**
 *	Defines an allowed value of a [CustomFieldEnumType](ctp:import:type:CustomFieldEnumType) field.
 */
export interface CustomFieldEnumValue {
  /**
   *	Key of the value used as a programmatic identifier.
   *
   */
  readonly key: string
  /**
   *	Descriptive label of the value.
   *
   */
  readonly label: string
}
/**
 *	Field type for localized enum values.
 */
export interface CustomFieldLocalizedEnumType {
  readonly name: 'LocalizedEnum'
  /**
   *	Allowed values.
   *
   */
  readonly values: CustomFieldLocalizedEnumValue[]
}
/**
 *	Defines an allowed value of a [CustomFieldLocalizedEnumType](ctp:import:type:CustomFieldLocalizedEnumType) field.
 */
export interface CustomFieldLocalizedEnumValue {
  /**
   *	Key of the value used as a programmatic identifier.
   *
   */
  readonly key: string
  /**
   *	Descriptive localized label of the value.
   *
   */
  readonly label: LocalizedString
}
/**
 *	Field type for [LocalizedString](ctp:api:type:LocalizedString) values.
 */
export interface CustomFieldLocalizedStringType {
  readonly name: 'LocalizedString'
}
/**
 *	Field type for [CentPrecisionMoney](ctp:api:type:CentPrecisionMoney) values.
 */
export interface CustomFieldMoneyType {
  readonly name: 'Money'
}
/**
 *	Field type for number values.
 */
export interface CustomFieldNumberType {
  readonly name: 'Number'
}
/**
 *	Field type for [Reference](ctp:api:type:Reference) values.
 */
export interface CustomFieldReferenceType {
  readonly name: 'Reference'
  /**
   *	Resource type the Custom Field can reference.
   *
   */
  readonly referenceTypeId: CustomFieldReferenceValue
}
/**
 *	Defines which resource type a [CustomFieldReferenceType](ctp:import:type:CustomFieldReferenceType) can reference.
 */
export type CustomFieldReferenceValue =
  | 'associate-role'
  | 'business-unit'
  | 'cart'
  | 'category'
  | 'channel'
  | 'customer'
  | 'customer-group'
  | 'key-value-document'
  | 'order'
  | 'product'
  | 'product-type'
  | 'review'
  | 'shipping-method'
  | 'state'
  | 'zone'
  | string
/**
 *	Values of a SetType Custom Field are sets of values of the specified `elementType` (without duplicate elements).
 */
export interface CustomFieldSetType {
  readonly name: 'Set'
  /**
   *	Field type of the elements in the set.
   *
   */
  readonly elementType: FieldType
}
/**
 *	Field type for string values.
 */
export interface CustomFieldStringType {
  readonly name: 'String'
}
/**
 *	Field type for [Time](ctp:api:type:Time) values.
 */
export interface CustomFieldTimeType {
  readonly name: 'Time'
}
/**
 *	Defines a [Custom Field](/projects/custom-fields) and its meta-information. Maps to `Type.FieldDefinition`.
 *
 */
export interface FieldDefinition {
  /**
   *	Data type of the Custom Field to define.
   *
   */
  readonly type: FieldType
  /**
   *	Name of the Custom Field to define. Must be unique for a given [ResourceTypeId](ctp:import:type:ResourceTypeId). In case there is a FieldDefinition with the same `name` in another Type, both FieldDefinitions must have the same `type`. This value cannot be changed after the Type is imported.
   *
   *
   */
  readonly name: string
  /**
   *	A human-readable label for the field.
   *
   */
  readonly label: LocalizedString
  /**
   *	Defines whether the field is required to have a value. This value cannot be changed after the Type is imported.
   *
   */
  readonly required: boolean
  /**
   *	Provides a visual representation type for this field. It is only relevant for string-based field types like [CustomFieldStringType](ctp:import:type:CustomFieldStringType) and [CustomFieldLocalizedStringType](ctp:import:type:CustomFieldLocalizedStringType).
   *
   *
   */
  readonly inputHint?: TypeTextInputHint
}
/**
 *	The data representation for a Type to be imported that is persisted as a [Type](ctp:api:type:Type) in the Project.
 *
 */
export interface TypeImport extends ImportResource {
  /**
   *	User-defined unique identifier for the Type. If a [Type](ctp:api:type:Type) with this `key` exists, it will be updated with the imported data.
   *
   *
   */
  readonly key: string
  /**
   *	Maps to `Type.name`.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	Maps to `Type.description`.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Maps to `Type.resourceTypeIds`. This value cannot be changed after the Type is imported.
   *
   *
   */
  readonly resourceTypeIds: ResourceTypeId[]
  /**
   *	Maps to `Type.fieldDefinitions`.
   *
   *
   */
  readonly fieldDefinitions?: FieldDefinition[]
}
