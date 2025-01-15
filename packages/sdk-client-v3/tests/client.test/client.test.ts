import {
  Next,
  ClientRequest,
  createClient,
  MiddlewareRequest,
  MiddlewareResponse,
  HttpErrorType,
  Process,
  Client,
  MethodType,
  ClientBuilder,
} from '../../src'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import { stringifyURLString, parseURLString } from '../../src/utils'

const createPayloadResult = (tot: number, startingId = 0) => ({
  count: tot,
  results: Array.from(Array(tot), (_, index) => ({
    id: String(index + 1 + startingId),
  })),
})

describe('validate options', () => {
  test('middlewares is required', () => {
    expect(() => createClient(null)).toThrow('Missing required options')
  })

  test('middlewares must be an array', () => {
    expect(() => createClient({ middlewares: {} as any })).toThrow(
      'Middlewares should be an array'
    )
  })

  test('middlewares must not be an empty array', () => {
    expect(() => createClient({ middlewares: [] })).toThrow(
      'You need to provide at least one middleware'
    )
  })
})

describe('api', () => {
  const middlewares = [
    (next: Next) =>
      (req: ClientRequest): Promise<MiddlewareResponse> =>
        next({ ...req, response: { body: {} } }),
  ]
  const client = createClient({ middlewares })
  const request: ClientRequest = {
    uri: '/foo',
    method: 'POST',
  }

  test('expose "execute" function', () => {
    expect(typeof client.execute).toBe('function')
  })

  test('execute should return a promise', () => {
    const promise = client.execute(request)
    expect(promise.then).toBeDefined()
  })
})

describe('execute function', () => {
  const request: MiddlewareRequest = {
    uri: '/test/products',
    method: 'GET',
    body: null,
    headers: {},
  }

  test('should throw if request is missing', () => {
    const middlewares = [
      (next: Next) =>
        (req: ClientRequest): Promise<MiddlewareResponse> =>
          next(req),
    ]

    const client = createClient({ middlewares })
    expect(() => client.execute(null)).toThrow(
      /The "exec" function requires a "Request" object/
    )
  })

  test('should throw if request uri is invalid', () => {
    const middlewares = [
      (next: Next) =>
        (req: ClientRequest): Promise<MiddlewareResponse> =>
          next(req),
    ]
    const client = createClient({ middlewares })
    const badRequest: MiddlewareRequest = {
      ...request,
      uri: 24 as any,
    }
    expect(() => client.execute(badRequest)).toThrow(
      /The "exec" Request object requires a valid uri/
    )
  })

  test('should throw if request method is invalid', () => {
    const middlewares = [
      (next: Next) =>
        (req: ClientRequest): Promise<MiddlewareResponse> =>
          next({ ...req, response: { body: {} } }),
    ]
    const client = createClient({ middlewares })
    const badRequest: MiddlewareRequest = {
      ...request,
      method: 'INVALID_METHOD' as any,
    }
    expect(() => client.execute(badRequest)).toThrow(
      /The "exec" Request object requires a valid method./
    )
  })

  test('execute and resolve a simple request', () => {
    const client = createClient({
      middlewares: [
        (next: Next) =>
          async (req: ClientRequest): Promise<MiddlewareResponse> => {
            const headers = {
              Authorization: 'Bearer 123',
            }
            return next({ ...req, headers })
          },
        (next: Next) =>
          async (req: ClientRequest): Promise<MiddlewareResponse> => {
            expect(req.headers).toEqual({ Authorization: 'Bearer 123' })
            return next({ ...req, response: { body: null } })
          },
      ],
    })

    return client.execute(request).then((response) => {
      expect(response).toHaveProperty('reject')
      expect(response).toHaveProperty('resolve')
      expect(response).toEqual(
        expect.objectContaining({
          body: null,
          error: null,
        })
      )
    })
  })

  test('execute and resolve a simple request with `originalRequest`', () => {
    const client = createClient({
      middlewares: [
        (next: Next) =>
          async (req: ClientRequest): Promise<MiddlewareResponse> => {
            const headers = {
              Authorization: 'Bearer 123',
            }
            return next({ ...req, headers, response: { body: null } })
          },
        (next: Next) =>
          async (req: ClientRequest): Promise<MiddlewareResponse> => {
            return next({
              ...req,
              includeOriginalRequest: true,
              response: { body: null },
            })
          },
      ],
    })

    return client.execute(request).then((response) => {
      expect(response).toEqual(
        expect.objectContaining({
          body: null,
          error: null,
          originalRequest: expect.objectContaining({
            uri: '/test/products',
            method: 'GET',
            body: null,
            headers: { Authorization: 'Bearer 123' },
          }),
        })
      )
      expect(response).toHaveProperty('reject')
      expect(response).toHaveProperty('resolve')
      // @ts-ignore
      expect(response.originalRequest).toHaveProperty('reject')
      // @ts-ignore
      expect(response.originalRequest).toHaveProperty('resolve')
    })
  })

  test('execute and reject a request', () => {
    const client = createClient({
      middlewares: [
        (next: Next) =>
          async (req: ClientRequest): Promise<MiddlewareResponse> => {
            const error = new Error('Invalid password')
            return next({
              ...req,
              error,
              statusCode: 400,
              response: { body: {} },
            })
          },
      ],
    })

    client
      .execute(request)
      // .then(() => null)
      .catch((error) => {
        expect(error.message).toEqual('Invalid password')
        return Promise.resolve()
      })
  })
})

