/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  BaseResource,
  CreatedBy,
  IReference,
  IResourceIdentifier,
  LastModifiedBy,
  LocalizedString,
} from './common'

/**
 *	Specifies how an Attribute (or a set of Attributes) should be validated across all variants of a Product:
 *
 */
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
export enum AttributeConstraintEnumDraftValues {
  None = 'None',
}

export type AttributeConstraintEnumDraft = 'None' | (string & {})
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
   *	If `true`, the Attribute's values are available in the [Product Projection Search](/../api/projects/products-search) or the [Product Search](/../api/projects/product-search) API for use in full-text search queries, filters, and facets.
   *
   *	Which exact features are available with this flag depends on the specific [AttributeType](ctp:api:type:AttributeType).
   *	The maximum size of a searchable field is **restricted** by the [Field content size limit](/../api/limits#field-content-size).
   *	This constraint is enforced at both [Product creation](ctp:api:endpoint:/{projectKey}/products:POST) and [Product update](/../api/projects/products#update-product).
   *	If the length of the input exceeds the maximum size, an [InvalidField](ctp:api:type:InvalidFieldError) error is returned.
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
   *	When the `type` is different for an AttributeDefinition using the same name in multiple ProductTypes, an [AttributeDefinitionTypeConflict](ctp:api:type:AttributeDefinitionTypeConflictError) error is returned.
   *
   *
   */
  readonly type: AttributeType
  /**
   *	User-defined name of the Attribute that is unique to the [Project](ctp:api:type:Project).
   *
   *	When using the same `name` for an Attribute in multiple ProductTypes, all fields of the AttributeDefinition of this Attribute must be the same across the ProductTypes, else an [AttributeDefinitionAlreadyExists](ctp:api:type:AttributeDefinitionAlreadyExistsError) error is returned.
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
   *	Set to `true` if the Attribute's values should be available in the [Product Projection Search](/../api/projects/products-search) or the [Product Search](/../api/projects/product-search) API and can be used in full-text search queries, filters, and facets.
   *	Which exact features are available with this flag depends on the specific [AttributeType](ctp:api:type:AttributeType).
   *	The maximum size of a searchable field is **restricted** by the [Field content size limit](/../api/limits#field-content-size).
   *	This constraint is enforced at both Product creation and Product update.
   *	If the length of the input exceeds the maximum size, an InvalidField error is returned.
   *
   */
  readonly isSearchable?: boolean
}
/**
 *	A localized enum value must be unique within the enum, else a [DuplicateEnumValues](ctp:api:type:DuplicateEnumValuesError) error is returned.
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
 *	A plain enum value must be unique within the enum, else a [DuplicateEnumValues](ctp:api:type:DuplicateEnumValuesError) error is returned.
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
export enum AttributeReferenceTypeIdValues {
  AssociateRole = 'associate-role',
  BusinessUnit = 'business-unit',
  Cart = 'cart',
  CartDiscount = 'cart-discount',
  Category = 'category',
  Channel = 'channel',
  Customer = 'customer',
  CustomerGroup = 'customer-group',
  KeyValueDocument = 'key-value-document',
  Order = 'order',
  Product = 'product',
  ProductType = 'product-type',
  Review = 'review',
  ShippingMethod = 'shipping-method',
  State = 'state',
  Zone = 'zone',
}

export type AttributeReferenceTypeId =
  | 'associate-role'
  | 'business-unit'
  | 'cart'
  | 'cart-discount'
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
  | (string & {})
/**
 *	Umbrella type for specific attribute types discriminated by property `name`.
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
export interface IAttributeType {
  /**
   *
   */
  readonly name: string
}
/**
 *	Attribute type for Boolean values. Valid values for the Attribute are `true` and `false` (JSON Boolean).
 *
 */
