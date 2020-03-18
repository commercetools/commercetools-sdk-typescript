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
import { executeRequest } from '../../shared/utils/common-types'
import { ByProjectKeySimilaritiesProductsStatusByTaskIdRequestBuilder } from './by-project-key-similarities-products-status-by-task-id-request-builder'

export class ByProjectKeySimilaritiesProductsStatusRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withTaskId(childPathArgs: {
    taskId: string
  }): ByProjectKeySimilaritiesProductsStatusByTaskIdRequestBuilder {
    return new ByProjectKeySimilaritiesProductsStatusByTaskIdRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
}
