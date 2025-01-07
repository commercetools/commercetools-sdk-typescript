/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import {
  ChangeHistoryResourceType,
  PlatformInitiatedChange,
  RecordPagedQueryResponse,
  Source,
} from '../models/change-history'
import { executeRequest, QueryParam } from '../shared/utils/common-types'
import { ApiRequest } from '../shared/utils/requests-utils'
import { ByProjectKeyByResourceTypeRequestBuilder } from './by-project-key-by-resource-type-request-builder'
import { ByProjectKeyGraphqlRequestBuilder } from './graphql/by-project-key-graphql-request-builder'
/**
 **/
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
  public graphql(): ByProjectKeyGraphqlRequestBuilder {
    return new ByProjectKeyGraphqlRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
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

  /**
   *	The `view_audit_log:{projectKey}` scope is required, and depending on the [resource type](ctp:history:type:ChangeHistoryResourceType) queried, their respective scopes must be granted.
   */
  public get(methodArgs?: {
    queryArgs?: {
      resourceTypes?: ChangeHistoryResourceType | ChangeHistoryResourceType[]
      'date.from'?: any
      'date.to'?: any
      limit?: number
      offset?: number
      userId?: string
      clientId?: string
      customerId?: string
      associateId?: string
      businessUnit?: string
      type?: string
      resourceId?: string
      resourceKey?: string
      source?: Source
      changes?: string | string[]
      stores?: string | string[]
      excludePlatformInitiatedChanges?:
        | PlatformInitiatedChange
        | PlatformInitiatedChange[]
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
