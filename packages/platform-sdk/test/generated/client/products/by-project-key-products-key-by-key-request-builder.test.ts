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
      uri: '/test_projectKey/products/key=test_key?priceCurrency=priceCurrency',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .get({ queryArgs: { priceCurrency: 'priceCurrency' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/key=test_key?priceCountry=priceCountry',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .get({ queryArgs: { priceCountry: 'priceCountry' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/key=test_key?priceCustomerGroup=priceCustomerGroup',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .get({ queryArgs: { priceCustomerGroup: 'priceCustomerGroup' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/key=test_key?priceCustomerGroupAssignments=priceCustomerGroupAssignments',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .get({
          queryArgs: {
            priceCustomerGroupAssignments: 'priceCustomerGroupAssignments',
          },
        }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/key=test_key?priceChannel=priceChannel',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .get({ queryArgs: { priceChannel: 'priceChannel' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/key=test_key?priceRecurrencePolicy=priceRecurrencePolicy',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .get({ queryArgs: { priceRecurrencePolicy: 'priceRecurrencePolicy' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/key=test_key?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/key=test_key',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .get(),
    },
    {
      method: 'head',
      uri: '/test_projectKey/products/key=test_key',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .head(),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/key=test_key?priceCurrency=priceCurrency',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .post({
          body: null,
          headers: null,
          queryArgs: { priceCurrency: 'priceCurrency' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/key=test_key?priceCountry=priceCountry',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .post({
          body: null,
          headers: null,
          queryArgs: { priceCountry: 'priceCountry' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/key=test_key?priceCustomerGroup=priceCustomerGroup',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .post({
          body: null,
          headers: null,
          queryArgs: { priceCustomerGroup: 'priceCustomerGroup' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/key=test_key?priceCustomerGroupAssignments=priceCustomerGroupAssignments',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .post({
          body: null,
          headers: null,
          queryArgs: {
            priceCustomerGroupAssignments: 'priceCustomerGroupAssignments',
          },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/key=test_key?priceChannel=priceChannel',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .post({
          body: null,
          headers: null,
          queryArgs: { priceChannel: 'priceChannel' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/key=test_key?priceRecurrencePolicy=priceRecurrencePolicy',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .post({
          body: null,
          headers: null,
          queryArgs: { priceRecurrencePolicy: 'priceRecurrencePolicy' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/key=test_key?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .post({ body: null, headers: null, queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/key=test_key',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .post({ body: null, headers: null }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/products/key=test_key?priceCurrency=priceCurrency&version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .delete({ queryArgs: { priceCurrency: 'priceCurrency', version: 2 } }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/products/key=test_key?priceCountry=priceCountry&version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .delete({ queryArgs: { priceCountry: 'priceCountry', version: 2 } }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/products/key=test_key?priceCustomerGroup=priceCustomerGroup&version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .delete({
          queryArgs: { priceCustomerGroup: 'priceCustomerGroup', version: 2 },
        }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/products/key=test_key?priceCustomerGroupAssignments=priceCustomerGroupAssignments&version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .delete({
          queryArgs: {
            priceCustomerGroupAssignments: 'priceCustomerGroupAssignments',
            version: 2,
          },
        }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/products/key=test_key?priceChannel=priceChannel&version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .delete({ queryArgs: { priceChannel: 'priceChannel', version: 2 } }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/products/key=test_key?priceRecurrencePolicy=priceRecurrencePolicy&version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .delete({
          queryArgs: {
            priceRecurrencePolicy: 'priceRecurrencePolicy',
            version: 2,
          },
        }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/products/key=test_key?version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .delete({ queryArgs: { version: 2 } }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/products/key=test_key?expand=expand&version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .delete({ queryArgs: { expand: 'expand', version: 2 } }),
    },
  ]
}

describe('Testing ByProjectKeyProductsKeyByKeyRequestBuilder Requests', () => {
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
