/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import {
  StandalonePrice,
  StandalonePriceDraft,
  StandalonePricePagedQueryResponse,
} from '../../models/standalone-price'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyStandalonePricesByIDRequestBuilder } from './by-project-key-standalone-prices-by-id-request-builder'
import { ByProjectKeyStandalonePricesKeyByKeyRequestBuilder } from './by-project-key-standalone-prices-key-by-key-request-builder'

export class ByProjectKeyStandalonePricesRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withKey(childPathArgs: {
    key: string
  }): ByProjectKeyStandalonePricesKeyByKeyRequestBuilder {
    return new ByProjectKeyStandalonePricesKeyByKeyRequestBuilder({
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
  }): ByProjectKeyStandalonePricesByIDRequestBuilder {
    return new ByProjectKeyStandalonePricesByIDRequestBuilder({
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
  }): ApiRequest<StandalonePricePagedQueryResponse> {
    return new ApiRequest<StandalonePricePagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/standalone-prices',
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
   *	Produces the [StandalonePriceCreatedMessage](ctp:api:type:StandalonePriceCreatedMessage).
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: StandalonePriceDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<StandalonePrice> {
    return new ApiRequest<StandalonePrice>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/standalone-prices',
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