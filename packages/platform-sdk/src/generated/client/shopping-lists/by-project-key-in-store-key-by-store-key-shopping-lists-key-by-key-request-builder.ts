/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { ShoppingList, ShoppingListUpdate } from '../../models/shopping-list'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyShoppingListsKeyByKeyRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        storeKey: string
        key: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	If a ShoppingList exists in a Project but does _not_ have the `store` field, or the `store` field references a different [Store](ctp:api:type:Store),
   *	the [ResourceNotFound](/errors#404-not-found-1) error is returned.
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
  }): ApiRequest<ShoppingList> {
    return new ApiRequest<ShoppingList>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate:
          '/{projectKey}/in-store/key={storeKey}/shopping-lists/key={key}',
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
   *	Checks if a ShoppingList exists for a given `key`. Returns a `200 OK` status if the ShoppingList exists or a [ResourceNotFound](ctp:api:type:ResourceNotFoundError) error otherwise.
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
          '/{projectKey}/in-store/key={storeKey}/shopping-lists/key={key}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
  /**
   *	If a ShoppingList exists in a Project but does _not_ have the `store` field, or the `store` field references a different [Store](ctp:api:type:Store),
   *	the [ResourceNotFound](/errors#404-not-found-1) error is returned.
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: ShoppingListUpdate
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ShoppingList> {
    return new ApiRequest<ShoppingList>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate:
          '/{projectKey}/in-store/key={storeKey}/shopping-lists/key={key}',
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
   *	If a ShoppingList exists in a Project but does _not_ have the `store` field, or the `store` field references a different [Store](ctp:api:type:Store),
   *	the [ResourceNotFound](/errors#404-not-found-1) error is returned.
   *
   */
  public delete(methodArgs: {
    queryArgs: {
      expand?: string | string[]
      dataErasure?: boolean
      version: number
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ShoppingList> {
    return new ApiRequest<ShoppingList>(
      {
        baseUri: this.args.baseUri,
        method: 'DELETE',
        uriTemplate:
          '/{projectKey}/in-store/key={storeKey}/shopping-lists/key={key}',
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
