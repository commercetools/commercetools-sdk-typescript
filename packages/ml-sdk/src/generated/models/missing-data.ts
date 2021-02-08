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
  ProductReference,
  ProductTypeReference,
  TaskStatusEnum,
} from './common'

export interface AttributeCount {
  /**
   *	Number of attributes defined in the product type.
   *
   */
  readonly productTypeAttributes: number
  /**
   *	Number of attributes defined in the variant.
   *
   */
  readonly variantAttributes: number
  /**
   *	Number of attributes missing values in the variant.
   *
   */
  readonly missingAttributeValues: number
}
export interface AttributeCoverage {
  /**
   *	The percentage of attributes from the product type defined in the product variant. A value of `1.0` indicates a product variant contains all attributes defined in the product type.
   *
   */
  readonly names: number
  /**
   *	Represents the percentage of attributes in the product variant that contain values.
   *
   */
  readonly values: number
}
export interface MissingAttributesDetails {
  /**
   *	Number of products scanned.
   *
   */
  readonly total: number
  /**
   *	Number of products missing attribute names.
   *
   */
  readonly missingAttributeNames: number
  /**
   *	Number of products missing attribute values.
   *
   */
  readonly missingAttributeValues: number
}
export interface MissingAttributes {
  /**
   *
   */
  readonly product: ProductReference
  /**
   *
   */
  readonly productType: ProductTypeReference
  /**
   *	ID of a ProductVariant.
   *
   */
  readonly variantId: number
  /**
   *	The names of the attributes of the product type that the variant is missing, sorted by attribute importance in descending order.
   *
   */
  readonly missingAttributeValues: string[]
  /**
   *	The names of the attributes of the product type that the variant is missing, sorted by attribute importance in descending order.
   *
   */
  readonly missingAttributeNames?: string[]
  /**
   *
   */
  readonly attributeCount?: AttributeCount
  /**
   *
   */
  readonly attributeCoverage?: AttributeCoverage
}
export interface MissingAttributesMeta {
  /**
   *
   */
  readonly productLevel: MissingAttributesDetails
  /**
   *
   */
  readonly variantLevel: MissingAttributesDetails
  /**
   *	The IDs of the product types containing the requested `attributeName`.
   *
   */
  readonly productTypeIds?: string[]
}
export interface MissingAttributesSearchRequest {
  /**
   *
   */
  readonly limit?: number
  /**
   *
   */
  readonly offset?: number
  /**
   *	If true, searches data from staged products in addition to published products.
   *
   */
  readonly staged?: boolean
  /**
   *	Maximum number of products to scan.
   *
   */
  readonly productSetLimit?: number
  /**
   *	If true, searches all product variants. If false, only searches master variants.
   *
   */
  readonly includeVariants?: boolean
  /**
   *	Minimum attribute coverage of variants to display, applied to both coverage types.
   *
   */
  readonly coverageMin?: number
  /**
   *	Maximum attribute coverage of variants to display, applied to both coverage types.
   *
   */
  readonly coverageMax?: number
  /**
   *	Default value: `coverageAttributeValues` - Allowed values: [`coverageAttributeValues`, `coverageAttributeNames`]
   *	`coverageAttributeValues` shows the product variants with the most missing attribute values first and `coverageAttributeNames` the ones with the most missing attribute names.
   *
   *
   */
  readonly sortBy?: string
  /**
   *	If true, the `missingAttributeNames` will be included in the results.
   *
   */
  readonly showMissingAttributeNames?: boolean
  /**
   *	Filters results by the provided Product IDs.
   *	Cannot be applied in combination with any other filter.
   *
   *
   */
  readonly productIds?: string[]
  /**
   *	Filters results by the provided product type IDs.
   *	Cannot be applied in combination with any other filter.
   *
   *
   */
  readonly productTypeIds?: string[]
  /**
   *	Filters results by the provided attribute name. If provided,  products are only checked for this attribute. Therefore, only products of product types which define the attribute name are considered. These product type IDs
   *	are then listed in `MissingAttributesMeta`. The  `attributeCount` and `attributeCoverage` fields are not part of the response when using this filter. Cannot be applied in combination with any other filter.
   *
   *
   */
  readonly attributeName?: string
}
export interface MissingAttributesPagedQueryResult {
  /**
   *
   */
  readonly count: number
  /**
   *
   */
  readonly total: number
  /**
   *
   */
  readonly offset: number
  /**
   *
   */
  readonly results: MissingAttributes[]
  /**
   *
   */
  readonly meta: MissingAttributesMeta
}
/**
 *	Represents a URL path to poll to get the results of an Asynchronous Request.
 */
