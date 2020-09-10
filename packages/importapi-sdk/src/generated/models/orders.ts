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

import {
  Address,
  CartDiscountKeyReference,
  ChannelKeyReference,
  CustomerGroupKeyReference,
  CustomerKeyReference,
  DiscountedPrice,
  Image,
  ImportResource,
  LocalizedString,
  Money,
  PriceTier,
  ProductKeyReference,
  ShippingMethodKeyReference,
  StateKeyReference,
  TaxCategoryKeyReference,
  TypedMoney,
} from './common'
import { Custom } from './customfields'
import { SubRate, TaxRate } from './prices'
import { Attribute } from './productvariants'

/**
 *	The item's state.
 *
 */
export interface ItemState {
  readonly quantity: number
  /**
   *	Maps to `ItemState.state`.
   *
   */
  readonly state: StateKeyReference
}
/**
 *	The item's shipping target.
 *
 */
export interface ItemShippingTarget {
  /**
   *	Maps to `ItemShippingTarget.addressKey`.
   *
   */
  readonly addressKey: string
  /**
   *	Maps to `ItemShippingTarget.quantity`.
   *
   */
  readonly quantity: number
}
export interface ItemShippingDetailsDraft {
  /**
   *	Maps to `ItemShippingDetailsDraft.targets`.
   *
   */
  readonly targets: ItemShippingTarget[]
}
export interface LineItemPrice {
  /**
   *	Maps to `Price.value`.
   *
   */
  readonly value: TypedMoney
  /**
   *	Maps to `Price.county`.
   *
   */
  readonly country?: string
  /**
   *	Maps to `Price.validFrom`.
   *
   */
  readonly validFrom?: string
  /**
   *	Maps to `Price.validUntil`.
   *
   */
  readonly validUntil?: string
  /**
   *	References a customer group by its key.
   *
   */
  readonly customerGroup?: CustomerGroupKeyReference
  /**
   *	References a channel by its key.
   *
   */
  readonly channel?: ChannelKeyReference
  /**
   *	Sets a discounted price from an external service.
   */
  readonly discounted?: DiscountedPrice
  /**
   *	The tiered prices for this price.
   */
  readonly tiers?: PriceTier[]
  /**
   *	Maps to `Price.custom`.
   *
   */
  readonly custom?: Custom
}
export interface LineItemProductVariantImportDraft {
  /**
   *	Maps to `ProductVariant.product`.
   *
   */
  readonly product?: ProductKeyReference
  /**
   *	Maps to `ProductVariantImportDraft.sku`.
   *
   */
  readonly sku?: string
  /**
   *	Maps to `ProductVariantImportDraft.prices`
   *
   */
  readonly prices?: LineItemPrice[]
  /**
   *	Maps to `ProductVariantImportDraft.attributes`
   *
   */
  readonly attributes?: Attribute[]
  /**
   *	Maps to `ProductVariantImportDraft.images`.
   *
   */
  readonly images?: Image[]
}
/**
 *	Represents an individual line item in an Order. A line item is a snapshot of a product at the time it was added to the order.
 *
 *	You cannot create an order which includes line operations that do not exist in the project or have been deleted.
 *	Products and variants referenced by a line item must already exist in the commercetools project.
 *
 */
export interface LineItemImportDraft {
  /**
   *	Maps to `LineItem.productId`.
   *
   */
  readonly product?: ProductKeyReference
  /**
   *	Maps to `LineItem.name`.
   *
   */
  readonly name: LocalizedString
  /**
   *	Maps to `ProductVariantImportDraft`.
   *
   */
  readonly variant: LineItemProductVariantImportDraft
  /**
   *	Maps to `LineItem.price`.
   *
   */
  readonly price: LineItemPrice
  /**
   *	Maps to `LineItem.quantity`.
   *
   */
  readonly quantity: number
  readonly state?: ItemState[]
  /**
   *	References a supply channel. Maps to `LineItem.supplyChannel`.
   *
   *	The supply channel referenced must already exist
   *	in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
   *
   */
  readonly supplyChannel?: ChannelKeyReference
  /**
   *	References a distribution channel. Maps to `LineItem.distributionChannel`.
   *
   *	The distribution channel referenced must already exist
   *	in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
   *
   */
  readonly distributionChannel?: ChannelKeyReference
  /**
   *	Maps to `LineItem.taxRate`.
   *
   */
  readonly taxRate?: TaxRate
  /**
   *	Maps to LineItem.shippingDetails.
   *
   */
  readonly shippingDetails?: ItemShippingDetailsDraft
}
export type ShippingRateTierType =
  | 'CartValue'
  | 'CartClassification'
  | 'CartScore'
