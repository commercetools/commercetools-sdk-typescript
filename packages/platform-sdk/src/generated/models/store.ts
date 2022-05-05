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
  ResourceIdentifier,
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
   *	Reference to a Product Selection
   *
   */
  readonly productSelection: ProductSelectionReference
  /**
   *	If `true` all Products assigned to this Product Selection are part of the Store's assortment.
   *
   */
  readonly active: boolean
}
export interface ProductSelectionSettingDraft {
  /**
   *	Resource Identifier of a Product Selection
   *
   */
  readonly productSelection: ProductSelectionResourceIdentifier
  /**
   *	If `true` all Products assigned to this Product Selection become part of the Store's assortment.
   *
   */
  readonly active?: boolean
}
export interface Store extends BaseResource {
  /**
   *
   */
  readonly id: string
  /**
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
   *	User-specific unique identifier for the store.
   *	The `key` is mandatory and immutable.
   *	It is used to reference the store.
   *
   */
  readonly key: string
  /**
   *	The name of the store
   *
   */
  readonly name?: LocalizedString
  /**
   *
   */
  readonly languages?: string[]
  /**
   *	Set of References to a Channel with `ProductDistribution` role
   *
   */
  readonly distributionChannels: ChannelReference[]
  /**
   *	Set of ResourceIdentifiers of Channels with `InventorySupply` role
   *
   */
  readonly supplyChannels?: ChannelReference[]
  /**
   *	Set of References to Product Selections along with settings.
   *	If `productSelections` is empty all products in the project are available in this Store.
   *	If `productSelections` is not empty but there exists no `active` Product Selection then no Product is available in this Store.
   *
   */
  readonly productSelections?: ProductSelectionSetting[]
  /**
   *
   */
  readonly custom?: CustomFields
}
export interface StoreDraft {
  /**
   *	User-specific unique identifier for the store.
   *	The `key` is mandatory and immutable.
   *	It is used to reference the store.
   *
   */
  readonly key: string
  /**
   *	The name of the store
   *
   */
  readonly name?: LocalizedString
  /**
   *
   */
  readonly languages?: string[]
  /**
   *	Set of ResourceIdentifiers to a Channel with `ProductDistribution` role
   *
   */
  readonly distributionChannels?: ChannelResourceIdentifier[]
  /**
   *	Set of ResourceIdentifiers of Channels with `InventorySupply` role
   *
   */
  readonly supplyChannels?: ChannelResourceIdentifier[]
  /**
   *	Set of ResourceIdentifiers of Product Selections along with settings.
   *	If `productSelections` is empty all products in the project are available in this Store.
   *	If `productSelections` is not empty but there exists no `active` Product Selection then no Product is available in this Store.
   *
   */
  readonly productSelections?: ProductSelectionSettingDraft[]
  /**
   *
   */
  readonly custom?: CustomFieldsDraft
}
export interface StoreKeyReference {
  readonly typeId: 'store'
  /**
   *
   */
  readonly key: string
}
export interface StorePagedQueryResponse {
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
  readonly results: Store[]
}
export interface StoreReference {
  readonly typeId: 'store'
  /**
   *	Unique ID of the referenced resource.
   *
   *
   */
  readonly id: string
  /**
   *
   */
  readonly obj?: Store
}
export interface StoreResourceIdentifier {
  readonly typeId: 'store'
  /**
   *	Unique ID of the referenced resource. Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	Unique key of the referenced resource. Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export interface StoreUpdate {
  /**
   *
   */
  readonly version: number
  /**
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
export interface StoreAddDistributionChannelAction {
  readonly action: 'addDistributionChannel'
  /**
   *
   */
  readonly distributionChannel: ChannelResourceIdentifier
}
export interface StoreAddProductSelectionAction {
  readonly action: 'addProductSelection'
  /**
   *	Resource Identifier of a Product Selection
   *
   */
  readonly productSelection: ProductSelectionResourceIdentifier
  /**
   *	If `true` all Products assigned to this Product Selection become part of the Store's assortment.
   *
   */
  readonly active?: boolean
}
export interface StoreAddSupplyChannelAction {
  readonly action: 'addSupplyChannel'
  /**
   *
   */
  readonly supplyChannel?: ChannelResourceIdentifier
}
export interface StoreChangeProductSelectionAction {
  readonly action: 'changeProductSelectionActive'
  /**
   *	A current Product Selection of this Store that is to be activated or deactivated.
   *
   */
  readonly productSelection: ResourceIdentifier
  /**
   *	If `true` all Products assigned to the Product Selection become part of the Store's assortment.
   *
   */
  readonly active?: boolean
}
export interface StoreRemoveDistributionChannelAction {
  readonly action: 'removeDistributionChannel'
  /**
   *
   */
  readonly distributionChannel: ChannelResourceIdentifier
}
export interface StoreRemoveProductSelectionAction {
  readonly action: 'removeProductSelection'
  /**
   *	A Product Selection to be removed from the current Product Selections of this Store.
   *
   */
  readonly productSelection: ResourceIdentifier
}
export interface StoreRemoveSupplyChannelAction {
  readonly action: 'removeSupplyChannel'
  /**
   *
   */
  readonly supplyChannel?: ChannelResourceIdentifier
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
   *
   */
  readonly distributionChannels?: ChannelResourceIdentifier[]
}
export interface StoreSetLanguagesAction {
  readonly action: 'setLanguages'
  /**
   *
   */
  readonly languages?: string[]
}
export interface StoreSetNameAction {
  readonly action: 'setName'
  /**
   *	The updated name of the store
   *
   */
  readonly name?: LocalizedString
}
export interface StoreSetProductSelectionsAction {
  readonly action: 'setProductSelections'
  /**
   *	The total of Product Selections to be set for this Store.
   *
   */
  readonly productSelections: ProductSelectionSettingDraft[]
}
export interface StoreSetSupplyChannelsAction {
  readonly action: 'setSupplyChannels'
  /**
   *
   */
  readonly supplyChannels?: ChannelResourceIdentifier[]
}
