
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
import { executeRequest } from '../shared/utils/common-types'
import { ByProjectKeyImageSearchRequestBuilder } from './image-search/by-project-key-image-search-request-builder'
import { ByProjectKeyRecommendationsRequestBuilder } from './recommendations/by-project-key-recommendations-request-builder'

export class ByProjectKeyRequestBuilder {

    
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
    *	Search for similar products using an image as search input.
    *	
    */
    public imageSearch(): ByProjectKeyImageSearchRequestBuilder {
       return new ByProjectKeyImageSearchRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                executeRequest: this.args.executeRequest,
                baseUri: this.args.baseUri
             }
       )
    }
    public recommendations(): ByProjectKeyRecommendationsRequestBuilder {
       return new ByProjectKeyRecommendationsRequestBuilder(
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
