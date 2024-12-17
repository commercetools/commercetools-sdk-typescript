import { ClientBuilder as ClientBuilderV3 } from '@commercetools/ts-client/src'
import {
  authMiddlewareOptionsV3,
  httpMiddlewareOptionsV3,
  projectKey,
} from '../test-utils'
import { createApiBuilderFromCtpClient } from '../../../src'
import fetch from 'node-fetch'
import { TokenCache } from '@commercetools/ts-client'

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
          set: (cache) => {
            console.log(cache)
          },
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
})
