import {
  MiddlewareRequest,
  MiddlewareResponse,
  JsonObject,
} from '../../src/types/types'
import { createUserAgentMiddleware } from '../../src/middleware'

describe('UserAgent', () => {
  const option = { name: 'agentName', customAgent: 'customAgent' }
  const userAgentMiddleware = createUserAgentMiddleware(option)
  const request: MiddlewareRequest = {
    method: 'GET',
    uri: '/foo',
    headers: {
      Authorization: '123',
    },
    resolve: jest.fn(),
    reject: jest.fn(),
  }

  test('has the same given header', () => {
    const next = (req): any => {
      const headers: JsonObject<string> = req.headers
      expect(headers.Authorization).toBe('123')
    }

    userAgentMiddleware(next)(request)
  })

  test('has sdk info', () => {
    const next = (req: MiddlewareRequest): any => {
      const headers: JsonObject<string> = req.headers
      expect(headers.Authorization).toBe('123')
      expect(headers['User-Agent']).toMatch('commercetools-sdk-javascript')
    }

    userAgentMiddleware(next)(request)
  })

  test('has browser info', () => {
    // because we use jsdom
    const next = (req: MiddlewareRequest): any => {
      const headers: JsonObject<string> = req.headers
      expect(headers.Authorization).toBe('123')
      expect(headers['User-Agent']).toMatch('commercetools-sdk-javascript')
      expect(headers['User-Agent']).toMatch('node.js')
    }

    userAgentMiddleware(next)(request)
  })

  test('has browser version', () => {
    // because we use jsdom
    const next = (req: MiddlewareRequest): any => {
      const headers: JsonObject<string> = req.headers
      expect(headers.Authorization).toBe('123')
      expect(headers['User-Agent']).toMatch('commercetools-sdk-javascript')
      expect(headers['User-Agent']).toMatch(process.version.slice(1))
    }

    userAgentMiddleware(next)(request)
  })

  test('has a customAgent', () => {
    const next = (req: MiddlewareRequest): any => {
      const headers: JsonObject<string> = req.headers
      expect(headers.Authorization).toBe('123')
      expect(headers['User-Agent']).toMatch('commercetools-sdk-javascript')
      expect(headers['User-Agent']).toMatch('customAgent')
    }

    userAgentMiddleware(next)(request)
  })

  test('should not override the name', () => {
    const next = (req: MiddlewareRequest): any => {
      const headers: JsonObject<string> = req.headers
      expect(headers.Authorization).toBe('123')
      expect(headers['User-Agent']).toMatch('commercetools-sdk-javascript')
      expect(headers['User-Agent']).toMatch('commercetools-sdk-javascript-v3/')
    }

    userAgentMiddleware(next)(request)
  })

  test('do not change existing request header object', () => {
    const next = (req: MiddlewareRequest): any => {
      const headers: JsonObject<string> = req.headers
      expect(headers.Authorization).toBe('123')
      expect(headers['User-Agent']).toMatch('commercetools-sdk-javascript')
      expect(req.headers).toEqual(
        expect.objectContaining({
          ...request.headers,
        })
      )
    }

    userAgentMiddleware(next)(request)
  })
})
