import { createAuthMiddlewareForClientCredentialsFlow } from '../../src/middleware'
import { buildRequestForClientCredentialsFlow } from '../../src/middleware/auth-middleware/auth-request-builder'

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

describe('Client Credentials Flow', () => {
  describe('Client credentials flow auth request builder', () => {
    test('should throw if `options` are not provided.', () => {
      new Promise((resolve, reject) => {
        const middlewareOptions = null
        expect(() =>
          buildRequestForClientCredentialsFlow(middlewareOptions as any)
        ).toThrow('Missing required options')
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
          },
        })
        expect(() =>
          buildRequestForClientCredentialsFlow(middlewareOptions)
        ).toThrow('Missing required option (host)')
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
          },
        })
        expect(() =>
          buildRequestForClientCredentialsFlow(middlewareOptions)
        ).toThrow('Missing required option (projectKey)')
        resolve(null)
      })
    })

    test('should throw if `credentials` is not provided.', () => {
      new Promise((resolve, reject) => {
        const middlewareOptions = createTestMiddlewareOptions({
          host: 'test-host',
          projectKey: 'test-project-key',
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
        expect(() =>
          buildRequestForClientCredentialsFlow(middlewareOptions)
        ).toThrow('Missing required option (credentials)')
        resolve(null)
      })
    })

    test('should throw if `clientId or clientSecret` are not provided.', () => {
      new Promise((resolve, reject) => {
        const middlewareOptions = createTestMiddlewareOptions({
          host: 'test-host',
          projectKey: 'test-project-key',
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
          buildRequestForClientCredentialsFlow(middlewareOptions)
        ).toThrow('Missing required credentials (clientId, clientSecret)')
        resolve(null)
      })
    })
  })

  test('should throw error if required `host` option is not provided.', () =>
    new Promise(async (resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        host: null, // <--------------- null
        projectKey: 'demo-key',
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
        createAuthMiddlewareForClientCredentialsFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).toThrow('Missing required options.') // 'Missing required options.'

      resolve(null)
    }))

  test('should throw error if required `credentials` option is not provided.', () =>
    new Promise(async (resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
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
        credentials: null,
      })

      expect(() =>
        createAuthMiddlewareForClientCredentialsFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).toThrow('Missing required options.') // 'Missing required options.'

      resolve(null)
    }))

  test('should throw error if required `clientId` and `clientSecret` options are not provided.', () =>
    new Promise((resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
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
          clientId: null,
          clientSecret: null,
        },
      })

      expect(() =>
        createAuthMiddlewareForClientCredentialsFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).toThrow('Missing required options.') // 'Missing required options.'
      resolve(null)
    }))

  test('should throw error if required `httpClient` is not a function', () =>
    new Promise((resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')

        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        host: 'test-host-url',
        projectKey: 'test-key',
        httpClient: {} as any,
        credentials: {
          clientId: 'test-id',
          clientSecret: 'test-secret',
        },
      })

      expect(
        createAuthMiddlewareForClientCredentialsFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).rejects.toEqual(expect.any(Error))

      resolve(null)
    }))

  test('should fetch token using client credentials and inject token in request headers', () =>
    new Promise((resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxx-xx')

        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        httpClient: jest.fn(() => ({
          data: { access_token: 'xxx-xx', expires_in: 6873735270 },
          statusCode: 200,
          headers: {},
        })),
      })

      createAuthMiddlewareForClientCredentialsFlow(middlewareOptions)(next)(
        createTestRequest({})
      )
    }))

  test('should throw error if required options were not provided.', () =>
    new Promise((resolve, reject) => {
      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxx-xx')
        resolve(null)
      }

      const middlewareOptions = createTestMiddlewareOptions({
        projectKey: null,
        credentials: null,
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
        createAuthMiddlewareForClientCredentialsFlow(middlewareOptions)(next)(
          createTestRequest({})
        )
      ).toThrow('Missing required options.') // 'Missing required options.'
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

      createAuthMiddlewareForClientCredentialsFlow(middlewareOptions)(next)(
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

      createAuthMiddlewareForClientCredentialsFlow(middlewareOptions)(next)(
        createTestRequest({})
      )
    }))
})
