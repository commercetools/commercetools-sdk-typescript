/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { executeRequest } from '../shared/utils/common-types'
import { ByProjectKeyCategoriesRequestBuilder } from './categories/by-project-key-categories-request-builder'
import { ByProjectKeyCustomersRequestBuilder } from './customers/by-project-key-customers-request-builder'
import { ByProjectKeyImportContainersRequestBuilder } from './import-containers/by-project-key-import-containers-request-builder'
import { ByProjectKeyImportOperationsRequestBuilder } from './import-operations/by-project-key-import-operations-request-builder'
import { ByProjectKeyImportSinksRequestBuilder } from './import-sinks/by-project-key-import-sinks-request-builder'
import { ByProjectKeyImportSummariesRequestBuilder } from './import-summaries/by-project-key-import-summaries-request-builder'
import { ByProjectKeyOrderPatchesRequestBuilder } from './order-patches/by-project-key-order-patches-request-builder'
import { ByProjectKeyOrdersRequestBuilder } from './orders/by-project-key-orders-request-builder'
import { ByProjectKeyPricesRequestBuilder } from './prices/by-project-key-prices-request-builder'
import { ByProjectKeyProductDraftsRequestBuilder } from './product-drafts/by-project-key-product-drafts-request-builder'
import { ByProjectKeyProductTypesRequestBuilder } from './product-types/by-project-key-product-types-request-builder'
import { ByProjectKeyProductVariantPatchesRequestBuilder } from './product-variant-patches/by-project-key-product-variant-patches-request-builder'
import { ByProjectKeyProductVariantsRequestBuilder } from './product-variants/by-project-key-product-variants-request-builder'
import { ByProjectKeyProductsRequestBuilder } from './products/by-project-key-products-request-builder'

export class ByProjectKeyRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public importSinks(): ByProjectKeyImportSinksRequestBuilder {
    return new ByProjectKeyImportSinksRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public importSummaries(): ByProjectKeyImportSummariesRequestBuilder {
    return new ByProjectKeyImportSummariesRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public importContainers(): ByProjectKeyImportContainersRequestBuilder {
    return new ByProjectKeyImportContainersRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public importOperations(): ByProjectKeyImportOperationsRequestBuilder {
    return new ByProjectKeyImportOperationsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public categories(): ByProjectKeyCategoriesRequestBuilder {
    return new ByProjectKeyCategoriesRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public prices(): ByProjectKeyPricesRequestBuilder {
    return new ByProjectKeyPricesRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public products(): ByProjectKeyProductsRequestBuilder {
    return new ByProjectKeyProductsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public productDrafts(): ByProjectKeyProductDraftsRequestBuilder {
    return new ByProjectKeyProductDraftsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public productTypes(): ByProjectKeyProductTypesRequestBuilder {
    return new ByProjectKeyProductTypesRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public productVariants(): ByProjectKeyProductVariantsRequestBuilder {
    return new ByProjectKeyProductVariantsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public productVariantPatches(): ByProjectKeyProductVariantPatchesRequestBuilder {
    return new ByProjectKeyProductVariantPatchesRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public orders(): ByProjectKeyOrdersRequestBuilder {
    return new ByProjectKeyOrdersRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public orderPatches(): ByProjectKeyOrderPatchesRequestBuilder {
    return new ByProjectKeyOrderPatchesRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public customers(): ByProjectKeyCustomersRequestBuilder {
    return new ByProjectKeyCustomersRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
}
