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
 *	Specifies how an Attribute (or a set of Attributes) should be validated across all variants of a Product:
 *
 */
export type AttributeConstraintEnum =
  | 'CombinationUnique'
  | 'None'
  | 'SameForAll'
  | 'Unique'
export type AttributeConstraintEnumDraft = 'None'
/**
 *	Describes a Product Attribute and allows you to define meta-information associated with the Attribute (like whether it should be searchable, or its constraints).
 *
 */
export interface AttributeDefinition {
  /**
   *	Describes the Type of the Attribute.
   *
   */
  readonly type: AttributeType
  /**
   *	User-defined name of the Attribute that is unique within the [Project](ctp:api:type:Project).
   *
   *
   */
  readonly name: string
  /**
   *	Human-readable label for the Attribute.
   *
   */
  readonly label: LocalizedString
  /**
   *	If `true`, the Attribute must have a value on a [ProductVariant](ctp:api:type:ProductVariant).
   *
   */
  readonly isRequired: boolean
  /**
   *	Specifies how Attributes are validated across all variants of a Product.
   *
   *
   */
  readonly attributeConstraint: AttributeConstraintEnum
  /**
   *	Provides additional Attribute information to aid content managers configure Product details.
   *
   *
   */
  readonly inputTip?: LocalizedString
  /**
   *	Provides a visual representation directive for values of this Attribute (only relevant for [AttributeTextType](ctp:api:type:AttributeTextType) and [AttributeLocalizableTextType](ctp:api:type:AttributeLocalizableTextType)).
   *
   */
  readonly inputHint: TextInputHint
  /**
   *	If `true`, the Attribute's values are available for the [Product Projections Search API](/../api/projects/products-search) for use in full-text search queries, filters, and facets.
   *
   *	Which exact features are available with this flag depends on the specific [AttributeType](ctp:api:type:AttributeType).
   *	The maximum size of a searchable field is **restricted** by the [Field content size limit](/../api/limits#field-content-size).
   *	This constraint is enforced at both [Product creation](/../api/projects/products#create-a-product) and [Product update](/../api/projects/products#update-product).
   *	If the length of the input exceeds the maximum size, an [InvalidFieldError](ctp:api:type:InvalidFieldError) is returned.
   *
   */
  readonly isSearchable: boolean
}
/**
 *	Specify the Attribute to be created with the [ProductTypeDraft](ctp:api:type:ProductTypeDraft).
 *
 */
export interface AttributeDefinitionDraft {
  /**
   *	Describes the Type of the Attribute.
   *
   */
  readonly type: AttributeType
  /**
   *	User-defined name of the Attribute that is unique with the [Project](ctp:api:type:Project).
   *	When using the same `name` for an Attribute in multiple ProductTypes, all fields of the AttributeDefinition of this Attribute must be the same across the ProductTypes. Otherwise an [AttributeDefinitionAlreadyExistsError](ctp:api:type:AttributeDefinitionAlreadyExistsError) will be returned.
   *	An exception to this are the values of an `enum` or `lenum` Type and sets thereof.
   *
   */
  readonly name: string
  /**
   *	Human-readable label for the Attribute.
   *
   */
  readonly label: LocalizedString
  /**
   *	Set to `true` if the Attribute is required to have a value on a [ProductVariant](ctp:api:type:ProductVariant).
   *
   *
   */
  readonly isRequired: boolean
  /**
   *	Specifies how an Attribute or a combination of Attributes should be validated across all variants of a Product.
   *
   *
   */
  readonly attributeConstraint?: AttributeConstraintEnum
  /**
   *	Provides additional information about the Attribute that aids content managers when setting Product details.
   *
   *
   */
  readonly inputTip?: LocalizedString
  /**
   *	Provides a visual representation directive for values of this Attribute (only relevant for [AttributeTextType](ctp:api:type:AttributeTextType) and [AttributeLocalizableTextType](ctp:api:type:AttributeLocalizableTextType)).
   *
   *
   */
  readonly inputHint?: TextInputHint
  /**
   *	Set to `true` if the Attribute's values should be available in the [Product Projections Search API](/../api/projects/products-search) and can be used in full-text search queries, filters, and facets.
   *	Which exact features are available with this flag depends on the specific [AttributeType](ctp:api:type:AttributeType).
   *	The maximum size of a searchable field is **restricted** by the [Field content size limit](/../api/limits#field-content-size).
   *	This constraint is enforced at both Product creation and Product update.
   *	If the length of the input exceeds the maximum size, an InvalidField error is returned.
   *
   */
  readonly isSearchable?: boolean
}
/**
 *	Attribute type for localized enum values. Useful for predefined language-specific values selectable in drop-down menus if only one value can be selected. Use [AttributeSetType](ctp:api:type:AttributeSetType) of AttributeLocalizedEnumValue instead if multiple values can be selected.
 *
 */
