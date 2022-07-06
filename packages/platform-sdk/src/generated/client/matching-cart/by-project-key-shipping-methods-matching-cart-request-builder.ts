/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { ShippingMethodPagedQueryResponse } from '../../models/shipping-method'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
/**
 **/
export class ByProjectKeyShippingMethodsMatchingCartRequestBuilder {
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
   *	Retrieves all the ShippingMethods that can ship to the shipping address of the given Cart.
   *	Each ShippingMethod contains exactly one ShippingRate with the flag `isMatching` set to `true`.
   *	This ShippingRate is used when the ShippingMethod is [added to the Cart](ctp:api:type:CartSetShippingMethodAction).
   *
   */
  public get(methodArgs: {
    queryArgs: {
      cartId: string
      expand?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ShippingMethodPagedQueryResponse> {
    return new ApiRequest<ShippingMethodPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/shipping-methods/matching-cart',
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
