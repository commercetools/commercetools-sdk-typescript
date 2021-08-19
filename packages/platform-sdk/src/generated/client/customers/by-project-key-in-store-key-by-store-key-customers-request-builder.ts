/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.commercetools.com/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
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
  /**
   *	To verify a customer's email, an email token can be created. This should be embedded in a link and sent to the
   *	customer via email. When the customer clicks on the link,
   *	the "verify customer's email" endpoint should be called,
   *	which sets customer's isVerifiedEmail field to true.
   *
   */
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
  /**
   *	The following workflow can be used to reset the customer's password:
   *
   *	* Create a password reset token and send it embedded in a link to the customer.
   *	* When the customer clicks on the link, the customer is retrieved with the token.
   *	* The customer enters a new password and the "reset customer's password" endpoint is called.
   *
   */
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
   *	Creates a customer in a specific Store. The {storeKey} path parameter maps to a Store's key.
   *	When using this endpoint, if omitted,
   *	the customer's stores field is set to the store specified in the path parameter.
   *	If an anonymous cart is passed in as when using this method,
   *	then the cart is assigned to the created customer and the version number of the Cart increases.
   *	If the ID of an anonymous session is given, all carts and orders will be assigned to the created customer and
   *	the store specified. If you pass in a cart with a store field specified,
   *	the store field must reference the same store specified in the {storeKey} path parameter.
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
