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

import { ClientRequest, ClientResponse, executeRequest } from './common-types'
import { buildRelativeUri } from './uri-utils'

export class ApiRequest<O> {
  private request: ClientRequest
  constructor(
    request: ClientRequest,
    private readonly requestExecutor: executeRequest
  ) {
    this.request = {
      ...request,
      uri: buildRelativeUri(request),
    }
  }

  public clientRequest(): ClientRequest {
    return this.request
  }

  public execute(): Promise<ClientResponse<O>> {
    return this.requestExecutor(this.request)
  }
}
