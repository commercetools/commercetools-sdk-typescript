/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import {
  OrderPagedSearchResponse,
  OrderSearchRequest,
} from '../../models/order'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'

export class ByProjectKeyOrdersSearchRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public post(methodArgs: {
    body: OrderSearchRequest
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<OrderPagedSearchResponse> {
    return new ApiRequest<OrderPagedSearchResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/orders/search',
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
   *	Checks whether a search index for the Project's Orders exists.
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
        uriTemplate: '/{projectKey}/orders/search',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
}
