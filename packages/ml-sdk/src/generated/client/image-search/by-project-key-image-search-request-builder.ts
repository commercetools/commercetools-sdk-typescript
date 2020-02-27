
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
import { ImageSearchRequest, ImageSearchResponse } from '../../models/image-search'
import { QueryParam, executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'

export class ByProjectKeyImageSearchRequestBuilder {

    
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
    *	Accepts an image file and returns similar products from product catalogue.
    *	
    */
    public post(
                methodArgs:{
                   
                   queryArgs?: {
                      'limit'?: number | number[]
                      'offset'?: number | number[]
                      [key: string]: QueryParam
                   },
                   body: ImageSearchRequest,
                   headers?: {
                      [key:string]:string
                   },
                }): ApiRequest<ImageSearchResponse> {
       return new ApiRequest<ImageSearchResponse>(
           {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/image-search',
              pathVariables: this.args.pathArgs,
              headers: {
                  'Content-Type': 'multipart/form-data',
                  ...methodArgs?.headers
              },
              queryParams: methodArgs?.queryArgs,
              body: methodArgs?.body,
           },
           this.args.executeRequest
       )
    }
    

}
