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
      uri:
        '/test_projectKey/orders/order-number=test_orderNumber?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .orders()
        .withOrderNumber({ orderNumber: 'test_orderNumber' })
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/orders/order-number=test_orderNumber',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .orders()
        .withOrderNumber({ orderNumber: 'test_orderNumber' })
        .get(),
    },
    {
      method: 'post',
      uri:
        '/test_projectKey/orders/order-number=test_orderNumber?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .orders()
        .withOrderNumber({ orderNumber: 'test_orderNumber' })
        .post({ body: null, headers: null, queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/orders/order-number=test_orderNumber',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .orders()
        .withOrderNumber({ orderNumber: 'test_orderNumber' })
        .post({ body: null, headers: null }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/orders/order-number=test_orderNumber?dataErasure=true&version=8',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .orders()
        .withOrderNumber({ orderNumber: 'test_orderNumber' })
        .delete({ queryArgs: { dataErasure: true, version: 8 } }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/orders/order-number=test_orderNumber?version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .orders()
        .withOrderNumber({ orderNumber: 'test_orderNumber' })
        .delete({ queryArgs: { version: 2 } }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/orders/order-number=test_orderNumber?expand=expand&version=8',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .orders()
        .withOrderNumber({ orderNumber: 'test_orderNumber' })
        .delete({ queryArgs: { expand: 'expand', version: 8 } }),
    },
  ]
}

describe('Testing ByProjectKeyOrdersOrderNumberByOrderNumberRequestBuilder Requests', () => {
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
