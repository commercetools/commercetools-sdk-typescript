/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import {
  BusinessUnit,
  BusinessUnitPagedQueryResponse,
} from '../../models/business-unit'
import { MyBusinessUnitDraft } from '../../models/me'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyMeBusinessUnitsByIDRequestBuilder } from './by-project-key-me-business-units-by-id-request-builder'
import { ByProjectKeyMeBusinessUnitsKeyByKeyRequestBuilder } from './by-project-key-me-business-units-key-by-key-request-builder'
/**
 **/
export class ByProjectKeyMeBusinessUnitsRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withId(childPathArgs: {
    ID: string
  }): ByProjectKeyMeBusinessUnitsByIDRequestBuilder {
    return new ByProjectKeyMeBusinessUnitsByIDRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public withKey(childPathArgs: {
    key: string
  }): ByProjectKeyMeBusinessUnitsKeyByKeyRequestBuilder {
    return new ByProjectKeyMeBusinessUnitsKeyByKeyRequestBuilder({
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
  }): ApiRequest<BusinessUnitPagedQueryResponse> {
    return new ApiRequest<BusinessUnitPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/me/business-units',
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
   *	Automatically assigns the Associate to the Business Unit in the default [Associate Role](ctp:api:type:AssociateRole) defined in [BusinessUnitConfiguration](ctp:api:type:BusinessUnitConfiguration). If there is no default Associate Role configured, this request fails with an [InvalidOperation](ctp:api:type:InvalidOperationError) error. When creating a Division, the Associate must have the `AddChildUnits` [Permission](ctp:api:type:Permission) in the parent unit. If the required [Permission](/projects/associate-roles#permission) is missing, an [AssociateMissingPermission](/errors#associatemissingpermission) error is returned.
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: MyBusinessUnitDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<BusinessUnit> {
    return new ApiRequest<BusinessUnit>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/me/business-units',
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
