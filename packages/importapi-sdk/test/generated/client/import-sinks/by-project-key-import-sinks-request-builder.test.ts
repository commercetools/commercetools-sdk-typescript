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

import { RequestWithMethod } from '../../../request-with-method'
import { ApiRoot } from '../../../../src'

const apiRoot: ApiRoot = new ApiRoot({ executeRequest: null })

export function getRequestsWithMethodParameters(): RequestWithMethod[] {
  return [
    {
      method: 'post',
      uri: '/test_projectKey/import-sinks',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .importSinks()
        .post({ body: null, headers: null }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/import-sinks?limit=0.26748633',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .importSinks()
        .get({ queryArgs: { limit: 0.26748633 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/import-sinks?offset=0.7475848',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .importSinks()
        .get({ queryArgs: { offset: 0.7475848 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/import-sinks?sort=sort',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .importSinks()
        .get({ queryArgs: { sort: 'sort' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/import-sinks',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .importSinks()
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyImportSinksRequestBuilder Requests', () => {
  const requestsToTest = getRequestsWithMethodParameters()
  requestsToTest.forEach(rm => {
    test(`Testing => request method: ${rm.method} and url: ${rm.uri}`, async () => {
      expect(rm.method.toLowerCase()).toBe(
        rm.request.clientRequest().method.toLowerCase()
      )
      expect(rm.uri.toLowerCase()).toBe(
        rm.request.clientRequest().uri.toLowerCase()
      )
    })
  })
})
