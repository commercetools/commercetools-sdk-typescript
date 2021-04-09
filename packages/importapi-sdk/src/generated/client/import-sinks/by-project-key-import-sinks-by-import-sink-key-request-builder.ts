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
import { ImportSink, ImportSinkDraft } from '../../models/importsinks'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'

export class ByProjectKeyImportSinksByImportSinkKeyRequestBuilder {
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
  /**
   *	Updates the import sink given by the key.
   */
  public put(methodArgs: {
    body: ImportSinkDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ImportSink> {
    return new ApiRequest<ImportSink>(
      {
        baseUri: this.args.baseUri,
        method: 'PUT',
        uriTemplate: '/{projectKey}/import-sinks/{importSinkKey}',
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
   *	Retrieves the import sink given by the key.
   */
  public get(methodArgs?: {
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ImportSink> {
    return new ApiRequest<ImportSink>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/import-sinks/{importSinkKey}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
  /**
   *	Deletes the import sink given by the key.
   */
  public delete(methodArgs?: {
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ImportSink> {
    return new ApiRequest<ImportSink>(
      {
        baseUri: this.args.baseUri,
        method: 'DELETE',
        uriTemplate: '/{projectKey}/import-sinks/{importSinkKey}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
}
