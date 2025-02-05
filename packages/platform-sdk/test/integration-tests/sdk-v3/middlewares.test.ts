import {
  authMiddlewareOptions,
  authMiddlewareOptionsV3,
  httpMiddlewareOptionsV3,
  projectKey,
} from '../test-utils'
import {
  ensureProductType,
  productTypeDraftForProduct,
} from '../product-type/product-type-fixture'
import {
  createProduct,
  createProductDraft,
  fetchAndDeleteProduct,
} from '../product/product-fixture'
import { createCategory } from '../category/category-fixture'
import { ensureTaxCategory } from '../tax-category/tax-category-fixture'
import {
  ClientBuilder as ClientBuilderV3,
  MiddlewareRequest,
  Next,
  ClientBuilder,
  type HttpMiddlewareOptions,
} from '@commercetools/ts-client/src'
import { createApiBuilderFromCtpClient } from '../../../src'
import { randomUUID } from 'crypto'
import axios from 'axios'

import * as matchers from 'jest-extended'
expect.extend(matchers)

describe('Concurrent Modification Middleware', () => {
  let product
  let category
  let taxCategory
  let productType

  beforeAll(async () => {
    category = await createCategory()
    taxCategory = await ensureTaxCategory()
    productType = await ensureProductType(productTypeDraftForProduct)

    // Published product
    const productDraft = await createProductDraft(
      category,
      taxCategory,
      productType,
      true
    )

    const productCreateResponse = await createProduct(productDraft)
    product = productCreateResponse.body
  })

  afterAll(async () => {
    await fetchAndDeleteProduct(product.id)
  })

  it('should not retry if the first attempt returned a `200` status code.', async () => {
    const ctpClientV3 = new ClientBuilderV3()
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .withConcurrentModificationMiddleware()
      .withClientCredentialsFlow(authMiddlewareOptionsV3)
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(ctpClientV3).withProjectKey(
      {
        projectKey,
      }
    )

    const productUpdateResponse = await apiRootV3
      .products()
      .withId({ ID: product.id })
      .post({
        body: {
          version: product.version,
          actions: [
            {
              action: 'changeName',
              name: { en: 'test-name' + new Date().getTime() },
            },
          ],
        },
      })
      .execute()
    expect(productUpdateResponse.statusCode).toBe(200)
  })

  it('should trigger and fix a concurrent error', async () => {
    async function fn(version: number, request: MiddlewareRequest, response) {
      expect(response.statusCode).toEqual(409)
      expect(response.error.name).toEqual('ConcurrentModification')

      // update version
      request.body = {
        ...(request.body as object),
        version,
      }

      return JSON.stringify(request.body)
    }

    const ctpClientV3 = new ClientBuilderV3()
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .withConcurrentModificationMiddleware({
        concurrentModificationHandlerFn: fn,
      })
      .withClientCredentialsFlow(authMiddlewareOptionsV3)
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(ctpClientV3).withProjectKey(
      {
        projectKey,
      }
    )

    try {
      const productUpdateResponse = await apiRootV3
        .products()
        .withId({ ID: product.id })
        .post({
          body: {
            version: product.version - 2,
            actions: [
              {
                action: 'changeName',
                name: { en: 'test-name' + new Date().getTime() },
              },
            ],
          },
        })
        .execute()
      expect(productUpdateResponse.statusCode).toBe(200)
    } catch (e) {
      /** noop */
    }
  })

  it(`should retry the request with the custom logic provided`, async () => {
    const concurrentModificationHandlerFn = async (
      version: number,
      request: MiddlewareRequest,
      response
    ) => {
      if ((request.uri as string).includes('/products/')) {
        ;(request.body as { [key: string]: any }).version = version

        expect(request).toEqual(
          expect.objectContaining({
            method: 'POST',
            uriTemplate: '/{projectKey}/products/{ID}',
            baseUri: 'https://api.europe-west1.gcp.commercetools.com',
          })
        )

        expect(response.statusCode).toEqual(409)
        return JSON.stringify(request.body)
      } else {
        throw new Error()
      }
    }

    const ctpClientV3 = new ClientBuilderV3()
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .withConcurrentModificationMiddleware({ concurrentModificationHandlerFn })
      .withClientCredentialsFlow(authMiddlewareOptions)
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(ctpClientV3).withProjectKey(
      {
        projectKey,
      }
    )

    await apiRootV3
      .products()
      .withId({ ID: product.id })
      .post({
        body: {
          version: +product.version + 1,
          actions: [
            {
              action: 'changeName',
              name: { en: 'test-name' + new Date().getTime() },
            },
          ],
        },
      })
      .execute()
      .catch((e) => e)
  })

  // https://commercetools.atlassian.net/browse/SUPPORT-30038
  it('should retry with correct bearer token when maskSensitiveHeaderData is true', async () => {
    async function concurrentModificationHandlerFn(
      version: number,
      request: MiddlewareRequest
    ) {
      expect(request.headers.Authorization).toMatch(/^Bearer (?!\*+$)([^\s]+)$/)

      // update version
      request.body = {
        ...(request.body as object),
        version,
      }

      return JSON.stringify(request.body)
    }

    const ctpClientV3 = new ClientBuilderV3()
      .withHttpMiddleware({
        ...httpMiddlewareOptionsV3,
        maskSensitiveHeaderData: true,
      })
      .withConcurrentModificationMiddleware({ concurrentModificationHandlerFn })
      .withClientCredentialsFlow(authMiddlewareOptions)
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(ctpClientV3).withProjectKey(
      {
        projectKey,
      }
    )

    try {
      await apiRootV3
        .products()
        .withId({ ID: product.id })
        .post({
          body: {
            version: +product.version + 1,
            actions: [
              {
                action: 'changeName',
                name: { en: 'test-name' + new Date().getTime() },
              },
            ],
          },
        })
        .execute()
    } catch (e) {
      /** noop */
    }
  })
})

