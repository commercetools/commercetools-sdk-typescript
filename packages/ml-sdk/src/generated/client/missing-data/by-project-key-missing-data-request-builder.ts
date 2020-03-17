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
import { ByProjectKeyMissingDataAttributesRequestBuilder } from '../attributes/by-project-key-missing-data-attributes-request-builder'
import { ByProjectKeyMissingDataImagesRequestBuilder } from '../images/by-project-key-missing-data-images-request-builder'

export class ByProjectKeyMissingDataRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public attributes(): ByProjectKeyMissingDataAttributesRequestBuilder {
    return new ByProjectKeyMissingDataAttributesRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public images(): ByProjectKeyMissingDataImagesRequestBuilder {
    return new ByProjectKeyMissingDataImagesRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
}
