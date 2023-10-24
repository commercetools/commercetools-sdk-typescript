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
      uri: '/test_projectKey/staged-quotes?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .stagedQuotes()
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/staged-quotes?sort=sort',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .stagedQuotes()
        .get({ queryArgs: { sort: 'sort' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/staged-quotes?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .stagedQuotes()
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/staged-quotes?offset=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .stagedQuotes()
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/staged-quotes?withTotal=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .stagedQuotes()
        .get({ queryArgs: { withTotal: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/staged-quotes?where=where',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .stagedQuotes()
        .get({ queryArgs: { where: 'where' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/staged-quotes?var.varName=var.varName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .stagedQuotes()
        .get({ queryArgs: { 'var.varName': 'var.varName' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/staged-quotes',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .stagedQuotes()
        .get(),
    },
    {
      method: 'head',
      uri: '/test_projectKey/staged-quotes?where=where',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .stagedQuotes()
        .head({ queryArgs: { where: 'where' } }),
    },
    {
      method: 'head',
      uri: '/test_projectKey/staged-quotes',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .stagedQuotes()
        .head(),
    },
    {
      method: 'post',
      uri: '/test_projectKey/staged-quotes?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .stagedQuotes()
        .post({ body: null, headers: null, queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/staged-quotes',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .stagedQuotes()
        .post({ body: null, headers: null }),
    },
  ]
}

describe('Testing ByProjectKeyStagedQuotesRequestBuilder Requests', () => {
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
