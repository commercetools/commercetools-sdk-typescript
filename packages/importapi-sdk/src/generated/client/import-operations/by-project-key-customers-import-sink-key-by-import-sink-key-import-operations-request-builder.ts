/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.commercetools.com/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */
import { ProcessingState } from '../../models/common'
import { ImportOperationPagedResponse } from '../../models/importoperations'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyCustomersImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder } from './by-project-key-customers-import-sink-key-by-import-sink-key-import-operations-by-id-request-builder'

export class ByProjectKeyCustomersImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder {
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
  public withIdValue(childPathArgs: {
    id: string
  }): ByProjectKeyCustomersImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder {
    return new ByProjectKeyCustomersImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder(
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

  /**
   *	Retrieves all Customer ImportOperations of a given ImportSink key.
   *
   */
  public get(methodArgs?: {
    queryArgs?: {
      limit?: number
      offset?: number
      sort?: string | string[]
      resourceKey?: string
      state?: ProcessingState
      debug?: boolean
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ImportOperationPagedResponse> {
    return new ApiRequest<ImportOperationPagedResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate:
          '/{projectKey}/customers/importSinkKey={importSinkKey}/import-operations',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
}
