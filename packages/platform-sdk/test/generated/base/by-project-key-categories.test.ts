import { RequestWithMethod } from '../../request-with-method'
import { ApiRoot } from '../../../src'

const apiRoot: ApiRoot = new ApiRoot({ executeRequest: null })
const projectKey: string = 'test_projectKey'

export function getRequestsWithMethodParameters(): RequestWithMethod[] {
  return [
    {
      method: 'GET',
      uri: '/test_projectKey/categories?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: projectKey })
        .categories()
        .get({
          queryArgs: {
            expand: 'expand',
          },
        }),
    },
    {
      method: 'GET',
      uri: '/test_projectKey/categories?sort=sort',
      request: apiRoot
        .withProjectKey({ projectKey: projectKey })
        .categories()
        .get({
          queryArgs: {
            sort: 'sort',
          },
        }),
    },
    {
      method: 'GET',
      uri: '/test_projectKey/categories?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: projectKey })
        .categories()
        .get({
          queryArgs: {
            limit: 7,
          },
        }),
    },
    {
      method: 'POST',
      uri: '/test_projectKey/categories?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: projectKey })
        .categories()
        .post({
          body: null,
          queryArgs: {
            expand: 'expand',
          },
        }),
    },
  ]
}

describe('Testing ByProjectKeyCategories Requests', () => {
  const requestsToTest = getRequestsWithMethodParameters()
  requestsToTest.forEach(rm => {
    test(`Testing => request method: ${rm.method} and url: ${rm.uri}`, async () => {
      expect(rm.method).toBe(rm.request.clientRequest().method)
      expect(rm.uri).toBe(rm.request.clientRequest().uri)
    })
  })
})
