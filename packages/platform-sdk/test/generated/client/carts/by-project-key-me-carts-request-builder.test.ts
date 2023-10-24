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
      uri: '/test_projectKey/me/carts?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/me/carts?sort=sort',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .get({ queryArgs: { sort: 'sort' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/me/carts?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/me/carts?offset=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/me/carts?withTotal=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .get({ queryArgs: { withTotal: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/me/carts?where=where',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .get({ queryArgs: { where: 'where' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/me/carts?var.varName=var.varName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .get({ queryArgs: { 'var.varName': 'var.varName' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/me/carts',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .get(),
    },
    {
      method: 'head',
      uri: '/test_projectKey/me/carts?where=where',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .head({ queryArgs: { where: 'where' } }),
    },
    {
      method: 'head',
      uri: '/test_projectKey/me/carts',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .head(),
    },
    {
      method: 'post',
      uri: '/test_projectKey/me/carts?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .post({ body: null, headers: null, queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/me/carts',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .me()
        .carts()
        .post({ body: null, headers: null }),
    },
  ]
}

describe('Testing ByProjectKeyMeCartsRequestBuilder Requests', () => {
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
