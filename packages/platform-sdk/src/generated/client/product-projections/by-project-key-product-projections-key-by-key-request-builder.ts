/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { ProductProjection } from '../../models/product'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
/**
 **/
export class ByProjectKeyProductProjectionsKeyByKeyRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        key: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	Gets the current or staged representation of a [Product](ctp:api:type:Product) found by Key.
   *	When used with an API Client that has the `view_published_products:{projectKey}` scope,
   *	this endpoint only returns published (current) Product Projections.
   *
   */
  public get(methodArgs?: {
    queryArgs?: {
      staged?: boolean
      priceCurrency?: string
      priceCountry?: string
      priceCustomerGroup?: string
      priceCustomerGroupAssignments?: string | string[]
      priceChannel?: string
      priceRecurrencePolicy?: string
      localeProjection?: string | string[]
      storeProjection?: string
      expand?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ProductProjection> {
    return new ApiRequest<ProductProjection>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/product-projections/key={key}',
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
   *	Checks if the current or staged representation of a Product exists with the provided `key`. Returns a `200` status if the ProductProjection exists, or a `404` status otherwise.
   */
  public head(methodArgs?: {
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<void> {
    return new ApiRequest<void>(
      {
        baseUri: this.args.baseUri,
        method: 'HEAD',
        uriTemplate: '/{projectKey}/product-projections/key={key}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
}
