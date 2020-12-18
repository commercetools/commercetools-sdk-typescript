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
import {
  ImportResponse,
  InventoryImportRequest,
} from '../../models/importrequests'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyInventoriesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder } from '../import-operations/by-project-key-inventories-import-sink-key-by-import-sink-key-import-operations-request-builder'
import { ByProjectKeyInventoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder } from './by-project-key-inventories-import-sink-key-by-import-sink-key-resource-key-by-resource-key-request-builder'

export class ByProjectKeyInventoriesImportSinkKeyByImportSinkKeyRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        importSinkKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public resourceKeyWithResourceKeyValue(childPathArgs: {
    resourceKey: string
  }): ByProjectKeyInventoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder {
    return new ByProjectKeyInventoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder(
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
  public importOperations(): ByProjectKeyInventoriesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder {
    return new ByProjectKeyInventoriesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder(
      {
        pathArgs: {
          ...this.args.pathArgs,
        },
        executeRequest: this.args.executeRequest,
        baseUri: this.args.baseUri,
      }
    )
  }

  /**
   *	Creates import request for creating new inventories or updating existing ones.
   */
  public post(methodArgs: {
    body: InventoryImportRequest
    headers?: {
      [key: string]: string
    }
  }): ApiRequest<ImportResponse> {
    return new ApiRequest<ImportResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/inventories/importSinkKey={importSinkKey}',
        pathVariables: this.args.pathArgs,
        headers: {
          'Content-Type': 'application/json',
          ...methodArgs?.headers,
        },
        body: methodArgs?.body,
      },
      this.args.executeRequest
    )
  }
}
