/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { MyShoppingListUpdate } from '../../models/me'
import { ShoppingList } from '../../models/shopping-list'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsKeyByKeyRequestBuilder {
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
   *	Retrieves a ShoppingList with the provided `key` for the authenticated Customer or anonymous user in a [Store](ctp:api:type:Store). Returns `200 OK` status if successful.
   *
   *	A [ResourceNotFound](ctp:api:type:ResourceNotFoundError) error is returned in the following scenarios:
   *
   *	- If no ShoppingList matches the provided `key` in a Store.
   *	- If a ShoppingList matches the provided `key` but does not have a `store` specified, or the `store` field references a different Store.
   *	- If a ShoppingList matches the provided `key` in a Store but does not contain either an `anonymousId` that matches the [anonymous_id:{id}](/scopes#composable-commerce-oauth) scope,
   *	   or a `customer` with `id` value that matches the [customer:{id}](/scopes#composable-commerce-oauth) scope.
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
          '/{projectKey}/in-store/key={storeKey}/me/shopping-lists/key={key}',
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
   *	Checks if a ShoppingList exists with the provided `key` for the authenticated Customer or anonymous user in a [Store](ctp:api:type:Store). Returns a `200 OK` status if successful.
   *
   *	A [Not Found](/../api/errors#404-not-found) error is returned in the following scenarios:
   *
   *	- If no ShoppingList exists that matches the provided `key` in a Store.
   *	- If a ShoppingList matches the provided `key` but does not have a `store` specified, or the `store` field references a different Store.
   *	- If a ShoppingList matches the provided `key` in a Store but does not contain either an `anonymousId` that matches the [anonymous_id:{id}](/scopes#composable-commerce-oauth) scope, or a `customer` with `id` value that matches the [customer:{id}](/scopes#composable-commerce-oauth) scope.
   *
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
          '/{projectKey}/in-store/key={storeKey}/me/shopping-lists/key={key}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
  /**
   *	Updates a ShoppingList for the authenticated Customer or anonymous user in a [Store](ctp:api:type:Store) using one or more [update actions](/../api/projects/me-shoppingLists#update-actions). Returns a `200 OK` status if successful.
   *
   *	A [ResourceNotFound](ctp:api:type:ResourceNotFoundError) error is returned in the following scenarios:
   *
   *	- If no ShoppingList matches the provided `key` in a Store.
   *	- If a ShoppingList matches the provided `key` but does not have a `store` specified, or the `store` field references a different Store.
   *	- If a ShoppingList matches the provided `key` in a Store but does not contain either an `anonymousId` that matches the [anonymous_id:{id}](/scopes#composable-commerce-oauth) scope, or a `customer` with `id` value that matches the [customer:{id}](/scopes#composable-commerce-oauth) scope.
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: MyShoppingListUpdate
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ShoppingList> {
    return new ApiRequest<ShoppingList>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate:
          '/{projectKey}/in-store/key={storeKey}/me/shopping-lists/key={key}',
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
   *	Deletes a ShoppingList in a [Store](ctp:api:type:Store). Returns a `200 OK` status if successful.
   *
   *	A [ResourceNotFound](ctp:api:type:ResourceNotFoundError) error is returned in the following scenarios:
   *
   *	- If no ShoppingList matches the provided `key` in a Store.
   *	- If a ShoppingList matches the provided `key` but does not have a `store` specified, or the `store` field references a different Store.
   *	- If a ShoppingList matches the provided `key` in a Store but does not contain either an `anonymousId` that matches the [anonymous_id:{id}](/scopes#composable-commerce-oauth) scope, or a `customer` with `id` value that matches the [customer:{id}](/scopes#composable-commerce-oauth) scope.
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
          '/{projectKey}/in-store/key={storeKey}/me/shopping-lists/key={key}',
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
