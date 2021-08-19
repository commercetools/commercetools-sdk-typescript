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
      uri: '/test_projectKey/in-store/key=test_storeKey/orders?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .orders()
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/orders?sort=sort',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .orders()
        .get({ queryArgs: { sort: 'sort' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/orders?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .orders()
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/orders?offset=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .orders()
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/orders?withTotal=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .orders()
        .get({ queryArgs: { withTotal: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/orders?where=where',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .orders()
        .get({ queryArgs: { where: 'where' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/in-store/key=test_storeKey/orders?var.varName=var.varName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .orders()
        .get({ queryArgs: { 'var.varName': 'var.varName' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/orders',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .orders()
        .get(),
    },
    {
      method: 'post',
      uri: '/test_projectKey/in-store/key=test_storeKey/orders?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .orders()
        .post({ body: null, headers: null, queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/in-store/key=test_storeKey/orders',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .orders()
        .post({ body: null, headers: null }),
    },
  ]
}

describe('Testing ByProjectKeyInStoreKeyByStoreKeyOrdersRequestBuilder Requests', () => {
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
