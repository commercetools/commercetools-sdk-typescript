/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  BaseResource,
  CreatedBy,
  LastModifiedBy,
  LocalizedString,
} from './common'

/**
 *	Defines an allowed value of a [CustomFieldEnumType](ctp:api:type:CustomFieldEnumType) field.
 *
 */
export interface CustomFieldEnumValue {
  /**
   *	Key of the value used as a programmatic identifier.
   *
   *
   */
  readonly key: string
  /**
   *	Descriptive label of the value.
   *
   *
   */
  readonly label: string
}
/**
 *	Defines an allowed value of a [CustomFieldLocalizedEnumType](ctp:api:type:CustomFieldLocalizedEnumType) field.
 *
 */
export interface CustomFieldLocalizedEnumValue {
  /**
   *	Key of the value used as a programmatic identifier.
   *
   *
   */
  readonly key: string
  /**
   *	Descriptive localized label of the value.
   *
   *
   */
  readonly label: LocalizedString
}
/**
 *	Defines which resource type a [CustomFieldReferenceType](ctp:api:type:CustomFieldReferenceType) can reference.
 *
 */
export type CustomFieldReferenceValue =
  | 'cart'
  | 'category'
  | 'channel'
  | 'customer'
  | 'key-value-document'
  | 'order'
  | 'product'
  | 'product-type'
  | 'review'
  | 'shipping-method'
  | 'state'
  | 'zone'
/**
 *	Serves as value of the `custom` field on a resource or data type customized with a [Type](ctp:api:type:Type).
 *
 */
export interface CustomFields {
  /**
   *	Reference to the [Type](ctp:api:type:Type) that holds the [FieldDefinitions](ctp:api:type:FieldDefinition) for the Custom Fields.
   *
   *
   */
  readonly type: TypeReference
  /**
   *	Object containing the Custom Fields for the [customized resource or data type](/../api/projects/types#list-of-customizable-data-types).
   *
   *
   */
  readonly fields: FieldContainer
}
/**
 *	The representation used when creating or updating a [customizable data type](/../api/projects/types#list-of-customizable-data-types) with Custom Fields.
 *
 */
