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

import { ChannelKeyReference, ImportResource } from './common'
import { Custom } from './customfields'

/**
 *	Import representation for a inventory.
 *
 */
export interface InventoryImport extends ImportResource {
  readonly sku: string
  /**
   *	Maps to `Inventory.quantityOnStock`
   *
   */
  readonly quantityOnStock: number
  /**
   *	Maps to `Inventory.restockableInDays`
   *
   */
  readonly restockableInDays?: number
  readonly expectedDelivery?: string
  /**
   *	References a channel by its key.
   */
  readonly supplyChannel?: ChannelKeyReference
  /**
   *	Maps to `Inventory.custom`.
   *
   */
  readonly custom?: Custom
}
