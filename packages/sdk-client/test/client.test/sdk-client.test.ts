import { Process, createClient, ClientBuilder } from '../../src'
import { createApiBuilderFromCtpClient } from '../../../platform-sdk'
import {
  ClientRequest,
  ClientResponse,
  HttpErrorType,
  MiddlewareResponse,
} from '../../src/types/sdk.d'
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
    (next) =>
      (...args) =>
        next(...args),
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

describe('execute', () => {
  const request = {
    uri: '/test/products',
    method: 'GET',
    body: null,
    headers: {},
  } as any

  test('should throw if request is missing', () => {
    const middlewares = [
      (next) =>
        (...args) =>
          next(...args),
    ]
    const client = createClient({ middlewares })
    expect(() => client.execute(null)).toThrow(
      /The "exec" function requires a "Request" object/
    )
  })

  test('should throw if request uri is invalid', () => {
    const middlewares = [
      (next) =>
        (...args) =>
          next(...args),
    ]
    const client = createClient({ middlewares })
    const badRequest = {
      ...request,
      uri: 24,
    } as any
    expect(() => client.execute(badRequest)).toThrow(
      /The "exec" Request object requires a valid uri/
    )
  })

  test('should throw if request method is invalid', () => {
    const middlewares = [
      (next) =>
        (...args) =>
          next(...args),
    ]
    const client = createClient({ middlewares })
    const badRequest = {
      ...request,
      method: 'INVALID_METHOD',
    } as any
    expect(() => client.execute(badRequest)).toThrow(
      /The "exec" Request object requires a valid method./
    )
  })

  test('execute and resolve a simple request', () => {
    const client = createClient({
      middlewares: [
        (next) => (req, res) => {
          const headers = {
            Authorization: 'Bearer 123',
          }
          next({ ...req, headers }, res)
        },
        (next) => (req, res) => {
          const body = {
            id: '123',
            version: 1,
          }
          next(req, { ...res, body, statusCode: 200 })
        },
      ],
    })

    return client.execute(request).then((response) => {
      expect(response).toEqual({
        body: {
          id: '123',
          version: 1,
        },
        statusCode: 200,
      })
    })
  })

  test('execute and reject a request', async () => {
    const client = createClient({
      middlewares: [
        (next) => (req, res) => {
          const error = new Error('Invalid password') as any
          next(req, { ...res, error, statusCode: 400 })
        },
      ],
    })

    try {
      await client.execute(request)
      return await Promise.reject(
        new Error(
          'This function should never be called, the response was rejected'
        )
      )
    } catch (error_1) {
      expect(error_1.message).toEqual('Invalid password')
      return await Promise.resolve()
    }
  })

  describe('ensure correct functions are used to resolve the promise', () => {
    test('resolve', async () => {
      const customResolveSpy = jest.fn()
      const client = createClient({
        middlewares: [
          (next) => (req, res) => {
            const responseWithCustomResolver = {
              resolve() {
                customResolveSpy()
                res.resolve(null)
              },
            } as any
            next(req, responseWithCustomResolver)
          },
        ],
      })

      return client.execute(request).then(() => {
        expect(customResolveSpy).toHaveBeenCalled()
      })
    })

    test('reject', async () => {
      const customRejectSpy = jest.fn()
      const client = createClient({
        middlewares: [
          (next) => (req, res) => {
            const responseWithCustomResolver = {
              reject() {
                customRejectSpy()
                res.reject(null)
              },
              error: new Error('Oops'),
            } as any
            next(req, responseWithCustomResolver)
          },
        ],
      })

      return client.execute(request).catch(() => {
        expect(customRejectSpy).toHaveBeenCalled()
      })
    })
  })
})

