/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import {
  StagedQuote,
  StagedQuoteDraft,
  StagedQuotePagedQueryResponse,
} from '../../models/staged-quote'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyInStoreKeyByStoreKeyStagedQuotesByIDRequestBuilder } from './by-project-key-in-store-key-by-store-key-staged-quotes-by-id-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyStagedQuotesKeyByKeyRequestBuilder } from './by-project-key-in-store-key-by-store-key-staged-quotes-key-by-key-request-builder'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyStagedQuotesRequestBuilder {
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
  }): ByProjectKeyInStoreKeyByStoreKeyStagedQuotesKeyByKeyRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyStagedQuotesKeyByKeyRequestBuilder(
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
  }): ByProjectKeyInStoreKeyByStoreKeyStagedQuotesByIDRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyStagedQuotesByIDRequestBuilder({
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
  }): ApiRequest<StagedQuotePagedQueryResponse> {
    return new ApiRequest<StagedQuotePagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/staged-quotes',
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
   *	Checks if a StagedQuote exists for a given Query Predicate. Returns a `200 OK` status if any StagedQuotes match the Query Predicate or [Not Found](/../api/errors#404-not-found) otherwise.
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
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/staged-quotes',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: StagedQuoteDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<StagedQuote> {
    return new ApiRequest<StagedQuote>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/staged-quotes',
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
