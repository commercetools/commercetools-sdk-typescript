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
      uri: '/test_projectKey/image-search?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .imageSearch()
        .post({ body: null, headers: null, queryArgs: { limit: 7 } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/image-search?offset=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .imageSearch()
        .post({ body: null, headers: null, queryArgs: { offset: 3 } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/image-search',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .imageSearch()
        .post({ body: null, headers: null }),
    },
  ]
}

describe('Testing ByProjectKeyImageSearchRequestBuilder Requests', () => {
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
