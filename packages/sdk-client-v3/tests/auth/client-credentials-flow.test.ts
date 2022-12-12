import { createAuthMiddlewareForClientCredentialsFlow } from '../../src/middleware'

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
    ...options,
  }
}

describe('Client Credentials Flow', () => {
  test('should throw error if required `host` option is not provided.', () =>
    new Promise(async (resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        // expect()

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
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
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
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
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

  test('should fetch token using client credentials and inject token in request headers', () =>
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
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxx-xx')
        // expect()

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

      createAuthMiddlewareForClientCredentialsFlow(middlewareOptions)(next)(
        createTestRequest({ headers: { Authorization: 'Bearer xxxx-xxx' } })
      )
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
