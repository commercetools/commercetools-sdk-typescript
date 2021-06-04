import { createAuthMiddlewareForClientCredentialsFlow } from '../src'
import authMiddlewareBase from '../src/base-auth-flow'

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
    },
    ...options,
  }
}

describe('Client Crentials Flow', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })
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
          url: 'https://auth.europe-west1.gcp.commercetools.com/oauth/token',
          basicAuth: 'MTIzOnNlY3JldA==',
          tokenCacheKey: {
            host: 'https://auth.europe-west1.gcp.commercetools.com',
            projectKey: 'foo',
            clientId: '123',
          },
        })
        expect(authMiddlewareBase).toHaveBeenCalledTimes(1)
        resolve(null)
        jest.unmock('../src/base-auth-flow')
      }
      const middlewareOptions = createTestMiddlewareOptions(null)
      const authMiddleware = createAuthMiddlewareForClientCredentialsFlow(
        middlewareOptions
      ) as any

      authMiddleware(next)(request, response)
    }))

  test('should call the base-auth-flow method with the optional params', () =>
    new Promise((resolve, reject) => {
      const fetch = { get: 'get' }
      const tokenCache = { token: 'cache' }
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
          fetch,
          tokenCache,
          tokenCacheKey: {
            host: 'https://auth.europe-west1.gcp.commercetools.com',
            projectKey: 'foo',
            clientId: '123',
          },
        })
        expect(authMiddlewareBase).toHaveBeenCalledTimes(1)
        resolve(null)
        jest.unmock('../src/base-auth-flow')
      }
      const middlewareOptions = createTestMiddlewareOptions({
        fetch,
        tokenCache,
      })
      const authMiddleware = createAuthMiddlewareForClientCredentialsFlow(
        middlewareOptions
      ) as any

      authMiddleware(next)(request, response)
    }))
})
