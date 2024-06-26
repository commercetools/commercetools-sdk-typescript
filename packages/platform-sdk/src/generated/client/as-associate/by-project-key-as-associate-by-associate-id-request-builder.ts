/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { executeRequest } from '../../shared/utils/common-types'
import { ByProjectKeyAsAssociateByAssociateIdBusinessUnitsRequestBuilder } from '../business-units/by-project-key-as-associate-by-associate-id-business-units-request-builder'
import { ByProjectKeyAsAssociateByAssociateIdInBusinessUnitKeyByBusinessUnitKeyRequestBuilder } from '../in-business-unit/by-project-key-as-associate-by-associate-id-in-business-unit-key-by-business-unit-key-request-builder'
/**
 **/
export class ByProjectKeyAsAssociateByAssociateIdRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        associateId: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	A Business Unit can represent a Company or a Division.
   */
  public businessUnits(): ByProjectKeyAsAssociateByAssociateIdBusinessUnitsRequestBuilder {
    return new ByProjectKeyAsAssociateByAssociateIdBusinessUnitsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public inBusinessUnitKeyWithBusinessUnitKeyValue(childPathArgs: {
    businessUnitKey: string
  }): ByProjectKeyAsAssociateByAssociateIdInBusinessUnitKeyByBusinessUnitKeyRequestBuilder {
    return new ByProjectKeyAsAssociateByAssociateIdInBusinessUnitKeyByBusinessUnitKeyRequestBuilder(
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
}