export interface AttributeLocalizedEnumValue {
  /**
   *	Key of the value used as a programmatic identifier, for example in facets & filters.
   *
   *
   */
  readonly key: string
  /**
   *	Descriptive, localized label of the value.
   *
   *
   */
  readonly label: LocalizedString
}
/**
 *	A plain enum value must be unique within the enum, otherwise a [DuplicateEnumValues](/errors#product-types-400-duplicate-enum-values) error will be returned.
 *
 */
export interface AttributePlainEnumValue {
  /**
   *	Key of the value used as a programmatic identifier, for example in facets & filters.
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
 *	Name of the resource type that the value should reference. Supported resource type identifiers:
 *
 */
export type AttributeReferenceTypeId =
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
 *	Umbrellla type for specific attribute types discriminated by property `name`.
 */
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
/**
 *	Attribute type for Boolean values. Valid values for the Attribute are `true` and `false` (JSON Boolean).
 *
 */
export interface AttributeBooleanType {
  readonly name: 'boolean'
}
export interface AttributeDateTimeType {
  readonly name: 'datetime'
}
export interface AttributeDateType {
  readonly name: 'date'
}
/**
 *	Attribute type for plain enum values. Useful for predefined language-agnostic values selectable in drop downs when only one value should be selected. Use [AttributeSetType](ctp:api:type:AttributeSetType) of AttributeEnumType instead if multiple values can be selected from the list.
 *
 */
export interface AttributeEnumType {
  readonly name: 'enum'
  /**
   *	Available values that can be assigned to Products.
   *
   *
   */
  readonly values: AttributePlainEnumValue[]
}
/**
 *	Attribute type for [LocalizedString](ctp:api:type:LocalizedString) values.
 *
 */
export interface AttributeLocalizableTextType {
  readonly name: 'ltext'
}
export interface AttributeLocalizedEnumType {
  readonly name: 'lenum'
  /**
   *	Available values that can be assigned to Products.
   *
   *
   */
  readonly values: AttributeLocalizedEnumValue[]
}
export interface AttributeMoneyType {
  readonly name: 'money'
}
/**
 *	Attribute type for nesting Attributes based on some existing ProductType. It does not support `isSearchable` and is not supported in queries. The only supported AttributeConstraint is `None`.
 *
 */
export interface AttributeNestedType {
  readonly name: 'nested'
  /**
   *	Attributes that can be stored as nested Attributes of the current Attribute.
   *
   *
   */
  readonly typeReference: ProductTypeReference
}
export interface AttributeNumberType {
  readonly name: 'number'
}
export interface AttributeReferenceType {
  readonly name: 'reference'
  /**
   *	Name of the resource type that the value should reference.
   *
   *
   */
  readonly referenceTypeId: AttributeReferenceTypeId
}
/**
 *	AttributeType that defines a set (without duplicate elements) with values of the given `elementType`. It does not support `isRequired`. Since this type itself is an AttributeType, it is possible to construct an AttributeSetType of an AttributeSetType of any AttributeType, and to continue with this iteration until terminating with any non-AttributeSetType. In case the AttributeSetType iteration terminates with an [AttributeNestedType](ctp:api:type:AttributeNestedType), the iteration can have 5 steps at maximum.
 *
 */
export interface AttributeSetType {
  readonly name: 'set'
  /**
   *	Attribute type of the elements in the set.
   *
   */
  readonly elementType: AttributeType
}
/**
 *	Attribute type for plain text values.
 *
 */
export interface AttributeTextType {
  readonly name: 'text'
}
export interface AttributeTimeType {
  readonly name: 'time'
}
export interface ProductType extends BaseResource {
  /**
   *	Unique identifier of the ProductType.
   *
   */
  readonly id: string
  /**
   *	Current version of the ProductType.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the ProductType was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Channel was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	User-defined unique identifier of the ProductType.
   *
   */
  readonly key?: string
  /**
   *	Name of the ProductType.
   *
   *
   */
  readonly name: string
  /**
   *	Description of the ProductType.
   *
   *
   */
  readonly description: string
  /**
   *	Attributes specified for the ProductType.
   *
   *
   */
  readonly attributes?: AttributeDefinition[]
}
export interface ProductTypeDraft {
  /**
   *	User-defined unique identifier for the ProductType.
   *
   */
  readonly key?: string
  /**
   *	Name of the ProductType.
   *
   *
   */
  readonly name: string
  /**
   *	Description of the ProductType.
   *
   *
   */
  readonly description: string
  /**
   *	Attributes to specify for the ProductType. Products of this ProductType have these Attributes available on their [ProductVariants](ctp:api:type:ProductVariant).
   *
   *
   */
  readonly attributes?: AttributeDefinitionDraft[]
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with results containing an array of [ProductType](ctp:api:type:ProductType).
 *
 */
export interface ProductTypePagedQueryResponse {
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
   *	When the results are filtered with a [Query Predicate](/../api/predicates/query), `total` is subject to a [limit](/../api/limits#queries).
   *
   *
   */
  readonly total?: number
  /**
   *	[ProductTypes](ctp:api:type:ProductType) matching the query.
   *
   *
   */
  readonly results: ProductType[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [ProductType](ctp:api:type:ProductType).
 *
 */
export interface ProductTypeReference {
  readonly typeId: 'product-type'
  /**
   *	Unique identifier of the referenced [ProductType](ctp:api:type:ProductType).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded ProductType. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for ProductTypes.
   *
   *
   */
  readonly obj?: ProductType
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [ProductType](ctp:api:type:ProductType).
 *
 */
export interface ProductTypeResourceIdentifier {
  readonly typeId: 'product-type'
  /**
   *	Unique identifier of the referenced [ProductType](ctp:api:type:ProductType). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [ProductType](ctp:api:type:ProductType). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export interface ProductTypeUpdate {
  /**
   *	Expected version of the ProductType on which the changes should be applied. If the expected version does not match the actual version, a [409 Conflict](/../api/errors#409-conflict) will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the ProductType.
   *
   *
   */
  readonly actions: ProductTypeUpdateAction[]
}
export type ProductTypeUpdateAction =
  | ProductTypeAddAttributeDefinitionAction
  | ProductTypeAddLocalizedEnumValueAction
  | ProductTypeAddPlainEnumValueAction
  | ProductTypeChangeAttributeConstraintAction
  | ProductTypeChangeAttributeNameAction
  | ProductTypeChangeAttributeOrderAction
  | ProductTypeChangeAttributeOrderByNameAction
  | ProductTypeChangeDescriptionAction
  | ProductTypeChangeEnumKeyAction
  | ProductTypeChangeInputHintAction
  | ProductTypeChangeIsSearchableAction
  | ProductTypeChangeLabelAction
  | ProductTypeChangeLocalizedEnumValueLabelAction
  | ProductTypeChangeLocalizedEnumValueOrderAction
  | ProductTypeChangeNameAction
  | ProductTypeChangePlainEnumValueLabelAction
  | ProductTypeChangePlainEnumValueOrderAction
  | ProductTypeRemoveAttributeDefinitionAction
  | ProductTypeRemoveEnumValuesAction
  | ProductTypeSetInputTipAction
  | ProductTypeSetKeyAction
/**
 *	A text input hint is a string with one of the following values:
 *
 */
export type TextInputHint = 'MultiLine' | 'SingleLine'
export interface ProductTypeAddAttributeDefinitionAction {
  readonly action: 'addAttributeDefinition'
  /**
   *	Value to append to `attributes`.
   *
   */
  readonly attribute: AttributeDefinitionDraft
}
/**
 *	Adds a localizable enum to the values of [AttributeLocalizedEnumType](ctp:api:type:AttributeLocalizedEnumType). It can update an AttributeLocalizedEnumType AttributeDefinition or an [AttributeSetType](ctp:api:type:AttributeSetType) of AttributeLocalizedEnumType AttributeDefinition.
 *
 */
export interface ProductTypeAddLocalizedEnumValueAction {
  readonly action: 'addLocalizedEnumValue'
  /**
   *	Name of the AttributeDefinition to update.
   *
   *
   */
  readonly attributeName: string
  /**
   *	Value to append to the array.
   *
   *
   */
  readonly value: AttributeLocalizedEnumValue
}
/**
 *	Adds an enum to the values of [AttributeEnumType](ctp:api:type:AttributeEnumType) AttributeDefinition, or [AttributeSetType](ctp:api:type:AttributeSetType) of AttributeEnumType AttributeDefinition.
 *
 */
export interface ProductTypeAddPlainEnumValueAction {
  readonly action: 'addPlainEnumValue'
  /**
   *	Name of the AttributeDefinition to update.
   *
   *
   */
  readonly attributeName: string
  /**
   *	Value to append to the array.
   *
   *
   */
  readonly value: AttributePlainEnumValue
}
/**
 *	Updates the `attributeConstraint` of an [AttributeDefinition](ctp:api:type:AttributeDefinition). For now only following changes are supported: `SameForAll` to `None` and `Unique` to `None`.
 *
 */
export interface ProductTypeChangeAttributeConstraintAction {
  readonly action: 'changeAttributeConstraint'
  /**
   *	Name of the AttributeDefinition to update.
   *
   *
   */
  readonly attributeName: string
  /**
   *	`None`
   *
   *
   */
  readonly newValue: AttributeConstraintEnumDraft
}
/**
 *	Renames an AttributeDefinition and also renames all corresponding Attributes on all [Products](/projects/products) with this ProductType. The renaming of the Attributes is [eventually consistent](/general-concepts#eventual-consistency).
 *
 */
export interface ProductTypeChangeAttributeNameAction {
  readonly action: 'changeAttributeName'
  /**
   *	Name of the AttributeDefinition to update.
   *
   */
  readonly attributeName: string
  /**
   *	New user-defined name of the Attribute that is unique with the [Project](ctp:api:type:Project).
   *	When using the same `name` for an Attribute in two or more ProductTypes all fields of the AttributeDefinition of this Attribute need to be the same across the ProductTypes, otherwise an [AttributeDefinitionAlreadyExistsError](ctp:api:type:AttributeDefinitionAlreadyExistsError) will be returned.
   *	An exception to this are the values of an `enum` or `lenum` type and sets thereof.
   *
   */
  readonly newAttributeName: string
}
export interface ProductTypeChangeAttributeOrderAction {
  readonly action: 'changeAttributeOrder'
  /**
   *
   */
  readonly attributes: AttributeDefinition[]
}
export interface ProductTypeChangeAttributeOrderByNameAction {
  readonly action: 'changeAttributeOrderByName'
  /**
   *	Names of Attributes to reorder. This array must include all Attributes currently present on a ProductType in a different order.
   *
   *
   */
  readonly attributeNames: string[]
}
export interface ProductTypeChangeDescriptionAction {
  readonly action: 'changeDescription'
  /**
   *	New value to set.
   *
   */
  readonly description: string
}
/**
 *	Updates the key of a single enum `value` in an [AttributeEnumType](ctp:api:type:AttributeEnumType) AttributeDefinition, [AttributeLocalizedEnumType](ctp:api:type:AttributeLocalizedEnumType) AttributeDefinition, [AttributeSetType](ctp:api:type:AttributeSetType) of AttributeEnumType AttributeDefinition, or AttributeSetType of AttributeLocalizedEnumType AttributeDefinition.
 *
 *	All Products will be updated to the new key in an [eventually consistent](/general-concepts#eventual-consistency) way.
 *
 */
export interface ProductTypeChangeEnumKeyAction {
  readonly action: 'changeEnumKey'
  /**
   *	Name of the AttributeDefinition to update.
   *
   */
  readonly attributeName: string
  /**
   *	Existing key to be changed.
   *
   *
   */
  readonly key: string
  /**
   *	New key to be set.
   *
   *
   */
  readonly newKey: string
}
/**
 *	Updates the `inputHint` of an [AttributeDefinition](ctp:api:type:AttributeDefinition).
 *
 */
export interface ProductTypeChangeInputHintAction {
  readonly action: 'changeInputHint'
  /**
   *	Name of the AttributeDefinition to update.
   *
   */
  readonly attributeName: string
  /**
   *	`SingleLine` or `MultiLine`
   *
   *
   */
  readonly newValue: TextInputHint
}
/**
 *	Following this update the Products are reindexed asynchronously to reflect this change on the search endpoint. When enabling search on an existing Attribute type definition, the constraint regarding the maximum size of a searchable Attribute will not be enforced. Instead, Product AttributeDefinitions exceeding this limit will be treated as not searchable and will not be available for full-text search.
 *
 */
export interface ProductTypeChangeIsSearchableAction {
  readonly action: 'changeIsSearchable'
  /**
   *	Name of the AttributeDefinition to update.
   *
   *
   */
  readonly attributeName: string
  /**
   *	Determines whether the Attribute's values can be used in full-text search queries, filters, and facets. See [AttributeDefinition](ctp:api:type:AttributeDefinition) for details.
   *
   *
   */
  readonly isSearchable: boolean
}
export interface ProductTypeChangeLabelAction {
  readonly action: 'changeLabel'
  /**
   *	Name of the AttributeDefinition to update.
   *
   */
  readonly attributeName: string
  /**
   *	New value to set. Must not be empty.
   *
   */
  readonly label: LocalizedString
}
/**
 *	Updates the label of a single enum `value` in an [AttributeLocalizedEnumType](ctp:api:type:AttributeLocalizedEnumType) AttributeDefinition, or [AttributeSetType](ctp:api:type:AttributeSetType) of AttributeLocalizedEnumType AttributeDefinition.
 *
 *	All Products will be updated to the new label in an [eventually consistent](/general-concepts#eventual-consistency) way.
 *
 */
export interface ProductTypeChangeLocalizedEnumValueLabelAction {
  readonly action: 'changeLocalizedEnumValueLabel'
  /**
   *	Name of the AttributeDefinition to update.
   *
   */
  readonly attributeName: string
  /**
   *	New value to set. Must be different from the existing value.
   *
   *
   */
  readonly newValue: AttributeLocalizedEnumValue
}
/**
 *	Updates the order of localized enum `values` in an [AttributeLocalizedEnumType](ctp:api:type:AttributeLocalizedEnumType) AttributeDefinition. It can update an AttributeLocalizedEnumType AttributeDefinition or an [AttributeSetType](ctp:api:type:AttributeSetType) of AttributeLocalizedEnumType AttributeDefinition.
 *
 */
export interface ProductTypeChangeLocalizedEnumValueOrderAction {
  readonly action: 'changeLocalizedEnumValueOrder'
  /**
   *	Name of the AttributeDefinition to update.
   *
   */
  readonly attributeName: string
  /**
   *	Values must be equal to the values of the Attribute enum values (except for the order). If not, an [EnumValuesMustMatch](/errors#product-types-400-enum-values-must-match) error code will be returned.
   *
   *
   */
  readonly values: AttributeLocalizedEnumValue[]
}
export interface ProductTypeChangeNameAction {
  readonly action: 'changeName'
  /**
   *	New value to set.
   *
   */
  readonly name: string
}
/**
 *	Updates the label of a single enum `value` in an [AttributeEnumType](ctp:api:type:AttributeEnumType) AttributeDefinition, or [AttributeSetType](ctp:api:type:AttributeSetType) of AttributeEnumType AttributeDefinition.
 *
 *	All Products will be updated to the new label in an [eventually consistent](/general-concepts#eventual-consistency) way.
 *
 */
export interface ProductTypeChangePlainEnumValueLabelAction {
  readonly action: 'changePlainEnumValueLabel'
  /**
   *	Name of the AttributeDefinition to update.
   *
   */
  readonly attributeName: string
  /**
   *	New value to set. Must be different from the existing value.
   *
   *
   */
  readonly newValue: AttributePlainEnumValue
}
/**
 *	Updates the order of enum `values` in an [AttributeEnumType](ctp:api:type:AttributeEnumType) AttributeDefinition. It can update an AttributeEnumType AttributeDefinition or an [AttributeSetType](ctp:api:type:AttributeSetType) of AttributeEnumType AttributeDefinition.
 *
 */
export interface ProductTypeChangePlainEnumValueOrderAction {
  readonly action: 'changePlainEnumValueOrder'
  /**
   *	Name of the AttributeDefinition to update.
   *
   */
  readonly attributeName: string
  /**
   *	Values must be equal to the values of the Attribute enum values (except for the order). If not, an [EnumValuesMustMatch](/errors#product-types-400-enum-values-must-match) error code will be returned.
   *
   *
   */
  readonly values: AttributePlainEnumValue[]
}
/**
 *	Removes an AttributeDefinition and also deletes all corresponding Attributes on all [Products](/projects/products) with this ProductType. The removal of the Attributes is [eventually consistent](/general-concepts#eventual-consistency).
 *
 *	The `CombinationUnique` constraint is not checked when an Attribute is removed, and uniqueness violations may occur when you remove an Attribute with a `CombinationUnique` constraint.
 *
 */
export interface ProductTypeRemoveAttributeDefinitionAction {
  readonly action: 'removeAttributeDefinition'
  /**
   *	Name of the Attribute to remove.
   *
   */
  readonly name: string
}
/**
 *	Removes enum values from an AttributeDefinition of [AttributeEnumType](ctp:api:type:AttributeEnumType), [AttributeLocalizedEnumType](ctp:api:type:AttributeLocalizedEnumType), [AttributeSetType](ctp:api:type:AttributeSetType) of AttributeEnumType, or AttributeSetType of AttributeLocalizedEnumType.
 *
 *	If the Attribute is **not** required, the Attributes of all Products using those enum keys will also be removed in an [eventually consistent](/general-concepts#eventual-consistency) way. If the Attribute is required, the operation will fail with the [EnumValueIsUsed](/errors#product-types-400-enum-value-is-used) error code.
 *
 */
export interface ProductTypeRemoveEnumValuesAction {
  readonly action: 'removeEnumValues'
  /**
   *	Name of the AttributeDefinition to update.
   *
   */
  readonly attributeName: string
  /**
   *	Keys of [AttributeEnumType](ctp:api:type:AttributeEnumType) or [AttributeLocalizedEnumType](ctp:api:type:AttributeLocalizedEnumType) to remove.
   *
   *
   */
  readonly keys: string[]
}
export interface ProductTypeSetInputTipAction {
  readonly action: 'setInputTip'
  /**
   *	Name of the AttributeDefinition to update.
   *
   *
   */
  readonly attributeName: string
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly inputTip?: LocalizedString
}
export interface ProductTypeSetKeyAction {
  readonly action: 'setKey'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   */
  readonly key?: string
}