export interface AttributeBooleanType extends IAttributeType {
  readonly name: 'boolean'
}
export interface AttributeDateTimeType extends IAttributeType {
  readonly name: 'datetime'
}
export interface AttributeDateType extends IAttributeType {
  readonly name: 'date'
}
/**
 *	Attribute type for plain enum values. Useful for predefined language-agnostic values selectable in drop downs when only one value should be selected. Use [AttributeSetType](ctp:api:type:AttributeSetType) of AttributeEnumType instead if multiple values can be selected from the list.
 *
 */
export interface AttributeEnumType extends IAttributeType {
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
export interface AttributeLocalizableTextType extends IAttributeType {
  readonly name: 'ltext'
}
/**
 *	Attribute type for localized enum values. Useful for predefined language-specific values selectable in drop-down menus if only one value can be selected. Use [AttributeSetType](ctp:api:type:AttributeSetType) of AttributeLocalizedEnumValue instead if multiple values can be selected.
 *
 */
export interface AttributeLocalizedEnumType extends IAttributeType {
  readonly name: 'lenum'
  /**
   *	Available values that can be assigned to Products.
   *
   *
   */
  readonly values: AttributeLocalizedEnumValue[]
}
export interface AttributeMoneyType extends IAttributeType {
  readonly name: 'money'
}
/**
 *	Attribute type for nesting Attributes based on some existing ProductType. It does not support `isSearchable` and is not supported in queries. The only supported AttributeConstraint is `None`.
 *
 */
export interface AttributeNestedType extends IAttributeType {
  readonly name: 'nested'
  /**
   *	Attributes that can be stored as nested Attributes of the current Attribute.
   *
   *
   */
  readonly typeReference: ProductTypeReference
}
export interface AttributeNumberType extends IAttributeType {
  readonly name: 'number'
}
export interface AttributeReferenceType extends IAttributeType {
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
export interface AttributeSetType extends IAttributeType {
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
export interface AttributeTextType extends IAttributeType {
  readonly name: 'text'
}
export interface AttributeTimeType extends IAttributeType {
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
   *	Date and time (UTC) the ProductType was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	IDs and references that last modified the ProductType.
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	IDs and references that created the ProductType.
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
export interface ProductTypeReference extends IReference {
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
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [ProductType](ctp:api:type:ProductType). Either `id` or `key` is required. If both are set, an [InvalidJsonInput](/../api/errors#invalidjsoninput) error is returned.
 *
 */
export interface ProductTypeResourceIdentifier extends IResourceIdentifier {
  readonly typeId: 'product-type'
  /**
   *	Unique identifier of the referenced [ProductType](ctp:api:type:ProductType). Required if `key` is absent.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [ProductType](ctp:api:type:ProductType). Required if `id` is absent.
   *
   *
   */
  readonly key?: string
}
export interface ProductTypeUpdate {
  /**
   *	Expected version of the ProductType on which the changes should be applied.
   *	If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error will be returned.
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
export interface IProductTypeUpdateAction {
  /**
   *
   */
  readonly action: string
}
/**
 *	A text input hint is a string with one of the following values:
 *
 */
export enum TextInputHintValues {
  MultiLine = 'MultiLine',
  SingleLine = 'SingleLine',
}

export type TextInputHint = 'MultiLine' | 'SingleLine' | (string & {})
export interface ProductTypeAddAttributeDefinitionAction
  extends IProductTypeUpdateAction {
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
export interface ProductTypeAddLocalizedEnumValueAction
  extends IProductTypeUpdateAction {
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
export interface ProductTypeAddPlainEnumValueAction
  extends IProductTypeUpdateAction {
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
export interface ProductTypeChangeAttributeConstraintAction
  extends IProductTypeUpdateAction {
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
 *	If the AttributeDefinition name to be changed does not exist, an [AttributeNameDoesNotExist](ctp:api:type:AttributeNameDoesNotExistError) error is returned.
 *
 */
export interface ProductTypeChangeAttributeNameAction
  extends IProductTypeUpdateAction {
  readonly action: 'changeAttributeName'
  /**
   *	Name of the AttributeDefinition to update.
   *
   */
  readonly attributeName: string
  /**
   *	New user-defined name of the Attribute that is unique to the [Project](ctp:api:type:Project).
   *
   *	When using the same `name` for an Attribute in two or more ProductTypes, all fields of the AttributeDefinition of this Attribute must be the same across the ProductTypes. If not, an [AttributeDefinitionAlreadyExists](ctp:api:type:AttributeDefinitionAlreadyExistsError) error is returned.
   *	An exception to this are the values of an `enum` or `lenum` type and sets thereof.
   *
   */
  readonly newAttributeName: string
}
export interface ProductTypeChangeAttributeOrderByNameAction
  extends IProductTypeUpdateAction {
  readonly action: 'changeAttributeOrderByName'
  /**
   *	Names of Attributes to reorder. This array must include all Attributes currently present on a ProductType in a different order.
   *
   *
   */
  readonly attributeNames: string[]
}
export interface ProductTypeChangeDescriptionAction
  extends IProductTypeUpdateAction {
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
 *	If the AttributeDefinition does not contain an enum with the referenced key, a [EnumKeyDoesNotExist](ctp:api:type:EnumKeyDoesNotExistError) error is returned.
 *
 *	All Products will be updated to the new key in an [eventually consistent](/general-concepts#eventual-consistency) way.
 *
 */
export interface ProductTypeChangeEnumKeyAction
  extends IProductTypeUpdateAction {
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
export interface ProductTypeChangeInputHintAction
  extends IProductTypeUpdateAction {
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
export interface ProductTypeChangeIsSearchableAction
  extends IProductTypeUpdateAction {
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
export interface ProductTypeChangeLabelAction extends IProductTypeUpdateAction {
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
export interface ProductTypeChangeLocalizedEnumValueLabelAction
  extends IProductTypeUpdateAction {
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
export interface ProductTypeChangeLocalizedEnumValueOrderAction
  extends IProductTypeUpdateAction {
  readonly action: 'changeLocalizedEnumValueOrder'
  /**
   *	Name of the AttributeDefinition to update.
   *
   */
  readonly attributeName: string
  /**
   *	Values must be equal to the values of the Attribute enum values (except for the order). If not, an [EnumValuesMustMatch](ctp:api:type:EnumValuesMustMatchError) error is returned.
   *
   *
   */
  readonly values: AttributeLocalizedEnumValue[]
}
export interface ProductTypeChangeNameAction extends IProductTypeUpdateAction {
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
export interface ProductTypeChangePlainEnumValueLabelAction
  extends IProductTypeUpdateAction {
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
export interface ProductTypeChangePlainEnumValueOrderAction
  extends IProductTypeUpdateAction {
  readonly action: 'changePlainEnumValueOrder'
  /**
   *	Name of the AttributeDefinition to update.
   *
   */
  readonly attributeName: string
  /**
   *	Values must be equal to the values of the Attribute enum values (except for the order). If not, an [EnumValuesMustMatch](ctp:api:type:EnumValuesMustMatchError) error is returned.
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
export interface ProductTypeRemoveAttributeDefinitionAction
  extends IProductTypeUpdateAction {
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
 *	If the Attribute is **not** required, the Attributes of all Products using those enum keys will also be removed in an [eventually consistent](/general-concepts#eventual-consistency) way. If the Attribute is required, the operation returns an [EnumValueIsUsed](ctp:api:type:EnumValueIsUsedError) error.
 *
 */
export interface ProductTypeRemoveEnumValuesAction
  extends IProductTypeUpdateAction {
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
export interface ProductTypeSetInputTipAction extends IProductTypeUpdateAction {
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
export interface ProductTypeSetKeyAction extends IProductTypeUpdateAction {
  readonly action: 'setKey'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   */
  readonly key?: string
}
