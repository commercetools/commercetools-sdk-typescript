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
        '/test_projectKey/shipping-methods/matching-orderedit?orderEditId=orderEditId&country=country',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .shippingMethods()
        .matchingOrderedit()
        .get({ queryArgs: { orderEditId: 'orderEditId', country: 'country' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/shipping-methods/matching-orderedit?country=country&orderEditId=orderEditId',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .shippingMethods()
        .matchingOrderedit()
        .get({ queryArgs: { country: 'country', orderEditId: 'orderEditId' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/shipping-methods/matching-orderedit?state=state&orderEditId=orderEditId&country=country',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .shippingMethods()
        .matchingOrderedit()
        .get({
          queryArgs: {
            state: 'state',
            orderEditId: 'orderEditId',
            country: 'country',
          },
        }),
    },
  ]
}

describe('Testing ByProjectKeyShippingMethodsMatchingOrdereditRequestBuilder Requests', () => {
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
