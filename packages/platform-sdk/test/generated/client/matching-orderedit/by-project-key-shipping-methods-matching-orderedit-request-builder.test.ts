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
      uri: '/test_projectKey/shipping-methods/matching-orderedit?orderEditId=orderEditId&country=country',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .shippingMethods()
        .matchingOrderedit()
        .get({ queryArgs: { orderEditId: 'orderEditId', country: 'country' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/shipping-methods/matching-orderedit?country=country&orderEditId=orderEditId',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .shippingMethods()
        .matchingOrderedit()
        .get({ queryArgs: { country: 'country', orderEditId: 'orderEditId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/shipping-methods/matching-orderedit?state=state&orderEditId=orderEditId&country=country',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .shippingMethods()
        .matchingOrderedit()
        .get({
          queryArgs: {
            state: 'state',
            orderEditId: 'orderEditId',
            country: 'country',
          },
        }),
    },
  ]
}

describe('Testing ByProjectKeyShippingMethodsMatchingOrdereditRequestBuilder Requests', () => {
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
