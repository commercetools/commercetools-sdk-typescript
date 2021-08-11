import {
  Dispatch,
  MiddlewareRequest,
  MiddlewareResponse,
  JsonObject,
} from '../../src/types/sdk.d'
import { createUserAgentMiddleware } from '../../src/sdk-middleware-user-agent'

describe('UserAgent', () => {
  const userAgentMiddleware = createUserAgentMiddleware()
  const request: MiddlewareRequest = {
    method: 'GET',
    uri: '/foo',
    headers: {
      Authorization: '123',
    },
  }
  const response: MiddlewareResponse = {
    statusCode: 200,
    resolve: jest.fn(),
    reject: jest.fn(),
  }

  const next: Dispatch = (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headers: JsonObject<string> = req.headers as any
    test('has the same given header', () => {
      expect(headers.Authorization).toBe('123')
    })
    test('has sdk info', () => {
      expect(headers['User-Agent']).toMatch('commercetools-sdk-javascript')
    })
    test('has browser info', () => {
      // because we use jsdom
      expect(headers['User-Agent']).toMatch('node.js')
    })
    test('has browser version', () => {
      // because we use jsdom
      expect(headers['User-Agent']).toMatch(process.version.slice(1))
    })
    test('do not change response object', () => {
      expect(res).toEqual({ ...res })
    })
  }
  userAgentMiddleware(next)(request, response)
})