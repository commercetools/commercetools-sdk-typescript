/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
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
 *	The data representation for a price to be imported that is persisted as a [EmbeddedPrice](/../api/projects/products#embeddedprice) in the Project.
 *
 */
export interface PriceImport extends ImportResource {
  /**
   *	Maps to `Price.value`.
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
   *	The Reference to the [CustomerGroup](/../api/projects/customerGroups#customergroup) with which the [EmbeddedPrice](/../api/projects/products#embeddedprice) is associated.
   *	If referenced CustomerGroup does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `unresolved` until the necessary CustomerGroup is created.
   *
   *
   */
  readonly customerGroup?: CustomerGroupKeyReference
  /**
   *	The Reference to the [Channel](/../api/projects/channels#channel) with which the [EmbeddedPrice](/../api/projects/products#embeddedprice) is associated.
   *	If referenced Channel does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `unresolved` until the necessary Channel is created.
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
   *	Only the [EmbeddedPrice](/../api/projects/products#embeddedprice) updates will be published to `staged` and `current` projection.
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
   *	The ProductVariant in which this [EmbeddedPrice](/../api/projects/products#embeddedprice) is contained.
   *	The Reference to the [ProductVariant](/../api/projects/products#productvariant) with which the [EmbeddedPrice](/../api/projects/products#embeddedprice) is associated.
   *	If referenced ProductVariant does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `unresolved` until the necessary ProductVariant is created.
   *
   *
   */
  readonly productVariant: ProductVariantKeyReference
  /**
   *	The Product in which the Product Variant containing this [EmbeddedPrice](/../api/projects/products#embeddedprice) is contained. Maps to `ProductVariant.product`.
   *	The Reference to the [Product](/../api/projects/products#product) with which the [EmbeddedPrice](/../api/projects/products#embeddedprice) is associated.
   *	If referenced Product does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `unresolved` until the necessary Product is created.
   *
   *
   */
  readonly product: ProductKeyReference
}
