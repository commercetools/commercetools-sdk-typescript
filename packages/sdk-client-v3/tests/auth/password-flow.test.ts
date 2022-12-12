import { createAuthMiddlewareForPasswordFlow } from '../../src/middleware'

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
      user: {
        username: 'jane-doe',
        password: 'jane-doe00',
      },
    },
    ...options,
  }
}

describe('Password Flow', () => {
  test('should throw if `user credentials` is not provided.', () => {
    new Promise((resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        // expect(req.headers.Authorization).toBe('Bearer xxx-xx')
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

      createAuthMiddlewareForPasswordFlow(middlewareOptions)(next)(
        createTestRequest({ headers: { Authorization: 'Bearer xxxx-xxx' } })
      )
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