export type ShippingRatePriceTier = CartClassificationTier
export interface CartClassificationTier {
  readonly type: 'CartClassification'
  readonly value: string
  readonly price: Money
  readonly tiers: ShippingRatePriceTier[]
  readonly isMatching?: boolean
}
export interface ShippingRateDraft {
  readonly price: Money
  readonly freeAbove?: Money
  readonly tiers?: ShippingRatePriceTier[]
}
export interface ParcelMeasurements {
  readonly heightInMillimeter?: number
  readonly lengthInMillimeter?: number
  readonly widthInMillimeter?: number
  readonly weightInGram?: number
}
export interface TrackingData {
  readonly trackingId?: string
  readonly carrier?: string
  readonly provider?: string
  readonly providerTransaction?: string
  readonly isReturn?: boolean
}
export interface DeliveryItem {
  readonly id: string
  readonly quantity: number
}
export interface Parcel {
  readonly id: string
  readonly createdAt: string
  readonly measurements?: ParcelMeasurements
  readonly trackingData?: TrackingData
  readonly items?: DeliveryItem[]
}
export interface Delivery {
  readonly id: string
  readonly createdAt: string
  readonly items: DeliveryItem[]
  readonly parcels: Parcel[]
  readonly address?: Address
}
export interface DiscountedLineItemPortion {
  /**
   *	References a cart discount by its key.
   */
  readonly discount: CartDiscountKeyReference
  readonly discountedAmount: Money
}
export interface DiscountedLineItemPriceDraft {
  readonly value: Money
  readonly includedDiscounts: DiscountedLineItemPortion[]
}
export type ShippingMethodState = 'DoesNotMatchCart' | 'MatchesCart'
/**
 *	Maps to an order's `shippingInfo` property. This field is usually populated by the cart assosciated with
 *	the order, but when importing orders you must provide a draft representation as a part of the OrderImport.
 *
 */
export interface ShippingInfoImportDraft {
  readonly shippingMethodName: string
  readonly price: TypedMoney
  readonly shippingRate: ShippingRateDraft
  readonly taxRate?: TaxRate
  /**
   *	References a tax category by its key.
   */
  readonly taxCategory?: TaxCategoryKeyReference
  /**
   *	References a shipping method by its key.
   */
  readonly shippingMethod?: ShippingMethodKeyReference
  readonly deliveries?: Delivery[]
  readonly discountedPrice?: DiscountedLineItemPriceDraft
  readonly shippingMethodState?: ShippingMethodState
}
export interface ExternalTaxRateDraft {
  readonly name: string
  readonly amount?: number
  readonly country: string
  readonly state?: string
  readonly subRates?: SubRate[]
  readonly includedInPrice?: boolean
}
export interface CustomLineItemTaxedPrice {
  readonly totalNet: TypedMoney
  readonly totalGross: TypedMoney
}
export interface CustomLineItemDraft {
  readonly name: LocalizedString
  readonly money: TypedMoney
  readonly taxedPrice?: CustomLineItemTaxedPrice
  readonly totalPrice: TypedMoney
  readonly slug: string
  readonly quantity: number
  readonly state?: ItemState[]
  /**
   *	References a tax category by its key.
   */
  readonly taxCategory?: TaxCategoryKeyReference
  readonly taxRate?: TaxRate
  readonly externalTaxRate?: ExternalTaxRateDraft
  readonly discountedPricePerQuantity?: DiscountedLineItemPriceDraft[]
  readonly shippingDetails?: ItemShippingDetailsDraft
}
export interface TaxPortion {
  readonly name?: string
  readonly rate: number
  readonly amount: TypedMoney
}
export interface TaxedPrice {
  readonly totalNet: Money
  readonly totalGross: Money
  readonly taxPortions: TaxPortion[]
}
export type OrderState = 'Open' | 'Confirmed' | 'Complete' | 'Cancelled'
export type ShipmentState =
  | 'Shipped'
  | 'Ready'
  | 'Pending'
  | 'Delayed'
  | 'Partial'
  | 'Backorder'
