
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
import { GeneralCategoryRecommendationPagedQueryResponse } from 'models/general-category-recommendations'
import { QueryParam, executeRequest } from 'shared/utils/common-types'
import { ApiRequest } from 'shared/utils/requests-utils'

export class ByProjectKeyRecommendationsGeneralCategoriesRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string
           },
          executeRequest: executeRequest,
          baseUri?: string
        }
      ) {}
    /**
    *	This endpoint takes arbitrary product names or image URLs and generates 
    *	recommendations from a general set of categories, which cover a broad range of 
    *	industries. The full list of supported categories can be found [here](https://docs.commercetools.com/category_recommendations_supported_categories.txt). These are 
    *	independent of the categories that are actually defined in your project. The main 
    *	purpose of this API is to provide a quick way to test the behavior of the category 
    *	recommendations engine for different names and images. In contrast to the [project-specific endpoint](https://docs.commercetools.com/http-api-projects-categoryrecommendations#project-specific-category-recommendations), this endpoint does not have [activation criteria](https://docs.commercetools.com/http-api-projects-categoryrecommendations#activating-the-api) and is enabled for all projects.
    *	
    */
    public get(
               methodArgs:{
                  
                  queryArgs: {
                     'productImageUrl'?: string | string[]
                     'productName': string | string[]
                     'limit'?: number | number[]
                     'offset'?: number | number[]
                     'confidenceMin'?: number | number[]
                     'confidenceMax'?: number | number[]
                     [key: string]: QueryParam
                  },
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<GeneralCategoryRecommendationPagedQueryResponse> {
       return new ApiRequest<GeneralCategoryRecommendationPagedQueryResponse>(
           {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/recommendations/general-categories',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...methodArgs?.headers
              },
              queryParams: methodArgs?.queryArgs,
           },
           this.args.executeRequest
       )
    }
    

}
