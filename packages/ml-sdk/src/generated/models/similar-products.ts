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

import {
  LocalizedString,
  Money,
  ProductReference,
  TaskStatusEnum,
} from './common'

/**
 *	A set of ProductData for comparison. If no optional attributes are specified, all `current` ProductData are selected for comparison.
 */
export interface ProductSetSelector {
  /**
   *	The project containing the project set.
   *
   */
  readonly projectKey: string
  /**
   *	An array of Product IDs to compare. If unspecified, no Product ID filter is applied.
   *
   */
  readonly productIds?: string[]
  /**
   *	An array of product type IDs. Only products with product types in this array are compared. If unspecified, no product type filter is applied.
   *
   */
  readonly productTypeIds?: string[]
  /**
   *	Specifies use of staged or current product data.
   *
   */
  readonly staged?: boolean
  /**
   *	Specifies use of product variants. If set to `true`, all product variants are compared, not just the master variant.
   *
   */
  readonly includeVariants?: boolean
  /**
   *	Maximum number of products to check (if unspecified, all products are considered). Note that the maximum number of product comparisons between two productSets is 20,000,000. This limit cannot be exceeded. If you need a higher limit, contact https://support.commercetools.com
   *
   */
  readonly productSetLimit?: number
}
/**
 *	Specify which ProductData attributes to use for estimating similarity and how to weigh them. An attribute's weight can be any whole positive integer, starting with 0. The larger the integer, the higher its weight.
 */
export interface SimilarityMeasures {
  /**
   *	Importance of the `name` attribute in overall similarity.
   *
   */
  readonly name?: number
  /**
   *	Importance of the `description` attribute in overall similarity.
   *
   */
  readonly description?: number
  /**
   *	Importance of the `description` attribute in overall similarity.
   *
   */
  readonly attribute?: number
  /**
   *	Importance of the number of product variants in overall similarity.
   *
   */
  readonly variantCount?: number
  /**
   *	Importance of the `price` attribute in overall similarity.
   *
   */
  readonly price?: number
}
export interface SimilarProductSearchRequest {
  /**
   *
   */
  readonly limit?: number
  /**
   *
   */
  readonly offset?: number
  /**
   *	language tag used to prioritize language for text comparisons.
   *
   */
  readonly language?: string
  /**
   *	The three-digit  currency code to compare prices in. When a product has multiple prices, all prices for the product are converted to the currency provided by the currency attribute and the median price is calculated for comparison. Currencies are converted using the ECB currency exchange rates at the time the request is made. Of the currency codes, only currencies with currency exchange rates provided by the ECB are supported.
   *
   */
  readonly currencyCode?: string
  /**
   *	`similarityMeasures` defines the attributes taken into account to measure product similarity.
   *
   *
   */
  readonly similarityMeasures?: SimilarityMeasures
  /**
   *	Array of length 2 of ProductSetSelector
   *
   */
  readonly productSetSelectors?: ProductSetSelector[]
  /**
   *
   */
  readonly confidenceMin?: number
  /**
   *
   */
  readonly confidenceMax?: number
}
/**
 *	One part of a SimilarProductPair. Refers to a specific ProductVariant.
 */
export interface SimilarProduct {
  /**
   *	Reference to Product
   *
   */
  readonly product?: ProductReference
  /**
   *	ID of the ProductVariant that was compared.
   *
   */
  readonly variantId?: number
  /**
   *	Supplementary information about the data used for similarity estimation. This information helps you understand the estimated confidence score, but it should not be used to identify a product.
   *
   */
  readonly meta?: SimilarProductMeta
}
export interface SimilarProductMeta {
  /**
   *	Localized product name used for similarity estimation.
   *
   */
  readonly name?: LocalizedString
  /**
   *	Localized product description used for similarity estimation.
   *
   */
  readonly description?: LocalizedString
  /**
   *	The product price in cents using the currency defined in SimilarProductSearchRequest If multiple prices exist, the median value is taken as a representative amount.
   *
   */
  readonly price?: Money
  /**
   *	Total number of variants associated with the product.
   *
   */
  readonly variantCount?: number
}
/**
 *	A pair of SimilarProducts
 */
export interface SimilarProductPair {
  /**
   *	The probability of product similarity.
   *
   */
  readonly confidence: number
  /**
   *
   */
  readonly products: SimilarProduct[]
}
export interface SimilarProductSearchRequestMeta {
  /**
   *	The SimilarityMeasures used in this search.
   *
   */
  readonly similarityMeasures: SimilarityMeasures
}
export interface SimilarProductsPagedQueryResult {
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
  readonly results: SimilarProductPair[]
  /**
   *
   */
  readonly meta: SimilarProductSearchRequestMeta
}
/**
 *	Represents a URL path to poll to get the results of an Asynchronous Request.
 */
export interface SimilarProductsTaskStatus {
  /**
   *
   */
  readonly state: TaskStatusEnum
  /**
   *	The expiry date of the result. You cannot access the result after the expiry date. Default: 1 day after the result first becomes available. This is only available when the TaskStatus state is SUCCESS.
   *
   *
   */
  readonly expires?: string
  /**
   *	The response to an asynchronous request. The type depends on the request initiated. Only populated when the status is `SUCCESS`.
   *
   */
  readonly result: SimilarProductsPagedQueryResult
}
