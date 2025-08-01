/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import {
  Product,
  ProductDraft,
  ProductPagedQueryResponse,
} from '../../models/product'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyProductsSearchRequestBuilder } from '../search/by-project-key-products-search-request-builder'
import { ByProjectKeyProductsByIDRequestBuilder } from './by-project-key-products-by-id-request-builder'
import { ByProjectKeyProductsKeyByKeyRequestBuilder } from './by-project-key-products-key-by-key-request-builder'
/**
 **/
export class ByProjectKeyProductsRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withKey(childPathArgs: {
    key: string
  }): ByProjectKeyProductsKeyByKeyRequestBuilder {
    return new ByProjectKeyProductsKeyByKeyRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public withId(childPathArgs: {
    ID: string
  }): ByProjectKeyProductsByIDRequestBuilder {
    return new ByProjectKeyProductsByIDRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	This endpoint provides high-performance search queries over Products. Product Search allows searching through all products with a current projection in your Project.
   *
   */
  public search(): ByProjectKeyProductsSearchRequestBuilder {
    return new ByProjectKeyProductsSearchRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  /**
   *	If [Product price selection query parameters](/../api/pricing-and-discounts-overview#product-price-selection) are provided, the selected Prices are added to the response.
   */
  public get(methodArgs?: {
    queryArgs?: {
      where?: string | string[]
      priceCurrency?: string
      priceCountry?: string
      priceCustomerGroup?: string
      priceCustomerGroupAssignments?: string | string[]
      priceChannel?: string
      priceRecurrencePolicy?: string
      expand?: string | string[]
      sort?: string | string[]
      limit?: number
      offset?: number
      withTotal?: boolean
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ProductPagedQueryResponse> {
    return new ApiRequest<ProductPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/products',
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
   *	Checks if one or more Products exist for the provided query predicate. Returns a `200` status if any Products match the query predicate, or a `404` status otherwise.
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
        uriTemplate: '/{projectKey}/products',
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
   *	To create a new Product, send a representation that is going to become the initial _staged_ and _current_ representation of the new Product in the catalog.
   *	If [Product price selection query parameters](/../api/pricing-and-discounts-overview#product-price-selection) are provided, selected Prices will be added to the response.
   *	Produces the [ProductCreated](/projects/messages/product-catalog-messages#product-created) Message.
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      priceCurrency?: string
      priceCountry?: string
      priceCustomerGroup?: string
      priceCustomerGroupAssignments?: string | string[]
      priceChannel?: string
      priceRecurrencePolicy?: string
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: ProductDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Product> {
    return new ApiRequest<Product>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/products',
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
