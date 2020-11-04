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
  Asset,
  CategoryKeyReference,
  ChannelKeyReference,
  CustomerGroupKeyReference,
  DiscountedPrice,
  Image,
  ImportResource,
  LocalizedString,
  PriceTier,
  ProductTypeKeyReference,
  StateKeyReference,
  TaxCategoryKeyReference,
  TypedMoney,
} from './common'
import { Custom } from './customfields'
import { SearchKeywords } from './products'
import { Attribute } from './productvariants'

export interface ProductDraftImport extends ImportResource {
  /**
   *	The product's product type. Maps to `Product.productType`.
   *
   *	The product type referenced
   *	must already exist in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
   *
   */
  readonly productType: ProductTypeKeyReference
  readonly name: LocalizedString
  /**
   *	Human-readable identifiers usually used as deep-link URL to the related product. Each slug must be unique across a project,
   *	but a product can have the same slug for different languages. Allowed are alphabetic, numeric, underscore (_) and hyphen (-) characters.
   *
   */
  readonly slug: LocalizedString
  /**
   *	Maps to `Product.description`.
   *
   */
  readonly description?: LocalizedString
  /**
   *	An array of references to categories by their keys. Maps to `Product.categories`.
   *
   *	The categories referenced
   *	must already exist in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
   *
   */
  readonly categories?: CategoryKeyReference[]
  readonly metaTitle?: LocalizedString
  readonly metaDescription?: LocalizedString
  readonly metaKeywords?: LocalizedString
  /**
   *	The master product variant.
   *	Required if the `variants` array has product variants.
   *
   */
  readonly masterVariant?: ProductVariantDraftImport
  /**
   *	An array of related product variants.
   */
  readonly variants?: ProductVariantDraftImport[]
  /**
   *	References a tax category by its key.
   *
   *	The tax category referenced must already exist
   *	in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
   *
   */
  readonly taxCategory?: TaxCategoryKeyReference
  readonly searchKeywords?: SearchKeywords
  /**
   *	References a state by its key.
   *
   *	The tax category referenced must already exist
   *	in the commercetools project, or the
   *	import operation state is set to `Unresolved`.
   *
   */
  readonly state?: StateKeyReference
  /**
   *	If there were updates, only the updates will be published to `staged` and `current` projection.
   *
   */
  readonly publish?: boolean
}
export interface ProductVariantDraftImport {
  readonly sku?: string
  readonly key?: string
  readonly prices?: PriceDraftImport[]
  readonly attributes?: Attribute[]
  readonly images?: Image[]
  readonly assets?: Asset[]
}
export interface PriceDraftImport {
  readonly value: TypedMoney
  /**
   *	A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   */
  readonly country?: string
  /**
   *	References a customer group by its key.
   */
  readonly customerGroup?: CustomerGroupKeyReference
  /**
   *	References a channel by its key.
   */
  readonly channel?: ChannelKeyReference
  readonly validFrom?: string
  readonly validUntil?: string
  /**
   *	The custom fields for this category.
   */
  readonly custom?: Custom
  /**
   *	Sets a discounted price from an external service.
   */
  readonly discounted?: DiscountedPrice
  /**
   *	The tiered prices for this price.
   */
  readonly tiers?: PriceTier[]
  readonly key?: string
}
