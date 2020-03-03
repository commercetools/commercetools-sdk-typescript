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
import { ProjectCategoryRecommendationPagedQueryResponse } from '../../models/category-recommendations'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'

export class ByProjectKeyRecommendationsProjectCategoriesByProductidRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        product_id: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	Response Representation: PagedQueryResult with a results array of ProjectCategoryrecommendation, sorted by confidence scores in descending order and the meta information of ProjectCategoryrecommendationMeta.
   *
   */
  public get(methodArgs?: {
    queryArgs?: {
      limit?: number | number[]
      offset?: number | number[]
      staged?: boolean | boolean[]
      confidenceMin?: number | number[]
      confidenceMax?: number | number[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string
    }
  }): ApiRequest<ProjectCategoryRecommendationPagedQueryResponse> {
    return new ApiRequest<ProjectCategoryRecommendationPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate:
          '/{projectKey}/recommendations/project-categories/{product_id}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
}
