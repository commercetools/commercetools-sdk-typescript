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
      uri: '/test_projectKey/products/test_ID?priceCurrency=priceCurrency',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { priceCurrency: 'priceCurrency' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/test_ID?priceCountry=priceCountry',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { priceCountry: 'priceCountry' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/products/test_ID?priceCustomerGroup=priceCustomerGroup',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { priceCustomerGroup: 'priceCustomerGroup' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/test_ID?priceChannel=priceChannel',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { priceChannel: 'priceChannel' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/products/test_ID?localeProjection=localeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { localeProjection: 'localeProjection' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/test_ID?storeProjection=storeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { storeProjection: 'storeProjection' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/test_ID?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products/test_ID',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .get(),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/test_ID?priceCurrency=priceCurrency',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .post({
          body: null,
          headers: null,
          queryArgs: { priceCurrency: 'priceCurrency' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/test_ID?priceCountry=priceCountry',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .post({
          body: null,
          headers: null,
          queryArgs: { priceCountry: 'priceCountry' },
        }),
    },
    {
      method: 'post',
      uri:
        '/test_projectKey/products/test_ID?priceCustomerGroup=priceCustomerGroup',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .post({
          body: null,
          headers: null,
          queryArgs: { priceCustomerGroup: 'priceCustomerGroup' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/test_ID?priceChannel=priceChannel',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .post({
          body: null,
          headers: null,
          queryArgs: { priceChannel: 'priceChannel' },
        }),
    },
    {
      method: 'post',
      uri:
        '/test_projectKey/products/test_ID?localeProjection=localeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .post({
          body: null,
          headers: null,
          queryArgs: { localeProjection: 'localeProjection' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/test_ID?storeProjection=storeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .post({
          body: null,
          headers: null,
          queryArgs: { storeProjection: 'storeProjection' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/test_ID?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .post({ body: null, headers: null, queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/test_ID',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .post({ body: null, headers: null }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/products/test_ID?priceCurrency=priceCurrency&version=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .delete({ queryArgs: { priceCurrency: 'priceCurrency', version: 3 } }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/products/test_ID?priceCountry=priceCountry&version=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .delete({ queryArgs: { priceCountry: 'priceCountry', version: 3 } }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/products/test_ID?priceCustomerGroup=priceCustomerGroup&version=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .delete({
          queryArgs: { priceCustomerGroup: 'priceCustomerGroup', version: 3 },
        }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/products/test_ID?priceChannel=priceChannel&version=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .delete({ queryArgs: { priceChannel: 'priceChannel', version: 3 } }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/products/test_ID?localeProjection=localeProjection&version=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .delete({
          queryArgs: { localeProjection: 'localeProjection', version: 3 },
        }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/products/test_ID?storeProjection=storeProjection&version=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .delete({
          queryArgs: { storeProjection: 'storeProjection', version: 3 },
        }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/products/test_ID?version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .delete({ queryArgs: { version: 2 } }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/products/test_ID?expand=expand&version=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .delete({ queryArgs: { expand: 'expand', version: 3 } }),
    },
  ]
}

describe('Testing ByProjectKeyProductsByIDRequestBuilder Requests', () => {
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
