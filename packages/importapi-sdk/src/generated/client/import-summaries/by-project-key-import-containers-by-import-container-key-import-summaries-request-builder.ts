/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { ImportSummary } from '../../models/importsummaries'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
/**
 **/
export class ByProjectKeyImportContainersByImportContainerKeyImportSummariesRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        importContainerKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	Retrieves an [ImportSummary](ctp:import:type:ImportSummary) for the [ImportContainer](ctp:import:type:ImportContainer) with the provided `importContainerKey`.
   *
   */
  public get(methodArgs?: {
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ImportSummary> {
    return new ApiRequest<ImportSummary>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate:
          '/{projectKey}/import-containers/{importContainerKey}/import-summaries',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
}
