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
import { RecordPagedQueryResponse } from '../models/common'
import { executeRequest, QueryParam } from '../shared/utils/common-types'
import { ApiRequest } from '../shared/utils/requests-utils'

export class ByProjectKeyByResourceTypeByIDRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        resourceType: string
        ID: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public get(methodArgs?: {
    queryArgs?: {
      'date.from'?: any
      'date.to'?: any
      limit?: number
      offset?: number
      userId?: string
      type?: string
      clientId?: string
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
        uriTemplate: '/{projectKey}/{resourceType}/{ID}',
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