describe('process', () => {
  const request: MiddlewareRequest = {
    uri: '/test/products',
    method: 'GET',
    body: null,
    headers: {},
  }

  describe('validate arguments', () => {
    const middlewares = [
      (next: Next) =>
        (req: MiddlewareRequest): Promise<MiddlewareResponse> =>
          next({ ...req, response: { body: null } }),
    ]
    const client = createClient({ middlewares })

    test('should throw if second argument missing', () => {
      // @ts-ignore - disable type error
      expect(() => client.process(request)).toThrow(
        /The "process" function accepts a "Function"/
      )
    })

    test('should throw if second argument is not a function', () => {
      // @ts-ignore - disable type error
      expect(() => client.process(request, 'foo')).toThrow(
        /The "process" function accepts a "Function"/
      )
    })

    test('should throw if request method is not `GET`', () => {
      expect(() =>
        // @ts-ignore - disable type error
        client.process({ uri: 'foo', method: 'POST' }, () => {})
      ).toThrow(/The "process" Request object requires a valid method/)
    })
  })

  test('process and resolve paginating 3 times', () => {
    let reqCount = 0
    const reqStubs = {
      0: {
        body: createPayloadResult(20),
        query: {
          sort: 'id asc',
          withTotal: 'false',
          limit: '20',
        },
      },
      1: {
        body: createPayloadResult(20),
        query: {
          sort: 'id asc',
          withTotal: 'false',
          where: 'id > "20"',
          limit: '20',
        },
      },
      2: {
        body: createPayloadResult(10),
        query: {
          sort: 'id asc',
          withTotal: 'false',
          where: 'id > "20"',
          limit: '20',
        },
      },
    }

    const client = createClient({
      middlewares: [
        (next) => async (req) => {
          const body = reqStubs[reqCount].body
          expect(parseURLString(req.uri.split('?')[1])).toEqual(
            reqStubs[reqCount].query
          )

          reqCount += 1
          return next({
            ...req,
            response: {
              body,
              statusCode: 200,
            },
          })
        },
      ],
    })

    return client
      .process(request, () => Promise.resolve('OK'))
      .then((response) => {
        expect(response).toEqual(['OK', 'OK', 'OK'])
      })
  })

  test('return only the required number of items', () => {
    let reqCount = 0
    const reqStubs = {
      0: {
        body: createPayloadResult(20),
        query: {
          sort: 'id asc',
          withTotal: 'false',
          limit: '20',
        },
      },
      1: {
        body: createPayloadResult(20),
        query: {
          sort: 'id asc',
          withTotal: 'false',
          where: 'id > "20"',
          limit: '20',
        },
      },
      2: {
        body: createPayloadResult(6),
        query: {
          sort: 'id asc',
          withTotal: 'false',
          where: 'id > "20"',
          limit: '6',
        },
      },
    }

    const client = createClient({
      middlewares: [
        (next) => async (req) => {
          const body = reqStubs[reqCount].body
          expect(parseURLString(req.uri.split('?')[1])).toEqual(
            reqStubs[reqCount].query
          )

          reqCount += 1
          return next({
            ...req,
            response: {
              body,
              statusCode: 200,
            },
          })
        },
      ],
    })

    return client
      .process(request, () => Promise.resolve('OK'), { total: 46 })
      .then((response) => {
        expect(response).toEqual(['OK', 'OK', 'OK'])
      })
  })

  test('process and resolve pagination by preserving original query', () => {
    let reqCount = 0
    const reqStubs = {
      0: {
        body: createPayloadResult(5),
        query: {
          sort: ['id asc', 'createdAt desc'],
          withTotal: 'false',
          where: 'name (en = "Foo")',
          limit: '5',
        },
      },
      1: {
        body: createPayloadResult(2),
        query: {
          sort: ['id asc', 'createdAt desc'],
          withTotal: 'false',
          where: ['id > "5"', 'name (en = "Foo")'],
          limit: '5',
        },
      },
    }

    const client = createClient({
      middlewares: [
        (next) => async (req) => {
          const body = reqStubs[reqCount].body
          expect(parseURLString(req.uri.split('?')[1])).toEqual(
            reqStubs[reqCount].query
          )

          reqCount += 1
          return next({
            ...req,
            response: {
              body,
              statusCode: 200,
            },
          })
        },
      ],
    })

    return client.process(
      {
        ...request,
        uri: `${request.uri}?${stringifyURLString({
          sort: 'createdAt desc',
          where: 'name (en = "Foo")',
          limit: 5,
        })}`,
      },
      () => Promise.resolve('OK')
    )
  })

  test('process and reject on rejection from user', () => {
    const client = createClient({
      middlewares: [
        (next) => async (req) => {
          return next({ ...req, response: { body: null, statusCode: 200 } })
        },
      ],
    })

    return client
      .process(request, () => Promise.reject(new Error('Rejection from user')))
      .then(() =>
        Promise.reject(
          new Error(
            'This function should never be called, the response was rejected'
          )
        )
      )
      .catch((error) => {
        expect(error).toEqual(new Error('Rejection from user'))
      })
  })
})

