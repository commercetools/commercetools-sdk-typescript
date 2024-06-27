/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import {
  Order,
  OrderFromCartDraft,
  OrderPagedQueryResponse,
} from '../../models/order'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyInStoreKeyByStoreKeyOrdersQuotesRequestBuilder } from '../quotes/by-project-key-in-store-key-by-store-key-orders-quotes-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyOrdersByIDRequestBuilder } from './by-project-key-in-store-key-by-store-key-orders-by-id-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyOrdersOrderNumberByOrderNumberRequestBuilder } from './by-project-key-in-store-key-by-store-key-orders-order-number-by-order-number-request-builder'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyOrdersRequestBuilder {
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
  public orderQuote(): ByProjectKeyInStoreKeyByStoreKeyOrdersQuotesRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyOrdersQuotesRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public withOrderNumber(childPathArgs: {
    orderNumber: string
  }): ByProjectKeyInStoreKeyByStoreKeyOrdersOrderNumberByOrderNumberRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyOrdersOrderNumberByOrderNumberRequestBuilder(
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
  public withId(childPathArgs: {
    ID: string
  }): ByProjectKeyInStoreKeyByStoreKeyOrdersByIDRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyOrdersByIDRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  public get(methodArgs?: {
    queryArgs?: {
      expand?: string | string[]
      sort?: string | string[]
      limit?: number
      offset?: number
      withTotal?: boolean
      where?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<OrderPagedQueryResponse> {
    return new ApiRequest<OrderPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/orders',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
  /**
   *	Checks if an Order exists for a given Query Predicate. Returns a `200 OK` status if any Orders match the Query Predicate or a `404 Not Found` otherwise.
   */
  public head(methodArgs?: {
    queryArgs?: {
      where?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<void> {
    return new ApiRequest<void>(
      {
        baseUri: this.args.baseUri,
        method: 'HEAD',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/orders',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
  /**
   *	Before you create an Order, the Cart must have a [shipping address set](ctp:api:type:CartSetShippingAddressAction).
   *	The shipping address is used for tax calculation for a Cart with `Platform` [TaxMode](ctp:api:type:TaxMode).
   *
   *	Creating an Order produces the [OrderCreated](ctp:api:type:OrderCreatedMessage) Message.
   *
   *	If a server-side problem occurs, indicated by a 500 Internal Server Error HTTP response, the Order creation may still successfully complete after the error is returned.
   *	If you receive this error, you should verify the status of the Order by querying a unique identifier supplied during the creation request, such as the Order number.
   *
   *	Specific Error Codes:
   *
   *	- [OutOfStock](ctp:api:type:OutOfStockError)
   *	- [PriceChanged](ctp:api:type:PriceChangedError)
   *	- [DiscountCodeNonApplicable](ctp:api:type:DiscountCodeNonApplicableError)
   *	- [ShippingMethodDoesNotMatchCart](ctp:api:type:ShippingMethodDoesNotMatchCartError)
   *	- [InvalidItemShippingDetails](ctp:api:type:InvalidItemShippingDetailsError)
   *	- [MatchingPriceNotFound](ctp:api:type:MatchingPriceNotFoundError)
   *	- [MissingTaxRateForCountry](ctp:api:type:MissingTaxRateForCountryError)
   *	- [CountryNotConfiguredInStore](ctp:api:type:CountryNotConfiguredInStoreError)
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: OrderFromCartDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Order> {
    return new ApiRequest<Order>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/orders',
        pathVariables: this.args.pathArgs,
        headers: {
          'Content-Type': 'application/json',
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
        body: methodArgs?.body,
      },
      this.args.executeRequest
    )
  }
}