export interface CustomFieldsDraft {
  /**
   *	`id` or `key` of the [Type](ctp:api:type:Type).
   *
   *
   */
  readonly type: TypeResourceIdentifier
  /**
   *	Object containing the Custom Fields for the [customized resource or data type](/../api/projects/types#list-of-customizable-data-types).
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface FieldContainer {
  [key: string]: any
}
/**
 *	Defines a [Custom Field](/../api/projects/custom-fields) and its meta-information.
 *	This FieldDefinition is similar to an [AttributeDefinition](ctp:api:type:AttributeDefinition) of [Product Types](/../api/projects/productTypes).
 *
 */
export interface FieldDefinition {
  /**
   *	Data type of the Custom Field to define.
   *
   */
  readonly type: FieldType
  /**
   *	Name of the Custom Field to define.
   *	Must be unique for a given [ResourceTypeId](ctp:api:type:ResourceTypeId).
   *	In case there is a FieldDefinition with the same `name` in another [Type](ctp:api:type:Type), both FieldDefinitions must have the same `type`.
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
   *	Defines whether the field is required to have a value.
   *
   */
  readonly required: boolean
  /**
   *	Must be either `SingleLine` or `MultiLine`.
   *	Defines the visual representation of the field in user interfaces like the Merchant Center.
   *	It is only relevant for string-based [FieldTypes](ctp:api:type:FieldType) like [CustomFieldStringType](ctp:api:type:CustomFieldStringType) and [CustomFieldLocalizedStringType](ctp:api:type:CustomFieldLocalizedStringType).
   *
   */
  readonly inputHint?: TypeTextInputHint
}
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
 *
 */
export interface CustomFieldBooleanType {
  readonly name: 'Boolean'
}
/**
 *	Field type for [DateTime](ctp:api:type:DateTime) values.
 *
 */
export interface CustomFieldDateTimeType {
  readonly name: 'DateTime'
}
/**
 *	Field type for [Date](ctp:api:type:Date) values.
 *
 */
export interface CustomFieldDateType {
  readonly name: 'Date'
}
/**
 *	Field type for enum values.
 *
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
 *	Field type for localized enum values.
 *
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
 *	Field type for [LocalizedString](ctp:api:type:LocalizedString) values.
 *
 */
export interface CustomFieldLocalizedStringType {
  readonly name: 'LocalizedString'
}
/**
 *	Field type for [CentPrecisionMoney](ctp:api:type:CentPrecisionMoney) values.
 *
 */
export interface CustomFieldMoneyType {
  readonly name: 'Money'
}
/**
 *	Field type for number values.
 *
 */
export interface CustomFieldNumberType {
  readonly name: 'Number'
}
/**
 *	Field type for [Reference](ctp:api:type:Reference) values.
 *
 */
export interface CustomFieldReferenceType {
  readonly name: 'Reference'
  /**
   *	Resource type the Custom Field can reference.
   *
   *
   */
  readonly referenceTypeId: CustomFieldReferenceValue
}
/**
 *	Values of a SetType Custom Field are sets of values of the specified `elementType` (without duplicate elements).
 *
 */
export interface CustomFieldSetType {
  readonly name: 'Set'
  /**
   *	Field type of the elements in the set.
   *
   *
   */
  readonly elementType: FieldType
}
/**
 *	Field type for string values.
 *
 */
export interface CustomFieldStringType {
  readonly name: 'String'
}
/**
 *	Field type for [Time](ctp:api:type:Time) values.
 *
 */
export interface CustomFieldTimeType {
  readonly name: 'Time'
}
/**
 *	IDs indicating the [customizable resources and data types](/../api/projects/types#list-of-customizable-data-types).
 *
 */
export type ResourceTypeId =
  | 'address'
  | 'asset'
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
  | 'review'
  | 'shipping-method'
  | 'shopping-list'
  | 'shopping-list-text-line-item'
  | 'store'
  | 'transaction'
export interface Type extends BaseResource {
  /**
   *	Platform-generated unique identifier of the Type.
   *
   */
  readonly id: string
  /**
   *	Current version of the Type.
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the Type was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Type was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/client-logging#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	User-defined unique identifier of the Type.
   *
   */
  readonly key: string
  /**
   *	Name of the Type.
   *
   */
  readonly name: LocalizedString
  /**
   *	Description of the Type.
   *
   */
  readonly description?: LocalizedString
  /**
   *	Resources and/or data types for which the Type is defined.
   *
   *
   */
  readonly resourceTypeIds: ResourceTypeId[]
  /**
   *	Defines Custom Fields.
   *
   *
   */
  readonly fieldDefinitions: FieldDefinition[]
}
export interface TypeDraft {
  /**
   *	User-defined unique identifier for the Type.
   *
   *
   */
  readonly key: string
  /**
   *	Name of the Type.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	Description of the Type.
   *
   */
  readonly description?: LocalizedString
  /**
   *	Resources and/or data types for which the Type is defined.
   *
   *
   */
  readonly resourceTypeIds: ResourceTypeId[]
  /**
   *	Defines Custom Fields.
   *
   *
   */
  readonly fieldDefinitions?: FieldDefinition[]
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with `results` containing an array of [Types](ctp:api:type:Type).
 *
 */
export interface TypePagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
   *	Actual number of results returned.
   *
   *
   */
  readonly count: number
  /**
   *	Total number of results matching the query.
   *	This number is an estimation that is not [strongly consistent](/../api/general-concepts#strong-consistency).
   *	This field is returned by default.
   *	For improved performance, calculating this field can be deactivated by using the query parameter `withTotal=false`.
   *	When the results are filtered with a [Query Predicate](ctp:api:type:QueryPredicate), `total` is subject to a [limit](/../api/limits#queries).
   *
   *
   */
  readonly total?: number
  /**
   *	[Types](ctp:api:type:Type) matching the query.
   *
   *
   */
  readonly results: Type[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [Type](ctp:api:type:Type).
 *
 */
export interface TypeReference {
  readonly typeId: 'type'
  /**
   *	Platform-generated unique identifier of the referenced [Type](ctp:api:type:Type).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded Type.
   *	Only present in responses to requests with [Reference Expansion](ctp:api:type:Expansion) for Types.
   *
   *
   */
  readonly obj?: Type
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) of a [Type](ctp:api:type:Type).
 *
 */
export interface TypeResourceIdentifier {
  readonly typeId: 'type'
  /**
   *	Platform-generated unique identifier of the referenced [Type](ctp:api:type:Type). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [Type](ctp:api:type:Type). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
/**
 *	Provides a visual representation type for this field. It is only relevant for string-based field types like [CustomFieldStringType](ctp:api:type:CustomFieldStringType) and [CustomFieldLocalizedStringType](ctp:api:type:CustomFieldLocalizedStringType). Following values are supported:
 *
 */
export type TypeTextInputHint = 'MultiLine' | 'SingleLine'
export interface TypeUpdate {
  /**
   *	Expected version of the type on which the changes should be applied.
   *	If the expected version does not match the actual version, a [409 Conflict](/../api/errors#409-conflict) will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the Type.
   *
   *
   */
  readonly actions: TypeUpdateAction[]
}
export type TypeUpdateAction =
  | TypeAddEnumValueAction
  | TypeAddFieldDefinitionAction
  | TypeAddLocalizedEnumValueAction
  | TypeChangeEnumValueLabelAction
  | TypeChangeEnumValueOrderAction
  | TypeChangeFieldDefinitionLabelAction
  | TypeChangeFieldDefinitionOrderAction
  | TypeChangeInputHintAction
  | TypeChangeKeyAction
  | TypeChangeLabelAction
  | TypeChangeLocalizedEnumValueLabelAction
  | TypeChangeLocalizedEnumValueOrderAction
  | TypeChangeNameAction
  | TypeRemoveFieldDefinitionAction
  | TypeSetDescriptionAction
/**
 *	Adds a value to an [EnumType](ctp:api:type:CustomFieldEnumType).
 *	This update action can be used to update an [EnumType](ctp:api:type:CustomFieldEnumType) FieldDefinition and a [SetType](ctp:api:type:CustomFieldSetType) FieldDefinition of [EnumType](ctp:api:type:CustomFieldEnumType).
 *
 */
export interface TypeAddEnumValueAction {
  readonly action: 'addEnumValue'
  /**
   *	`name` of the [Field Definition](ctp:api:type:FieldDefinition) to update.
   *
   *
   */
  readonly fieldName: string
  /**
   *	Value to append to the array.
   *
   */
  readonly value: CustomFieldEnumValue
}
export interface TypeAddFieldDefinitionAction {
  readonly action: 'addFieldDefinition'
  /**
   *	Value to append to the array.
   *
   */
  readonly fieldDefinition: FieldDefinition
}
/**
 *	Adds a value to a [LocalizedEnumType](ctp:api:type:CustomFieldLocalizedEnumType).
 *	This update action can be used to update a [LocalizedEnumType](ctp:api:type:CustomFieldLocalizedEnumType) FieldDefinition and a [SetType](ctp:api:type:CustomFieldSetType) FieldDefinition of [CustomFieldLocalizedEnumType](ctp:api:type:CustomFieldLocalizedEnumType).
 *
 */
export interface TypeAddLocalizedEnumValueAction {
  readonly action: 'addLocalizedEnumValue'
  /**
   *	`name` of the [FieldDefinition](ctp:api:type:FieldDefinition) to update.
   *
   *
   */
  readonly fieldName: string
  /**
   *	Value to append to the array.
   *
   */
  readonly value: CustomFieldLocalizedEnumValue
}
/**
 *	Changes the `label` of an [EnumValue](ctp:api:type:CustomFieldEnumValue) of an [EnumType](ctp:api:type:CustomFieldEnumType) FieldDefinition.
 *
 */
export interface TypeChangeEnumValueLabelAction {
  readonly action: 'changeEnumValueLabel'
  /**
   *	`name` of the [FieldDefinition](ctp:api:type:FieldDefinition) to update.
   *
   *
   */
  readonly fieldName: string
  /**
   *	New value to set.
   *	Must not be empty.
   *
   *
   */
  readonly value: CustomFieldEnumValue
}
/**
 *	Changes the order of [EnumValues](ctp:api:type:CustomFieldEnumValue) in an [EnumType](ctp:api:type:CustomFieldEnumType) FieldDefinition.
 *	This update action can be used to update an [EnumType](ctp:api:type:CustomFieldEnumType) FieldDefinition and a [SetType](ctp:api:type:CustomFieldSetType) FieldDefinition of [EnumType](ctp:api:type:CustomFieldEnumType).
 *
 */
export interface TypeChangeEnumValueOrderAction {
  readonly action: 'changeEnumValueOrder'
  /**
   *	`name` of the [FieldDefinition](ctp:api:type:FieldDefinition) to update.
   *
   *
   */
  readonly fieldName: string
  /**
   *	Must match the set of `key`s of the EnumValues in the FieldDefinition (apart from their order).
   *
   *
   */
  readonly keys: string[]
}
export interface TypeChangeFieldDefinitionLabelAction {
  readonly action: 'changeFieldDefinitionLabel'
  /**
   *	`name` of the [FieldDefinition](ctp:api:type:FieldDefinition) to update.
   *
   *
   */
  readonly fieldName: string
  /**
   *	New value to set.
   *	Must not be empty.
   *
   *
   */
  readonly label: LocalizedString
}
export interface TypeChangeFieldDefinitionOrderAction {
  readonly action: 'changeFieldDefinitionOrder'
  /**
   *	Must match the set of `name`s of FieldDefinitions (up to order).
   *
   *
   */
  readonly fieldNames: string[]
}
/**
 *	Changes the `inputHint` of [CustomFieldStringType](ctp:api:type:CustomFieldStringType) [FieldDefinition](ctp:api:type:FieldDefinition), a [CustomFieldLocalizedStringType](ctp:api:type:CustomFieldLocalizedStringType) [FieldDefinition](ctp:api:type:FieldDefinition), and [CustomFieldSetType](ctp:api:type:CustomFieldSetType) [FieldDefinition](ctp:api:type:FieldDefinition) of these string-based FieldTypes.
 *
 */
export interface TypeChangeInputHintAction {
  readonly action: 'changeInputHint'
  /**
   *	`name` of the [Field Definition](ctp:api:type:FieldDefinition) to update.
   *
   *
   */
  readonly fieldName: string
  /**
   *	New value to set.
   *	Must not be empty.
   *
   *
   */
  readonly inputHint: TypeTextInputHint
}
export interface TypeChangeKeyAction {
  readonly action: 'changeKey'
  /**
   *	New value to set.
   *	Must not be empty.
   *
   *
   */
  readonly key: string
}
export interface TypeChangeLabelAction {
  readonly action: 'changeLabel'
  /**
   *	Name of the [Field Definition](ctp:api:type:FieldDefinition) to update.
   *
   *
   */
  readonly fieldName: string
  /**
   *	JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values are the corresponding strings used for that language.
   *
   *
   */
  readonly label: LocalizedString
}
/**
 *	Changes the `label` of a [LocalizedEnumValue](ctp:api:type:CustomFieldLocalizedEnumValue) of an [LocalizedEnumType](ctp:api:type:CustomFieldLocalizedEnumType) FieldDefinition.
 *
 */
export interface TypeChangeLocalizedEnumValueLabelAction {
  readonly action: 'changeLocalizedEnumValueLabel'
  /**
   *	`name` of the [FieldDefinition](ctp:api:type:FieldDefinition) to update.
   *
   *
   */
  readonly fieldName: string
  /**
   *	New value to set.
   *	Must not be empty.
   *
   *
   */
  readonly value: CustomFieldLocalizedEnumValue
}
/**
 *	Changes the order of [LocalizedEnumValues](ctp:api:type:CustomFieldLocalizedEnumValue) in a [LocalizedEnumType](ctp:api:type:CustomFieldLocalizedEnumType) FieldDefinition.
 *	This update action can be used to update a [LocalizedEnumType](ctp:api:type:CustomFieldLocalizedEnumType) FieldDefinition and a [SetType](ctp:api:type:CustomFieldSetType) of [LocalizedEnumType](ctp:api:type:CustomFieldLocalizedEnumType) FieldDefinitions.
 *
 */
export interface TypeChangeLocalizedEnumValueOrderAction {
  readonly action: 'changeLocalizedEnumValueOrder'
  /**
   *	`name` of the [Field Definition](ctp:api:type:FieldDefinition) to update.
   *
   *
   */
  readonly fieldName: string
  /**
   *	Must match the set of `key`s of the LocalizedEnumValues in the FieldDefinition (up to order).
   *
   *
   */
  readonly keys: string[]
}
export interface TypeChangeNameAction {
  readonly action: 'changeName'
  /**
   *	New value to set.
   *	Must not be empty.
   *
   *
   */
  readonly name: LocalizedString
}
export interface TypeRemoveFieldDefinitionAction {
  readonly action: 'removeFieldDefinition'
  /**
   *	`name` of the [FieldDefinition](ctp:api:type:FieldDefinition) to remove.
   *	The removal of a FieldDefinition deletes [asynchronously](/../api/general-concepts#eventual-consistency) all Custom Fields using the FieldDefinition as well.
   *
   *
   */
  readonly fieldName: string
}
export interface TypeSetDescriptionAction {
  readonly action: 'setDescription'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly description?: LocalizedString
}
