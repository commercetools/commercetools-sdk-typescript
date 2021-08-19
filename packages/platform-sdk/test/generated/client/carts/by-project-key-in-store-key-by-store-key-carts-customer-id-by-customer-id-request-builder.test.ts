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
        '/test_projectKey/in-store/key=test_storeKey/carts/customer-id=test_customerId?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .carts()
        .withCustomerId({ customerId: 'test_customerId' })
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/in-store/key=test_storeKey/carts/customer-id=test_customerId',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .carts()
        .withCustomerId({ customerId: 'test_customerId' })
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyInStoreKeyByStoreKeyCartsCustomerIdByCustomerIdRequestBuilder Requests', () => {
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
