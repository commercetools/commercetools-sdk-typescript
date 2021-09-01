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
      uri: '/test_projectKey/product-projections/test_ID?staged=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { staged: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/test_ID?priceCurrency=priceCurrency',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { priceCurrency: 'priceCurrency' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/test_ID?priceCountry=priceCountry',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { priceCountry: 'priceCountry' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/test_ID?priceCustomerGroup=priceCustomerGroup',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { priceCustomerGroup: 'priceCustomerGroup' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/test_ID?priceChannel=priceChannel',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { priceChannel: 'priceChannel' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/test_ID?localeProjection=localeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { localeProjection: 'localeProjection' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/test_ID?storeProjection=storeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { storeProjection: 'storeProjection' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/test_ID?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/product-projections/test_ID',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .withId({ ID: 'test_ID' })
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyProductProjectionsByIDRequestBuilder Requests', () => {
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
