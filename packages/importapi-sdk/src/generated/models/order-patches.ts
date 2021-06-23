/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.commercetools.com/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */

import { Address } from './common'
import { DeliveryItem, ParcelMeasurements, TrackingData } from './orders'

/**
 *	Maps to `ReturnItem.shipmentState`
 */
export type ReturnShipmentState =
  | 'Advised'
  | 'BackInStock'
  | 'Returned'
  | 'Unusable'
export interface ReturnItemDraft {
  /**
   *
   */
  readonly quantity: number
  /**
   *
   */
  readonly lineItemId?: string
  /**
   *
   */
  readonly customLineItemId?: string
  /**
   *
   */
  readonly comment?: string
  /**
   *	Maps to `ReturnItem.shipmentState`
   *
   */
  readonly shipmentState: ReturnShipmentState
}
export interface ReturnInfo {
  /**
   *
   */
  readonly items: ReturnItemDraft[]
  /**
   *	Maps to `ReturnInfo.returnTrackingId`
   *
   */
  readonly returnTrackingId?: string
  /**
   *	Maps to `ReturnInfo.returnDate`
   *
   */
  readonly returnDate?: string
}
export interface DeliveryParcel {
  /**
   *
   */
  readonly deliveryId: string
  /**
   *
   */
  readonly measurements?: ParcelMeasurements
  /**
   *
   */
  readonly trackingData?: TrackingData
  /**
   *
   */
  readonly items?: DeliveryItem[]
}
export interface DeliveryParcelDraft {
  /**
   *
   */
  readonly measurements?: ParcelMeasurements
  /**
   *
   */
  readonly trackingData?: TrackingData
  /**
   *
   */
  readonly items?: DeliveryItem[]
}
export interface DeliveryDraft {
  /**
   *
   */
  readonly items: DeliveryItem[]
  /**
   *
   */
  readonly address?: Address
  /**
   *
   */
  readonly parcels: DeliveryParcelDraft[]
}
export interface DeliveryAddressDraft {
  /**
   *
   */
  readonly deliveryId: string
  /**
   *
   */
  readonly address?: Address
}
export interface ParcelMeasurementDraft {
  /**
   *
   */
  readonly parcelId: string
  /**
   *
   */
  readonly measurements?: ParcelMeasurements
}
export interface ParcelTrackingData {
  /**
   *
   */
  readonly parcelId: string
  /**
   *
   */
  readonly trackingData?: TrackingData
}
export interface ParcelItems {
  /**
   *
   */
  readonly parcelId: string
  /**
   *
   */
  readonly items?: DeliveryItem[]
}
export interface RemoveDeliveryDraft {
  /**
   *
   */
  readonly id: string
}
export interface RemoveParcelFromDeliveryDraft {
  /**
   *
   */
  readonly parcelId: string
}
/**
 *	Order fields that needs to be added or updated.
 *
 */
export interface OrderField {
  /**
   *	Maps to `Order.returnInfo`
   *
   *
   */
  readonly addReturnInfo?: ReturnInfo
  /**
   *	Maps to `Order.delivery`
   *
   *
   */
  readonly addParcelToDelivery?: DeliveryParcel
  /**
   *	Maps to `Order.delivery`
   *
   *
   */
  readonly addDeliveries?: DeliveryDraft[]
  /**
   *	Maps to `Order.removeDelivery`
   *
   *
   */
  readonly removeDelivery?: RemoveDeliveryDraft
  /**
   *	Maps to `Order.removeParcelFromDelivery`
   *
   *
   */
  readonly removeParcelFromDelivery?: RemoveParcelFromDeliveryDraft
  /**
   *	Maps to `Order.addressDraft`
   *
   *
   */
  readonly setDeliveryAddress?: DeliveryAddressDraft
  /**
   *	Maps to `Order.parcelMeasurements`
   *
   *
   */
  readonly setParcelMeasurements?: ParcelMeasurementDraft
  /**
   *	Maps to `Order.parcelTrackingData`
   *
   *
   */
  readonly setParcelTrackingData?: ParcelTrackingData
  /**
   *	Maps to `Order.parcelItems`
   *
   *
   */
  readonly setParcelItems?: ParcelItems[]
}
/**
 *	Import representation for an update to an Order. Use this type for importing updates to an existing Order into a commercetools project.
 *
 */
export interface OrderPatchImport {
  /**
   *	Maps to `Order.orderNumber`, String that uniquely identifies an order, unique across a project.
   *
   *
   */
  readonly orderNumber: string
  /**
   *	Each field referenced must be defined in an already existing order in the commercetools project or the import operation state is set to `ValidationFailed`.
   *
   *
   */
  readonly fields: OrderField
}