export type PaymentState =
  | 'BalanceDue'
  | 'Failed'
  | 'Pending'
  | 'CreditOwed'
  | 'Paid'
export type InventoryMode = 'TrackOnly' | 'ReserveOnOrder'
export type RoundingMode = 'HalfEven' | 'HalfUp' | 'HalfDown'
export type TaxCalculationMode = 'LineItemLevel' | 'UnitPriceLevel'
export type CartOrigin = 'Customer' | 'Merchant'
/**
 *	Import representation for an order.
 *
 *	In commercetools, you can import an order using the
 *	[Create Order by Import](https://docs.commercetools.com/http-api-projects-orders-import.html#create-an-order-by-import)
 *	endpoint method instead of creating it from a cart.
 *
 *	The order import draft is a snapshot of an order at the time it was imported.
 *
 */
export interface OrderImport extends ImportResource {
  /**
   *	Maps to `Order.orderNumber`.
   *
   */
  readonly orderNumber?: string
  /**
   *	References a customer by its key.
   */
  readonly customer?: CustomerKeyReference
  /**
   *	Maps to `Order.customerEmail`.
   *
   */
  readonly customerEmail?: string
  /**
   *	Maps to `Order.lineItems`.
   *
   */
  readonly lineItems?: LineItemImportDraft[]
  /**
   *	Maps to `Order.customLineItems`
   *
   */
  readonly customLineItems?: CustomLineItemDraft[]
  /**
   *	Maps to `Order.totalPrice`.
   *
   */
  readonly totalPrice: TypedMoney
  /**
   *	Maps to `Order.taxedPrice`.
   *
   */
  readonly taxedPrice?: TaxedPrice
  /**
   *	Maps to `Order.shippingAddress`.
   *
   */
  readonly shippingAddress?: Address
  /**
   *	Maps to `Order.billingAddress`.
   *
   */
  readonly billingAddress?: Address
  /**
   *	Maps to `Order.customerGroup`.
   *
   */
  readonly customerGroup?: CustomerGroupKeyReference
  /**
   *	Maps to `Order.country`.
   *
   */
  readonly country?: string
  /**
   *	Maps to `Order.orderState`.
   *
   */
  readonly orderState?: OrderState
  /**
   *	Maps to `Order.shipmentState`.
   *
   */
  readonly shipmentState?: ShipmentState
  /**
   *	Maps to `Order.paymentState`.
   *
   */
  readonly paymentState?: PaymentState
  /**
   *	Maps to `Order.shippingInfo`.
   *
   */
  readonly shippingInfo?: ShippingInfoImportDraft
  /**
   *	Maps to `Order.completedAt`.
   *
   */
  readonly completedAt?: string
  /**
   *	Maps to `Order.custom`.
   *
   */
  readonly custom?: Custom
  /**
   *	Maps to `Order.inventoryMode`.
   *
   */
  readonly inventoryMode?: InventoryMode
  /**
   *	Maps to `Order.taxRoundingMode`.
   *
   */
  readonly taxRoundingMode?: RoundingMode
  /**
   *	Maps to `Order.taxCalculationMode`.
   *
   */
  readonly taxCalculationMode?: TaxCalculationMode
  /**
   *	Maps to `Order.origin`.
   *
   */
  readonly origin?: CartOrigin
  /**
   *	Maps to `Order.itemShippingAddresses`.
   *
   */
  readonly itemShippingAddresses?: Address[]
}
