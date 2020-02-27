
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
import { ByProjectKeyRecommendationsGeneralCategoriesRequestBuilder } from '../general-categories/by-project-key-recommendations-general-categories-request-builder'
import { ByProjectKeyRecommendationsProjectCategoriesRequestBuilder } from '../project-categories/by-project-key-recommendations-project-categories-request-builder'
import { QueryParam, executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'

export class ByProjectKeyRecommendationsRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string
           },
          executeRequest: executeRequest,
          baseUri?: string
        }
      ) {}
    public projectCategories(): ByProjectKeyRecommendationsProjectCategoriesRequestBuilder {
       return new ByProjectKeyRecommendationsProjectCategoriesRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                executeRequest: this.args.executeRequest,
                baseUri: this.args.baseUri
             }
       )
    }
    public generalCategories(): ByProjectKeyRecommendationsGeneralCategoriesRequestBuilder {
       return new ByProjectKeyRecommendationsGeneralCategoriesRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                executeRequest: this.args.executeRequest,
                baseUri: this.args.baseUri
             }
       )
    }
    

}
