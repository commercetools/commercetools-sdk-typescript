/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { Cart } from '../../models/cart'
import { ReplicaMyCartDraft } from '../../models/me'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
/**
 **/
export class ByProjectKeyMeCartsReplicateRequestBuilder {
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
   *	Creates a new Cart by replicating an existing Cart or Order of the authenticated Customer.
   *	This can be useful in cases where a customer wants to cancel a recent order to make some changes or reorder a previous order.
   *
   *	The replicated Cart preserves Customer information, Line Items and Custom Line Items, Custom Fields, Discount Codes, and other settings of the Cart or Order.
   *	If the Line Items become invalid, for example, due to removed Products or Prices, they are removed from the new Cart.
   *	If the Customer switches to another Customer Group, the new Cart is updated with the new value.
   *	It has up-to-date Tax Rates, Prices, and Line Item product data and is in `Active` [CartState](ctp:api:type:CartState).
   *
   *	The new Cart does not contain Payments or Deliveries. The [State](ctp:api:type:ItemState) of Line Items and Custom Line Items is reset to `initial`.
   *
   *	If the Cart or Order to be replicated does not belong to the authenticated Customer, the API returns a [ResourceNotFound](ctp:api:type:ResourceNotFoundError) error
   *
   */
  public post(methodArgs: {
    body: ReplicaMyCartDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Cart> {
    return new ApiRequest<Cart>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/me/carts/replicate',
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
