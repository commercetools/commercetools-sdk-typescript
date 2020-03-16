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
import { MissingDataTaskStatus } from '../../models/missing-data'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'

export class ByProjectKeyMissingDataAttributesStatusByTaskIdRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        taskId: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public get(methodArgs?: {
    headers?: {
      [key: string]: string
    }
  }): ApiRequest<MissingDataTaskStatus> {
    return new ApiRequest<MissingDataTaskStatus>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/missing-data/attributes/status/{taskId}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
}
