/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { Order, OrderFromQuoteDraft } from '../../models/order'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
/**
 **/
export class ByProjectKeyAsAssociateByAssociateIdInBusinessUnitKeyByBusinessUnitKeyOrdersQuotesRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        associateId: string
        businessUnitKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *
   *	Creates an Order from a [Quote](ctp:api:type:Quote) in a [BusinessUnit](ctp:api:type:BusinessUnit).
   *
   *	The Quote must reference the same Business Unit as the `businessUnitKey` path parameter, must have the `Pending` [state](ctp:api:type:QuoteState), and must be valid (not past the `validTo` date). If these criteria are not met, an [InvalidOperation](ctp:api:type:InvalidOperationError) error is returned.
   *
   *	Specific Error Codes:
   *
   *	- [InvalidItemShippingDetails](ctp:api:type:InvalidItemShippingDetailsError)
   *	- [OutOfStock](ctp:api:type:OutOfStockError)
   *
   */
  public post(methodArgs: {
    body: OrderFromQuoteDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Order> {
    return new ApiRequest<Order>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate:
          '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/orders/quotes',
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
