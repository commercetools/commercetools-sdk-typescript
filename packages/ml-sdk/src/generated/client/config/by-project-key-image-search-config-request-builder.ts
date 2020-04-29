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
import {
  ImageSearchConfigRequest,
  ImageSearchConfigResponse,
} from '../../models/image-search-config'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'

export class ByProjectKeyImageSearchConfigRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	Get the current image search config.
   */
  public get(methodArgs?: {
    headers?: {
      [key: string]: string
    }
  }): ApiRequest<ImageSearchConfigResponse> {
    return new ApiRequest<ImageSearchConfigResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/image-search/config',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
  /**
   *	Endpoint to update the image search config.
   */
  public post(methodArgs: {
    body: ImageSearchConfigRequest
    headers?: {
      [key: string]: string
    }
  }): ApiRequest<ImageSearchConfigResponse> {
    return new ApiRequest<ImageSearchConfigResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/image-search/config',
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
