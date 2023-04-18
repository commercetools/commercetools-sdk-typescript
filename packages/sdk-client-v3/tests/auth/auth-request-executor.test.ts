import { executeRequest } from '../../src/middleware/auth-middleware/auth-request-executor'

function createTestExecutorOptions(options) {
  return {
    url: 'test-url-endpoint',
    body: 'this is a body',
    baseAuth: {},
    request: { resolve: jest.fn(), reject: jest.fn() },
    pendingTasks: [],
    httpClient: jest.fn(),
    tokenCache: {},
    tokenCacheKey: {},
    requestState: { get: jest.fn(), set: jest.fn() },
    userOption: {
      host: 'test-host',
      projectKey: 'test-project-key',
      credentials: {
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
      },
    },
    next: jest.fn(),
    ...options,
  }
}

describe('Auth request executor', () => {
  describe('Auth request executor - resolved response', () => {
    test('should throw if `httpClient` is not provided', () => {
      const options = createTestExecutorOptions({ httpClient: null })
      expect(executeRequest(options as any)).rejects.toEqual(expect.any(Error))
    })

    test('should return early if token exists in `tokenCacheObject`', async () => {
      const options = createTestExecutorOptions({
        tokenCache: {
          set: jest.fn(),
          get: jest.fn(() => ({
            token: 'test-cached-token',
            expirationTime: Date.now() + 999,
          })),
        },
        httpClient: jest.fn(() => ({
          statusCode: 200,
          data: { statusCode: 200, access_token: 'test-access-token' },
        })),
      })

      const response = await executeRequest(options)

      expect(typeof response).toEqual('object')
      expect(response).toHaveProperty('headers')
      expect(typeof response.headers).toEqual('object')
      expect(response.headers['Authorization']).toEqual(
        'Bearer test-cached-token'
      )
    })

    test('should return if a token is already being fetched', async () => {
      const options = createTestExecutorOptions({
        requestState: { get: jest.fn(() => true), set: jest.fn() },
        tokenCache: {
          set: jest.fn(),
          get: jest.fn(() => ({
            token: 'test-cached-token',
            expirationTime: Date.now() - 999,
          })),
        },
        httpClient: jest.fn(() => ({
          statusCode: 200,
          data: { statusCode: 200, access_token: 'test-access-token' },
        })),
      })

      expect(await executeRequest(options)).toEqual(undefined)
    })

    test('should throw if userOptions are not provided for token refresh', () => {
      const options = createTestExecutorOptions({
        userOption: null,
        tokenCache: {
          set: jest.fn(),
          get: jest.fn(() => ({
            token: 'test-cached-token',
            expirationTime: Date.now() - 999,
            refreshToken: 'refresh-cache-token',
          })),
        },
        httpClient: jest.fn(() => ({
          statusCode: 200,
          data: { statusCode: 200, access_token: 'test-access-token' },
        })),
      })

      expect(executeRequest(options)).rejects.toEqual(expect.any(Error))
    })

    test('should refresh token if token is expired and there is a refreshToken present in `tokenCacheObject`', async () => {
      const task = {
        request: { headers: { 'Content-Type': 'application/json' } },
        next: jest.fn(),
      }

      const options = createTestExecutorOptions({
        url: 'test-demo-uri',
        pendingTasks: [task, task],
        tokenCache: {
          set: jest.fn(),
          get: jest.fn(() => ({
            token: 'test-cached-token',
            expirationTime: Date.now() - 999,
            refreshToken: 'refresh-cache-token',
          })),
        },
        httpClient: jest.fn(() => ({
          statusCode: 200,
          data: { statusCode: 200, access_token: 'test-access-token' },
        })),
      })

      expect(await executeRequest(options)).toEqual(undefined)
    })

    test('should execute all pending tasks with a valid token', async () => {
      const task = {
        request: {
          url: 'test-uri',
          method: 'GET',
          body: {},
          headers: {
            'Content-Type': 'application/json',
          },
        },
        next: jest.fn(),
      }

      const options = createTestExecutorOptions({
        url: 'test-demo-uri',
        pendingTasks: [task, task],
        tokenCache: {
          set: jest.fn(),
          get: jest.fn(() => ({
            token: 'test-cached-token',
            expirationTime: Date.now() - 999,
            refreshToken: 'refresh-cache-token',
          })),
        },
        httpClient: jest.fn(() => ({
          statusCode: 200,
          data: { statusCode: 200, access_token: 'test-access-token' },
        })),
      })

      expect(await executeRequest(options)).toEqual(undefined)
    })
  })

  describe('Auth request executor - rejected response', () => {
    test('should reject if `statusCode` is within acceptable range', async () => {
      const task = {
        request: {
          url: 'test-uri',
          method: 'GET',
          body: {},
          headers: {
            'Content-Type': 'application/json',
          },
        },
        next: jest.fn(),
      }

      const options = createTestExecutorOptions({
        url: 'test-demo-uri',
        pendingTasks: [task],
        tokenCache: {
          set: jest.fn(),
          get: jest.fn(() => ({
            token: 'test-cached-token',
            expirationTime: Date.now() - 999,
            refreshToken: 'refresh-cache-token',
          })),
        },
        httpClient: jest.fn(() => ({
          statusCode: 400,
          message: 'error fetching token',
        })),
      })

      expect(await executeRequest(options)).toEqual(undefined)
    })

    test('should throw on network error', async () => {
      const task = {
        request: {
          url: 'test-uri',
          method: 'GET',
          body: {},
          headers: {
            'Content-Type': 'application/json',
          },
        },
        next: jest.fn(),
      }

      const options = createTestExecutorOptions({
        url: 'test-demo-uri',
        pendingTasks: [task],
        tokenCache: {
          set: jest.fn(),
          get: jest.fn(() => ({
            token: 'test-cached-token',
            expirationTime: Date.now() - 999,
            refreshToken: 'refresh-cache-token',
          })),
        },
        httpClient: jest.fn(() => {
          throw Error('an error occurred.')
        }),
      })

      const errorResponse = await executeRequest(options)
      expect(errorResponse).toHaveProperty('reject')
      expect(errorResponse).toHaveProperty('resolve')
      expect(errorResponse.response.body).toEqual(null)
      expect(errorResponse.response.error).toBeTruthy()
      expect(errorResponse.response.statusCode).toEqual(0)
      expect(errorResponse.response.error.error.message).toMatch(
        'an error occurred.'
      )
    })
  })
})
