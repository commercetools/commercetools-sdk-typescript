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
import { CustomerReference, CustomerResourceIdentifier } from './customer'
import { ProductVariant } from './product'
import { ProductTypeReference } from './product-type'
import { StoreKeyReference, StoreResourceIdentifier } from './store'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface ShoppingList extends BaseResource {
  /**
   *	Unique identifier of the ShoppingList.
   *
   */
  readonly id: string
  /**
   *	The current version of the shopping list.
   *
   */
  readonly version: number
  /**
   *
   */
  readonly createdAt: string
  /**
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
   *
   */
  readonly custom?: CustomFields
  /**
   *
   */
  readonly customer?: CustomerReference
  /**
   *	The shopping list will be deleted automatically if it hasn't been modified for the specified amount of days.
   *
   */
  readonly deleteDaysAfterLastModification?: number
  /**
   *
   */
  readonly description?: LocalizedString
  /**
   *	User-defined unique identifier of the ShoppingList.
   *
   */
  readonly key?: string
  /**
   *
   */
  readonly lineItems?: ShoppingListLineItem[]
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *	Human-readable identifiers usually used as deep-link URL to the related shopping list.
   *	Each slug is unique across a project, but a shopping list can have the same slug for different languages.
   *	The slug must match the pattern [a-zA-Z0-9_-]{2,256}.
   *
   */
  readonly slug?: LocalizedString
  /**
   *
   */
  readonly textLineItems?: TextLineItem[]
  /**
   *	Identifies shopping lists belonging to an anonymous session (the customer has not signed up/in yet).
   *
   */
  readonly anonymousId?: string
  /**
   *
   */
  readonly store?: StoreKeyReference
}
export interface ShoppingListDraft {
  /**
   *	The custom fields.
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *
   */
  readonly customer?: CustomerResourceIdentifier
  /**
   *	The shopping list will be deleted automatically if it hasn't been modified for the specified amount of days.
   *
   */
  readonly deleteDaysAfterLastModification?: number
  /**
   *
   */
  readonly description?: LocalizedString
  /**
   *	User-defined unique identifier for the ShoppingList.
   *
   *
   */
  readonly key?: string
  /**
   *
   */
  readonly lineItems?: ShoppingListLineItemDraft[]
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *	Human-readable identifiers usually used as deep-link URL to the related shopping list.
   *	Each slug is unique across a project, but a shopping list can have the same slug for different languages.
   *	The slug must match the pattern [a-zA-Z0-9_-]{2,256}.
   *
   */
  readonly slug?: LocalizedString
  /**
   *
   */
  readonly textLineItems?: TextLineItemDraft[]
  /**
   *	Identifies shopping lists belonging to an anonymous session (the customer has not signed up/in yet).
   *
   */
  readonly anonymousId?: string
  /**
   *
   */
  readonly store?: StoreResourceIdentifier
}
export interface ShoppingListLineItem {
  /**
   *
   */
  readonly addedAt: string
  /**
   *	Serves as value of the `custom` field on a resource or data type customized with a [Type](ctp:api:type:Type).
   *
   *
   */
  readonly custom?: CustomFields
  /**
   *
   */
  readonly deactivatedAt?: string
  /**
   *	Unique identifier of the ShoppingListLineItem.
   *
   */
  readonly id: string
  /**
   *	JSON object where the keys are of type [Locale](ctp:api:type:Locale), and the values are the strings used for the corresponding language.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *
   */
  readonly productId: string
  /**
   *	JSON object where the keys are of type [Locale](ctp:api:type:Locale), and the values are the strings used for the corresponding language.
   *
   *
   */
  readonly productSlug?: LocalizedString
  /**
   *	[Reference](ctp:api:type:Reference) to a [ProductType](ctp:api:type:ProductType).
   *
   *
   */
  readonly productType: ProductTypeReference
  /**
   *
   */
  readonly quantity: number
  /**
   *
   */
  readonly variant?: ProductVariant
  /**
   *
   */
  readonly variantId?: number
}
export interface ShoppingListLineItemDraft {
  /**
   *
   */
  readonly addedAt?: string
  /**
   *	The representation used when creating or updating a [customizable data type](/../api/projects/types#list-of-customizable-data-types) with Custom Fields.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *
   */
  readonly sku?: string
  /**
   *
   */
  readonly productId?: string
  /**
   *
   */
  readonly quantity?: number
  /**
   *
   */
  readonly variantId?: number
}
export interface ShoppingListPagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *
   */
  readonly count: number
  /**
   *
   */
  readonly total?: number
  /**
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
   *
   */
  readonly results: ShoppingList[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [ShoppingList](ctp:api:type:ShoppingList).
 *
 */
export interface ShoppingListReference {
  readonly typeId: 'shopping-list'
  /**
   *	Unique identifier of the referenced [ShoppingList](ctp:api:type:ShoppingList).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded ShoppingList. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for ShoppingLists.
   *
   *
   */
  readonly obj?: ShoppingList
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [ShoppingList](ctp:api:type:ShoppingList).
 *
 */
export interface ShoppingListResourceIdentifier {
  readonly typeId: 'shopping-list'
  /**
   *	Unique identifier of the referenced [ShoppingList](ctp:api:type:ShoppingList). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [ShoppingList](ctp:api:type:ShoppingList). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export interface ShoppingListUpdate {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly actions: ShoppingListUpdateAction[]
}
export type ShoppingListUpdateAction =
  | ShoppingListAddLineItemAction
  | ShoppingListAddTextLineItemAction
  | ShoppingListChangeLineItemQuantityAction
  | ShoppingListChangeLineItemsOrderAction
  | ShoppingListChangeNameAction
  | ShoppingListChangeTextLineItemNameAction
  | ShoppingListChangeTextLineItemQuantityAction
  | ShoppingListChangeTextLineItemsOrderAction
  | ShoppingListRemoveLineItemAction
  | ShoppingListRemoveTextLineItemAction
  | ShoppingListSetAnonymousIdAction
  | ShoppingListSetCustomFieldAction
  | ShoppingListSetCustomTypeAction
  | ShoppingListSetCustomerAction
  | ShoppingListSetDeleteDaysAfterLastModificationAction
  | ShoppingListSetDescriptionAction
  | ShoppingListSetKeyAction
  | ShoppingListSetLineItemCustomFieldAction
  | ShoppingListSetLineItemCustomTypeAction
  | ShoppingListSetSlugAction
  | ShoppingListSetStoreAction
  | ShoppingListSetTextLineItemCustomFieldAction
  | ShoppingListSetTextLineItemCustomTypeAction
  | ShoppingListSetTextLineItemDescriptionAction
export interface TextLineItem {
  /**
   *	When the text line item was added to the shopping list.
   *
   */
  readonly addedAt: string
  /**
   *
   */
  readonly custom?: CustomFields
  /**
   *
   */
  readonly description?: LocalizedString
  /**
   *	Unique identifier of the TextLineItem.
   *
   */
  readonly id: string
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *
   */
  readonly quantity: number
}
export interface TextLineItemDraft {
  /**
   *	Defaults to the current date and time.
   *
   */
  readonly addedAt?: string
  /**
   *	The custom fields.
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *
   */
  readonly description?: LocalizedString
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *	Defaults to `1`.
   *
   */
  readonly quantity?: number
}
export interface ShoppingListAddLineItemAction {
  readonly action: 'addLineItem'
  /**
   *
   */
  readonly sku?: string
  /**
   *
   */
  readonly productId?: string
  /**
   *
   */
  readonly variantId?: number
  /**
   *
   */
  readonly quantity?: number
  /**
   *
   */
  readonly addedAt?: string
  /**
   *	The representation used when creating or updating a [customizable data type](/../api/projects/types#list-of-customizable-data-types) with Custom Fields.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
}
export interface ShoppingListAddTextLineItemAction {
  readonly action: 'addTextLineItem'
  /**
   *	JSON object where the keys are of type [Locale](ctp:api:type:Locale), and the values are the strings used for the corresponding language.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	JSON object where the keys are of type [Locale](ctp:api:type:Locale), and the values are the strings used for the corresponding language.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *
   */
  readonly quantity?: number
  /**
   *
   */
  readonly addedAt?: string
  /**
   *	The representation used when creating or updating a [customizable data type](/../api/projects/types#list-of-customizable-data-types) with Custom Fields.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
}
export interface ShoppingListChangeLineItemQuantityAction {
  readonly action: 'changeLineItemQuantity'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly quantity: number
}
export interface ShoppingListChangeLineItemsOrderAction {
  readonly action: 'changeLineItemsOrder'
  /**
   *
   */
  readonly lineItemOrder: string[]
}
export interface ShoppingListChangeNameAction {
  readonly action: 'changeName'
  /**
   *
   */
  readonly name: LocalizedString
}
export interface ShoppingListChangeTextLineItemNameAction {
  readonly action: 'changeTextLineItemName'
  /**
   *
   */
  readonly textLineItemId: string
  /**
   *	JSON object where the keys are of type [Locale](ctp:api:type:Locale), and the values are the strings used for the corresponding language.
   *
   *
   */
  readonly name: LocalizedString
}
export interface ShoppingListChangeTextLineItemQuantityAction {
  readonly action: 'changeTextLineItemQuantity'
  /**
   *
   */
  readonly textLineItemId: string
  /**
   *
   */
  readonly quantity: number
}
export interface ShoppingListChangeTextLineItemsOrderAction {
  readonly action: 'changeTextLineItemsOrder'
  /**
   *
   */
  readonly textLineItemOrder: string[]
}
export interface ShoppingListRemoveLineItemAction {
  readonly action: 'removeLineItem'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly quantity?: number
}
export interface ShoppingListRemoveTextLineItemAction {
  readonly action: 'removeTextLineItem'
  /**
   *
   */
  readonly textLineItemId: string
  /**
   *
   */
  readonly quantity?: number
}
export interface ShoppingListSetAnonymousIdAction {
  readonly action: 'setAnonymousId'
  /**
   *	Anonymous ID of the anonymous customer that this shopping list belongs to.
   *	If this field is not set any existing `anonymousId` is removed.
   *
   */
  readonly anonymousId?: string
}
export interface ShoppingListSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface ShoppingListSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the ShoppingList with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the ShoppingList.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the ShoppingList.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface ShoppingListSetCustomerAction {
  readonly action: 'setCustomer'
  /**
   *
   */
  readonly customer?: CustomerResourceIdentifier
}
export interface ShoppingListSetDeleteDaysAfterLastModificationAction {
  readonly action: 'setDeleteDaysAfterLastModification'
  /**
   *
   */
  readonly deleteDaysAfterLastModification?: number
}
export interface ShoppingListSetDescriptionAction {
  readonly action: 'setDescription'
  /**
   *
   */
  readonly description?: LocalizedString
}
export interface ShoppingListSetKeyAction {
  readonly action: 'setKey'
  /**
   *	User-specific unique identifier for the shopping list.
   *
   */
  readonly key?: string
}
export interface ShoppingListSetLineItemCustomFieldAction {
  readonly action: 'setLineItemCustomField'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface ShoppingListSetLineItemCustomTypeAction {
  readonly action: 'setLineItemCustomType'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the LineItem with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the LineItem.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the LineItem.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface ShoppingListSetSlugAction {
  readonly action: 'setSlug'
  /**
   *
   */
  readonly slug?: LocalizedString
}
export interface ShoppingListSetStoreAction {
  readonly action: 'setStore'
  /**
   *
   */
  readonly store?: StoreResourceIdentifier
}
export interface ShoppingListSetTextLineItemCustomFieldAction {
  readonly action: 'setTextLineItemCustomField'
  /**
   *
   */
  readonly textLineItemId: string
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Trying to remove a field that does not exist will fail with an [InvalidOperation](/../api/errors#general-400-invalid-operation) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface ShoppingListSetTextLineItemCustomTypeAction {
  readonly action: 'setTextLineItemCustomType'
  /**
   *
   */
  readonly textLineItemId: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the TextLineItem with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the TextLineItem.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the TextLineItem.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface ShoppingListSetTextLineItemDescriptionAction {
  readonly action: 'setTextLineItemDescription'
  /**
   *
   */
  readonly textLineItemId: string
  /**
   *	JSON object where the keys are of type [Locale](ctp:api:type:Locale), and the values are the strings used for the corresponding language.
   *
   *
   */
  readonly description?: LocalizedString
}
