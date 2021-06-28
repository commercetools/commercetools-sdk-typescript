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
      method: 'post',
      uri: '/test_projectKey/product-projections/search',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .post({ body: null, headers: null }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?fuzzy=true&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({ queryArgs: { fuzzy: true, markMatchingVariants: true } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?fuzzyLevel=0.110830665&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({
          queryArgs: { fuzzyLevel: 0.110830665, markMatchingVariants: true },
        }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({ queryArgs: { markMatchingVariants: true } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?staged=true&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({ queryArgs: { staged: true, markMatchingVariants: true } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?filter=filter&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({ queryArgs: { filter: 'filter', markMatchingVariants: true } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?filter.facets=filter.facets&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({
          queryArgs: {
            'filter.facets': 'filter.facets',
            markMatchingVariants: true,
          },
        }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?filter.query=filter.query&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({
          queryArgs: {
            'filter.query': 'filter.query',
            markMatchingVariants: true,
          },
        }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?facet=facet&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({ queryArgs: { facet: 'facet', markMatchingVariants: true } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?text.locale=text.locale&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({
          queryArgs: {
            'text.locale': 'text.locale',
            markMatchingVariants: true,
          },
        }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?sort=sort&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({ queryArgs: { sort: 'sort', markMatchingVariants: true } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?limit=7&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({ queryArgs: { limit: 7, markMatchingVariants: true } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?offset=3&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({ queryArgs: { offset: 3, markMatchingVariants: true } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?withTotal=true&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({ queryArgs: { withTotal: true, markMatchingVariants: true } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?priceCurrency=priceCurrency&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({
          queryArgs: {
            priceCurrency: 'priceCurrency',
            markMatchingVariants: true,
          },
        }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?priceCountry=priceCountry&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({
          queryArgs: {
            priceCountry: 'priceCountry',
            markMatchingVariants: true,
          },
        }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?priceCustomerGroup=priceCustomerGroup&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({
          queryArgs: {
            priceCustomerGroup: 'priceCustomerGroup',
            markMatchingVariants: true,
          },
        }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?priceChannel=priceChannel&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({
          queryArgs: {
            priceChannel: 'priceChannel',
            markMatchingVariants: true,
          },
        }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?localeProjection=localeProjection&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({
          queryArgs: {
            localeProjection: 'localeProjection',
            markMatchingVariants: true,
          },
        }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?storeProjection=storeProjection&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({
          queryArgs: {
            storeProjection: 'storeProjection',
            markMatchingVariants: true,
          },
        }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/product-projections/search?expand=expand&markMatchingVariants=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .productProjections()
        .search()
        .get({ queryArgs: { expand: 'expand', markMatchingVariants: true } }),
    },
  ]
}

describe('Testing ByProjectKeyProductProjectionsSearchRequestBuilder Requests', () => {
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
