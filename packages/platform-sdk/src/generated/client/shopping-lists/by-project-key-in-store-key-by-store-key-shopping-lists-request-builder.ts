/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import {
  ShoppingList,
  ShoppingListDraft,
  ShoppingListPagedQueryResponse,
} from '../../models/shopping-list'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyInStoreKeyByStoreKeyShoppingListsByIDRequestBuilder } from './by-project-key-in-store-key-by-store-key-shopping-lists-by-id-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyShoppingListsKeyByKeyRequestBuilder } from './by-project-key-in-store-key-by-store-key-shopping-lists-key-by-key-request-builder'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyShoppingListsRequestBuilder {
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
  }): ByProjectKeyInStoreKeyByStoreKeyShoppingListsKeyByKeyRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyShoppingListsKeyByKeyRequestBuilder(
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
  }): ByProjectKeyInStoreKeyByStoreKeyShoppingListsByIDRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyShoppingListsByIDRequestBuilder({
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
  }): ApiRequest<ShoppingListPagedQueryResponse> {
    return new ApiRequest<ShoppingListPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/shopping-lists',
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
   *	Checks if a ShoppingList exists for a given Query Predicate. Returns a `200 OK` status if any ShoppingLists match the Query Predicate or [Not Found](/../api/errors#404-not-found) otherwise.
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
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/shopping-lists',
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
   *	When using this endpoint, the `store` field of a ShoppingList is always set to the [Store](ctp:api:type:Store) specified in the path parameter.
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: ShoppingListDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ShoppingList> {
    return new ApiRequest<ShoppingList>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/shopping-lists',
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
