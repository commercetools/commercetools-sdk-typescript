/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
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
  ProductPriceModeEnum,
  ProductTypeKeyReference,
  StateKeyReference,
  TaxCategoryKeyReference,
  TypedMoney,
} from './common'
import { Custom } from './customfields'
import { SearchKeywords } from './products'
import { Attribute } from './productvariants'

/**
 *	The representation of a Product Draft for the import purpose.
 *
 */
export interface ProductDraftImport extends ImportResource {
  /**
   *	User-defined unique identifier. If a [Product](ctp:api:type:Product) with this `key` exists, it is updated with the imported data.
   *
   */
  readonly key: string
  /**
   *	Maps to `Product.productType`. If the referenced [ProductType](ctp:api:type:ProductType) does not exist, the `state` of the [ImportOperation](ctp:import:type:ImportOperation) will be set to `unresolved` until the referenced ProductType is created.
   *
   *
   */
  readonly productType: ProductTypeKeyReference
  /**
   *	Maps to `ProductData.name`.
   *
   */
  readonly name: LocalizedString
  /**
   *	Maps to `ProductData.slug`.
   *
   */
  readonly slug: LocalizedString
  /**
   *	Maps to `ProductData.description`.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Maps to `ProductData.categories`. If the referenced [Categories](ctp:api:type:Category) do not exist, the `state` of the [ImportOperation](ctp:import:type:ImportOperation) will be set to `unresolved` until the referenced Categories are created.
   *
   *
   */
  readonly categories?: CategoryKeyReference[]
  /**
   *
   */
  readonly attributes?: Attribute[]
  /**
   *	Maps to `ProductData.metaTitle`.
   *
   *
   */
  readonly metaTitle?: LocalizedString
  /**
   *	Maps to `ProductData.metaDescription`.
   *
   *
   */
  readonly metaDescription?: LocalizedString
  /**
   *	Maps to `ProductData.metaKeywords`.
   *
   *
   */
  readonly metaKeywords?: LocalizedString
  /**
   *	The master ProductVariant.
   *	Required if `variants` contains at least one ProductVariant.
   *
   *
   */
  readonly masterVariant?: ProductVariantDraftImport
  /**
   *	An array of related ProductVariants.
   *
   */
  readonly variants?: ProductVariantDraftImport[]
  /**
   *	Maps to `Product.taxCategory`. If the referenced [TaxCategory](ctp:api:type:TaxCategory) does not exist, the `state` of the [ImportOperation](ctp:import:type:ImportOperation) will be set to `unresolved` until the referenced TaxCategory is created.
   *
   *
   */
  readonly taxCategory?: TaxCategoryKeyReference
  /**
   *	Maps to `ProductData.searchKeywords`.
   *
   *
   */
  readonly searchKeywords?: SearchKeywords
  /**
   *	Maps to `Product.state`. If the referenced [State](ctp:api:type:State) does not exist, the `state` of the [ImportOperation](ctp:import:type:ImportOperation) will be set to `unresolved` until the referenced State is created.
   *
   *
   */
  readonly state?: StateKeyReference
  /**
   *	Determines the published status and current/staged projection of the Product. For more information, see [Managing the published state of Products](/import-export/best-practices#manage-published-state-of-products).
   *
   *
   */
  readonly publish?: boolean
  /**
   *	Maps to `Product.priceMode`. If not provided, the existing `Product.priceMode` is not changed.
   *
   *
   */
  readonly priceMode?: ProductPriceModeEnum
}
/**
 *	The representation of a Product Variant Draft for the import purpose.
 *
 */
export interface ProductVariantDraftImport {
  /**
   *	User-defined unique SKU of the Product Variant.
   *
   *
   */
  readonly sku?: string
  /**
   *	User-defined unique identifier for the ProductVariant.
   *
   *
   */
  readonly key: string
  /**
   *	The Embedded Prices for the Product Variant.
   *	Each Price must have its unique Price scope (with same currency, country, Customer Group, Channel, `validFrom` and `validUntil`).
   *
   *
   */
  readonly prices?: PriceDraftImport[]
  /**
   *	Attributes according to the respective AttributeDefinition.
   *
   *
   */
  readonly attributes?: Attribute[]
  /**
   *	Images for the Product Variant.
   *
   *
   */
  readonly images?: Image[]
  /**
   *	Media assets for the Product Variant.
   *
   *
   */
  readonly assets?: Asset[]
}
/**
 *	The representation of a Price Draft for the import purpose.
 *
 */
export interface PriceDraftImport {
  /**
   *	Money value of this Price.
   *
   */
  readonly value: TypedMoney
  /**
   *	Set this field if this Price is only valid for the specified country.
   *
   */
  readonly country?: string
  /**
   *	Set this field if this Price is only valid for the referenced [CustomerGroup](ctp:api:type:CustomerGroup). If the referenced CustomerGroup does not exist, the `state` of the [ImportOperation](ctp:import:type:ImportOperation) will be set to `unresolved` until the referenced CustomerGroup is created.
   *
   */
  readonly customerGroup?: CustomerGroupKeyReference
  /**
   *	Set this field if this Price is only valid for the referenced `ProductDistribution` [Channel](ctp:api:type:Channel). If the referenced Channel does not exist, the `state` of the [ImportOperation](ctp:import:type:ImportOperation) will be set to `unresolved` until the referenced Channel is created.
   *
   */
  readonly channel?: ChannelKeyReference
  /**
   *	Set this field if this Price is only valid from the specified date and time. Must be at least 1 ms earlier than `validUntil`.
   *
   */
  readonly validFrom?: string
  /**
   *	Set this field if this Price is only valid until the specified date and time. Must be at least 1 ms later than `validFrom`.
   *
   */
  readonly validUntil?: string
  /**
   *	Custom Fields for the Embedded Price.
   *
   */
  readonly custom?: Custom
  /**
   *	Set this field to add a DiscountedPrice from an **external service**.
   *
   */
  readonly discounted?: DiscountedPrice
  /**
   *	The tiered prices for this price.
   *
   */
  readonly tiers?: PriceTier[]
  /**
   *	User-defined unique identifier for the Embedded Price.
   *
   *
   */
  readonly key: string
}
