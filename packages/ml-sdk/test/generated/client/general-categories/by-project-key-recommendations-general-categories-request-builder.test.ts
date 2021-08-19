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
      uri:
        '/test_projectKey/recommendations/general-categories?productImageUrl=productImageUrl&productName=productName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .recommendations()
        .generalCategories()
        .get({
          queryArgs: {
            productImageUrl: 'productImageUrl',
            productName: 'productName',
          },
        }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/recommendations/general-categories?productName=productName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .recommendations()
        .generalCategories()
        .get({ queryArgs: { productName: 'productName' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/recommendations/general-categories?limit=7&productName=productName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .recommendations()
        .generalCategories()
        .get({ queryArgs: { limit: 7, productName: 'productName' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/recommendations/general-categories?offset=3&productName=productName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .recommendations()
        .generalCategories()
        .get({ queryArgs: { offset: 3, productName: 'productName' } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/recommendations/general-categories?confidenceMin=0.7340351&productName=productName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .recommendations()
        .generalCategories()
        .get({
          queryArgs: { confidenceMin: 0.7340351, productName: 'productName' },
        }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/recommendations/general-categories?confidenceMax=0.30089796&productName=productName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .recommendations()
        .generalCategories()
        .get({
          queryArgs: { confidenceMax: 0.30089796, productName: 'productName' },
        }),
    },
  ]
}

describe('Testing ByProjectKeyRecommendationsGeneralCategoriesRequestBuilder Requests', () => {
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
