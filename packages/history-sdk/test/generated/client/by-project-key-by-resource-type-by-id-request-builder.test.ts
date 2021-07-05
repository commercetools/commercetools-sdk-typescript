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
      uri: '/test_projectKey/test_resourceType/test_ID?date.from=date.from',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .withIDValue({ ID: 'test_ID' })
        .get({ queryArgs: { 'date.from': 'date.from' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType/test_ID?date.to=date.to',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .withIDValue({ ID: 'test_ID' })
        .get({ queryArgs: { 'date.to': 'date.to' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType/test_ID?limit=7',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .withIDValue({ ID: 'test_ID' })
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType/test_ID?offset=3',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .withIDValue({ ID: 'test_ID' })
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType/test_ID?userId=userId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .withIDValue({ ID: 'test_ID' })
        .get({ queryArgs: { userId: 'userId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType/test_ID?type=type',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .withIDValue({ ID: 'test_ID' })
        .get({ queryArgs: { type: 'type' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType/test_ID?clientId=clientId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .withIDValue({ ID: 'test_ID' })
        .get({ queryArgs: { clientId: 'clientId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType/test_ID?source=source',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .withIDValue({ ID: 'test_ID' })
        .get({ queryArgs: { source: 'source' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType/test_ID?changes=changes',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .withIDValue({ ID: 'test_ID' })
        .get({ queryArgs: { changes: 'changes' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType/test_ID?customerId=customerId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .withIDValue({ ID: 'test_ID' })
        .get({ queryArgs: { customerId: 'customerId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType/test_ID?expand=true',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .withIDValue({ ID: 'test_ID' })
        .get({ queryArgs: { expand: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType/test_ID',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .withIDValue({ ID: 'test_ID' })
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyByResourceTypeByIDRequestBuilder Requests', () => {
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
