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
  ProductDraftImportRequest,
} from '../../models/importrequests'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyProductDraftsImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder } from '../import-operations/by-project-key-product-drafts-import-sink-key-by-import-sink-key-import-operations-request-builder'
import { ByProjectKeyProductDraftsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder } from './by-project-key-product-drafts-import-sink-key-by-import-sink-key-resource-key-by-resource-key-request-builder'

export class ByProjectKeyProductDraftsImportSinkKeyByImportSinkKeyRequestBuilder {
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
  }): ByProjectKeyProductDraftsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder {
    return new ByProjectKeyProductDraftsImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder(
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
  public importOperations(): ByProjectKeyProductDraftsImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder {
    return new ByProjectKeyProductDraftsImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder(
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
   *	Creates import request for creating new product drafts or updating existing ones.
   *
   */
  public post(methodArgs: {
    body: ProductDraftImportRequest
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ImportResponse> {
    return new ApiRequest<ImportResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate:
          '/{projectKey}/product-drafts/importSinkKey={importSinkKey}',
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