describe('Http clients and http client options', () => {
  it('Axios should throw error internally and cut off subsequent execution', async () => {
    let isCalled = false

    const after = () => {
      return (next: Next) => {
        return (request: MiddlewareRequest) => {
          isCalled = true
          return next(request)
        }
      }
    }

    const http: HttpMiddlewareOptions = {
      ...httpMiddlewareOptionsV3,
      httpClient: axios,
      host: 'https://commercetools.com', // should fail (404 incorrect host)
      httpClientOptions: {
        validateStatus: () => false, // axios default
      },
    }

    const v3Client = new ClientBuilderV3()
      .withClientCredentialsFlow(authMiddlewareOptionsV3)
      .withHttpMiddleware(http)
      // should not be called (since axios will throw internal error)
      .withAfterExecutionMiddleware({ middleware: after })
      .build()

    const api = createApiBuilderFromCtpClient(v3Client).withProjectKey({
      projectKey,
    })

    await api
      .get()
      .execute()
      .catch(() => null)
    expect(isCalled).toBe(false)
  })

  it('Axios Should not throw error internally, continue executions', async () => {
    let isCalled = false

    const after = () => {
      return (next: Next) => {
        return (request: MiddlewareRequest) => {
          isCalled = true
          return next(request)
        }
      }
    }

    const auth = {
      ...authMiddlewareOptionsV3,
    }

    const http: HttpMiddlewareOptions = {
      ...httpMiddlewareOptionsV3,
      httpClient: axios,
      host: 'https://commercetools.com', // should fail (404 incorrect host)
      httpClientOptions: {
        validateStatus: () => true, // change axios default
      },
    }

    const v3Client = new ClientBuilderV3()
      .withClientCredentialsFlow(auth)
      .withHttpMiddleware(http)
      // should be called (since axios won't throw internal error)
      .withAfterExecutionMiddleware({ middleware: after })
      .build()

    const api = createApiBuilderFromCtpClient(v3Client).withProjectKey({
      projectKey,
    })

    await api
      .get()
      .execute()
      .catch(() => null)
    expect(isCalled).toBe(true)
  })
})

