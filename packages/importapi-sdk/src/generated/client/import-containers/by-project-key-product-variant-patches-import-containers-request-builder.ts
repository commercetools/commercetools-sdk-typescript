/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { executeRequest } from '../../shared/utils/common-types'
import { ByProjectKeyProductVariantPatchesImportContainersByImportContainerKeyRequestBuilder } from './by-project-key-product-variant-patches-import-containers-by-import-container-key-request-builder'

export class ByProjectKeyProductVariantPatchesImportContainersRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withImportContainerKeyValue(childPathArgs: {
    importContainerKey: string
  }): ByProjectKeyProductVariantPatchesImportContainersByImportContainerKeyRequestBuilder {
    return new ByProjectKeyProductVariantPatchesImportContainersByImportContainerKeyRequestBuilder(
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
}
