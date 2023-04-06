import { createAuthMiddlewareForRefreshTokenFlow } from '../../src/middleware'
import { buildRequestForRefreshTokenFlow } from '../../src/middleware/auth-middleware/auth-request-builder'

function createTestRequest(options) {
  return {
    url: '',
    method: 'GET',
    body: null,
    headers: {},
    ...options,
  }
}

function createTestResponse(options) {
  return {
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
    refreshToken: 'xMhrTyoUxzyisERv==',
    ...options,
  }
}

describe('Refresh Token Flow', () => {
  describe('Refresh token flow auth request builder', () => {
    test('should throw if `options` are not provided.', () => {
      new Promise((resolve, reject) => {
        const middlewareOptions = null
        expect(() =>
          buildRequestForRefreshTokenFlow(middlewareOptions)
        ).toThrow('Missing required options')
        resolve(null)
      })
    })
  })

  test('should throw if `credentials` is not provided.', () => {
    new Promise((resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        host: 'http://demo-auth-url',
        projectKey: 'demo-key',
        httpClient: jest.fn(() => ({
          data: {
            access_token: 'xxx-xx',
            expires_in: 6873735270,
          },
          statusCode: 200,
          headers: {},
        })),
        credentials: null, // <------------- null
      })

      expect(
        createAuthMiddlewareForRefreshTokenFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).rejects.toEqual(expect.any(Error))
      resolve(null)
    })
  })

  test('should throw error if required `projectKey` option is not provided.', () =>
    new Promise(async (resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxx-xx')

        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        host: 'http://demo-auth-url',
        projectKey: null, // <--------------- null
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
        },
      })

      expect(
        createAuthMiddlewareForRefreshTokenFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).rejects.toEqual(expect.any(Error))
      resolve(null)
    }))

  test('should throw error if required `refreshToken` option is not provided.', () =>
    new Promise(async (resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxx-xx')

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
          clientId: '123',
          clientSecret: 'secret',
        },
        refreshToken: null,
      })

      expect(
        createAuthMiddlewareForRefreshTokenFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).rejects.toEqual(expect.any(Error))
      resolve(null)
    }))

  test('should throw error if required `host` option is not provided.', () =>
    new Promise(async (resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxx-xx')

        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        host: null, // <------------- null
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
          clientId: '123',
          clientSecret: 'secret',
        },
        refreshToken: null,
      })

      expect(
        createAuthMiddlewareForRefreshTokenFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).rejects.toEqual(expect.any(Error))
      resolve(null)
    }))

  test('should throw error if required `clientId` and `clientSecret` options are not provided.', () =>
    new Promise((resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxx-xx')

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

      expect(
        createAuthMiddlewareForRefreshTokenFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).rejects.toEqual(expect.any(Error))
      resolve(null)
    }))

  test('should call the next function if Authorization is already present in the headers', () =>
    new Promise((resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxxx-xxx')

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
      })

      createAuthMiddlewareForRefreshTokenFlow(middlewareOptions)(next)(
        createTestRequest({ headers: { Authorization: 'Bearer xxxx-xxx' } })
      )
      expect(next).toHaveBeenCalled()
      expect(middlewareOptions.httpClient).toHaveBeenCalledTimes(0)

      resolve(null)
    }))

  test('should fetch and store token in tokenCache object', () =>
    new Promise((resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject,
      })

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

      createAuthMiddlewareForRefreshTokenFlow(middlewareOptions)(next)(
        createTestRequest({})
      )
      expect(middlewareOptions.httpClient).toHaveBeenCalledTimes(1)
      resolve(null)
    }))
})
