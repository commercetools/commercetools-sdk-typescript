import { createAuthMiddlewareForPasswordFlow } from '../src'

import authMiddlewareBase from '../src/base-auth-flow'

/**
 * required to be at the root because Jest hoists it above all requires,
 * if in any method like `beforeAll`,
 * it will be hoisted within the scope of that method
 */
jest.mock('../src/base-auth-flow')

function createTestRequest(options) {
  return {
    url: '',
    method: 'GET',
    body: null,
    headers: {},
    ...options,
  }
}

function createTestMiddlewareOptions(options) {
  return {
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey: 'foo',
    credentials: {
      clientId: '123',
      clientSecret: 'secret',
      user: {
        username: 'foobar',
        password: 'verysecurepassword',
      },
    },
    ...options,
  }
}

describe('Password Flow', () => {
  afterAll(() => {
    jest.unmock('../src/base-auth-flow')
  })
  test('should call the base-auth-flow method with the right params', () =>
    new Promise((resolve, reject) => {
      const _authMiddlewareBase = authMiddlewareBase as any
      _authMiddlewareBase.mockImplementation((params, next) => {
        next(params) // makes it easy to test what was passed in
      })
      const request = createTestRequest(null)
      const response = {
        resolve,
        reject,
      }
      const next = actualParams => {
        expect(actualParams).toMatchObject({
          request,
          response,
          pendingTasks: [],
          url:
            'https://auth.europe-west1.gcp.commercetools.com/oauth/foo/customers/token',
          basicAuth: 'MTIzOnNlY3JldA==',
        })
        expect(authMiddlewareBase).toHaveBeenCalledTimes(1)
        jest.unmock('../src/base-auth-flow')
        resolve(null)
      }
      const middlewareOptions = createTestMiddlewareOptions(null)
      const authMiddleware = createAuthMiddlewareForPasswordFlow(
        middlewareOptions
      ) as any

      authMiddleware(next)(request, response)
    }))
})
