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
  ChannelKeyReference,
  CustomerGroupKeyReference,
  DiscountedPrice,
  ImportResource,
  PriceTier,
  ProductKeyReference,
  ProductVariantKeyReference,
  TypedMoney,
} from './common'
import { Custom } from './customfields'

export interface SubRate {
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly amount: number
}
export interface TaxRate {
  /**
   *
   */
  readonly id?: string
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly amount: number
  /**
   *
   */
  readonly includedInPrice: boolean
  /**
   *	A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   *
   */
  readonly country: string
  /**
   *
   */
  readonly state?: string
  /**
   *
   */
  readonly subRates?: SubRate[]
}
/**
 *	Imports a product variant's prices.
 *
 */
export interface PriceImport extends ImportResource {
  /**
   *	Maps to `Price.value`.
   *
   *	The Import API **only** supports `centPrecision` prices.
   *
   *
   */
  readonly value: TypedMoney
  /**
   *	Maps to `Price.county`.
   *
   *
   */
  readonly country?: string
  /**
   *	Maps to `Price.validFrom`.
   *
   *
   */
  readonly validFrom?: string
  /**
   *	Maps to `Price.validUntil`.
   *
   *
   */
  readonly validUntil?: string
  /**
   *	References a customer group by its key.
   *
   *	The customer group referenced
   *	must already exist in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
   *
   *
   */
  readonly customerGroup?: CustomerGroupKeyReference
  /**
   *	References a channel by its key.
   *
   *	The channel referenced
   *	must already exist in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
   *
   *
   */
  readonly channel?: ChannelKeyReference
  /**
   *	Sets a discounted price from an external service.
   *
   */
  readonly discounted?: DiscountedPrice
  /**
   *	Only the Price updates will be published to `staged` and `current` projection.
   *
   *
   */
  readonly publish?: boolean
  /**
   *	The tiered prices for this price.
   *
   */
  readonly tiers?: PriceTier[]
  /**
   *	The custom fields for this price.
   *
   */
  readonly custom?: Custom
  /**
   *	The product variant in which this price is contained.
   *
   *	The product variant referenced
   *	must already exist in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
   *
   *
   */
  readonly productVariant: ProductVariantKeyReference
  /**
   *	The product in which this product variant containong the price is contained. Maps to `ProductVariant.product`.
   *
   *	The product referenced
   *	must already exist in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
   *
   *
   */
  readonly product: ProductKeyReference
}
