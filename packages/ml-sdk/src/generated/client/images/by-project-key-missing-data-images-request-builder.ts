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
import { TaskToken } from '../../models/common'
import { MissingImagesSearchRequest } from '../../models/missing-data'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyMissingDataImagesStatusRequestBuilder } from '../status/by-project-key-missing-data-images-status-request-builder'

export class ByProjectKeyMissingDataImagesRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public status(): ByProjectKeyMissingDataImagesStatusRequestBuilder {
    return new ByProjectKeyMissingDataImagesStatusRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  public post(methodArgs: {
    body: MissingImagesSearchRequest
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<TaskToken> {
    return new ApiRequest<TaskToken>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/missing-data/images',
        pathVariables: this.args.pathArgs,
        headers: {
          'Content-Type': 'application/json',
          ...methodArgs?.headers,
        },
        body: methodArgs?.body,
      },
      this.args.executeRequest
    )
  }
}