export interface MissingDataTaskStatus {
  /**
   *
   */
  readonly state: TaskStatusEnum
  /**
   *	The expiry date of the result. You cannot access the result after the expiry date. Default: 1 day after the result first becomes available. This is only available when the TaskStatus state is SUCCESS.
   *
   *
   */
  readonly expires: string
  /**
   *	The response to an asynchronous request. The type depends on the request initiated. Only populated when the status is `SUCCESS`.
   *
   */
  readonly result: MissingAttributesPagedQueryResult
}
export interface MissingImages {
  /**
   *
   */
  readonly product: ProductReference
  /**
   *	ID of the variant
   *
   */
  readonly variantId: number
  /**
   *	Number of images the variant contains.
   *
   */
  readonly imageCount: number
}
export interface MissingImagesCount {
  /**
   *
   */
  readonly missingImages: number
  /**
   *	Number of products scanned.
   *
   */
  readonly total: number
}
export interface MissingImagesProductLevel extends MissingImagesCount {
  /**
   *	Number of products missing images.
   *
   */
  readonly missingImages: number
  /**
   *	Number of products scanned.
   *
   */
  readonly total: number
}
export interface MissingImagesVariantLevel extends MissingImagesCount {
  /**
   *	Number of product variants missing images.
   *
   */
  readonly missingImages: number
  /**
   *	Number of products scanned.
   *
   */
  readonly total: number
}
export interface MissingImagesMeta {
  /**
   *
   */
  readonly productLevel: MissingImagesProductLevel
  /**
   *
   */
  readonly variantLevel: MissingImagesVariantLevel
  /**
   *	The minimum number of images a product variant must have. Anything below this value is considered a product variant with missing images.
   *
   */
  readonly threshold: number
}
export interface MissingImagesSearchRequest {
  /**
   *
   */
  readonly limit?: number
  /**
   *
   */
  readonly offset?: number
  /**
   *	If true, searches data from staged products in addition to published products.
   *
   */
  readonly staged?: boolean
  /**
   *	Maximum number of products to scan.
   *
   */
  readonly productSetLimit?: number
  /**
   *	If true, searches all product variants. If false, only searches master variants.
   *
   */
  readonly includeVariants?: boolean
  /**
   *	If true, uses the median number of images per product variant as a threshold value.
   *
   */
  readonly autoThreshold?: boolean
  /**
   *	The minimum number of images a product variant must have. Anything below this value is considered a product variant with missing images.
   *
   */
  readonly threshold?: number
  /**
   *	Filters results by the provided Product IDs. Cannot be applied in combination with any other filter.
   *
   */
  readonly productIds?: string[]
  /**
   *	Filters results by the provided product type IDs. It cannot be applied in combination with any other filter.
   *
   */
  readonly productTypeIds?: string[]
}
export interface MissingImagesPagedQueryResult {
  /**
   *
   */
  readonly count: number
  /**
   *
   */
  readonly total: number
  /**
   *
   */
  readonly offset: number
  /**
   *
   */
  readonly results: MissingImages[]
  /**
   *
   */
  readonly meta: MissingImagesMeta
}
/**
 *	Represents a URL path to poll to get the results of an Asynchronous Request.
 */