describe('process', () => {
  const request = {
    uri: '/test/products',
    method: 'GET',
    body: null,
    headers: {},
  } as any

  describe('validate arguments', () => {
    const middlewares = [
      (next) =>
        (...args) =>
          next(...args),
    ]
    const client = createClient({ middlewares }) as any

    test('should throw if second argument missing', () => {
      expect(() => client.process(request)).toThrow(
        /The "process" function accepts a "Function"/
      )
    })

    test('should throw if second argument is not a function', () => {
      expect(() => client.process(request, 'foo')).toThrow(
        /The "process" function accepts a "Function"/
      )
    })

    test('should throw if request method is not `GET`', () => {
      expect(() =>
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
        (next) => (req, res) => {
          const body = reqStubs[reqCount].body
          expect(parseURLString(req.uri.split('?')[1])).toEqual(
            reqStubs[reqCount].query
          )

          reqCount += 1
          next(req, { ...res, body, statusCode: 200 })
        },
      ],
    }) as any

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
        (next) => (req, res) => {
          const body = reqStubs[reqCount].body
          expect(parseURLString(req.uri.split('?')[1])).toEqual(
            reqStubs[reqCount].query
          )

          reqCount += 1
          next(req, { ...res, body, statusCode: 200 })
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
        (next) => (req, res) => {
          // console.log(req.uri.split('?')[1], '>>>>', reqStubs[reqCount].query)
          const body = reqStubs[reqCount].body
          expect(parseURLString(req.uri.split('?')[1])).toEqual(
            reqStubs[reqCount].query
          )

          reqCount += 1
          next(req, { ...res, body, statusCode: 200 })
        },
      ],
    }) as any
    return client.process(
      {
        ...request,
        uri: `${request.uri}?${stringifyURLString({
          sort: 'createdAt desc',
          where: 'name (en = "Foo")',
          limit: 5,
        }).toString()}`,
      },
      () => Promise.resolve('OK')
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

    const client = createClient({
      middlewares: [
        (next) => (req, res) => {
          const body = reqStubs[reqCount].body
          expect(parseURLString(req.uri.split('?')[1])).toEqual(
            reqStubs[reqCount].query
          )

          reqCount += 1
          next(req, { ...res, body, statusCode: 200 })
        },
      ],
    })

    let fnCall = 0
    const processRes = await client.process(
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

  test('process and reject a request', () => {
    const client = createClient({
      middlewares: [
        (next) => (req, res) => {
          const httpError = new Error('Invalid password')
          const error: HttpErrorType = {
            name: 'error',
            message: httpError.message,
            code: 400,
            status: 400,
            statusCode: 400,
            originalRequest: req,
          }
          const _res: MiddlewareResponse = { ...res, error, statusCode: 400 }
          next(req, _res)
        },
      ],
    }) as any

    return client
      .process(request, () => Promise.resolve('OK'))
      .then(() =>
        Promise.reject(
          new Error(
            'This function should never be called, the response was rejected'
          )
        )
      )
      .catch((error) => {
        expect(error.message).toEqual('Invalid password')
        return Promise.resolve()
      })
  })

  test('process and reject on rejection from user', () => {
    const client = createClient({
      middlewares: [
        (next) => (req, res) => {
          next(req, { ...res, statusCode: 200 })
        },
      ],
    }) as any

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

// exposed process function
describe('process - exposed', () => {
  const request = {
    uri: '/test/products',
    method: 'GET',
    body: null,
    headers: {},
  } as any

  describe('validate arguments', () => {
    const middlewares = [
      (next) =>
        (...args) =>
          next(...args),
    ]

    createClient({ middlewares }) as any
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
        (next) => (req, res) => {
          const body = reqStubs[reqCount].body
          expect(parseURLString(req.uri.split('?')[1])).toEqual(
            reqStubs[reqCount].query
          )

          reqCount += 1
          next(req, { ...res, body, statusCode: 200 })
        },
      ],
    }) as any

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
        (next) => (req, res) => {
          const body = reqStubs[reqCount].body
          expect(parseURLString(req.uri.split('?')[1])).toEqual(
            reqStubs[reqCount].query
          )

          reqCount += 1
          next(req, { ...res, body, statusCode: 200 })
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
        (next) => (req, res) => {
          const body = reqStubs[reqCount].body
          expect(parseURLString(req.uri.split('?')[1])).toEqual(
            reqStubs[reqCount].query
          )

          reqCount += 1
          next(req, { ...res, body, statusCode: 200 })
        },
      ],
    }) as any

    return Process(
      {
        ...request,
        uri: `${request.uri}?${stringifyURLString({
          sort: 'createdAt desc',
          where: 'name (en = "Foo")',
          limit: 5,
        }).toString()}`,
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
        (next) => (req, res) => {
          const body = reqStubs[reqCount].body
          expect(parseURLString(req.uri.split('?')[1])).toEqual(
            reqStubs[reqCount].query
          )

          reqCount += 1
          next(req, { ...res, body, statusCode: 200 })
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

  test('process and reject a request', () => {
    createClient({
      middlewares: [
        (next) => (req, res) => {
          const httpError = new Error('Invalid password')
          const error: HttpErrorType = {
            name: 'error',
            message: httpError.message,
            code: 400,
            status: 400,
            statusCode: 400,
            originalRequest: req,
          }
          const _res: MiddlewareResponse = { ...res, error, statusCode: 400 }
          next(req, _res)
        },
      ],
    }) as any

    return Process(request, () => Promise.resolve('OK'), {})
      .then(() =>
        Promise.reject(
          new Error(
            'This function should never be called, the response was rejected'
          )
        )
      )
      .catch((error) => {
        expect(error.message).toEqual('Invalid password')
        return Promise.resolve()
      })
  })

  test('process and reject on rejection from user', () => {
    createClient({
      middlewares: [
        (next) => (req, res) => {
          next(req, { ...res, statusCode: 200 })
        },
      ],
    }) as any

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
      fetch,
    }

    const httpMiddlewareOptions = {
      host: 'https://api.europe-west1.gcp.commercetools.com',
      fetch,
    }

    const apiRoot = createApiBuilderFromCtpClient(
      new ClientBuilder()
        .withProjectKey(projectKey)
        .withClientCredentialsFlow(authMiddlewareOptions)
        .withHttpMiddleware(httpMiddlewareOptions)
        .build()
    )

    // @ts-ignore
    const request = await apiRoot.withProjectKey({ projectKey }).get().request
    const fn = (data) => data

    Process(request, fn, {})
      /**
       * response is an array of processed results
       */
      .then((response) => {
        // @ts-ignore
        expect(response[0].body.key).toEqual(process.env.CTP_PROJECT_KEY)
      })
      .catch(fn)
  })
})
