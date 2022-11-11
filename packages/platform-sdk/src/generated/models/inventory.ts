/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { ChannelReference, ChannelResourceIdentifier } from './channel'
import { BaseResource, CreatedBy, LastModifiedBy } from './common'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface InventoryEntry extends BaseResource {
  /**
   *	Unique identifier of the InventoryEntry.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the InventoryEntry.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the InventoryEntry was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the InventoryEntry was last updated.
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
   *	User-defined unique identifier of the InventoryEntry.
   *
   *
   */
  readonly key?: string
  /**
   *	[ProductVariant](ctp:api:type:ProductVariant) `sku` of the InventoryEntry.
   *
   *
   */
  readonly sku: string
  /**
   *	[Channel](ctp:api:type:Channel) that supplies this InventoryEntry.
   *
   *
   */
  readonly supplyChannel?: ChannelReference
  /**
   *	Overall amount of stock (`availableQuantity` + reserved).
   *
   */
  readonly quantityOnStock: number
  /**
   *	Available amount of stock (`quantityOnStock` - reserved).
   *
   *
   */
  readonly availableQuantity: number
  /**
   *	How often the InventoryEntry is restocked (in days).
   *
   */
  readonly restockableInDays?: number
  /**
   *	Date and time of the next restock.
   *
   *
   */
  readonly expectedDelivery?: string
  /**
   *	Custom Fields of the InventoryEntry.
   *
   *
   */
  readonly custom?: CustomFields
}
export interface InventoryEntryDraft {
  /**
   *	[ProductVariant](ctp:api:type:ProductVariant) `sku` of the InventoryEntry.
   *
   *
   */
  readonly sku: string
  /**
   *	User-defined unique identifier for the InventoryEntry.
   *
   *
   */
  readonly key?: string
  /**
   *	[Channel](ctp:api:type:Channel) that supplies this InventoryEntry.
   *
   *
   */
  readonly supplyChannel?: ChannelResourceIdentifier
  /**
   *	Overall amount of stock.
   *
   *
   */
  readonly quantityOnStock: number
  /**
   *	How often the InventoryEntry is restocked (in days).
   *
   *
   */
  readonly restockableInDays?: number
  /**
   *	Date and time of the next restock.
   *
   *
   */
  readonly expectedDelivery?: string
  /**
   *	Custom Fields of the InventoryEntry.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
}
/**
 *	[Reference](ctp:api:type:Reference) to an [InventoryEntry](ctp:api:type:InventoryEntry).
 *
 */
export interface InventoryEntryReference {
  readonly typeId: 'inventory-entry'
  /**
   *	Unique identifier of the referenced [InventoryEntry](ctp:api:type:InventoryEntry).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded InventoryEntry. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for InventoryEntries.
   *
   *
   */
  readonly obj?: InventoryEntry
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to an [InventoryEntry](ctp:api:type:InventoryEntry).
 *
 */
export interface InventoryEntryResourceIdentifier {
  readonly typeId: 'inventory-entry'
  /**
   *	Unique identifier of the referenced [InventoryEntry](ctp:api:type:InventoryEntry). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [InventoryEntry](ctp:api:type:InventoryEntry). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export interface InventoryEntryUpdate {
  /**
   *	Expected version of the InventoryEntry on which the changes should be applied. If the expected version does not match the actual version, a [ConcurrentModification](ctp:api:type:ConcurrentModificationError) error is returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the InventoryEntry.
   *
   *
   */
  readonly actions: InventoryEntryUpdateAction[]
}
export type InventoryEntryUpdateAction =
  | InventoryEntryAddQuantityAction
  | InventoryEntryChangeQuantityAction
  | InventoryEntryRemoveQuantityAction
  | InventoryEntrySetCustomFieldAction
  | InventoryEntrySetCustomTypeAction
  | InventoryEntrySetExpectedDeliveryAction
  | InventoryEntrySetKeyAction
  | InventoryEntrySetRestockableInDaysAction
  | InventoryEntrySetSupplyChannelAction
export interface InventoryPagedQueryResponse {
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
   *	[Inventory entries](ctp:api:type:InventoryEntry) matching the query.
   *
   *
   */
  readonly results: InventoryEntry[]
}
/**
 *	Updates `availableQuantity` based on the new `quantityOnStock` and amount of active reservations.
 */
export interface InventoryEntryAddQuantityAction {
  readonly action: 'addQuantity'
  /**
   *	Value to add to `quantityOnStock`.
   *
   */
  readonly quantity: number
}
/**
 *	Updates `availableQuantity` based on the new `quantityOnStock` and amount of active reservations.
 */
export interface InventoryEntryChangeQuantityAction {
  readonly action: 'changeQuantity'
  /**
   *	Value to set for `quantityOnStock`.
   *
   */
  readonly quantity: number
}
/**
 *	Updates `availableQuantity` based on the new `quantityOnStock` and amount of active reservations.
 */
export interface InventoryEntryRemoveQuantityAction {
  readonly action: 'removeQuantity'
  /**
   *	Value to remove from `quantityOnStock`.
   *
   */
  readonly quantity: number
}
export interface InventoryEntrySetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Removing a field that does not exist returns an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface InventoryEntrySetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the InventoryEntry with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the InventoryEntry.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the InventoryEntry.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface InventoryEntrySetExpectedDeliveryAction {
  readonly action: 'setExpectedDelivery'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   */
  readonly expectedDelivery?: string
}
export interface InventoryEntrySetKeyAction {
  readonly action: 'setKey'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly key?: string
}
export interface InventoryEntrySetRestockableInDaysAction {
  readonly action: 'setRestockableInDays'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   */
  readonly restockableInDays?: number
}
/**
 *	If an entry with the same `sku` and `supplyChannel` already exists, an [DuplicateField](ctp:api:type:DuplicateFieldError) error is returned.
 */
export interface InventoryEntrySetSupplyChannelAction {
  readonly action: 'setSupplyChannel'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   */
  readonly supplyChannel?: ChannelResourceIdentifier
}
