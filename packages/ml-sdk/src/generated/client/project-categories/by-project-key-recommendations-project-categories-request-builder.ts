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
import { executeRequest } from '../../shared/utils/common-types'
import { ByProjectKeyRecommendationsProjectCategoriesByProductIdRequestBuilder } from './by-project-key-recommendations-project-categories-by-product-id-request-builder'

export class ByProjectKeyRecommendationsProjectCategoriesRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withProductId(childPathArgs: {
    productId: string
  }): ByProjectKeyRecommendationsProjectCategoriesByProductIdRequestBuilder {
    return new ByProjectKeyRecommendationsProjectCategoriesByProductIdRequestBuilder(
      {
        pathArgs: {
          ...this.args.pathArgs,
          ...childPathArgs,
        },
        executeRequest: this.args.executeRequest,
        baseUri: this.args.baseUri,
      }
    )
  }
}
