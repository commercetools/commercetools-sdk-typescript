/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { executeRequest } from '../../shared/utils/common-types'
import { ByProjectKeyInStoreKeyByStoreKeyShippingMethodsMatchingCartRequestBuilder } from '../matching-cart/by-project-key-in-store-key-by-store-key-shipping-methods-matching-cart-request-builder'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyShippingMethodsRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        storeKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	Get ShippingMethods for a cart in a store
   */
  public matchingCart(): ByProjectKeyInStoreKeyByStoreKeyShippingMethodsMatchingCartRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyShippingMethodsMatchingCartRequestBuilder(
      {
        pathArgs: {
          ...this.args.pathArgs,
        },
        executeRequest: this.args.executeRequest,
        baseUri: this.args.baseUri,
      }
    )
  }
}
