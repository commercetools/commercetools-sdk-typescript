/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { RequestWithMethod } from '../../../request-with-method'
import { ApiRoot } from '../../../../src'

const apiRoot: ApiRoot = new ApiRoot({ executeRequest: null })

export function getRequestsWithMethodParameters(): RequestWithMethod[] {
  return [
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/me?sort=sort',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .me()
        .get({ queryArgs: { sort: 'sort' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/me?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .me()
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/me?offset=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .me()
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/me?withTotal=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .me()
        .get({ queryArgs: { withTotal: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/me?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .me()
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/me?where=where',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .me()
        .get({ queryArgs: { where: 'where' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/me?var.varName=var.varName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .me()
        .get({ queryArgs: { 'var.varName': 'var.varName' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/in-store/key=test_storeKey/me',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .me()
        .get(),
    },
    {
      method: 'post',
      uri: '/test_projectKey/in-store/key=test_storeKey/me',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .me()
        .post({ body: null, headers: null }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/in-store/key=test_storeKey/me?version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .inStoreKeyWithStoreKeyValue({ storeKey: 'test_storeKey' })
        .me()
        .delete({ queryArgs: { version: 2 } }),
    },
  ]
}

describe('Testing ByProjectKeyInStoreKeyByStoreKeyMeRequestBuilder Requests', () => {
  const requestsToTest = getRequestsWithMethodParameters()
  requestsToTest.forEach((rm) => {
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
