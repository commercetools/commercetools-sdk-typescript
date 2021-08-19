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
      uri: '/test_projectKey/test_resourceType?date.from=date.from',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { 'date.from': 'date.from' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?date.to=date.to',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { 'date.to': 'date.to' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?limit=7',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?offset=3',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?userId=userId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { userId: 'userId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?type=type',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { type: 'type' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?clientId=clientId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { clientId: 'clientId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?resourceId=resourceId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { resourceId: 'resourceId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?source=source',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { source: 'source' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?changes=changes',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { changes: 'changes' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?customerId=customerId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { customerId: 'customerId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?expand=true',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { expand: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyByResourceTypeRequestBuilder Requests', () => {
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
