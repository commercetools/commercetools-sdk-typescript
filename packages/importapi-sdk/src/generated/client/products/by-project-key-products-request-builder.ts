
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
import { ByProjectKeyProductsImportSinkKeyByImportSinkKeyRequestBuilder } from 'client/products/by-project-key-products-import-sink-key-by-import-sink-key-request-builder'
import { QueryParam, executeRequest } from 'shared/utils/common-types'
import { ApiRequest } from 'shared/utils/requests-utils'

export class ByProjectKeyProductsRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string
           },
          executeRequest: executeRequest,
          baseUri?: string
        }
      ) {}
    public importSinkKeyWithImportSinkKeyValue(
       childPathArgs: {
           importSinkKey: string
       }
    ): ByProjectKeyProductsImportSinkKeyByImportSinkKeyRequestBuilder {
       return new ByProjectKeyProductsImportSinkKeyByImportSinkKeyRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                   ...childPathArgs
                },
                executeRequest: this.args.executeRequest,
                baseUri: this.args.baseUri
             }
       )
    }
    

}
