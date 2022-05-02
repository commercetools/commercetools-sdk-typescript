/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { Customer } from '../../models/customer'
import { MyCustomerUpdate } from '../../models/me'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyInStoreKeyByStoreKeyMeActiveCartRequestBuilder } from '../active-cart/by-project-key-in-store-key-by-store-key-me-active-cart-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyMeCartsRequestBuilder } from '../carts/by-project-key-in-store-key-by-store-key-me-carts-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyMeEmailConfirmRequestBuilder } from '../confirm/by-project-key-in-store-key-by-store-key-me-email-confirm-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyMeLoginRequestBuilder } from '../login/by-project-key-in-store-key-by-store-key-me-login-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyMeOrdersRequestBuilder } from '../orders/by-project-key-in-store-key-by-store-key-me-orders-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyMePasswordRequestBuilder } from '../password/by-project-key-in-store-key-by-store-key-me-password-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsRequestBuilder } from '../shopping-lists/by-project-key-in-store-key-by-store-key-me-shopping-lists-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyMeSignupRequestBuilder } from '../signup/by-project-key-in-store-key-by-store-key-me-signup-request-builder'

export class ByProjectKeyInStoreKeyByStoreKeyMeRequestBuilder {
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
  /**
   *	A shopping cart holds product variants and can be ordered.
   */
  public carts(): ByProjectKeyInStoreKeyByStoreKeyMeCartsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeCartsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	An order can be created from a order, usually after a checkout process has been completed.
   */
  public orders(): ByProjectKeyInStoreKeyByStoreKeyMeOrdersRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeOrdersRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public activeCart(): ByProjectKeyInStoreKeyByStoreKeyMeActiveCartRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeActiveCartRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	shopping-lists e.g. for wishlist support
   *
   */
  public shoppingLists(): ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeShoppingListsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public emailConfirm(): ByProjectKeyInStoreKeyByStoreKeyMeEmailConfirmRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeEmailConfirmRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public password(): ByProjectKeyInStoreKeyByStoreKeyMePasswordRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMePasswordRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public signup(): ByProjectKeyInStoreKeyByStoreKeyMeSignupRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeSignupRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public login(): ByProjectKeyInStoreKeyByStoreKeyMeLoginRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyMeLoginRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  public get(methodArgs?: {
    queryArgs?: {
      sort?: string | string[]
      limit?: number
      offset?: number
      withTotal?: boolean
      expand?: string | string[]
      where?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Customer> {
    return new ApiRequest<Customer>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/me',
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
   *	Update my customer in a store
   */
  public post(methodArgs: {
    body: MyCustomerUpdate
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Customer> {
    return new ApiRequest<Customer>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/me',
        pathVariables: this.args.pathArgs,
        headers: {
          'Content-Type': 'application/json',
          ...methodArgs?.headers,
        },
        body: methodArgs?.body,
      },
      this.args.executeRequest
    )
  }
  /**
   *	Delete my Customer in a store
   */
  public delete(methodArgs: {
    queryArgs: {
      version: number
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Customer> {
    return new ApiRequest<Customer>(
      {
        baseUri: this.args.baseUri,
        method: 'DELETE',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/me',
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
