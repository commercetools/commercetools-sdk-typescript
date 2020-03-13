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

import { ProductReference, ProductTypeReference } from './common'

export interface AttributeCount {
  /**
   *	Number of attributes defined in the product type.
   */
  readonly productTypeAttributes: number
  /**
   *	Number of attributes defined in the variant.
   */
  readonly variantAttributes: number
  /**
   *	Number of attributes missing values in the variant.
   */
  readonly missingAttributeValues: number
}
export interface AttributeCoverage {
  /**
   *	The percentage of attributes from the product type defined in the product variant. A value of `1.0` indicates a product variant contains all attributes defined in the product type.
   */
  readonly names: number
  /**
   *	Represents the percentage of attributes in the product variant that contain values.
   */
  readonly values: number
}
export interface MissingAttributesVariantLevel {
  /**
   *	Number of products scanned.
   */
  readonly total: number
  /**
   *	Number of products missing attribute names.
   */
  readonly missingAttributeNames: number
  /**
   *	Number of products missing attribute values.
   */
  readonly missingAttributeValues: number
}
export interface MissingAttributesProductLevel {
  /**
   *	Number of products scanned.
   */
  readonly total: number
  /**
   *	Number of products missing attribute names.
   */
  readonly missingAttributeNames: number
  /**
   *	Number of products missing attribute values.
   */
  readonly missingAttributeValues: number
}
export interface MissingAttributes {
  readonly productId: ProductReference
  readonly productTypeId: ProductTypeReference
  /**
   *	ID of a ProductVariant.
   */
  readonly variantId: number
  /**
   *	The names of the attributes of the product type that the variant is missing, sorted by attribute importance in descending order.
   */
  readonly missingAttributeValues: string[]
  /**
   *	The names of the attributes of the product type that the variant is missing, sorted by attribute importance in descending order.
   */
  readonly missingAttributeNames?: string[]
  readonly attributeCount?: AttributeCount
  readonly attributeCoverage?: AttributeCoverage
}
export interface MissingAttributesMeta {
  readonly productLevel: MissingAttributesProductLevel
  readonly variantLevel: MissingAttributesVariantLevel
  /**
   *	The IDs of the product types containing the requested `attributeName`.
   */
  readonly productTypeIds?: string[]
}
export interface MissingAttributesSearchRequest {
  readonly limit?: number
  readonly offset?: number
  /**
   *	If true, searches data from staged products in addition to published products.
   */
  readonly staged?: boolean
  /**
   *	Maximum number of products to scan.
   */
  readonly productSetLimit?: number
  /**
   *	If true, searches all product variants. If false, only searches master variants.
   */
  readonly includeVariants?: boolean
  /**
   *	Minimum attribute coverage of variants to display, applied to both coverage types.
   */
  readonly coverageMin?: number
  /**
   *	Maximum attribute coverage of variants to display, applied to both coverage types.
   */
  readonly coverageMax?: number
  /**
   *	Default value: `coverageAttributeValues` - Allowed values: [`coverageAttributeValues`, `coverageAttributeNames`]
   *	`coverageAttributeValues` shows the product variants with the most missing attribute values first and `coverageAttributeNames` the ones with the most missing attribute names.
   *
   */
  readonly sortBy?: string
  /**
   *	If true, the `missingAttributeNames` will be included in the results.
   */
  readonly showMissingAttributeNames?: boolean
  /**
   *	Filters results by the provided Product IDs.
   *	Cannot be applied in combination with any other filter.
   *
   */
  readonly productIds?: string[]
  /**
   *	Filters results by the provided product type IDs.
   *	Cannot be applied in combination with any other filter.
   *
   */
  readonly productTypeIds?: string[]
  /**
   *	Filters results by the provided attribute name. If provided,  products are only checked for this attribute. Therefore, only products of product types which define the attribute name are considered. These product type IDs
   *	are then listed in `MissingAttributesMeta`. The  `attributeCount` and `attributeCoverage` fields are not part of the response when using this filter. Cannot be applied in combination with any other filter.
   *
   */
  readonly attributeName?: string
}
