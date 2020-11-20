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
import { executeRequest } from '../shared/utils/common-types'
import { ByProjectKeyCategoriesRequestBuilder } from './categories/by-project-key-categories-request-builder'
import { ByProjectKeyCustomersRequestBuilder } from './customers/by-project-key-customers-request-builder'
import { ByProjectKeyImportSinksRequestBuilder } from './import-sinks/by-project-key-import-sinks-request-builder'
import { ByProjectKeyImportSummariesRequestBuilder } from './import-summaries/by-project-key-import-summaries-request-builder'
import { ByProjectKeyInventoriesRequestBuilder } from './inventories/by-project-key-inventories-request-builder'
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
  public customers(): ByProjectKeyCustomersRequestBuilder {
    return new ByProjectKeyCustomersRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public inventories(): ByProjectKeyInventoriesRequestBuilder {
    return new ByProjectKeyInventoriesRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
}
