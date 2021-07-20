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
      method: 'get',
      uri: '/test_projectKey/me/carts/key=test_key?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .withKey({ key: 'test_key' })
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/me/carts/key=test_key',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .withKey({ key: 'test_key' })
        .get(),
    },
    {
      method: 'post',
      uri: '/test_projectKey/me/carts/key=test_key?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .withKey({ key: 'test_key' })
        .post({ body: null, headers: null, queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/me/carts/key=test_key',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .withKey({ key: 'test_key' })
        .post({ body: null, headers: null }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/me/carts/key=test_key?version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .withKey({ key: 'test_key' })
        .delete({ queryArgs: { version: 2 } }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/me/carts/key=test_key?expand=expand&version=6',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .withKey({ key: 'test_key' })
        .delete({ queryArgs: { expand: 'expand', version: 6 } }),
    },
  ]
}

describe('Testing ByProjectKeyMeCartsKeyByKeyRequestBuilder Requests', () => {
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
