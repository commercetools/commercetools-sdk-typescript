import nock from 'nock'
import { createHttpMiddleware } from '../../src/sdk-middleware-http'
import { MiddlewareRequest, MiddlewareResponse } from '../../src/types/sdk.d'

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

function FormDataMockClass() {
  this.append = jest.fn()
}

const testHost = 'https://api.commercetools.com'

describe('Http', () => {
  beforeEach(() => {
    nock.cleanAll()
  })
  // it will fail because nodejs v18 has the fetch available and not the version 16
  test.skip('throw without `fetch` passed and globally available', () => {
    expect(() => {
      createHttpMiddleware({ host: testHost, fetch: null } as any)
    }).toThrow(
      new Error(
        '`fetch` is not available. Please pass in `fetch` as an option or have it globally available.'
      )
    )
  })

  test('throw without `AbortController` passed or globally available when using timeout', () => {
    expect(() => {
      createHttpMiddleware({ host: testHost, timeout: 100, fetch } as any)
    }).toThrow(
      new Error(
        '`AbortController` is not available. Please pass in `getAbortController` as an option or have AbortController globally available when using timeout.'
      )
    )
  })

  test('throw when a non-array option is passed as retryCodes in the httpMiddlewareOptions', () => {
    expect(() => {
      createHttpMiddleware({
        host: testHost,
        retryConfig: { retryCodes: null },
        fetch,
      })
    }).toThrow(
      new Error(
        '`retryCodes` option must be an array of retry status (error) codes.'
      )
    )
  })

  test('throw when a non-array option is passed as headersWithStringBody in the httpMiddlewareOptions', () => {
    expect(() => {
      createHttpMiddleware({
        host: testHost,
        headersWithStringBody: null,
        fetch,
      })
    }).toThrow(
      new Error('`headersWithStringBody` option must be an array of strings')
    )
  })

  test('execute a get request (success)', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          body: { foo: 'bar' },
          statusCode: 200,
        })
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        fetch,
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    }))

  test("execute a get request which doesn't return a json response", () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          body: 'not json response',
          statusCode: 200,
        })
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        fetch,
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(200, 'not json response')

      httpMiddleware(next)(request, response)
    }))

  test("execute a get request which doesn't return a json response with retry", () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          body: { foo: 'bar' },
          statusCode: 200,
        })
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        fetch,
        enableRetry: true,
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(200, 'not json response')

      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    }))

  test('execute a get request with timeout (success)', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          body: { foo: 'bar' },
          statusCode: 200,
        })
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        timeout: 1000, // time out after 1s
        fetch,
        getAbortController: () => new AbortController(),
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .delay(10) // delay response with 10ms
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    }))

  test('execute a get request with getAbortController timeout (success)', () => {
    expect.assertions(1)
    return new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          body: { foo: 'bar' },
          statusCode: 200,
        })
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        timeout: 1000, // time out after 1s
        fetch,
        getAbortController: () => new AbortController(),
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .delay(10) // delay response with 10ms
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    })
  })

  test('execute a get request with short timeout (fail)', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          error: expect.any(Error),
          statusCode: 0,
        })
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        timeout: 10, // time out after 10ms
        fetch,
        getAbortController: () => new AbortController(),
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .delay(100) // delay response with 100ms
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    }))

  test('execute a get request with getAbortController short timeout (fail)', () => {
    expect.assertions(1)
    return new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          error: expect.any(Error),
          statusCode: 0,
        })
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        timeout: 10, // time out after 10ms
        fetch,
        getAbortController: () => new AbortController(),
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .delay(100) // delay response with 100ms
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    })
  })

  test('execute a get request with retry on abort for error', () => {
    expect.assertions(2)
    return new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any

      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error.retryCount).toEqual(2)
        expect(res).toEqual({
          ...response,
          error: expect.any(Error),
          statusCode: 0,
        })
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        timeout: 10, // time out after 10ms
        fetch,
        enableRetry: true,
        retryConfig: {
          maxRetries: 2,
          retryOnAbort: true,
        },
        getAbortController: () => new AbortController(),
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .delay(100) // delay response with 100ms
        .times(2)
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    })
  })

  test('do not retry when `enableRetry` is set to false.', () => {
    expect.assertions(2)
    return new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any

      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error.retryCount).toEqual(0)
        expect(res).toEqual({
          ...response,
          error: expect.any(Error),
          statusCode: 0,
        })
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        timeout: 10, // time out after 10ms
        fetch,
        enableRetry: false,
        retryConfig: {
          maxRetries: 2,
          retryOnAbort: true,
        },
        getAbortController: () => new AbortController(),
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .delay(100) // delay response with 100ms
        .times(2)
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    })
  })

  test('execute a get request with no retry on abort', () => {
    expect.assertions(1)
    return new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any

      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          error: expect.any(Error),
          statusCode: 0,
        })
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        timeout: 10, // time out after 10ms
        fetch,
        enableRetry: true,
        retryConfig: {
          maxRetries: 2,
          retryOnAbort: false,
        },
        getAbortController: () => new AbortController(),
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .delay(100) // delay response with 100ms
        .once()
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    })
  })

  test('execute a get request with retry on abort', () => {
    expect.assertions(1)
    return new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any

      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          body: { foo: 'bar' },
          statusCode: 200,
        })
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        timeout: 50, // time out after 10ms
        fetch,
        enableRetry: true,
        retryConfig: {
          maxRetries: 2,
          retryOnAbort: true,
        },
        getAbortController: () => new AbortController(),
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .delay(100) // delay response with 100ms
        .once()
        .reply(200, { foo: 'bar' })

      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .delay(10) // delay response with 100ms
        .once()
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    })
  })

  test('execute a request with timeout and client re-use', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          body: { foo: 'bar' },
          statusCode: 200,
        })
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        timeout: 100, // time out after 100ms
        fetch,
        getAbortController: () => new AbortController(),
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(200, { foo: 'bar' })
      // Set delay to emulate instantiated SDK sitting idle
      setTimeout(() => {
        httpMiddleware(next)(request, response)
      }, 110)
    }))

  test('should accept HEAD request and return without response body', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({ uri: '/foo', method: 'HEAD' })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          statusCode: 200,
        })
        resolve()
      }
      // Use default options
      const httpOptions = {
        host: testHost,
        includeResponseHeaders: true,
        fetch,
      } as any
      const httpMiddleware = createHttpMiddleware(httpOptions)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .head('/foo')
        .reply(200)

      httpMiddleware(next)(request, response)
    }))

  test('should return the headers in the response when enabled', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          body: { foo: 'bar' },
          statusCode: 200,
          headers: {
            'content-type': 'application/json',
          },
        })
        resolve()
      }
      // Use default options
      const httpOptions = {
        host: testHost,
        includeResponseHeaders: true,
        fetch,
      } as any
      const httpMiddleware = createHttpMiddleware(httpOptions)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    }))

  test('should return the request in the response when enabled', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.request).toEqual(
          expect.objectContaining({
            headers: {
              'Content-Type': 'application/json',
            },
          })
        )
        resolve()
      }
      // Use default options
      const httpOptions = {
        host: testHost,
        includeOriginalRequest: true,
        fetch,
      } as any
      const httpMiddleware = createHttpMiddleware(httpOptions)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    }))

  test('should maskSensitiveHeaderData in response by default', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        headers: {
          Authorization: 'Bearer 123',
        },
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.request).toEqual(
          expect.objectContaining({
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ********',
            },
          })
        )
        resolve()
      }
      // Use default options
      const httpOptions = {
        host: testHost,
        includeOriginalRequest: true,
        fetch,
      } as any
      const httpMiddleware = createHttpMiddleware(httpOptions)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    }))

  test('should not maskSensitiveHeaderData in the response when disabled', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        headers: {
          authorization: 'Bearer 123',
        },
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.request).toEqual(
          expect.objectContaining({
            headers: {
              'Content-Type': 'application/json',
              authorization: 'Bearer 123',
            },
          })
        )
        resolve()
      }
      // Use custom options
      const httpOptions = {
        host: testHost,
        includeOriginalRequest: true,
        maskSensitiveHeaderData: false,
        fetch,
      } as any
      const httpMiddleware = createHttpMiddleware(httpOptions)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    }))

  test('should not `include original request` in error response', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error.name).toBe('NetworkError')
        expect(res.error.headers).toBeUndefined()
        expect(res.error.originalRequest).toBeUndefined()
        expect(res.error.message).toBe('Connection timeout')
        expect(res.body).toBeUndefined()
        expect(res.statusCode).toBe(0)
        resolve()
      }
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        includeRequestInErrorResponse: false,
        fetch,
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .replyWithError('Connection timeout')

      httpMiddleware(next)(request, response)
    }))

  test('should `include original request` in error response', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error.name).toBe('NetworkError')
        expect(res.error.headers).toBeUndefined()
        expect(res.error.originalRequest).toBeDefined()
        expect(res.error.message).toBe('Connection timeout')
        expect(res.body).toBeUndefined()
        expect(res.statusCode).toBe(0)
        resolve()
      }
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        includeRequestInErrorResponse: true,
        fetch,
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .replyWithError('Connection timeout')

      httpMiddleware(next)(request, response)
    }))

  test('should not `include original request` in (5xx) error response', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error.name).toBe('HttpError')
        expect(res.error.originalRequest).toBeUndefined()
        expect(res.statusCode).toBe(502)
        expect(res.body).toBeUndefined()
        resolve()
      }
      const options = {
        host: testHost,
        enableRetry: true,
        includeRequestInErrorResponse: false,
        fetch,
      } as any
      const httpMiddleware = createHttpMiddleware(options)
      nock(testHost).get('/foo/bar').reply(502)

      httpMiddleware(next)(request, response)
    }))

  test('should include `uri` in 404 error response', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error.name).toBe('NotFound')
        expect(res.error.originalRequest).toHaveProperty('uri')
        expect(res.error.originalRequest.uri).toBe('/foo/bar')
        expect(res.statusCode).toBe(404)
        expect(res.body).toBeUndefined()
        resolve()
      }
      const options = {
        host: testHost,
        includeRequestInErrorResponse: true,
        fetch,
      } as any
      const httpMiddleware = createHttpMiddleware(options)
      nock(testHost).get('/foo/bar').reply(404)

      httpMiddleware(next)(request, response)
    }))

  test('should delete the `uri` property in 404 error response', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error.name).toBe('NotFound')
        expect(res.error.originalRequest).toBeUndefined()
        expect(res.statusCode).toBe(404)
        expect(res.body).toBeUndefined()
        resolve()
      }
      const options = {
        host: testHost,
        includeRequestInErrorResponse: false,
        fetch,
      } as any
      const httpMiddleware = createHttpMiddleware(options)
      nock(testHost).get('/foo/bar').reply(404)

      httpMiddleware(next)(request, response)
    }))

  test('should include the `uri` path in 404 error message', () =>
    new Promise((resolve: Function, reject: Function) => {
      const uri = '/foo/bar'
      const request = createTestRequest({
        uri,
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error.name).toBe('NotFound')
        expect(res.error.originalRequest).toBeUndefined()
        expect(res.error.message).toBe('URI not found: ' + uri)
        expect(res.statusCode).toBe(404)
        expect(res.body).toBeUndefined()
        resolve()
      }
      const options = {
        host: testHost,
        includeRequestInErrorResponse: false,
        fetch,
      } as any
      const httpMiddleware = createHttpMiddleware(options)
      nock(testHost).get('/foo/bar').reply(404)

      httpMiddleware(next)(request, response)
    }))

  test('should keep request bodies as is if header is included.', () =>
    new Promise((resolve: Function, reject: Function) => {
      const uri = '/foo/bar'
      const request = createTestRequest({
        method: 'POST',
        uri,
        body: 'this is a string body',
        headers: { 'Content-Type': 'foo' },
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(req.body).toBeDefined()
        expect(typeof req.body).toBe('string')
        resolve()
      }
      const options = {
        host: testHost,
        headersWithStringBody: ['foo'],
        fetch: jest
          .fn()
          .mockImplementation((url: string, fetchOptions: RequestInit) => {
            expect(fetchOptions.body).toBe('this is a string body')
            return fetch(url, fetchOptions)
          }),
      } as any
      const httpMiddleware = createHttpMiddleware(options)
      nock(testHost).get('/foo/bar').reply(404)

      httpMiddleware(next)(request, response)
    }))

  test('should stringify request body if header is included and body is not a string.', () =>
    new Promise((resolve: Function, reject: Function) => {
      const uri = '/foo/bar'
      const request = createTestRequest({
        method: 'POST',
        uri,
        body: { text: 'this is not a string body' },
        headers: { 'Content-Type': 'foo' },
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(req.body).toBeDefined()
        expect(typeof req.body).toEqual('object')
        resolve()
      }
      const options = {
        host: testHost,
        headersWithStringBody: ['foo'],
        fetch: jest
          .fn()
          .mockImplementation((url: string, fetchOptions: RequestInit) => {
            expect(fetchOptions.body).toBe(
              '{"text":"this is not a string body"}'
            )
            return fetch(url, fetchOptions)
          }),
      } as any
      const httpMiddleware = createHttpMiddleware(options)
      nock(testHost).get('/foo/bar').reply(404)

      httpMiddleware(next)(request, response)
    }))

  test('execute a post request (success)', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        method: 'POST',
        body: { hello: 'world' },
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          body: { foo: 'bar' },
          statusCode: 200,
        })
        resolve()
      }
      // Use custom options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        fetch,
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .filteringRequestBody(() => '*')
        .post('/foo/bar', '*')
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    }))

  test('should accept a Buffer body', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        method: 'POST',
        body: Buffer.from('test'),
        headers: {
          'Content-Type': 'image/jpeg',
        },
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          body: { foo: 'bar' },
          statusCode: 200,
        })
        resolve()
      }
      // Use custom options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        fetch,
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .post('/foo/bar', 'test')
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    }))

  test('should accept a FormData body with null content type', () =>
    new Promise((resolve: (value?: unknown) => void, reject): void => {
      const formData = new FormDataMockClass()
      formData.append('file', 'file content', 'file123')

      const request = createTestRequest({
        uri: '/import/file-upload',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': null,
        },
      })

      const response = { resolve, reject, statusCode: undefined }
      const next = (req, res) => {
        expect(res).toEqual({
          ...response,
          body: { fileName: 'file123' },
          statusCode: 200,
        })
        resolve()
      }
      // Use custom options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        fetch,
      })
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .post('/import/file-upload')
        .reply(200, { fileName: 'file123' })

      httpMiddleware(next)(request, response)
    }))

  test('should not default other header content-type to application/json', () =>
    new Promise((resolve: (value?: unknown) => void, reject): void => {
      const request = createTestRequest({
        uri: '/default-header/content-type',
        method: 'POST',
        body: { id: 'test-id' },
        headers: {
          'Content-Type': 'image/jpeg',
        },
      })

      const response = { resolve, reject, statusCode: undefined }
      const next = (req, res) => {
        expect(req.headers).toEqual({ 'Content-Type': 'image/jpeg' })
        expect(res).toEqual({
          ...response,
          body: { id: 'test-id' },
          statusCode: 200,
        })
        resolve()
      }
      // Use custom options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        fetch,
      })
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .post('/default-header/content-type')
        .reply(200, { id: 'test-id' })

      httpMiddleware(next)(request, response)
    }))

  test('handle failed response (network error)', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error.name).toBe('NetworkError')
        expect(res.error.headers).toBeUndefined()
        expect(res.error.originalRequest).toBeDefined()
        expect(res.error.message).toBe(`Connection timeout`)
        expect(res.body).toBeUndefined()
        expect(res.statusCode).toBe(0)
        resolve()
      }
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        fetch,
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .replyWithError('Connection timeout')

      httpMiddleware(next)(request, response)
    }))

  describe('::repeater', () => {
    test('should retry on network error if enabled', () =>
      new Promise((resolve: Function, reject: Function) => {
        const request = createTestRequest({
          uri: '/foo/bar',
        })
        const response = { resolve: Function, reject: Function } as any
        const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
          expect(res.error.name).toBe('NetworkError')
          expect(res.error.headers).toBeUndefined()
          expect(res.error.originalRequest).toBeDefined()
          expect(res.error.retryCount).toBe(2)
          expect(res.error.message).toBe('Connection timeout')
          expect(res.body).toBeUndefined()
          expect(res.statusCode).toBe(0)
          resolve()
        }
        const options = {
          host: testHost,
          enableRetry: true,
          retryConfig: {
            maxRetries: 2,
            retryDelay: 300,
          },
          fetch,
        } as any
        const httpMiddleware = createHttpMiddleware(options)
        nock(testHost)
          .defaultReplyHeaders({
            'Content-Type': 'application/json',
          })
          .get('/foo/bar')
          .times(3)
          .replyWithError('Connection timeout')

        httpMiddleware(next)(request, response)
      }))

    test('should retry on 503 (Service Unavailable) if enabled', () =>
      new Promise((resolve: Function, reject: Function) => {
        const request = createTestRequest({
          uri: '/foo/bar',
        })
        const response = { resolve: Function, reject: Function } as any
        const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
          expect(res.error.name).toBe('ServiceUnavailable')
          expect(res.error.originalRequest).toBeDefined()
          expect(res.body).toBeUndefined()
          expect(res.statusCode).toBe(503)
          expect(res.error.retryCount).toBe(2)
          resolve()
        }
        const options = {
          host: testHost,
          enableRetry: true,
          retryConfig: {
            maxRetries: 2,
            retryDelay: 300,
          },
          fetch,
        } as any
        const httpMiddleware = createHttpMiddleware(options)
        nock(testHost).get('/foo/bar').times(3).reply(503)

        httpMiddleware(next)(request, response)
      }))

    test('should retry when status (error) code is part of retryCodes', () =>
      new Promise<void>((resolve, reject) => {
        const request = createTestRequest({
          uri: '/foo/bar',
        })
        const response = { resolve: Function, reject: Function } as any
        const next = (req, res) => {
          expect(res.error.name).toBe('InternalServerError')
          expect(res.error.originalRequest).toBeDefined()
          expect(res.body).toBeUndefined()
          expect(res.statusCode).toBe(500)
          expect(res.error.retryCount).toBe(2)
          resolve()
        }
        const options = {
          host: testHost,
          enableRetry: true,
          retryConfig: {
            maxRetries: 2,
            retryDelay: 300,
            retryCodes: [500, 501, 502],
          },
          fetch,
        }
        const httpMiddleware = createHttpMiddleware(options)
        nock(testHost).get('/foo/bar').times(3).reply(500)

        httpMiddleware(next)(request, response)
      }))

    test('should retry when status (error) message is part of retryCodes', () =>
      new Promise((resolve, reject) => {
        const request = createTestRequest({
          uri: '/foo/bar',
        })
        const response = { resolve: Function, reject: Function } as any
        const next = (req, res) => {
          expect(res.error.name).toBe('InternalServerError')
          expect(res.error.message).toBe('ETIMEDOUT')
          expect(res.error.retryCount).toBe(2)
          expect(res.error.statusCode).toBe(500)
          resolve(null)
        }

        const httpMiddleware = createHttpMiddleware({
          host: testHost,
          enableRetry: true,
          retryConfig: {
            maxRetries: 2,
            retryDelay: 300,
            retryCodes: ['ETIMEDOUT', 'ECONNREFUSED', 'write EPIPE'],
          },
          fetch,
        })
        nock(testHost)
          .defaultReplyHeaders({
            'Content-Type': 'application/json',
          })
          .persist()
          .get('/foo/bar')
          .reply(500, 'ETIMEDOUT')

        httpMiddleware(next)(request, response)
      }))

    test('should retry when status (error) code and message are both part of retryCodes', () =>
      new Promise<void>((resolve, reject) => {
        const request = createTestRequest({
          uri: '/foo/bar',
        })
        const response = { resolve: Function, reject: Function } as any
        const next = (req, res) => {
          expect(res.error.name).toBe('HttpError')
          expect(res.error.message).toBe('ETIMEDOUT')
          expect(res.error.retryCount).toBe(2)
          expect(res.error.statusCode).toBe(502)
          resolve()
        }

        const httpMiddleware = createHttpMiddleware({
          host: testHost,
          enableRetry: true,
          retryConfig: {
            maxRetries: 2,
            retryDelay: 300,
            retryCodes: ['ETIMEDOUT', 503, 502, 'ECONNREFUSED', 'write EPIPE'],
          },
          fetch,
        })
        nock(testHost)
          .defaultReplyHeaders({
            'Content-Type': 'application/json',
          })
          .persist()
          .get('/foo/bar')
          .reply(502, 'ETIMEDOUT')

        httpMiddleware(next)(request, response)
      }))

    test('should not retry when status (error) message is not part of retryCodes', () =>
      new Promise<void>((resolve, reject) => {
        const request = createTestRequest({
          uri: '/foo/bar',
        })
        const response = { resolve: Function, reject: Function } as any
        const next = (req, res) => {
          expect(res.error.name).toBe('InternalServerError')
          expect(res.error.originalRequest).toBeDefined()
          expect(res.body).toBeUndefined()
          expect(res.statusCode).toBe(500)
          expect(res.error.retryCount).toBe(0)
          resolve()
        }
        const options = {
          host: testHost,
          enableRetry: true,
          retryCodes: ['Not Included'],
          retryConfig: {
            maxRetries: 2,
            retryDelay: 300,
          },
          fetch,
        }
        const httpMiddleware = createHttpMiddleware(options)
        nock(testHost)
          .get('/foo/bar')
          .times(3)
          .reply(500, 'Internal Server Error')

        httpMiddleware(next)(request, response)
      }))

    test('should not retry when status (error) code is not part of retryCodes', () =>
      new Promise<void>((resolve, reject) => {
        const request = createTestRequest({
          uri: '/foo/bar',
        })
        const response = { resolve: Function, reject: Function } as any
        const next = (req, res) => {
          expect(res.error.name).toBe('InternalServerError')
          expect(res.error.originalRequest).toBeDefined()
          expect(res.body).toBeUndefined()
          expect(res.statusCode).toBe(500)
          expect(res.error.retryCount).toBe(0)
          resolve()
        }
        const options = {
          host: testHost,
          enableRetry: true,
          retryCodes: [501, 502],
          retryConfig: {
            maxRetries: 2,
            retryDelay: 300,
          },
          fetch,
        }
        const httpMiddleware = createHttpMiddleware(options)
        nock(testHost).get('/foo/bar').times(3).reply(500)

        httpMiddleware(next)(request, response)
      }))

    test('should not retry when enableRetry is set to false ', () =>
      new Promise<void>((resolve, reject) => {
        const request = createTestRequest({
          uri: '/foo/bar',
        })
        const response = { resolve: Function, reject: Function } as any
        const next = (req, res) => {
          expect(res.error.name).toBe('InternalServerError')
          expect(res.error.originalRequest).toBeDefined()
          expect(res.body).toBeUndefined()
          expect(res.statusCode).toBe(500)
          expect(res.error.retryCount).toBe(0)
          resolve()
        }
        const options = {
          host: testHost,
          enableRetry: false,
          retryCodes: [500, 502],
          retryConfig: {
            maxRetries: 2,
            retryDelay: 300,
          },
          fetch,
        }
        const httpMiddleware = createHttpMiddleware(options)
        nock(testHost).get('/foo/bar').times(3).reply(500)

        httpMiddleware(next)(request, response)
      }))

    test(
      'should toggle `exponential backoff` off',
      () =>
        new Promise((resolve: Function, reject: Function) => {
          const request = createTestRequest({
            uri: '/foo/bar',
          })
          const response = { resolve: Function, reject: Function } as any
          const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
            expect(res.error.name).toBe('NetworkError')
            expect(res.error.headers).toBeUndefined()
            expect(res.error.originalRequest).toBeDefined()
            expect(res.error.retryCount).toBe(2)
            expect(res.error.message).toBe('Connection timeout')
            expect(res.body).toBeUndefined()
            expect(res.statusCode).toBe(0)
            resolve()
          }
          const options = {
            host: testHost,
            enableRetry: true,
            retryConfig: {
              maxRetries: 2,
              backoff: false,
              retryDelay: 300,
            },
            fetch,
          } as any
          const httpMiddleware = createHttpMiddleware(options)
          nock(testHost)
            .defaultReplyHeaders({
              'Content-Type': 'application/json',
            })
            .get('/foo/bar')
            .times(3)
            .replyWithError('Connection timeout')

          httpMiddleware(next)(request, response)
        }),
      700 /* retryDelay of 300 * 2 */
    )

    test('should not retry on 404 (not found) error', () =>
      new Promise((resolve: Function, reject: Function) => {
        const request = createTestRequest({
          uri: '/foo/bar',
        })
        const response = { resolve: Function, reject: Function } as any
        const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
          expect(res.error.message).toBe('URI not found: /foo/bar')
          expect(res.error.body).toBeFalsy()
          expect(res.body).toBeFalsy()
          expect(res.statusCode).toBe(404)
          resolve()
        }
        const options = {
          host: testHost,
          enableRetry: true,
          retryConfig: {
            maxRetries: 2,
            retryDelay: 300,
          },
          fetch,
        } as any
        const httpMiddleware = createHttpMiddleware(options)
        nock(testHost)
          .defaultReplyHeaders({
            'Content-Type': 'application/json',
          })
          .get('/foo/bar')
          .reply(404)

        httpMiddleware(next)(request, response)
      }))
  })

  test('handle failed response (api error)', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        const expectedError = new Error('oops') as any
        expectedError.body = {
          message: 'oops',
          error: [{ code: 'InvalidField' }],
        }
        expectedError.code = 400
        expectedError.statusCode = 400
        expectedError.headers = {
          'content-type': 'application/json',
        }
        expect(res).toEqual({
          ...response,
          statusCode: 400,
          error: expectedError,
        })
        resolve()
      }
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        fetch,
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(400, {
          message: 'oops',
          error: [{ code: 'InvalidField' }],
        })

      httpMiddleware(next)(request, response)
    }))

  test('return non-JSON error to user', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        const expectedError = new Error('non json error occurred') as any
        expectedError.body = {
          message: 'non json error occurred',
          error: [{ code: 'InvalidField' }],
        }
        expectedError.code = 500
        expectedError.statusCode = 500
        expectedError.headers = {
          'content-type': 'application/json',
        }
        expect(res).toEqual({
          ...response,
          statusCode: 500,
          error: expectedError,
        })
        resolve()
      }
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        fetch,
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(500, 'non json error occurred')

      httpMiddleware(next)(request, response)
    }))

  test('should maskSensitiveHeaderData in non-JSON error by default', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        headers: {
          authorization: 'Bearer 123',
          Authorization: 'Bearer 123',
        },
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        const expectedError = new Error('non json error occurred') as any
        expectedError.body = {
          message: 'non json error occurred',
          error: [{ code: 'InvalidField' }],
        }
        expectedError.code = 500
        expectedError.statusCode = 500
        expectedError.headers = {
          'content-type': 'application/json',
        }
        expect(res).toEqual({
          ...response,
          statusCode: 500,
          error: expectedError,
        })
        expect(res.error.originalRequest).toMatchObject({
          body: null,
          method: 'GET',
          uri: '/foo/bar',
          headers: {
            authorization: 'Bearer ********',
            Authorization: 'Bearer ********',
          },
        })
        resolve()
      }
      // Use default options
      const httpOptions = {
        host: testHost,
        includeOriginalRequest: true,
        fetch,
      } as any
      const httpMiddleware = createHttpMiddleware(httpOptions)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(500, 'non json error occurred')

      httpMiddleware(next)(request, response)
    }))

  test('should not maskSensitiveHeaderData in non-JSON error when disabled', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        headers: {
          authorization: 'Bearer 123',
          Authorization: 'Bearer 123',
        },
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        const expectedError = new Error('non json error occurred') as any
        expectedError.body = {
          message: 'non json error occurred',
          error: [{ code: 'InvalidField' }],
        }
        expectedError.code = 500
        expectedError.statusCode = 500
        expectedError.headers = {
          'content-type': 'application/json',
        }
        expect(res).toEqual({
          ...response,
          statusCode: 500,
          error: expectedError,
        })
        expect(res.error.originalRequest).toMatchObject({
          body: null,
          method: 'GET',
          uri: '/foo/bar',
          headers: {
            authorization: 'Bearer 123',
            Authorization: 'Bearer 123',
          },
        })
        resolve()
      }
      // Use custom options
      const httpOptions = {
        host: testHost,
        includeOriginalRequest: true,
        maskSensitiveHeaderData: false,
        fetch,
      } as any
      const httpMiddleware = createHttpMiddleware(httpOptions)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(500, 'non json error occurred')

      httpMiddleware(next)(request, response)
    }))

  test('handle failed response (not found)', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error.message).toBe('URI not found: /foo/bar')
        expect(res.error.body).toBeFalsy()
        expect(res.body).toBeFalsy()
        expect(res.statusCode).toBe(404)
        resolve()
      }
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        fetch,
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(404)

      httpMiddleware(next)(request, response)
    }))

  test('handle failed response (unmapped error code)', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error.message).toBe('oops')
        expect(res.error.name).toBe('HttpError')
        expect(res.error.body).toEqual({ message: 'oops' })
        expect(res.body).toBeUndefined()
        expect(res.statusCode).toBe(415)
        resolve()
      }
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        fetch,
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(415, {
          message: 'oops',
        })

      httpMiddleware(next)(request, response)
    }))

  test('should maskSensitiveHeaderData in error response by default', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        headers: {
          authorization: 'Bearer 123',
          Authorization: 'Bearer 123',
        },
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error.name).toBe('NetworkError')
        expect(res.error.originalRequest).toMatchObject({
          body: null,
          method: 'GET',
          uri: '/foo/bar',
          headers: {
            authorization: 'Bearer ********',
            Authorization: 'Bearer ********',
          },
        })
        resolve()
      }
      // Use default options
      const httpOptions = {
        host: testHost,
        includeOriginalRequest: true,
        fetch,
      } as any
      const httpMiddleware = createHttpMiddleware(httpOptions)
      nock(testHost)
        .defaultReplyHeaders({ 'Content-Type': 'application/json' })
        .get('/foo/bar')
        .replyWithError({ code: 'ENOTFOUND' })

      httpMiddleware(next)(request, response)
    }))

  test('should not maskSensitiveHeaderData in error response when disabled', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        headers: {
          authorization: 'Bearer 123',
          Authorization: 'Bearer 123',
        },
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error.name).toBe('NetworkError')
        expect(res.error.originalRequest).toMatchObject({
          body: null,
          method: 'GET',
          uri: '/foo/bar',
          headers: {
            authorization: 'Bearer 123',
            Authorization: 'Bearer 123',
          },
        })
        resolve()
      }
      // Use custom options
      const httpOptions = {
        host: testHost,
        includeOriginalRequest: true,
        maskSensitiveHeaderData: false,
        fetch,
      } as any
      const httpMiddleware = createHttpMiddleware(httpOptions)
      nock(testHost)
        .defaultReplyHeaders({ 'Content-Type': 'application/json' })
        .get('/foo/bar')
        .replyWithError({ code: 'ENOTFOUND' })

      httpMiddleware(next)(request, response)
    }))

  test('parses a host that ends with slash', () =>
    new Promise((resolve: Function, reject: Function) => {
      const sampleHost = 'https://api.commercetools.com/'
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.statusCode).toBe(200)
        resolve()
      }
      const httpMiddleware = createHttpMiddleware({
        host: sampleHost,
        fetch,
      } as any)
      nock(sampleHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    }))

  test('parses a host that ends without slash', () =>
    new Promise((resolve: Function, reject: Function) => {
      const sampleHost = 'https://api.commercetools.com'
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.statusCode).toBe(200)
        resolve()
      }
      const httpMiddleware = createHttpMiddleware({
        host: sampleHost,
        fetch,
      } as any)
      nock(sampleHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .get('/foo/bar')
        .reply(200, { foo: 'bar' })

      httpMiddleware(next)(request, response)
    }))

  test('execute a post request with empty 202 response', () =>
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        method: 'POST',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res).toEqual({
          ...response,
          body: {},
          statusCode: 202,
        })
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        fetch,
      } as any)
      nock(testHost)
        .defaultReplyHeaders({
          'Content-Type': 'application/json',
        })
        .post('/foo/bar')
        .reply(202, undefined)

      httpMiddleware(next)(request, response)
    }))

  test('should handle error when parsing an invalid response object', () => {
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        method: 'POST',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(typeof res).toEqual('object')
        expect(res.error).toBeTruthy()
        expect(res.error).toEqual({
          code: 0,
          statusCode: 0,
          status: 0,
          message: 'malformed response',
          originalRequest: {
            uri: '/foo/bar',
            method: 'POST',
            body: null,
            headers: {},
          },
          retryCount: 0,
          name: 'NetworkError',
        })
        expect(res).toHaveProperty('reject')
        expect(res).toHaveProperty('resolve')
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        credentialsMode: 'include',
        fetch: jest.fn(() =>
          Promise.resolve({
            ok: true,
            text: jest.fn(() =>
              Promise.reject(new Error('malformed response'))
            ),
          })
        ),
      } as any)
      httpMiddleware(next)(request, response)
    })
  })

  test('should handle error when parsing an invalid response object', () => {
    new Promise((resolve: Function, reject: Function) => {
      const request = createTestRequest({
        uri: '/foo/bar',
        method: 'POST',
      })
      const response = { resolve: Function, reject: Function } as any
      const next = (req: MiddlewareRequest, res: MiddlewareResponse) => {
        expect(res.error).toEqual({
          code: 0,
          statusCode: 0,
          status: 0,
          message: 'error response after retry',
          originalRequest: {
            uri: '/foo/bar',
            method: 'POST',
            body: null,
            headers: {},
          },
          retryCount: 2,
          name: 'NetworkError',
        })
        expect(res).toHaveProperty('reject')
        expect(res).toHaveProperty('resolve')
        expect(res.error.retryCount).toEqual(2)
        resolve()
      }
      // Use default options
      const httpMiddleware = createHttpMiddleware({
        host: testHost,
        enableRetry: true,
        credentialsMode: 'omit',
        retryConfig: {
          maxRetries: 2,
          retryDelay: 100,
          backoff: false,
        },
        fetch: () =>
          Promise.resolve({
            ok: true,
            text: () => Promise.reject(new Error('error response after retry')),
          }),
      } as any)

      httpMiddleware(next)(request, response)
    })
  })
})
