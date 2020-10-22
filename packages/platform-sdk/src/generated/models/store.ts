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

import { ChannelReference, ChannelResourceIdentifier } from './channel'
import {
  BaseResource,
  CreatedBy,
  LastModifiedBy,
  LocalizedString,
} from './common'

export interface Store extends BaseResource {
  readonly id: string
  readonly version: number
  readonly createdAt: string
  readonly lastModifiedAt: string
  readonly lastModifiedBy?: LastModifiedBy
  readonly createdBy?: CreatedBy
  /**
   *	User-specific unique identifier for the store.
   *	The `key` is mandatory and immutable.
   *	It is used to reference the store.
   */
  readonly key: string
  /**
   *	The name of the store
   */
  readonly name?: LocalizedString
  readonly languages?: string[]
  /**
   *	Set of References to a Channel with `ProductDistribution` role
   */
  readonly distributionChannels: ChannelReference[]
  /**
   *	Set of ResourceIdentifiers of Channels with `InventorySupply` role
   */
  readonly supplyChannels?: ChannelReference[]
}
export interface StoreDraft {
  /**
   *	User-specific unique identifier for the store.
   *	The `key` is mandatory and immutable.
   *	It is used to reference the store.
   */
  readonly key: string
  /**
   *	The name of the store
   */
  readonly name: LocalizedString
  readonly languages?: string[]
  /**
   *	Set of ResourceIdentifiers to a Channel with `ProductDistribution` role
   */
  readonly distributionChannels?: ChannelResourceIdentifier[]
  /**
   *	Set of ResourceIdentifiers of Channels with `InventorySupply` role
   */
  readonly supplyChannels?: ChannelResourceIdentifier[]
}
export interface StoreKeyReference {
  readonly typeId: 'store'
  readonly key: string
}
export interface StorePagedQueryResponse {
  readonly limit: number
  readonly count: number
  readonly total?: number
  readonly offset: number
  readonly results: Store[]
}
export interface StoreReference {
  readonly typeId: 'store'
  readonly id: string
  readonly obj?: Store
}
export interface StoreResourceIdentifier {
  readonly typeId: 'store'
  readonly id?: string
  readonly key?: string
}
export interface StoreUpdate {
  readonly version: number
  readonly actions: StoreUpdateAction[]
}
export type StoreUpdateAction =
  | StoreSetLanguagesAction
  | StoreSetNameAction
  | StoresAddDistributionChannelsAction
  | StoresAddSupplyChannelsAction
  | StoresRemoveDistributionChannelsAction
  | StoresRemoveSupplyChannelsAction
  | StoresSetDistributionChannelsAction
  | StoresSetSupplyChannelsAction
export interface StoreSetLanguagesAction {
  readonly action: 'setLanguages'
  readonly languages?: string[]
}
export interface StoreSetNameAction {
  readonly action: 'setName'
  /**
   *	The updated name of the store
   */
  readonly name?: LocalizedString
}
export interface StoresAddDistributionChannelsAction {
  readonly action: 'addDistributionChannel'
  readonly distributionChannel: ChannelResourceIdentifier
}
export interface StoresAddSupplyChannelsAction {
  readonly action: 'addSupplyChannel'
  readonly supplyChannel: ChannelResourceIdentifier
}
export interface StoresRemoveDistributionChannelsAction {
  readonly action: 'removeDistributionChannel'
  readonly distributionChannel: ChannelResourceIdentifier
}
export interface StoresRemoveSupplyChannelsAction {
  readonly action: 'removeSupplyChannel'
  readonly supplyChannel: ChannelResourceIdentifier
}
export interface StoresSetDistributionChannelsAction {
  readonly action: 'setDistributionChannels'
  readonly distributionChannels?: ChannelResourceIdentifier[]
}
export interface StoresSetSupplyChannelsAction {
  readonly action: 'setSupplyChannels'
  readonly supplyChannels?: ChannelResourceIdentifier[]
}
