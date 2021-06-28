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
        '/test_projectKey/shipping-methods/matching-location?country=country',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .shippingMethods()
        .matchingLocation()
        .get({ queryArgs: { country: 'country' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/shipping-methods/matching-location?state=state&country=country',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .shippingMethods()
        .matchingLocation()
        .get({ queryArgs: { state: 'state', country: 'country' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/shipping-methods/matching-location?currency=currency&country=country',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .shippingMethods()
        .matchingLocation()
        .get({ queryArgs: { currency: 'currency', country: 'country' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/shipping-methods/matching-location?expand=expand&country=country',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .shippingMethods()
        .matchingLocation()
        .get({ queryArgs: { expand: 'expand', country: 'country' } }),
    },
  ]
}

describe('Testing ByProjectKeyShippingMethodsMatchingLocationRequestBuilder Requests', () => {
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
