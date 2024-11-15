import { ClientResult } from '../../src'
import { executeRequest } from '../../src/middleware/auth-middleware/auth-request-executor'

type U<T> = {
  get(): T
  set(value: T): void
}

function createTestExecutorOptions(options) {
  return {
    url: 'test-url-endpoint',
    body: 'this is a body',
    baseAuth: {},
    request: { resolve: jest.fn(), reject: jest.fn() },
    httpClient: jest.fn(),
    tokenCache: {},
    tokenCacheKey: {},
    tokenCacheObject: {},
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

function cache<T = ClientResult>(): U<T> {
  let value: T
  return {
    set: jest.fn((response: T) => {
      value = response
    }),
    get: jest.fn(() => {
      return value
    }),
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
        tokenCache: cache(),
        httpClient: jest.fn(() => ({
          statusCode: 200,
          data: {
            statusCode: 200,
            access_token: 'test-access-token',
            expirationTime: Date.now() - 999,
          },
        })),
      })

      const response = await executeRequest(options)

      expect(typeof response).toEqual('boolean')
      expect(response).toEqual(true)

      // test token cache
      expect(typeof options.tokenCache.get()).toEqual('object')
      expect(options.tokenCache.get().token).toEqual('test-access-token')
      expect(options.tokenCache.get()).toHaveProperty('expirationTime')
    })

    test('should throw if userOptions are not provided for token refresh', async () => {
      const options = createTestExecutorOptions({
        userOption: null,
        tokenCacheObject: {
          token: 'test-cached-token',
          expirationTime: Date.now() - 999,
          refreshToken: 'refresh-cache-token',
        },
        tokenCache: cache(),
        httpClient: jest.fn(() => ({
          statusCode: 200,
          data: { statusCode: 200, access_token: 'test-access-token' },
        })),
      })

      await expect(async () => {
        await executeRequest(options)
      }).rejects.toThrow('Missing required options.')
    })

    test('should refresh token if token is expired and there is a refreshToken present in `tokenCacheObject`', async () => {
      const options = createTestExecutorOptions({
        url: 'test-demo-uri',
        tokenCache: cache(),
        tokenCacheObject: {
          token: 'test-cached-token',
          expirationTime: Date.now() - 999,
          refreshToken: 'refresh-cache-token',
        },
        httpClient: jest.fn(() => ({
          statusCode: 200,
          data: {
            statusCode: 200,
            access_token: 'test-access-token',
            refresh_token: 'refresh-access-token',
          },
        })),
      })

      const response = await executeRequest(options)
      expect(typeof response).toEqual('boolean')
      expect(response).toEqual(true)

      // test tokenCache
      expect(options.tokenCache.get()).toHaveProperty('token')
      expect(options.tokenCache.get()).toHaveProperty('expirationTime')

      expect(typeof options.tokenCache.get()).toEqual('object')
      expect(options.tokenCache.get().token).toEqual('test-access-token')
      expect(options.tokenCache.get().refreshToken).toEqual(
        'refresh-access-token'
      )
    })
  })

  describe('Auth request executor - rejected response', () => {
    test('should reject if `statusCode` is not within acceptable range', async () => {
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

      /**
       * return the rejected promise error
       * response to the calling auth flow
       */
      try {
        await executeRequest(options)
      } catch (err) {
        expect(err).toBeDefined()
        expect(err.message).toEqual('error fetching token')
      }
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

      /**
       * return the rejected promise error
       * response to the calling auth flow
       */
      try {
        await executeRequest(options)
      } catch (err) {
        expect(err).toBeDefined()
        expect(err.message).toEqual('an error occurred.')
      }
    })

    test('should call the httpClient using the provided `httpClientOptions`', async () => {
      const options = createTestExecutorOptions({
        url: 'test-demo-uri',
        tokenCache: cache(),
        httpClientOptions: { name: 'httpClientOptions' },
        httpClient: jest.fn(() => ({
          statusCode: 200,
          data: {
            statusCode: 200,
            access_token: 'test-access-token',
          },
        })),
      })

      await executeRequest(options)
      expect(options.httpClient).toHaveBeenCalledWith(
        options.url,
        expect.objectContaining({
          httpClientOptions: expect.objectContaining({
            name: 'httpClientOptions',
          }),
        })
      )
    })

    test('should inject header options using `httpClientOptions`', async () => {
      const options = createTestExecutorOptions({
        url: 'test-demo-uri',
        tokenCache: cache(),
        httpClientOptions: {
          name: 'httpClientOptions',
          headers: { withClientOptions: true },
        },
        httpClient: jest.fn(() => ({
          statusCode: 200,
          data: {
            statusCode: 200,
            access_token: 'test-access-token',
          },
        })),
      })

      await executeRequest(options)
      expect(options.httpClient).toHaveBeenCalledWith(
        options.url,
        expect.objectContaining({
          httpClientOptions: expect.objectContaining({
            name: 'httpClientOptions',
            headers: expect.objectContaining({
              withClientOptions: true,
            }),
          }),
        })
      )
    })
  })
})