describe('Before and after execution middlewares', () => {
  it('should execute before execution middleware before after execution middleware', async () => {
    let beforeRequest
    let afterRequest
    const before = jest.fn(() => {
      return (next: Next) => {
        return (req: MiddlewareRequest) => {
          beforeRequest = req
          return next(req)
        }
      }
    })
    const after = jest.fn(() => {
      return (next: Next) => {
        return (req: MiddlewareRequest) => {
          afterRequest = req
          return next(req)
        }
      }
    })

    const ctpClientV3 = new ClientBuilderV3()
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withBeforeExecutionMiddleware({ middleware: before })
      .withAfterExecutionMiddleware({ middleware: after })
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(ctpClientV3).withProjectKey(
      {
        projectKey,
      }
    )
    await apiRootV3.get().execute()

    expect(before).toHaveBeenCalledBefore(after)
    expect(beforeRequest.headers).toBeDefined()
    expect(beforeRequest.headers.Authorization).toMatch(
      /^Bearer [A-Za-z0-9\-_]+$/
    )
    expect(afterRequest.response).toBeDefined()
  })
})

describe('Correlation ID and user agent middlewares', () => {
  it('should add correlation ID and user agent to the request/response', async () => {
    const correlationId = randomUUID()

    const httpMiddlewareOptions = {
      ...httpMiddlewareOptionsV3,
      includeOriginalRequest: true,
    }

    const ctpClientV3 = new ClientBuilderV3()
      .withUserAgentMiddleware({ name: 'test-app', version: '1.0.0' })
      .withCorrelationIdMiddleware({ generate: () => correlationId })
      .withHttpMiddleware(httpMiddlewareOptions)
      .withClientCredentialsFlow(authMiddlewareOptions)
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(ctpClientV3).withProjectKey(
      {
        projectKey,
      }
    )

    const response = await apiRootV3.get().execute()
    expect(response.headers?.['x-correlation-id']).toEqual(correlationId)
    expect((response?.originalRequest as any).headers['User-Agent']).toContain(
      'test-app/commercetools-sdk-javascript-v3'
    )
  })

  it('should include request in the logs', async () => {
    const httpMiddlewareOptions = {
      ...httpMiddlewareOptionsV3,
      includeOriginalRequest: true,
    }

    const ctpClientV3 = new ClientBuilderV3()
      .withHttpMiddleware(httpMiddlewareOptions)
      .withLoggerMiddleware({
        loggerFn: (response) => {
          expect(response.statusCode).toEqual(200)
          expect(response).toHaveProperty('originalRequest')
          expect(response.originalRequest).toBeInstanceOf(Object)
          expect(response).toBeDefined()
          expect(response.originalRequest?.headers?.['Authorization']).toMatch(
            /^Bearer [A-Za-z0-9\-_]+$/
          )
        },
      })
      .withClientCredentialsFlow(authMiddlewareOptionsV3)
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(ctpClientV3).withProjectKey(
      {
        projectKey,
      }
    )

    await apiRootV3.get().execute()
  })
})

describe('Telemetry Middleware', () => {
  test('should call functions passed in withTelemetryMiddleware', async () => {
    const telemetryMiddlewareCalled = jest.fn()

    const createTelemetryMiddleware = () => {
      return (next: Next) => {
        return (req: MiddlewareRequest) => {
          telemetryMiddlewareCalled()
          return next(req)
        }
      }
    }
    const client = new ClientBuilder()
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .withTelemetryMiddleware({
        createTelemetryMiddleware,
      })
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(client).withProjectKey({
      projectKey,
    })

    await apiRootV3.get().execute()

    expect(telemetryMiddlewareCalled).toHaveBeenCalled()
  })
})

describe('Custom middleware', () => {
  test('Should call custom middleware', async () => {
    const customMiddlewareCalled = jest.fn()

    const createMiddleware = () => {
      return (next: Next) => {
        return (req: MiddlewareRequest) => {
          customMiddlewareCalled()
          return next(req)
        }
      }
    }
    const client = new ClientBuilder()
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .withMiddleware(createMiddleware())
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(client).withProjectKey({
      projectKey,
    })

    await apiRootV3.get().execute()

    expect(customMiddlewareCalled).toHaveBeenCalled()
  })
})
