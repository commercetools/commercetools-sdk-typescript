/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { QuoteRequest, QuoteRequestUpdate } from '../../models/quote-request'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
/**
 **/
export class ByProjectKeyAsAssociateByAssociateIdInBusinessUnitKeyByBusinessUnitKeyQuoteRequestsKeyByKeyRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        associateId: string
        businessUnitKey: string
        key: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	If the QuoteRequest exists in the [Project](ctp:api:type:Project) but does not reference the requested [BusinessUnit](ctp:api:type:BusinessUnit), this method returns an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
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
  }): ApiRequest<QuoteRequest> {
    return new ApiRequest<QuoteRequest>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate:
          '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/key={key}',
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
   *	Checks if a QuoteRequest exists for a given `key`. Returns a `200 OK` status if the QuoteRequest exists or a `404 Not Found` otherwise.
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
          '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/key={key}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
  /**
   *	If the QuoteRequest exists in the [Project](ctp:api:type:Project) but does not reference the requested [BusinessUnit](ctp:api:type:BusinessUnit), this method returns an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: QuoteRequestUpdate
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<QuoteRequest> {
    return new ApiRequest<QuoteRequest>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate:
          '/{projectKey}/as-associate/{associateId}/in-business-unit/key={businessUnitKey}/quote-requests/key={key}',
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
