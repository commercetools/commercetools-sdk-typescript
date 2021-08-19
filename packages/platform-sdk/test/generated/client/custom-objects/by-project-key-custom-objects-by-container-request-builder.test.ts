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
      uri: '/test_projectKey/custom-objects/test_container?where=where',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .customObjects()
        .withContainer({ container: 'test_container' })
        .get({ queryArgs: { where: 'where' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/custom-objects/test_container?var.varName=var.varName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .customObjects()
        .withContainer({ container: 'test_container' })
        .get({ queryArgs: { 'var.varName': 'var.varName' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/custom-objects/test_container?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .customObjects()
        .withContainer({ container: 'test_container' })
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/custom-objects/test_container',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .customObjects()
        .withContainer({ container: 'test_container' })
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyCustomObjectsByContainerRequestBuilder Requests', () => {
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
