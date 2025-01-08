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
import { ByProjectKeyCustomersEmailConfirmRequestBuilder } from '../confirm/by-project-key-customers-email-confirm-request-builder'
import { ByProjectKeyCustomersEmailTokenRequestBuilder } from '../email-token/by-project-key-customers-email-token-request-builder'
import { ByProjectKeyCustomersSearchIndexingStatusRequestBuilder } from '../indexing-status/by-project-key-customers-search-indexing-status-request-builder'
import { ByProjectKeyCustomersPasswordTokenRequestBuilder } from '../password-token/by-project-key-customers-password-token-request-builder'
import { ByProjectKeyCustomersPasswordRequestBuilder } from '../password/by-project-key-customers-password-request-builder'
import { ByProjectKeyCustomersPasswordResetRequestBuilder } from '../reset/by-project-key-customers-password-reset-request-builder'
import { ByProjectKeyCustomersSearchRequestBuilder } from '../search/by-project-key-customers-search-request-builder'
import { ByProjectKeyCustomersByIDRequestBuilder } from './by-project-key-customers-by-id-request-builder'
import { ByProjectKeyCustomersEmailTokenByEmailTokenRequestBuilder } from './by-project-key-customers-email-token-by-email-token-request-builder'
import { ByProjectKeyCustomersKeyByKeyRequestBuilder } from './by-project-key-customers-key-by-key-request-builder'
import { ByProjectKeyCustomersPasswordTokenByPasswordTokenRequestBuilder } from './by-project-key-customers-password-token-by-password-token-request-builder'
/**
 **/
export class ByProjectKeyCustomersRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withPasswordToken(childPathArgs: {
    passwordToken: string
  }): ByProjectKeyCustomersPasswordTokenByPasswordTokenRequestBuilder {
    return new ByProjectKeyCustomersPasswordTokenByPasswordTokenRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public withEmailToken(childPathArgs: {
    emailToken: string
  }): ByProjectKeyCustomersEmailTokenByEmailTokenRequestBuilder {
    return new ByProjectKeyCustomersEmailTokenByEmailTokenRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public emailToken(): ByProjectKeyCustomersEmailTokenRequestBuilder {
    return new ByProjectKeyCustomersEmailTokenRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public emailConfirm(): ByProjectKeyCustomersEmailConfirmRequestBuilder {
    return new ByProjectKeyCustomersEmailConfirmRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public password(): ByProjectKeyCustomersPasswordRequestBuilder {
    return new ByProjectKeyCustomersPasswordRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public passwordReset(): ByProjectKeyCustomersPasswordResetRequestBuilder {
    return new ByProjectKeyCustomersPasswordResetRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	Produces the [CustomerPasswordTokenCreated](ctp:api:type:CustomerPasswordTokenCreatedMessage) Message.
   */
  public passwordToken(): ByProjectKeyCustomersPasswordTokenRequestBuilder {
    return new ByProjectKeyCustomersPasswordTokenRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public withKey(childPathArgs: {
    key: string
  }): ByProjectKeyCustomersKeyByKeyRequestBuilder {
    return new ByProjectKeyCustomersKeyByKeyRequestBuilder({
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
  }): ByProjectKeyCustomersByIDRequestBuilder {
    return new ByProjectKeyCustomersByIDRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	This endpoint provides high-performance search queries over Customers.
   *
   */
  public search(): ByProjectKeyCustomersSearchRequestBuilder {
    return new ByProjectKeyCustomersSearchRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public searchIndexingStatus(): ByProjectKeyCustomersSearchIndexingStatusRequestBuilder {
    return new ByProjectKeyCustomersSearchIndexingStatusRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
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
        uriTemplate: '/{projectKey}/customers',
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
   *	Checks if a Customer exists for a given Query Predicate. Returns a `200 OK` status if any Customers match the Query Predicate, or a `404 Not Found` otherwise.
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
        uriTemplate: '/{projectKey}/customers',
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
   *	If the `anonymousCart` field is set on the [CustomerDraft](ctp:api:type:CustomerDraft), then the newly created Customer will be assigned to that [Cart](ctp:api:type:Cart).
   *	Similarly, if the `anonymousId` field is set, the Customer will be set on all [Carts](ctp:api:type:Cart), [Orders](ctp:api:type:Order), [ShoppingLists](ctp:api:type:ShoppingList) and [Payments](ctp:api:type:Payment) with the same `anonymousId`.
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
        uriTemplate: '/{projectKey}/customers',
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
