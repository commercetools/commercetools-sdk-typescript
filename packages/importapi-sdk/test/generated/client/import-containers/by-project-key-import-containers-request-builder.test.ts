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
      method: 'post',
      uri: '/test_projectKey/import-containers',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .importContainers()
        .post({ body: null, headers: null }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/import-containers?limit=7',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .importContainers()
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/import-containers?offset=3',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .importContainers()
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/import-containers?sort=sort',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .importContainers()
        .get({ queryArgs: { sort: 'sort' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/import-containers',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .importContainers()
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyImportContainersRequestBuilder Requests', () => {
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
