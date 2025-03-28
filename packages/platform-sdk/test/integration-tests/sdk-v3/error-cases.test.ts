import {
  ClientBuilder as ClientBuilderV3,
  MiddlewareRequest,
  TokenCache,
  Next,
  TokenStore,
} from '@commercetools/ts-client/src'
import {
  authMiddlewareOptionsV3,
  httpMiddlewareOptionsV3,
  projectKey,
  tokenStore,
} from '../test-utils'
import { createApiBuilderFromCtpClient } from '../../../src'

describe('testing error cases', () => {
  it('should throw error when a product type is not found', async () => {
    try {
      const ctpClientV3 = new ClientBuilderV3()
        .withHttpMiddleware(httpMiddlewareOptionsV3)
        .withConcurrentModificationMiddleware()
        .withClientCredentialsFlow(authMiddlewareOptionsV3)
        .build()

      const apiRootV3 = createApiBuilderFromCtpClient(
        ctpClientV3
      ).withProjectKey({
        projectKey,
      })

      await apiRootV3
        .productTypes()
        .withId({ ID: 'non-existing-id' })
        .get()
        .execute()

      throw new Error('Should have thrown an error')
    } catch (e) {
      expect(e.statusCode).toEqual(404)
    }
  })

  it('should retry when aborted', async () => {
    let isFirstCall = true

    const client = new ClientBuilderV3()
      .withClientCredentialsFlow(authMiddlewareOptionsV3)
      .withHttpMiddleware({
        ...httpMiddlewareOptionsV3,
        enableRetry: true,
        retryConfig: {
          retryOnAbort: true,
        },
        httpClient: function (url, args) {
          if (isFirstCall) {
            isFirstCall = false
            return fetch(url, { ...args, signal: AbortSignal.timeout(10) })
          } else {
            return fetch(url, args)
          }
        },
      })
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(client).withProjectKey({
      projectKey,
    })
    const response = await apiRootV3.get().execute()

    expect(response.statusCode).toBe(200)
  })

  // This test is skipped because currently I don‘t know how to verify its correctness, so this is only for manual testing
  it.skip('should retry correctly multiple times when aborted', async () => {
    const client = new ClientBuilderV3()
      .withClientCredentialsFlow({
        ...authMiddlewareOptionsV3,
        projectKey: 'a',
        credentials: {
          clientId: 'test',
          clientSecret: 'test',
        },
        tokenCache: {
          set: (cache) => {},
          get: (tokenCacheKey) => {
            return {
              token: 'test',
              expirationTime: 9934431427363,
            }
          },
        } as TokenCache,
      })
      .withHttpMiddleware({
        ...httpMiddlewareOptionsV3,
        host: 'https://example.com:81',
        enableRetry: true,
        timeout: 10000,
        retryConfig: {
          retryOnAbort: true,
          maxRetries: 4,
          retryDelay: 400,
          retryCodes: [401],
        },
      })
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(client).withProjectKey({
      projectKey,
    })
    await apiRootV3.get().execute()
  }, 999999999)

  it('should retry to fetch a valid token on 401 error and save to cache - [invalid header token]', async () => {
    const invalidToken = 'invalid-token'

    const _middleware = () => {
      return (next: Next) => async (req: MiddlewareRequest) => {
        // modify the header with an invalid token
        const headers = { Authorization: `Bearer ${invalidToken}` }
        return next({
          ...req,
          headers,
        })
      }
    }

    const ctpClientV3 = new ClientBuilderV3()
      .withMiddleware(_middleware())
      .withClientCredentialsFlow(authMiddlewareOptionsV3)
      .withHttpMiddleware({
        ...httpMiddlewareOptionsV3,
        maskSensitiveHeaderData: false,
        includeOriginalRequest: true,
      })
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(ctpClientV3).withProjectKey(
      {
        projectKey,
      }
    )

    const res = await apiRootV3.get().execute()
    expect(res.statusCode).toEqual(200)
    expect(res.originalRequest.headers.Authorization).not.toEqual(
      `Bearer ${invalidToken}`
    )
  })

  it('should retry to fetch a valid token on 401 error and save to cache - [invalid token in cache]', async () => {
    const expirationTime = Date.now() * 2
    const tokenCache = tokenStore<TokenStore, TokenCache>({
      token: 'x-invalid-token',
      expirationTime,
    })

    const authOptions = {
      ...authMiddlewareOptionsV3,
      /**
       * simulate the present of an
       * invalid token in the tokenCache
       */
      tokenCache,
    }

    const ctpClientV3 = new ClientBuilderV3()
      .withClientCredentialsFlow(authOptions)
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(ctpClientV3).withProjectKey(
      {
        projectKey,
      }
    )

    expect(tokenCache.get().expirationTime).toEqual(expirationTime)
    expect(tokenCache.get().token).toEqual('x-invalid-token')

    await apiRootV3.get().execute()
    expect(tokenCache.get().expirationTime).toBeGreaterThan(-1)
    expect(tokenCache.get().token).not.toEqual('x-invalid-token')
  })

  it('should simulate concurrent token fetch request', async () => {
    const expirationTime = -1 // simulate an expired token
    const tokenCache = tokenStore<TokenStore, TokenCache>({
      token: 'an-expired-token',
      expirationTime,
    })

    const authOptions = {
      ...authMiddlewareOptionsV3,
      /**
       * simulate the present of an
       * invalid token in the tokenCache
       */
      tokenCache,
    }

    const ctpClientV3 = new ClientBuilderV3()
      .withClientCredentialsFlow(authOptions)
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(ctpClientV3).withProjectKey(
      {
        projectKey,
      }
    )

    expect(tokenCache.get().expirationTime).toEqual(expirationTime)
    expect(tokenCache.get().token).toEqual('an-expired-token')

    const fetch1 = apiRootV3.get().execute()
    const fetch2 = apiRootV3.get().execute()
    const fetch3 = apiRootV3.get().execute()
    await Promise.all([fetch1, fetch2, fetch3])

    expect(tokenCache.get().expirationTime).toBeGreaterThan(-1)
    expect(tokenCache.get().token).not.toEqual('an-expired-token')
  })
})