describe('process - exposed', () => {
  const request = {
    uri: '/test/products',
    method: 'GET',
    body: null,
    headers: {},
  } as any

  describe('validate arguments', () => {
    const middlewares = [
      (next: Next) => async (req: MiddlewareRequest) =>
        next({ ...req, response: { body: null } }),
    ]

    createClient({ middlewares }) as Client
    test('should throw if second argument missing', () => {
      expect(() => Process(request, null, {})).toThrow(
        /The "process" function accepts a "Function"/
      )
    })

    test('should throw if second argument is not a function', () => {
      expect(() => Process(request, undefined, {})).toThrow(
        /The "process" function accepts a "Function"/
      )
    })

    test('should throw if request method is not `GET`', () => {
      expect(() =>
        Process(
          { uri: 'foo', method: 'POST' },
          (res) => Promise.resolve(res),
          {}
        )
      ).toThrow(/The "process" Request object requires a valid method/)
    })
  })

  test('process and resolve paginating 3 times', () => {
    let reqCount = 0
    const reqStubs = {
      0: {
        body: createPayloadResult(20),
        query: {
          sort: 'id asc',
          withTotal: 'false',
          limit: '20',
        },
      },
      1: {
        body: createPayloadResult(20),
        query: {
          sort: 'id asc',
          withTotal: 'false',
          where: 'id > "20"',
          limit: '20',
        },
      },
      2: {
        body: createPayloadResult(10),
        query: {
          sort: 'id asc',
          withTotal: 'false',
          where: 'id > "20"',
          limit: '20',
        },
      },
    }

    createClient({
      middlewares: [
        (next) => async (req) => {
          const body = reqStubs[reqCount].body
          expect(parseURLString(req.uri.split('?')[1])).toEqual(
            reqStubs[reqCount].query
          )

          reqCount += 1
          return next({ ...req, response: { body, statusCode: 200 } })
        },
      ],
    })

    return Process(request, () => Promise.resolve('OK'), {}).then(
      (response) => {
        expect(response).toEqual(['OK', 'OK', 'OK'])
      }
    )
  })

  test('return only the required number of items', () => {
    let reqCount = 0
    const reqStubs = {
      0: {
        body: createPayloadResult(20),
        query: {
          sort: 'id asc',
          withTotal: 'false',
          limit: '20',
        },
      },
      1: {
        body: createPayloadResult(20),
        query: {
          sort: 'id asc',
          withTotal: 'false',
          where: 'id > "20"',
          limit: '20',
        },
      },
      2: {
        body: createPayloadResult(6),
        query: {
          sort: 'id asc',
          withTotal: 'false',
          where: 'id > "20"',
          limit: '6',
        },
      },
    }

    createClient({
      middlewares: [
        (next: Next) =>
          async (req: MiddlewareRequest): Promise<MiddlewareResponse> => {
            const body = reqStubs[reqCount].body
            expect(parseURLString(req.uri.split('?')[1])).toEqual(
              reqStubs[reqCount].query
            )

            reqCount += 1
            return next({ ...req, response: { body, statusCode: 200 } })
          },
      ],
    })

    return Process(request, () => Promise.resolve('OK'), { total: 46 }).then(
      (response) => {
        expect(response).toEqual(['OK', 'OK', 'OK'])
      }
    )
  })

  test('process and resolve pagination by preserving original query', () => {
    let reqCount = 0
    const reqStubs = {
      0: {
        body: createPayloadResult(5),
        query: {
          sort: ['id asc', 'createdAt desc'],
          withTotal: 'false',
          where: 'name (en = "Foo")',
          limit: '5',
        },
      },
      1: {
        body: createPayloadResult(2),
        query: {
          sort: ['id asc', 'createdAt desc'],
          withTotal: 'false',
          where: ['id > "5"', 'name (en = "Foo")'],
          limit: '5',
        },
      },
    }

    createClient({
      middlewares: [
        (next) => async (req) => {
          const body = reqStubs[reqCount].body
          expect(parseURLString(req.uri.split('?')[1])).toEqual(
            reqStubs[reqCount].query
          )

          reqCount += 1
          return next({ ...req, response: { body, statusCode: 200 } })
        },
      ],
    })

    return Process(
      {
        ...request,
        uri: `${request.uri}?${stringifyURLString({
          sort: 'createdAt desc',
          where: 'name (en = "Foo")',
          limit: 5,
        })}`,
      },
      () => Promise.resolve('OK'),
      {}
    )
  })

  test('process should not call fn when last page is empty', async () => {
    let reqCount = 0
    const reqStubs = {
      0: {
        body: createPayloadResult(5),
        query: {
          sort: ['id asc', 'createdAt desc'],
          withTotal: 'false',
          where: 'name (en = "Foo")',
          limit: '5',
        },
      },
      1: {
        body: createPayloadResult(5, 5),
        query: {
          sort: ['id asc', 'createdAt desc'],
          withTotal: 'false',
          where: ['id > "5"', 'name (en = "Foo")'],
          limit: '5',
        },
      },
      2: {
        body: createPayloadResult(0),
        query: {
          sort: ['id asc', 'createdAt desc'],
          withTotal: 'false',
          where: ['id > "10"', 'name (en = "Foo")'],
          limit: '5',
        },
      },
    }

    createClient({
      middlewares: [
        (next) =>
          async (req: MiddlewareRequest): Promise<MiddlewareResponse> => {
            const body = reqStubs[reqCount].body
            expect(parseURLString(req.uri.split('?')[1])).toEqual(
              reqStubs[reqCount].query
            )

            reqCount += 1
            return next({ ...req, response: { body, statusCode: 200 } })
          },
      ],
    })

    let fnCall = 0
    const processRes = await Process(
      {
        ...request,
        uri: `${request.uri}?${stringifyURLString({
          sort: 'createdAt desc',
          where: 'name (en = "Foo")',
          limit: 5,
        })}`,
      },
      (res) => {
        expect(res.body.results).toEqual(reqStubs[fnCall].body.results)
        expect(fnCall).toBeLessThan(2) // should not call fn if the last page is empty

        fnCall += 1
        return Promise.resolve(`OK${fnCall}`)
      },
      {
        accumulate: true,
      }
    )

    expect(processRes).toEqual(['OK1', 'OK2']) // results from fn calls
    expect(fnCall).toBe(2) // fn was called two times
  })

  test('process and reject on rejection from user', () => {
    createClient({
      middlewares: [
        (next) =>
          async (req: MiddlewareRequest): Promise<MiddlewareResponse> => {
            return next({ ...req, statusCode: 200, response: { body: {} } })
          },
      ],
    })

    return Process(
      request,
      () => Promise.reject(new Error('Rejection from user')),
      {}
    )
      .then(() =>
        Promise.reject(
          new Error(
            'This function should never be called, the response was rejected'
          )
        )
      )
      .catch((error) => {
        expect(error).toEqual(new Error('Rejection from user'))
      })
  })

  test('should process and project details', async () => {
    const projectKey = process.env.CTP_PROJECT_KEY
    const authMiddlewareOptions = {
      host: 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey,
      credentials: {
        clientId: process.env.CTP_CLIENT_ID || '',
        clientSecret: process.env.CTP_CLIENT_SECRET || '',
      },
      oauthUri: process.env.adminAuthUrl || '',
      scopes: [`manage_project:${projectKey}`],
      httpClient: fetch,
    }

    const httpMiddlewareOptions = {
      host: 'https://api.europe-west1.gcp.commercetools.com',
      httpClient: fetch,
    }

    const apiRoot = createApiBuilderFromCtpClient(
      new ClientBuilder()
        .withProjectKey(projectKey)
        .withClientCredentialsFlow(authMiddlewareOptions)
        .withHttpMiddleware(httpMiddlewareOptions)
        .build()
    )

    // @ts-ignore
    const request = apiRoot.withProjectKey({ projectKey }).get().request
    const fn = (data: any) => data

    Process(request, fn, {})
      /**
       * response is an array of processed results
       */
      .then((response) => {
        // @ts-ignore
        expect(response[0].body.key).toEqual(process.env.CTP_PROJECT_KEY)
        expect(response[0].error).toBe(null)
        expect(response[0].statusCode).toEqual(200)
        expect(response[0].countries).toEqual(expect.any(Array))
        expect(response[0].currencies).toEqual(expect.any(Array))
      })
      .catch(fn)
  })
})
