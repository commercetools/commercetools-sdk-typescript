/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { Order, OrderUpdate } from '../../models/order'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyOrdersOrderNumberByOrderNumberRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        storeKey: string
        orderNumber: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	If the Order exists in the Project but does not have a `store` specified, or the `store` field references a different Store, this method returns a [ResourceNotFound](ctp:api:type:ResourceNotFoundError) error.
   *
   */
  public get(methodArgs?: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Order> {
    return new ApiRequest<Order>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate:
          '/{projectKey}/in-store/key={storeKey}/orders/order-number={orderNumber}',
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
   *	Checks if an Order exists for a given `orderNumber`. Returns a `200 OK` status if the Order exists or a [ResourceNotFound](ctp:api:type:ResourceNotFoundError) error otherwise.
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
        uriTemplate:
          '/{projectKey}/in-store/key={storeKey}/orders/order-number={orderNumber}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
  /**
   *	If the Order exists in the Project but does not have a `store` specified, or the `store` field references a different Store, this method returns a [ResourceNotFound](ctp:api:type:ResourceNotFoundError) error.
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: OrderUpdate
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Order> {
    return new ApiRequest<Order>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate:
          '/{projectKey}/in-store/key={storeKey}/orders/order-number={orderNumber}',
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
  /**
   *	If the Order exists in the Project but does not have a `store` specified, or the `store` field references a different Store, this method returns a [ResourceNotFound](ctp:api:type:ResourceNotFoundError) error.
   *
   *	Deleting an Order produces the [OrderDeleted](ctp:api:type:OrderDeletedMessage) Message.
   *
   */
  public delete(methodArgs: {
    queryArgs: {
      dataErasure?: boolean
      version: number
      expand?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Order> {
    return new ApiRequest<Order>(
      {
        baseUri: this.args.baseUri,
        method: 'DELETE',
        uriTemplate:
          '/{projectKey}/in-store/key={storeKey}/orders/order-number={orderNumber}',
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
