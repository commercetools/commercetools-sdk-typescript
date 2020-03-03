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
import { executeRequest } from '../shared/utils/common-types'
import { ByProjectKeyRequestBuilder } from './by-project-key-request-builder'

export class ApiRoot {
  private executeRequest: executeRequest
  private baseUri: string

  constructor(args: { executeRequest: executeRequest; baseUri?: string }) {
    this.executeRequest = args.executeRequest
    this.baseUri =
      args.baseUri ?? 'https://ml-{region}.europe-west1.gcp.commercetools.com'
  }

  public withProjectKey(childPathArgs: {
    projectKey: string
  }): ByProjectKeyRequestBuilder {
    return new ByProjectKeyRequestBuilder({
      pathArgs: {
        ...childPathArgs,
      },
      executeRequest: this.executeRequest,
      baseUri: this.baseUri,
    })
  }
}
