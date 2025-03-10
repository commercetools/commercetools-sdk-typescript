/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { ChannelKeyReference, ImportResource } from './common'
import { Custom } from './customfields'

/**
 *	The data representation for an Inventory to be imported that is persisted as a [Inventory](ctp:api:type:InventoryEntry) in the Project.
 *
 */
export interface InventoryImport extends ImportResource {
  /**
   *	User-defined unique identifier. If an [InventoryEntry](ctp:api:type:InventoryEntry) with this `key` exists, it will be updated with the imported data.
   *
   */
  readonly key: string
  /**
   *	Maps to `Inventory.sku`
   *
   *
   */
  readonly sku: string
  /**
   *	Maps to `Inventory.quantityOnStock`
   *
   *
   */
  readonly quantityOnStock: number
  /**
   *	Maps to `Inventory.restockableInDays`
   *
   *
   */
  readonly restockableInDays?: number
  /**
   *	Maps to `Inventory.expectedDelivery`
   *
   *
   */
  readonly expectedDelivery?: string
  /**
   *	Maps to `Inventory.supplyChannel`
   *
   *
   */
  readonly supplyChannel?: ChannelKeyReference
  /**
   *	Maps to `Inventory.custom`.
   *
   *
   */
  readonly custom?: Custom
}
