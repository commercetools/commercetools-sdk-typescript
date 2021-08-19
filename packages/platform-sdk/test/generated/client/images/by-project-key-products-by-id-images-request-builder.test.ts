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
      uri: '/test_projectKey/products/test_ID/images?filename=filename',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .images()
        .post({
          body: null,
          headers: null,
          queryArgs: { filename: 'filename' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/test_ID/images?variant=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .images()
        .post({ body: null, headers: null, queryArgs: { variant: 7 } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/test_ID/images?sku=sku',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .images()
        .post({ body: null, headers: null, queryArgs: { sku: 'sku' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/test_ID/images?staged=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .images()
        .post({ body: null, headers: null, queryArgs: { staged: true } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products/test_ID/images',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .withId({ ID: 'test_ID' })
        .images()
        .post({ body: null, headers: null }),
    },
  ]
}

describe('Testing ByProjectKeyProductsByIDImagesRequestBuilder Requests', () => {
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
