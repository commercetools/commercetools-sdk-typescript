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
      uri: '/test_projectKey/products/test_ID/product-selections?withTotal=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .productSelections()
        .get({ queryArgs: { withTotal: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/test_ID/product-selections?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .productSelections()
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/test_ID/product-selections?sort=sort',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .productSelections()
        .get({ queryArgs: { sort: 'sort' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/test_ID/product-selections?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .productSelections()
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/test_ID/product-selections?offset=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .productSelections()
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/test_ID/product-selections?where=where',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .productSelections()
        .get({ queryArgs: { where: 'where' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/test_ID/product-selections?var.varName=var.varName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .productSelections()
        .get({ queryArgs: { 'var.varName': 'var.varName' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/test_ID/product-selections',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .productSelections()
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyProductsByIDProductSelectionsRequestBuilder Requests', () => {
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
