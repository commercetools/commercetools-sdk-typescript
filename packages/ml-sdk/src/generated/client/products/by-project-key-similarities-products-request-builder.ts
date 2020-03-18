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
import { TaskToken } from '../../models/common'
import { SimilarProductSearchRequest } from '../../models/similar-products'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeySimilaritiesProductsStatusRequestBuilder } from '../status/by-project-key-similarities-products-status-request-builder'

export class ByProjectKeySimilaritiesProductsRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public status(): ByProjectKeySimilaritiesProductsStatusRequestBuilder {
    return new ByProjectKeySimilaritiesProductsStatusRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  public post(methodArgs: {
    body: SimilarProductSearchRequest
    headers?: {
      [key: string]: string
    }
  }): ApiRequest<TaskToken> {
    return new ApiRequest<TaskToken>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/similarities/products',
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
