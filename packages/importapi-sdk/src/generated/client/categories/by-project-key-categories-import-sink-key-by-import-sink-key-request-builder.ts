
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
import { ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder } from 'client/categories/by-project-key-categories-import-sink-key-by-import-sink-key-resource-key-by-resource-key-request-builder'
import { ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder } from 'client/import-operations/by-project-key-categories-import-sink-key-by-import-sink-key-import-operations-request-builder'
import { CategoryImportRequest, ImportResponse } from 'models/importrequests'
import { QueryParam, executeRequest } from 'shared/utils/common-types'
import { ApiRequest } from 'shared/utils/requests-utils'

export class ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyRequestBuilder {

    
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
    ): ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder {
       return new ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder(
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
    public importOperations(): ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder {
       return new ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder(
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
    *	Creates import request for creating new categories or updating existing ones.
    */
    public post(
                methodArgs:{
                   
                   body: CategoryImportRequest,
                   headers?: {
                      [key:string]:string
                   },
                }): ApiRequest<ImportResponse> {
       return new ApiRequest<ImportResponse>(
           {
              baseUri: this.args.baseUri,
              method: 'POST',
              uriTemplate: '/{projectKey}/categories/importSinkKey={importSinkKey}',
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
