/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import {
  CustomerDraft,
  CustomerPagedQueryResponse,
  CustomerSignInResult,
} from '../../models/customer'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyInStoreKeyByStoreKeyCustomersEmailConfirmRequestBuilder } from '../confirm/by-project-key-in-store-key-by-store-key-customers-email-confirm-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCustomersEmailTokenRequestBuilder } from '../email-token/by-project-key-in-store-key-by-store-key-customers-email-token-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCustomersPasswordTokenRequestBuilder } from '../password-token/by-project-key-in-store-key-by-store-key-customers-password-token-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCustomersPasswordRequestBuilder } from '../password/by-project-key-in-store-key-by-store-key-customers-password-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCustomersPasswordResetRequestBuilder } from '../reset/by-project-key-in-store-key-by-store-key-customers-password-reset-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCustomersByIDRequestBuilder } from './by-project-key-in-store-key-by-store-key-customers-by-id-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCustomersEmailTokenByEmailTokenRequestBuilder } from './by-project-key-in-store-key-by-store-key-customers-email-token-by-email-token-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCustomersKeyByKeyRequestBuilder } from './by-project-key-in-store-key-by-store-key-customers-key-by-key-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyCustomersPasswordTokenByPasswordTokenRequestBuilder } from './by-project-key-in-store-key-by-store-key-customers-password-token-by-password-token-request-builder'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyCustomersRequestBuilder {
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
  public withPasswordToken(childPathArgs: {
    passwordToken: string
  }): ByProjectKeyInStoreKeyByStoreKeyCustomersPasswordTokenByPasswordTokenRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCustomersPasswordTokenByPasswordTokenRequestBuilder(
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
  public withEmailToken(childPathArgs: {
    emailToken: string
  }): ByProjectKeyInStoreKeyByStoreKeyCustomersEmailTokenByEmailTokenRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCustomersEmailTokenByEmailTokenRequestBuilder(
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
  public emailToken(): ByProjectKeyInStoreKeyByStoreKeyCustomersEmailTokenRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCustomersEmailTokenRequestBuilder(
      {
        pathArgs: {
          ...this.args.pathArgs,
        },
        executeRequest: this.args.executeRequest,
        baseUri: this.args.baseUri,
      }
    )
  }
  public emailConfirm(): ByProjectKeyInStoreKeyByStoreKeyCustomersEmailConfirmRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCustomersEmailConfirmRequestBuilder(
      {
        pathArgs: {
          ...this.args.pathArgs,
        },
        executeRequest: this.args.executeRequest,
        baseUri: this.args.baseUri,
      }
    )
  }
  public password(): ByProjectKeyInStoreKeyByStoreKeyCustomersPasswordRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCustomersPasswordRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public passwordReset(): ByProjectKeyInStoreKeyByStoreKeyCustomersPasswordResetRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCustomersPasswordResetRequestBuilder(
      {
        pathArgs: {
          ...this.args.pathArgs,
        },
        executeRequest: this.args.executeRequest,
        baseUri: this.args.baseUri,
      }
    )
  }
  public passwordToken(): ByProjectKeyInStoreKeyByStoreKeyCustomersPasswordTokenRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCustomersPasswordTokenRequestBuilder(
      {
        pathArgs: {
          ...this.args.pathArgs,
        },
        executeRequest: this.args.executeRequest,
        baseUri: this.args.baseUri,
      }
    )
  }
  public withKey(childPathArgs: {
    key: string
  }): ByProjectKeyInStoreKeyByStoreKeyCustomersKeyByKeyRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCustomersKeyByKeyRequestBuilder({
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
  }): ByProjectKeyInStoreKeyByStoreKeyCustomersByIDRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyCustomersByIDRequestBuilder({
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
  }): ApiRequest<CustomerPagedQueryResponse> {
    return new ApiRequest<CustomerPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/customers',
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
   *	Checks if a Customer exists for a given Query Predicate. Returns a `200 OK` status if any Customers match the Query Predicate or a `404 Not Found` otherwise.
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
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/customers',
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
   *	When using this endpoint, if omitted, the Customer `stores` field is set to the [Store](ctp:api:type:Store) specified in the path parameter.
   *
   *	If the `anonymousCart` field is set on the [CustomerDraft](ctp:api:type:CustomerDraft), then the newly created Customer will be assigned to that [Cart](ctp:api:type:Cart).
   *	Similarly, if the `anonymousId` field is set, the Customer will be set on all [Carts](ctp:api:type:Cart), [Orders](ctp:api:type:Order), [ShoppingLists](ctp:api:type:ShoppingList) and [Payments](ctp:api:type:Payment) with the same `anonymousId`.
   *	If a Cart with a `store` field specified, the `store` field must reference the same [Store](ctp:api:type:Store) specified in the `{storeKey}` path parameter.
   *
   *	Creating a Customer produces the [CustomerCreated](ctp:api:type:CustomerCreatedMessage) Message. Simultaneously creating two Customers with the same email address can return a [LockedField](ctp:api:type:LockedFieldError) error.
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: CustomerDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<CustomerSignInResult> {
    return new ApiRequest<CustomerSignInResult>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/customers',
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
