/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { Customer, MyCustomerEmailVerify } from '../../models/customer'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
/**
 **/
export class ByProjectKeyMeEmailConfirmRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	This is the last step in the [email verification process of a Customer](/../api/projects/customers#email-verification-of-customer).
   *
   *	After the email is verified, all email tokens issued previously through the [email verification flow](/../api/projects/customers#email-verification-of-customer) are invalidated. This invalidation of tokens is [eventually consistent](/../api/general-concepts#eventual-consistency).
   *
   */
  public post(methodArgs: {
    body: MyCustomerEmailVerify
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Customer> {
    return new ApiRequest<Customer>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/me/email/confirm',
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
}
