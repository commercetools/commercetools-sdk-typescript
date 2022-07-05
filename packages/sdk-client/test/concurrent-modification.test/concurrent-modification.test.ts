import nock from 'nock'
import fetch from 'node-fetch'
import { createConcurrentModificationMiddleware } from '../../src/sdk-middleware-concurrent-modification'
import {
  MiddlewareRequest,
  MiddlewareResponse,
  ConcurrentModificationMiddlewareOptions,
} from '../../src/types/sdk.d'

const Buffer = require('buffer/').Buffer
function createTestRequest(options) {
  return {
    uri: '',
    method: 'GET',
    body: null,
    headers: {},
    ...options,
  }
}

const testHost = 'https://api.commercetools.com'

describe('Concurrent-modification', () => {
  beforeEach(() => {
    nock.cleanAll()
  })

  test('should allow a get request to pass through to next middleware', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({ ...response })
        resolve()
      }
      // Use default options
      const concurrentModificationMiddleware =
        createConcurrentModificationMiddleware({
          enableRetry: true,
          host: testHost,
          fetch,
        } as ConcurrentModificationMiddlewareOptions)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(200, { foo: 'bar' })

      concurrentModificationMiddleware(next)(request, response)
    }))

  test("allow a get request which doesn't return a json response to pass through", () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({ ...response })
        resolve()
      }
      // Use default options
      const concurrentModificationMiddleware =
        createConcurrentModificationMiddleware({
          enableRetry: true,
          host: testHost,
          fetch,
        } as ConcurrentModificationMiddlewareOptions)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(200, 'not json response')

      concurrentModificationMiddleware(next)(request, response)
    }))

  test('invoke a put request with 409', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        method: 'PUT',
        body: JSON.stringify({ version: 5 }),
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({ ...response })
        resolve()
      }
      // Use default options
      const concurrentModificationMiddleware =
        createConcurrentModificationMiddleware({
          enableRetry: true,
          retryConfig: {
            maxRetries: 2,
            backoff: true,
            retryDelay: 200,
            maxDelay: Infinity,
          },
          host: testHost,
          fetch,
        } as ConcurrentModificationMiddlewareOptions)
      nock(testHost)
        .defaultReplyHeaders({ 'Content-Type': 'application/json' })
        .put('/foo/bar')
        .times(2)
        .reply(409, { statusCode: 409, errors: [{ currentVersion: 10 }] })

      concurrentModificationMiddleware(next)(request, response)
    }))

  test('invoke a put request with 409 and disabled backoff', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        method: 'PUT',
        body: JSON.stringify({ version: 5 }),
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({ ...response })
        resolve()
      }
      // Use default options
      const concurrentModificationMiddleware =
        createConcurrentModificationMiddleware({
          enableRetry: true,
          retryConfig: {
            maxRetries: 2,
            backoff: false,
            retryDelay: 200,
            maxDelay: Infinity,
          },
          host: testHost,
          fetch,
        } as ConcurrentModificationMiddlewareOptions)
      nock(testHost)
        .defaultReplyHeaders({ 'Content-Type': 'application/json' })
        .put('/foo/bar')
        .times(2)
        .reply(409, { statusCode: 409, errors: [{ currentVersion: 10 }] })

      concurrentModificationMiddleware(next)(request, response)
    }))

  test('invoke a put request with 200', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        method: 'PUT',
        body: JSON.stringify({ version: 5 }),
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({ ...response })
        resolve()
      }
      // Use default options
      const concurrentModificationMiddleware =
        createConcurrentModificationMiddleware({
          enableRetry: true,
          retryConfig: {
            maxRetries: 2,
            backoff: true,
            retryDelay: 200,
            maxDelay: Infinity,
          },
          host: testHost,
          fetch,
        } as ConcurrentModificationMiddlewareOptions)
      nock(testHost)
        .defaultReplyHeaders({ 'Content-Type': 'application/json' })
        .put('/foo/bar')
        .times(2)
        .reply(200, { statusCode: 200 })

      concurrentModificationMiddleware(next)(request, response)
    }))

  test('invoke a put request with 200 and disabled retry', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        method: 'PUT',
        body: JSON.stringify({ version: 5 }),
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({ ...response })
        resolve()
      }
      // Use default options
      const concurrentModificationMiddleware =
        createConcurrentModificationMiddleware({
          enableRetry: true,
          retryConfig: {
            maxRetries: 2,
            backoff: true,
            retryDelay: 200,
            maxDelay: Infinity,
          },
          host: testHost,
          fetch,
        } as ConcurrentModificationMiddlewareOptions)
      nock(testHost)
        .defaultReplyHeaders({ 'Content-Type': 'application/json' })
        .put('/foo/bar')
        .times(2)
        .reply(200, { statusCode: 200 })

      concurrentModificationMiddleware(next)(request, response)
    }))

  test('invoke a put request with 409, error response and disabled retry', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        method: 'PUT',
        body: JSON.stringify({ version: 5 }),
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({ ...response })
        resolve()
      }
      // Use default options
      const concurrentModificationMiddleware =
        createConcurrentModificationMiddleware({
          enableRetry: false,
          retryConfig: {
            maxRetries: 2,
            backoff: false,
            retryDelay: 200,
            maxDelay: Infinity,
          },
          host: testHost,
          fetch,
        } as ConcurrentModificationMiddlewareOptions)
      nock(testHost)
        .defaultReplyHeaders({ 'Content-Type': 'application/json' })
        .put('/foo/bar')
        .times(3)
        .reply(409, { statusCode: 409, errors: [{ currentVersion: 10 }] })

      concurrentModificationMiddleware(next)(request, response)
    }))

  test('invoke a put request with 409 and error response', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        method: 'PUT',
        body: JSON.stringify({ version: 5 }),
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({ ...response })
        resolve()
      }
      // Use default options
      const concurrentModificationMiddleware =
        createConcurrentModificationMiddleware({
          enableRetry: true,
          retryConfig: {
            maxRetries: 2,
            backoff: false,
            retryDelay: 200,
            maxDelay: Infinity,
          },
          host: testHost,
          fetch,
        } as ConcurrentModificationMiddlewareOptions)
      nock(testHost)
        .defaultReplyHeaders({ 'Content-Type': 'application/json' })
        .put('/foo/bar')
        .times(3)
        .reply(409, { statusCode: 409, errors: [{ currentVersion: 10 }] })

      concurrentModificationMiddleware(next)(request, response)
    }))
})
