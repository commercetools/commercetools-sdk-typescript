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
      uri: '/test_projectKey/product-projections/suggest?searchKeywords.locale=searchKeywords.locale',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .suggest()
        .get({
          queryArgs: { 'searchKeywords.locale': 'searchKeywords.locale' },
        }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/suggest?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .suggest()
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/suggest?fuzzy=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .suggest()
        .get({ queryArgs: { fuzzy: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/suggest?staged=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .suggest()
        .get({ queryArgs: { staged: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/suggest',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .suggest()
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyProductProjectionsSuggestRequestBuilder Requests', () => {
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
