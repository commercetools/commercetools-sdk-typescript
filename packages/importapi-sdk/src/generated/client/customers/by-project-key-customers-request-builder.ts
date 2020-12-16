
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
import { ByProjectKeyCustomersImportSinkKeyByImportSinkKeyRequestBuilder } from 'client/customers/by-project-key-customers-import-sink-key-by-import-sink-key-request-builder'
import { QueryParam, executeRequest } from 'shared/utils/common-types'
import { ApiRequest } from 'shared/utils/requests-utils'

export class ByProjectKeyCustomersRequestBuilder {

    
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
    ): ByProjectKeyCustomersImportSinkKeyByImportSinkKeyRequestBuilder {
       return new ByProjectKeyCustomersImportSinkKeyByImportSinkKeyRequestBuilder(
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
