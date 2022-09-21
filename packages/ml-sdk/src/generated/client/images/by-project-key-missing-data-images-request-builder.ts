/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { TaskToken } from '../../models/common'
import { MissingImagesSearchRequest } from '../../models/missing-data'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyMissingDataImagesStatusRequestBuilder } from '../status/by-project-key-missing-data-images-status-request-builder'
/**
@deprecated
**/
export class ByProjectKeyMissingDataImagesRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}

  /**
   * @deprecated
   **/
  public status(): ByProjectKeyMissingDataImagesStatusRequestBuilder {
    return new ByProjectKeyMissingDataImagesStatusRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  /**
   * @deprecated
   **/
  public post(methodArgs: {
    body: MissingImagesSearchRequest
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<TaskToken> {
    return new ApiRequest<TaskToken>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/missing-data/images',
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
