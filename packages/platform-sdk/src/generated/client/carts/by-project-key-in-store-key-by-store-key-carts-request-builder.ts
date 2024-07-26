/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { Cart, CartDraft, CartPagedQueryResponse } from '../../models/cart'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyInStoreKeyByStoreKeyCartsReplicateRequestBuilder } from '../replicate/by-project-key-in-store-key-by-store-key-carts-replicate-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCartsByIDRequestBuilder } from './by-project-key-in-store-key-by-store-key-carts-by-id-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCartsCustomerIdByCustomerIdRequestBuilder } from './by-project-key-in-store-key-by-store-key-carts-customer-id-by-customer-id-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCartsKeyByKeyRequestBuilder } from './by-project-key-in-store-key-by-store-key-carts-key-by-key-request-builder'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyCartsRequestBuilder {
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
  public withCustomerId(childPathArgs: {
    customerId: string
  }): ByProjectKeyInStoreKeyByStoreKeyCartsCustomerIdByCustomerIdRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCartsCustomerIdByCustomerIdRequestBuilder(
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
  public withKey(childPathArgs: {
    key: string
  }): ByProjectKeyInStoreKeyByStoreKeyCartsKeyByKeyRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCartsKeyByKeyRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public replicate(): ByProjectKeyInStoreKeyByStoreKeyCartsReplicateRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCartsReplicateRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public withId(childPathArgs: {
    ID: string
  }): ByProjectKeyInStoreKeyByStoreKeyCartsByIDRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCartsByIDRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  /**
   *	Queries Carts in a specific [Store](ctp:api:type:Store).
   */
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
  }): ApiRequest<CartPagedQueryResponse> {
    return new ApiRequest<CartPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/carts',
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
   *	Checks if a Cart exists for a given Query Predicate. Returns a `200 OK` status if any Carts match the Query Predicate or a `404 Not Found` otherwise.
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
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/carts',
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
   *	Creates a [Cart](ctp:api:type:Cart) in the [Store](ctp:api:type:Store) specified by `storeKey`.
   *
   *	If the referenced [ShippingMethod](ctp:api:type:ShippingMethod) in the [CartDraft](ctp:api:type:CartDraft) has a predicate that does not match, or if the Shipping Method is not active, an [InvalidOperation](ctp:api:type:InvalidOperationError) error is returned.
   *
   *	Specific Error Codes:
   *
   *	- [DiscountCodeNonApplicable](ctp:api:type:DiscountCodeNonApplicableError)
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
    body: CartDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Cart> {
    return new ApiRequest<Cart>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/carts',
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
