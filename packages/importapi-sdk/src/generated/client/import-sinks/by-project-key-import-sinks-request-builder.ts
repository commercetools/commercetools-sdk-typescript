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
import {
  ImportSink,
  ImportSinkDraft,
  ImportSinkPagedResponse,
} from '../../models/importsinks'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyImportSinksByImportSinkKeyRequestBuilder } from './by-project-key-import-sinks-by-import-sink-key-request-builder'

export class ByProjectKeyImportSinksRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withImportSinkKeyValue(childPathArgs: {
    importSinkKey: string
  }): ByProjectKeyImportSinksByImportSinkKeyRequestBuilder {
    return new ByProjectKeyImportSinksByImportSinkKeyRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  /**
   *	Creates a new import sink.
   */
  public post(methodArgs: {
    body: ImportSinkDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ImportSink> {
    return new ApiRequest<ImportSink>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/import-sinks',
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
  /**
   *	Retrieves all import sinks of a project key.
   */
  public get(methodArgs?: {
    queryArgs?: {
      limit?: number
      offset?: number
      sort?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ImportSinkPagedResponse> {
    return new ApiRequest<ImportSinkPagedResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/import-sinks',
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
