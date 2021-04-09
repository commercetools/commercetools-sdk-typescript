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
import { ImageSearchResponse } from '../../models/image-search'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyImageSearchConfigRequestBuilder } from '../config/by-project-key-image-search-config-request-builder'

export class ByProjectKeyImageSearchRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public config(): ByProjectKeyImageSearchConfigRequestBuilder {
    return new ByProjectKeyImageSearchConfigRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  /**
   *	Accepts an image file and returns similar products from product catalogue.
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      limit?: number
      offset?: number
      [key: string]: QueryParam
    }
    body: Buffer
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ImageSearchResponse> {
    return new ApiRequest<ImageSearchResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/image-search',
        pathVariables: this.args.pathArgs,
        headers: {
          'Content-Type': 'multipart/form-data',
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
        body: methodArgs?.body,
      },
      this.args.executeRequest
    )
  }
}
