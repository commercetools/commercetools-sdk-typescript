import { MiddlewareRequest, MiddlewareResponse } from '../../src'
import { authProcessor } from '../../src/middleware/auth-middleware/auth-request-processor'

function createTestRequest(options) {
  return {
    url: '',
    method: 'POST',
    body: null,
    headers: {},
    ...options,
  }
}

describe('auth-request-processor', () => {
  test('should pause while token is being fetched', async () => {
    const request = createTestRequest({
      resolve: Promise.resolve,
      reject: Promise.reject,
    })

    const next = async (req: MiddlewareRequest) => {
      expect(req.headers.Authorization).toEqual('Bearer token')
      return req as unknown as Promise<MiddlewareResponse<unknown>>
    }

    await authProcessor(
      request,
      Promise.resolve(true),
      {
        token: '',
        expirationTime: 0,
      },
      {
        clientId: '',
        projectKey: '',
        host: '',
      },
      {
        set: () => {},
        get: () => ({
          token: 'token',
          expirationTime: 99999,
        }),
      },
      (o) => ({ url: '', basicAuth: '', body: '' }),
      {
        host: '',
        projectKey: '',
        credentials: {
          clientId: '',
          clientSecret: '',
          anonymousId: '',
        },
      },
      next
    )
  })
})