export interface MissingImagesTaskStatus {
  /**
   *
   */
  readonly state: TaskStatusEnum
  /**
   *	The expiry date of the result. You cannot access the result after the expiry date. Default: 1 day after the result first becomes available. This is only available when the TaskStatus state is SUCCESS.
   *
   *
   */
  readonly expires: string
  /**
   *	The response to an asynchronous request. The type depends on the request initiated. Only populated when the status is `SUCCESS`.
   *
   */
  readonly result: MissingImagesPagedQueryResult
}
export interface MissingPrices {
  /**
   *
   */
  readonly product: ProductReference
  /**
   *	Id of the `ProductVariant`.
   *
   */
  readonly variantId: number
}
export interface MissingPricesProductCount {
  /**
   *
   */
  readonly total: number
  /**
   *
   */
  readonly missingPrices: number
}
export interface MissingPricesProductLevel extends MissingPricesProductCount {
  /**
   *	Number of products scanned.
   *
   */
  readonly total: number
  /**
   *	Number of products missing prices.
   *
   */
  readonly missingPrices: number
}
export interface MissingPricesVariantLevel extends MissingPricesProductCount {
  /**
   *	Number of product variants scanned.
   *
   */
  readonly total: number
  /**
   *	Number of product variants missing prices.
   *
   */
  readonly missingPrices: number
}
export interface MissingPricesMeta {
  /**
   *
   */
  readonly productLevel: MissingPricesProductLevel
  /**
   *
   */
  readonly variantLevel: MissingPricesVariantLevel
}
export interface MissingPricesSearchRequest {
  /**
   *
   */
  readonly limit?: number
  /**
   *
   */
  readonly offset?: number
  /**
   *	If true, searches data from staged products in addition to published products.
   *
   */
  readonly staged?: boolean
  /**
   *	Maximum number of products to scan.
   *
   */
  readonly productSetLimit?: number
  /**
   *	If true, searches all product variants. If false, only searches master variants.
   *
   */
  readonly includeVariants?: boolean
  /**
   *	If used, only checks if a product variant has a price in the provided currency code.
   *
   */
  readonly currencyCode?: string
  /**
   *	If true, checks if there are prices for the specified date range and time.
   *
   */
  readonly checkDate?: boolean
  /**
   *	Starting date of the range to check. If no value is given, checks prices valid at the time the search is initiated.
   *
   */
  readonly validFrom?: string
  /**
   *	Ending date of the range to check. If no value is given, it is equal to `validFrom`.
   *
   */
  readonly validUntil?: string
  /**
   *	Filters results by the provided Product IDs. Cannot be applied in combination with the `productTypeIds` filter.
   *
   */
  readonly productIds?: string[]
  /**
   *	Filters results by the provided product type IDs. Cannot be applied in combination with the `productIds` filter.
   *
   */
  readonly productTypeIds?: string[]
}
export interface MissingPricesPagedQueryResult {
  /**
   *
   */
  readonly count: number
  /**
   *
   */
  readonly total: number
  /**
   *
   */
  readonly offset: number
  /**
   *
   */
  readonly results: MissingPrices[]
  /**
   *
   */
  readonly meta: MissingPricesMeta
}
/**
 *	Represents a URL path to poll to get the results of an Asynchronous Request.
 */
export interface MissingPricesTaskStatus {
  /**
   *
   */
  readonly state: TaskStatusEnum
  /**
   *	The expiry date of the result. You cannot access the result after the expiry date. Default: 1 day after the result first becomes available. This is only available when the TaskStatus state is SUCCESS.
   *
   *
   */
  readonly expires: string
  /**
   *	The response to an asynchronous request. The type depends on the request initiated. Only populated when the status is `SUCCESS`.
   *
   */
  readonly result: MissingPricesPagedQueryResult
}
