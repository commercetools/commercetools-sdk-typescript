import { createAuthMiddlewareForPasswordFlow } from '../../src/middleware'
import { buildRequestForPasswordFlow } from '../../src/middleware/auth-middleware/auth-request-builder'

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
        username: 'jane-doe',
        password: 'jane-doe00',
      },
    },
    ...options,
  }
}

describe('Password Flow', () => {
  describe('Password flow auth request builder', () => {
    test('should throw if `options` are not provided.', () => {
      new Promise((resolve, reject) => {
        const middlewareOptions = null
        expect(() =>
          buildRequestForPasswordFlow(middlewareOptions as any)
        ).toThrow('Missing required options') // 'Missing required options.'
        resolve(null)
      })
    })

    test('should throw if `host` is not provided.', () => {
      new Promise((resolve, reject) => {
        const middlewareOptions = createTestMiddlewareOptions({
          host: null,
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
            clientId: 'test-client-id',
            clientSecret: 'test-client-secret',
            user: {
              username: 'test-username',
              password: 'test-password',
            },
          },
        })

        expect(() => buildRequestForPasswordFlow(middlewareOptions)).toThrow(
          'Missing required option (host)'
        ) // 'Missing required options.'
        resolve(null)
      })
    })

    test('should throw if `projectKey` is not provided.', () => {
      new Promise((resolve, reject) => {
        const middlewareOptions = createTestMiddlewareOptions({
          host: 'test-host',
          projectKey: null,
          httpClient: jest.fn(() => ({
            data: {
              access_token: 'xxx-xx',
              expires_in: 6873735270,
            },
            statusCode: 200,
            headers: {},
          })),
          credentials: {
            clientId: 'test-client-id',
            clientSecret: 'test-client-secret',
            user: {
              username: 'test-username',
              password: 'test-password',
            },
          },
        })

        expect(() => buildRequestForPasswordFlow(middlewareOptions)).toThrow(
          'Missing required option (projectKey)'
        ) // 'Missing required options.'
        resolve(null)
      })
    })

    test('should throw if `credentials` is not provided.', () => {
      new Promise((resolve, reject) => {
        const middlewareOptions = createTestMiddlewareOptions({
          host: 'test-host',
          projectKey: 'test-projectKey',
          httpClient: jest.fn(() => ({
            data: {
              access_token: 'xxx-xx',
              expires_in: 6873735270,
            },
            statusCode: 200,
            headers: {},
          })),
          credentials: null,
        })

        expect(() => buildRequestForPasswordFlow(middlewareOptions)).toThrow(
          'Missing required option (credentials)'
        ) // 'Missing required options.'
        resolve(null)
      })
    })
  })

  test('should throw if `user credentials` is not provided.', () => {
    new Promise((resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
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
        credentials: null,
      })

      expect(() =>
        createAuthMiddlewareForPasswordFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).toThrow('Missing required options.') // 'Missing required options.'
      resolve(null)
    })
  })

  test('should throw error if required `user` option is not provided.', () =>
    new Promise((resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxx-xx')
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
          clientId: '123',
          clientSecret: 'secret',
          user: null,
        },
      })

      expect(
        createAuthMiddlewareForPasswordFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).rejects.toEqual(expect.any(Error))
      resolve(null)
    }))

  test('should throw error if required `username` and `password` options are not provided.', () =>
    new Promise((resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxx-xx')
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
          clientId: '123',
          clientSecret: 'secret',
          user: {
            username: '',
            password: '',
          },
        },
      })

      expect(
        createAuthMiddlewareForPasswordFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).rejects.toEqual(expect.any(Error))
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
            access_token: 'x-Xxxx',
            expires_in: 6873735270,
          },
          statusCode: 200,
          headers: {},
        })),
      })

      createAuthMiddlewareForPasswordFlow(middlewareOptions)(next)(
        createTestRequest({ headers: { Authorization: 'Bearer xxxx-xxx' } })
      )
      expect(middlewareOptions.httpClient).toHaveBeenCalledTimes(0)
      resolve(null)
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

      createAuthMiddlewareForPasswordFlow(middlewareOptions)(next)(
        createTestRequest({})
      )
    }))
})
