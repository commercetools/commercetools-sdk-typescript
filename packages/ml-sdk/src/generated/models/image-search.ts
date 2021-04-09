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

import { ProductVariant } from './common'

/**
 *	Response format from image search endpoint.
 *
 */
export interface ImageSearchResponse {
  /**
   *	The maximum number of results to return from a query.
   *
   */
  readonly count: number
  /**
   *	The offset into the results matching the query. An offset of 0 is the default value indicating that no results should be skipped.
   *
   *
   */
  readonly offset: number
  /**
   *	The total number of product images that were have been analyzed.
   *
   */
  readonly total: number
  /**
   *	An array of image URLs of images that are similar to the query image. If no matching images are found, results is empty.
   *
   */
  readonly results: ResultItem[]
}
/**
 *	An image URL and the product variants it is contained in. If no matching images are found, ResultItem is not present.
 */
export interface ResultItem {
  /**
   *	The URL of the image.
   *
   */
  readonly imageUrl: string
  /**
   *	An array of product variants containing the image URL.
   *
   */
  readonly productVariants: ProductVariant[]
}
