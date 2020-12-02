/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.vrap.io/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */
import {
  TaxCategory,
  TaxCategoryDraft,
  TaxCategoryPagedQueryResponse,
} from '../../models/tax-category'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyTaxCategoriesByIDRequestBuilder } from './by-project-key-tax-categories-by-id-request-builder'
import { ByProjectKeyTaxCategoriesKeyByKeyRequestBuilder } from './by-project-key-tax-categories-key-by-key-request-builder'

export class ByProjectKeyTaxCategoriesRequestBuilder {
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
  }): ByProjectKeyTaxCategoriesKeyByKeyRequestBuilder {
    return new ByProjectKeyTaxCategoriesKeyByKeyRequestBuilder({
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
  }): ByProjectKeyTaxCategoriesByIDRequestBuilder {
    return new ByProjectKeyTaxCategoriesByIDRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  /**
   *	Query tax-categories
   */
  public get(methodArgs?: {
    queryArgs?: {
      expand?: string
      sort?: string
      limit?: number
      offset?: number
      withTotal?: boolean
      where?: string
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string
    }
  }): ApiRequest<TaxCategoryPagedQueryResponse> {
    return new ApiRequest<TaxCategoryPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/tax-categories',
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
   *	Create TaxCategory
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string
      [key: string]: QueryParam
    }
    body: TaxCategoryDraft
    headers?: {
      [key: string]: string
    }
  }): ApiRequest<TaxCategory> {
    return new ApiRequest<TaxCategory>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/tax-categories',
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
