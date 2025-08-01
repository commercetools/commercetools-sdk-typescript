/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import {
  CartDiscount,
  CartDiscountDraft,
  CartDiscountPagedQueryResponse,
} from '../../models/cart-discount'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyInStoreKeyByStoreKeyCartDiscountsByIDRequestBuilder } from './by-project-key-in-store-key-by-store-key-cart-discounts-by-id-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCartDiscountsKeyByKeyRequestBuilder } from './by-project-key-in-store-key-by-store-key-cart-discounts-key-by-key-request-builder'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyCartDiscountsRequestBuilder {
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
  public withKey(childPathArgs: {
    key: string
  }): ByProjectKeyInStoreKeyByStoreKeyCartDiscountsKeyByKeyRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCartDiscountsKeyByKeyRequestBuilder(
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
  }): ByProjectKeyInStoreKeyByStoreKeyCartDiscountsByIDRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCartDiscountsByIDRequestBuilder({
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
  }): ApiRequest<CartDiscountPagedQueryResponse> {
    return new ApiRequest<CartDiscountPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/cart-discounts',
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
   *	Checks if one or more CartDiscounts exist for the provided query predicate. Returns a `200` status if any CartDiscounts match the query predicate, or a `404` status otherwise.
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
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/cart-discounts',
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
   *	When using the endpoint, the Store specified in the path and the Stores specified in the payload's `stores` field are added to the CartDiscount.
   *
   *	Creating a Cart Discount produces the [CartDiscountCreated](ctp:api:type:CartDiscountCreatedMessage) Message.
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: CartDiscountDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<CartDiscount> {
    return new ApiRequest<CartDiscount>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/cart-discounts',
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
