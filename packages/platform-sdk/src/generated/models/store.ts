/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { ChannelReference, ChannelResourceIdentifier } from './channel'
import {
  BaseResource,
  CreatedBy,
  LastModifiedBy,
  LocalizedString,
} from './common'
import {
  ProductSelectionReference,
  ProductSelectionResourceIdentifier,
} from './product-selection'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface ProductSelectionSetting {
  /**
   *	Reference to a ProductSelection.
   *
   */
  readonly productSelection: ProductSelectionReference
  /**
   *	If `true`, all Products assigned to this Product Selection are part of the Store's assortment.
   *
   */
  readonly active: boolean
}
export interface ProductSelectionSettingDraft {
  /**
   *	Resource Identifier of a ProductSelection.
   *
   */
  readonly productSelection: ProductSelectionResourceIdentifier
  /**
   *	Set to `true` if all Products assigned to the Product Selection should become part of the Store's assortment.
   *
   *
   */
  readonly active?: boolean
}
export interface Store extends BaseResource {
  /**
   *	Unique ID of the Store.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the Store.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the Store was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Store was last updated.
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
   *	User-defined unique and immutable identifier for the Store.
   *
   *
   */
  readonly key: string
  /**
   *	Name of the Store.
   *
   *
   */
  readonly name?: LocalizedString
  /**
   *	Languages configured for the Store.
   *
   *
   */
  readonly languages: string[]
  /**
   *	Product Distribution Channels allowed for the Store.
   *
   *
   */
  readonly distributionChannels: ChannelReference[]
  /**
   *	Inventory Supply Channels allowed for the Store.
   *
   *
   */
  readonly supplyChannels: ChannelReference[]
  /**
   *	Controls availability of Products for this Store via active Product Selections.
   *
   *	- If empty all Products in the [Project](ctp:api:type:Project) are available in this Store.
   *	- If provided, Products from `active` Product Selections are available in this Store.
   *
   */
  readonly productSelections: ProductSelectionSetting[]
  /**
   *	Custom fields for the Store.
   *
   *
   */
  readonly custom?: CustomFields
}
export interface StoreDraft {
  /**
   *	User-defined unique and immutable identifier for the Store.
   *	Keys can only contain alphanumeric characters, underscores, and hyphens.
   *
   *
   */
  readonly key: string
  /**
   *	Name of the Store.
   *
   *
   */
  readonly name?: LocalizedString
  /**
   *	Languages defined in [Project](ctp:api:type:Project). Only languages defined in the Project can be used.
   *
   *
   */
  readonly languages?: string[]
  /**
   *	ResourceIdentifier to a Channel with `ProductDistribution` [ChannelRoleEnum](ctp:api:type:ChannelRoleEnum).
   *
   *
   */
  readonly distributionChannels?: ChannelResourceIdentifier[]
  /**
   *	ResourceIdentifier to a Channel with `InventorySupply` [ChannelRoleEnum](ctp:api:type:ChannelRoleEnum).
   *
   *
   */
  readonly supplyChannels?: ChannelResourceIdentifier[]
  /**
   *	Controls availability of Products for this Store via active Product Selections.
   *
   *	- Leave empty if all Products in the [Project](ctp:api:type:Project) should be available in this Store.
   *	- If provided, Products from `active` Product Selections are available in this Store.
   *
   *
   */
  readonly productSelections?: ProductSelectionSettingDraft[]
  /**
   *	Custom fields for the Store.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
}
/**
 *	[Reference](/../api/types#reference) to a [Store](ctp:api:type:Store) by its key.
 *
 */
export interface StoreKeyReference {
  readonly typeId: 'store'
  /**
   *	Unique and immutable key of the referenced [Store](ctp:api:type:Store).
   *
   *
   */
  readonly key: string
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with results containing an array of [Store](ctp:api:type:Store).
 *
 */
export interface StorePagedQueryResponse {
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
   *	[Stores](ctp:api:type:Store) matching the query.
   *
   *
   */
  readonly results: Store[]
}
/**
 *	[Reference](/../api/types#reference) to a [Store](ctp:api:type:Store).
 *
 */
export interface StoreReference {
  readonly typeId: 'store'
  /**
   *	Unique ID of the referenced [Store](ctp:api:type:Store).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded Store. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for Stores.
   *
   *
   */
  readonly obj?: Store
}
/**
 *	[ResourceIdentifier](/../api/types#resourceidentifier) to a [Store](ctp:api:type:Store).
 *
 */
export interface StoreResourceIdentifier {
  readonly typeId: 'store'
  /**
   *	Unique ID of the referenced [Store](ctp:api:type:Store). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	Unique key of the referenced [Store](ctp:api:type:Store). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export interface StoreUpdate {
  /**
   *	Expected version of the Store on which the changes should be applied. If the expected version does not match the actual version, a [409 Conflict](/../api/errors#409-conflict) will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the Store.
   *
   *
   */
  readonly actions: StoreUpdateAction[]
}
export type StoreUpdateAction =
  | StoreAddDistributionChannelAction
  | StoreAddProductSelectionAction
  | StoreAddSupplyChannelAction
  | StoreChangeProductSelectionAction
  | StoreRemoveDistributionChannelAction
  | StoreRemoveProductSelectionAction
  | StoreRemoveSupplyChannelAction
  | StoreSetCustomFieldAction
  | StoreSetCustomTypeAction
  | StoreSetDistributionChannelsAction
  | StoreSetLanguagesAction
  | StoreSetNameAction
  | StoreSetProductSelectionsAction
  | StoreSetSupplyChannelsAction
/**
 *	This action has no effect if a given distribution channel is already present in a Store.
 */
export interface StoreAddDistributionChannelAction {
  readonly action: 'addDistributionChannel'
  /**
   *	Value to append. Any attempt to use [Channel](ctp:api:type:Channel) without the `ProductDistribution` [ChannelRoleEnum](ctp:api:type:ChannelRoleEnum) will fail with a [MissingRoleOnChannelError](ctp:api:type:MissingRoleOnChannelError) error.
   *
   *
   */
  readonly distributionChannel: ChannelResourceIdentifier
}
/**
 *	To make all included Products available to your customers of a given Store, add the [Product Selections](/../api/projects/product-selections) to the respective Store. This action has no effect if the given Product Selection is already present in the Store and has the same `active` flag.
 *
 */
export interface StoreAddProductSelectionAction {
  readonly action: 'addProductSelection'
  /**
   *	Product Selection to add to the Store either activated or deactivated.
   *
   *
   */
  readonly productSelection: ProductSelectionResourceIdentifier
  /**
   *	Set to `true` to make all Products assigned to the referenced Product Selection available in the Store.
   *
   *
   */
  readonly active?: boolean
}
/**
 *	This action has no effect if a given supply channel is already present in a Store.
 */
export interface StoreAddSupplyChannelAction {
  readonly action: 'addSupplyChannel'
  /**
   *	Any attempt to use [Channel](ctp:api:type:Channel) without the `InventorySupply` [ChannelRoleEnum](ctp:api:type:ChannelRoleEnum) will fail with a [MissingRoleOnChannel](ctp:api:type:MissingRoleOnChannelError) error.
   *
   *
   */
  readonly supplyChannel: ChannelResourceIdentifier
}
/**
 *	[ProductSelection](ctp:api:type:ProductSelection) in a Store can be activated or deactivated using this update action.
 *
 */
export interface StoreChangeProductSelectionAction {
  readonly action: 'changeProductSelectionActive'
  /**
   *	Current Product Selection of the Store to be activated or deactivated.
   *
   *
   */
  readonly productSelection: ProductSelectionResourceIdentifier
  /**
   *	Set to `true` if all Products assigned to the Product Selection should become part of the Store's assortment.
   *
   *
   */
  readonly active?: boolean
}
export interface StoreRemoveDistributionChannelAction {
  readonly action: 'removeDistributionChannel'
  /**
   *	Value to remove. ResourceIdentifier of a Channel with the `ProductDistribution` [ChannelRoleEnum](ctp:api:type:ChannelRoleEnum).
   *
   *
   */
  readonly distributionChannel: ChannelResourceIdentifier
}
/**
 *	This action has no effect if the given Product Selection is not in the Store.
 *
 */
export interface StoreRemoveProductSelectionAction {
  readonly action: 'removeProductSelection'
  /**
   *	Value to remove. The removed Product Selection is made offline.
   *
   *
   */
  readonly productSelection: ProductSelectionResourceIdentifier
}
export interface StoreRemoveSupplyChannelAction {
  readonly action: 'removeSupplyChannel'
  /**
   *	Value to remove. ResourceIdentifier of a Channel with the `InventorySupply` [ChannelRoleEnum](ctp:api:type:ChannelRoleEnum).
   *
   *
   */
  readonly supplyChannel: ChannelResourceIdentifier
}
export interface StoreSetCustomFieldAction {
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
export interface StoreSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the Store with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the Store.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the Store.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface StoreSetDistributionChannelsAction {
  readonly action: 'setDistributionChannels'
  /**
   *	Value to set.
   *	If not defined, the Store's `distributionChannels` are unset.
   *	Any attempt to use [Channel](ctp:api:type:Channel) without the `ProductDistribution` [ChannelRoleEnum](ctp:api:type:ChannelRoleEnum) will fail with a [MissingRoleOnChannel](ctp:api:type:MissingRoleOnChannelError) error.
   *
   *
   */
  readonly distributionChannels?: ChannelResourceIdentifier[]
}
export interface StoreSetLanguagesAction {
  readonly action: 'setLanguages'
  /**
   *	Value to set.
   *	Any attempt to use languages other than the ones defined in the [Project](ctp:api:type:Project) will fail with a [ProjectNotConfiguredForLanguages](ctp:api:type:ProjectNotConfiguredForLanguagesError) error.
   *
   *
   */
  readonly languages?: string[]
}
export interface StoreSetNameAction {
  readonly action: 'setName'
  /**
   *	Value to set.
   *
   *
   */
  readonly name?: LocalizedString
}
/**
 *	Instead of adding or removing [Product Selections](/../api/projects/product-selections) individually, you can also change all the Store's Product Selections in one go using this update action. The Store will only contain the Product Selections specified in the request.
 *
 */
export interface StoreSetProductSelectionsAction {
  readonly action: 'setProductSelections'
  /**
   *	Value to set.
   *
   *	- If provided, Product Selections for which `active` is set to `true` are available in the Store.
   *	- If not provided or provided as empty array, the action removes all Product Selections from this Store, meaning all Products in the [Project](ctp:api:type:Project) are available in this Store.
   *
   *
   */
  readonly productSelections?: ProductSelectionSettingDraft[]
}
export interface StoreSetSupplyChannelsAction {
  readonly action: 'setSupplyChannels'
  /**
   *	Value to set.
   *	If not defined, the Store's `supplyChannels` are unset.
   *	Any attempt to use [Channel](ctp:api:type:Channel) without the `InventorySupply` [ChannelRoleEnum](ctp:api:type:ChannelRoleEnum) will fail with a [MissingRoleOnChannel](ctp:api:type:MissingRoleOnChannelError) error.
   *
   *
   */
  readonly supplyChannels?: ChannelResourceIdentifier[]
}
