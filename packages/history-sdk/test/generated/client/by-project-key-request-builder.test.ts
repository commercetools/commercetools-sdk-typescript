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

import { RequestWithMethod } from '../../request-with-method'
import { ApiRoot } from '../../../src'

const apiRoot: ApiRoot = new ApiRoot({ executeRequest: null })

export function getRequestsWithMethodParameters(): RequestWithMethod[] {
  return [
    {
      method: 'get',
      uri: '/test_projectKey?resourceType=cart-discount',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get({ queryArgs: { resourceType: 'cart-discount' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey?date.from=date.from',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get({ queryArgs: { 'date.from': 'date.from' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey?date.to=date.to',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get({ queryArgs: { 'date.to': 'date.to' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey?limit=7',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey?offset=3',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey?userId=userId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get({ queryArgs: { userId: 'userId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey?type=ResourceCreated',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get({ queryArgs: { type: 'ResourceCreated' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey?clientId=clientId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get({ queryArgs: { clientId: 'clientId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey?resourceId=resourceId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get({ queryArgs: { resourceId: 'resourceId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey?source=source',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get({ queryArgs: { source: 'source' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey?changes=changes',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get({ queryArgs: { changes: 'changes' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey?customerId=customerId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get({ queryArgs: { customerId: 'customerId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey?expand=true',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get({ queryArgs: { expand: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyRequestBuilder Requests', () => {
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
