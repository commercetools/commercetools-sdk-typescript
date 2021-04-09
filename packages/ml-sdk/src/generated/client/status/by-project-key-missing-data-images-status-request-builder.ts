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
import { executeRequest } from '../../shared/utils/common-types'
import { ByProjectKeyMissingDataImagesStatusByTaskIdRequestBuilder } from './by-project-key-missing-data-images-status-by-task-id-request-builder'

export class ByProjectKeyMissingDataImagesStatusRequestBuilder {
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
  }): ByProjectKeyMissingDataImagesStatusByTaskIdRequestBuilder {
    return new ByProjectKeyMissingDataImagesStatusByTaskIdRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
}
