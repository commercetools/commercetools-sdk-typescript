import { createAuthMiddlewareForRefreshTokenFlow } from '../../src/sdk-middleware-auth'
import authMiddlewareBase from '../../src/sdk-middleware-auth/base-auth-flow'

jest.mock('../../src/sdk-middleware-auth/base-auth-flow')

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
    },
    refreshToken: 'foobar123@#%=',
    ...options,
  }
}

describe('Refresh Token Flow', () => {
  afterAll(() => {
    jest.unmock('../../src/sdk-middleware-auth/base-auth-flow')
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
          url: 'https://auth.europe-west1.gcp.commercetools.com/oauth/token',
          basicAuth: 'MTIzOnNlY3JldA==',
          body: 'grant_type=refresh_token&refresh_token=foobar123%40%23%25%3D',
        })
        expect(authMiddlewareBase).toHaveBeenCalledTimes(1)
        resolve(null)
        jest.unmock('../../src/sdk-middleware-auth/base-auth-flow')
      }
      const middlewareOptions = createTestMiddlewareOptions(null)
      const authMiddleware = createAuthMiddlewareForRefreshTokenFlow(
        middlewareOptions
      ) as any

      authMiddleware(next)(request, response)
    }))
})
