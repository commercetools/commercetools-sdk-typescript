/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { BusinessUnitAssociateResponse } from '../../models/business-unit'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
/**
 **/
export class ByProjectKeyInStoreKeyByStoreKeyBusinessUnitsKeyByKeyAssociatesByAssociateIdRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        storeKey: string
        key: string
        associateId: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	Retrieves all roles and permissions of an Associate in a Business Unit in a Store.
   *
   */
  public get(methodArgs?: {
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<BusinessUnitAssociateResponse> {
    return new ApiRequest<BusinessUnitAssociateResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate:
          '/{projectKey}/in-store/key={storeKey}/business-units/key={key}/associates/{associateId}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
}
