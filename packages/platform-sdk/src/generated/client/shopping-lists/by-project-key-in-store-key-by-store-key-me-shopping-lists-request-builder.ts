/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { MyShoppingListDraft } from '../../models/me'
import {
  ShoppingList,
  ShoppingListPagedQueryResponse,
} from '../../models/shopping-list'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsByIDRequestBuilder } from './by-project-key-in-store-key-by-store-key-me-shopping-lists-by-id-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsKeyByKeyRequestBuilder } from './by-project-key-in-store-key-by-store-key-me-shopping-lists-key-by-key-request-builder'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsRequestBuilder {
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
  }): ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsKeyByKeyRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsKeyByKeyRequestBuilder(
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
  }): ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsByIDRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsByIDRequestBuilder(
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

  /**
   *	Retrieves all ShoppingLists for the authenticated Customer or anonymous user in a [Store](ctp:api:type:Store). Returns `200 OK` status if successful.
   *
   *	A [ResourceNotFound](ctp:api:type:ResourceNotFoundError) error is returned in the following scenarios:
   *
   *	- If no ShoppingLists exist in a Store.
   *	- If a ShoppingList exists but does not have a `store` specified, or the `store` field references a different Store.
   *	- If a ShoppingList exists in a Store but does not contain either an `anonymousId` that matches the [anonymous_id:{id}](/scopes#composable-commerce-oauth) scope, or a `customer` with `id` value that matches the [customer:{id}](/scopes#composable-commerce-oauth) scope.
   *
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
  }): ApiRequest<ShoppingListPagedQueryResponse> {
    return new ApiRequest<ShoppingListPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/me/shopping-lists',
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
   *	Checks if one or more ShoppingLists exist for the provided query predicate for the authenticated Customer or anonymous user in a [Store](ctp:api:type:Store). Returns `200 OK` status if successful.
   *
   *	A [Not Found](/../api/errors#404-not-found) error is returned in the following scenarios:
   *
   *	- If no ShoppingLists exist for the provided query predicate in a Store.
   *	- If a ShoppingList matches the query predicate but does not have a `store` specified, or the `store` field references a different Store.
   *	- If a ShoppingList exists in a Store but does not contain either an `anonymousId` that matches the [anonymous_id:{id}](/scopes#composable-commerce-oauth) scope, or a `customer` with `id` value that matches the [customer:{id}](/scopes#composable-commerce-oauth) scope.
   *
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
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/me/shopping-lists',
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
   *
   *	Creates a ShoppingList for the authenticated Customer or anonymous user in a [Store](ctp:api:type:Store). The `customer` or `anonymousId` field on the ShoppingList is automatically set based on the given [customer:{id}](/scopes#composable-commerce-oauth) or [anonymous_id:{id}](/scopes#composable-commerce-oauth) scope.
   *
   *	When using this endpoint, the `store` field of a ShoppingList is always set to the Store specified in the path parameter.
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: MyShoppingListDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ShoppingList> {
    return new ApiRequest<ShoppingList>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/me/shopping-lists',
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
