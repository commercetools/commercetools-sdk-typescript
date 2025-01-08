import { createAuthMiddlewareForAnonymousSessionFlow } from '../../src/middleware'
import { buildRequestForAnonymousSessionFlow } from '../../src/middleware/auth-middleware/auth-request-builder'

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
      anonymousId: 'secretme',
    },
    ...options,
  }
}

describe('Anonymous Session Flow', () => {
  describe('Anonymous session flow', () => {
    test('should throw if `options` are not provided', () => {
      const middlewareOptions: any = null

      expect(() =>
        buildRequestForAnonymousSessionFlow(middlewareOptions)
      ).toThrow('Missing required options')
    })

    test('should throw if `projectKey` is not provided', () => {
      const middlewareOptions = createTestMiddlewareOptions({
        projectKey: null,
        httpClient: jest.fn(() => ({
          data: {
            access_token: 'xxx-xx',
            expires_in: 6873735270,
          },
          statusCode: 200,
          headers: {},
        })),
      })

      expect(() =>
        buildRequestForAnonymousSessionFlow(middlewareOptions)
      ).toThrow('Missing required option (projectKey')
    })
  })

  test('should fetch anonymous token and inject token in request headers', () =>
    new Promise((resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxx-xx')
        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        httpClient: jest.fn(() => ({
          data: {
            access_token: 'xxx-xx',
            expires_in: 6873735270,
          },
          statusCode: 200,
          headers: {},
        })),
      })

      createAuthMiddlewareForAnonymousSessionFlow(middlewareOptions)(next)(
        createTestRequest({})
      )
      resolve(null)
    }))

  test('should throw error if required `projectKey` option is not provided.', () =>
    new Promise(async (resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxx-xx')
        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        projectKey: null, // <--------------- null
        httpClient: jest.fn(() => ({
          data: {
            access_token: 'xxx-xx',
            expires_in: 6873735270,
          },
          statusCode: 200,
          headers: {},
        })),
      })

      expect(() =>
        createAuthMiddlewareForAnonymousSessionFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).toThrow('Missing required options.') // 'Missing required options.'

      resolve(null)
    }))

  test('should throw error if required `host` option is not provided.', () =>
    new Promise(async (resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        host: null, // <--------------- null
        projectKey: null,
        httpClient: jest.fn(() => ({
          data: {
            access_token: 'xxx-xx',
            expires_in: 6873735270,
          },
          statusCode: 200,
          headers: {},
        })),
      })

      expect(() =>
        createAuthMiddlewareForAnonymousSessionFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).toThrow('Missing required options.') // 'Missing required options.'

      resolve(null)
    }))

  test('should throw error if required `clientId` and `clientSecret` options are not provided.', () =>
    new Promise((resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        // expect()

        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        projectKey: 'demo-key',
        httpClient: jest.fn(() => ({
          data: {
            access_token: 'xxx-xx',
            expires_in: 6873735270,
          },
          statusCode: 200,
          headers: {},
        })),
        credentials: {
          clientId: null,
          clientSecret: null,
        },
      })

      expect(() =>
        createAuthMiddlewareForAnonymousSessionFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).toThrow('Missing required options.') // 'Missing required options.'

      resolve(null)
    }))

  test('should not throw if `anonymousId` options is not provided.', () =>
    new Promise(async (resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxx-xx')
        // expect()

        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        httpClient: jest.fn(() => ({
          data: {
            access_token: 'xxx-xx',
            expires_in: 6873735270,
          },
          statusCode: 200,
          headers: {},
        })),
        credentials: {
          clientId: '123',
          clientSecret: 'secret',
          anonymousId: null, // <---------------- null
        },
      })

      await createAuthMiddlewareForAnonymousSessionFlow(middlewareOptions)(
        next
      )(createTestRequest({}))

      expect(middlewareOptions.httpClient).toHaveBeenCalled()
      expect(middlewareOptions.httpClient).toHaveBeenCalledTimes(1)
      resolve(null)
    }))

  test('should not call the auth server if Authorization is already present in the headers', () =>
    new Promise((resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxxx-xxx')
        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        httpClient: jest.fn(() => ({
          data: {
            access_token: 'x-Xxxx', // <------------ should not use this acess_token from mock response
            expires_in: 6873735270,
          },
          statusCode: 200,
          headers: {},
        })),
      })

      createAuthMiddlewareForAnonymousSessionFlow(middlewareOptions)(next)(
        createTestRequest({ headers: { Authorization: 'Bearer xxxx-xxx' } })
      )
    }))

  test('should fetch and store token in tokenCache object', () =>
    new Promise((resolve, reject) => {
      const store = (value) => {
        let val = value
        return {
          get: () => val,
          set: (newValue) => {
            val = newValue
          },
        }
      }

      const tokenCache = store({})

      const next = (req): any => {
        expect(typeof tokenCache.get).toBe('function')
        expect(typeof tokenCache.get()).toBe('object')
        expect(tokenCache.get()).toHaveProperty('token')
        expect(tokenCache.get()).toEqual(
          expect.objectContaining({
            token: 'x-Xxxx',
            // expirationTime: 8544429619082, // computed based on current time
            refreshToken: undefined,
          })
        )
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer x-Xxxx')

        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        httpClient: jest.fn(() => ({
          data: {
            access_token: 'x-Xxxx',
            expires_in: 6873735270,
          },
          statusCode: 200,
          headers: {},
        })),
        tokenCache,
      })

      createAuthMiddlewareForAnonymousSessionFlow(middlewareOptions)(next)(
        createTestRequest({})
      )
    }))
})
