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

export interface GeneralCategoryRecommendation {
  /**
   *	An English category name that is recommended for a product.
   *
   */
  readonly categoryName: string
  /**
   *	Probability score for the category recommendation.
   *
   */
  readonly confidence: number
}
export interface GeneralCategoryRecommendationPagedQueryResponse {
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
  readonly results: GeneralCategoryRecommendation[]
}
