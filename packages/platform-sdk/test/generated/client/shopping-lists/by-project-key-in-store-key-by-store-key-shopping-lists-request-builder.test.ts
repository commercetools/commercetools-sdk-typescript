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
        '/test_projectKey/in-store/key=test_storeKey/shopping-lists?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/in-store/key=test_storeKey/shopping-lists?sort=sort',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .get({ queryArgs: { sort: 'sort' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/shopping-lists?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/in-store/key=test_storeKey/shopping-lists?offset=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/in-store/key=test_storeKey/shopping-lists?withTotal=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .get({ queryArgs: { withTotal: true } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/in-store/key=test_storeKey/shopping-lists?where=where',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .get({ queryArgs: { where: 'where' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/in-store/key=test_storeKey/shopping-lists?var.varName=var.varName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .get({ queryArgs: { 'var.varName': 'var.varName' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/shopping-lists',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .get(),
    },
    {
      method: 'post',
      uri:
        '/test_projectKey/in-store/key=test_storeKey/shopping-lists?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .post({ body: null, headers: null, queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/in-store/key=test_storeKey/shopping-lists',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .post({ body: null, headers: null }),
    },
  ]
}

describe('Testing ByProjectKeyInStoreKeyByStoreKeyShoppingListsRequestBuilder Requests', () => {
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
