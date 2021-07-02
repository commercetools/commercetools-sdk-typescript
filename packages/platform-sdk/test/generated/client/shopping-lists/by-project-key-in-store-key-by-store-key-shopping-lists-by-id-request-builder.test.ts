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
        '/test_projectKey/in-store/key=test_storeKey/shopping-lists/test_ID?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/shopping-lists/test_ID',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .withId({ ID: 'test_ID' })
        .get(),
    },
    {
      method: 'post',
      uri:
        '/test_projectKey/in-store/key=test_storeKey/shopping-lists/test_ID?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .withId({ ID: 'test_ID' })
        .post({ body: null, headers: null, queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/in-store/key=test_storeKey/shopping-lists/test_ID',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .withId({ ID: 'test_ID' })
        .post({ body: null, headers: null }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/in-store/key=test_storeKey/shopping-lists/test_ID?dataErasure=true&version=9',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .withId({ ID: 'test_ID' })
        .delete({ queryArgs: { dataErasure: true, version: 9 } }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/in-store/key=test_storeKey/shopping-lists/test_ID?version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .withId({ ID: 'test_ID' })
        .delete({ queryArgs: { version: 2 } }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/in-store/key=test_storeKey/shopping-lists/test_ID?expand=expand&version=9',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .shoppingLists()
        .withId({ ID: 'test_ID' })
        .delete({ queryArgs: { expand: 'expand', version: 9 } }),
    },
  ]
}

describe('Testing ByProjectKeyInStoreKeyByStoreKeyShoppingListsByIDRequestBuilder Requests', () => {
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
