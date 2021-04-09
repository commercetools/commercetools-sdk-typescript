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
  ChangeHistoryResourceType,
  RecordPagedQueryResponse,
} from '../models/common'
import { executeRequest, QueryParam } from '../shared/utils/common-types'
import { ApiRequest } from '../shared/utils/requests-utils'
import { ByProjectKeyByResourceTypeRequestBuilder } from './by-project-key-by-resource-type-request-builder'

export class ByProjectKeyRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withResourceTypeValue(childPathArgs: {
    resourceType: string
  }): ByProjectKeyByResourceTypeRequestBuilder {
    return new ByProjectKeyByResourceTypeRequestBuilder({
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
      resourceType?: ChangeHistoryResourceType | ChangeHistoryResourceType[]
      'date.from'?: any
      'date.to'?: any
      limit?: number
      offset?: number
      userId?: string
      type?: string
      clientId?: string
      resourceId?: string
      source?: string
      changes?: string | string[]
      customerId?: string
      expand?: boolean
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<RecordPagedQueryResponse> {
    return new ApiRequest<RecordPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}',
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
