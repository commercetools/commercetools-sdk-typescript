/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { MyOrderFromQuoteDraft } from '../../models/me'
import { Order } from '../../models/order'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
/**
 **/
export class ByProjectKeyMeOrdersQuotesRequestBuilder {
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
   *
   *	Creates an Order from a [Quote](ctp:api:type:Quote) for the authenticated Customer. To create [B2B Orders](/associates-overview#b2b-resources), the Customer must have the `CreateMyOrdersFromMyQuotes` [Permission](ctp:api:type:Permission).
   *
   *	The referenced Quote must have the `Pending` [state](ctp:api:type:QuoteState) and must be valid (not past the `validTo` date); otherwise, an [InvalidOperation](ctp:api:type:InvalidOperationError) error is returned.
   *
   *	Produces the [OrderCreated](ctp:api:type:OrderCreatedMessage) Message.
   *
   *	Specific Error Codes:
   *
   *	- [OutOfStock](ctp:api:type:OutOfStockError)
   *	- [InvalidItemShippingDetails](ctp:api:type:InvalidItemShippingDetailsError)
   *	- [CountryNotConfiguredInStore](ctp:api:type:CountryNotConfiguredInStoreError)
   *	- [AssociateMissingPermission](ctp:api:type:AssociateMissingPermissionError)
   *
   */
  public post(methodArgs: {
    body: MyOrderFromQuoteDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Order> {
    return new ApiRequest<Order>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/me/orders/quotes',
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
