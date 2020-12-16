
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
import { ByProjectKeyCustomersImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder } from 'client/customers/by-project-key-customers-import-sink-key-by-import-sink-key-resource-key-by-resource-key-request-builder'
import { ByProjectKeyCustomersImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder } from 'client/import-operations/by-project-key-customers-import-sink-key-by-import-sink-key-import-operations-request-builder'
import { CustomerImportRequest, ImportResponse } from 'models/importrequests'
import { QueryParam, executeRequest } from 'shared/utils/common-types'
import { ApiRequest } from 'shared/utils/requests-utils'

export class ByProjectKeyCustomersImportSinkKeyByImportSinkKeyRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string,
                importSinkKey: string
           },
          executeRequest: executeRequest,
          baseUri?: string
        }
      ) {}
    public resourceKeyWithResourceKeyValue(
       childPathArgs: {
           resourceKey: string
       }
    ): ByProjectKeyCustomersImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder {
       return new ByProjectKeyCustomersImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder(
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
    public importOperations(): ByProjectKeyCustomersImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder {
       return new ByProjectKeyCustomersImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                },
                executeRequest: this.args.executeRequest,
                baseUri: this.args.baseUri
             }
       )
    }
    
    /**
    *	Creates import request for creating new customers or updating existing ones.
    */
    public post(
                methodArgs:{
                   
                   body: CustomerImportRequest,
                   headers?: {
                      [key:string]:string
                   },
                }): ApiRequest<ImportResponse> {
       return new ApiRequest<ImportResponse>(
           {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/customers/importSinkKey={importSinkKey}',
              pathVariables: this.args.pathArgs,
              headers: {
                  'Content-Type': 'application/json',
                  ...methodArgs?.headers
              },
              body: methodArgs?.body,
           },
           this.args.executeRequest
       )
    }
    

}
