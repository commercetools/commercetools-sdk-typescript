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
      uri:
        '/test_projectKey/products/key=test_key?priceCustomerGroup=priceCustomerGroup',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .get({ queryArgs: { priceCustomerGroup: 'priceCustomerGroup' } }),
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
      uri:
        '/test_projectKey/products/key=test_key?localeProjection=localeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .get({ queryArgs: { localeProjection: 'localeProjection' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/products/key=test_key?storeProjection=storeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .get({ queryArgs: { storeProjection: 'storeProjection' } }),
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
      uri:
        '/test_projectKey/products/key=test_key?priceCustomerGroup=priceCustomerGroup',
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
      uri:
        '/test_projectKey/products/key=test_key?localeProjection=localeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .post({
          body: null,
          headers: null,
          queryArgs: { localeProjection: 'localeProjection' },
        }),
    },
    {
      method: 'post',
      uri:
        '/test_projectKey/products/key=test_key?storeProjection=storeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .post({
          body: null,
          headers: null,
          queryArgs: { storeProjection: 'storeProjection' },
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
      uri:
        '/test_projectKey/products/key=test_key?priceCurrency=priceCurrency&version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .delete({ queryArgs: { priceCurrency: 'priceCurrency', version: 2 } }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/products/key=test_key?priceCountry=priceCountry&version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .delete({ queryArgs: { priceCountry: 'priceCountry', version: 2 } }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/products/key=test_key?priceCustomerGroup=priceCustomerGroup&version=2',
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
      uri:
        '/test_projectKey/products/key=test_key?priceChannel=priceChannel&version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .delete({ queryArgs: { priceChannel: 'priceChannel', version: 2 } }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/products/key=test_key?localeProjection=localeProjection&version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .delete({
          queryArgs: { localeProjection: 'localeProjection', version: 2 },
        }),
    },
    {
      method: 'delete',
      uri:
        '/test_projectKey/products/key=test_key?storeProjection=storeProjection&version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withKey({ key: 'test_key' })
        .delete({
          queryArgs: { storeProjection: 'storeProjection', version: 2 },
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
