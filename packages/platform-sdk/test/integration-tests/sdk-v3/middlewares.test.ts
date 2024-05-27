import {
  authMiddlewareOptions,
  httpMiddlewareOptionsV3,
  projectKey,
} from '../test-utils'
import {
  createProductType,
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
  BeforeExecutionMiddlewareOptions,
  AfterExecutionMiddlewareOptions,
  ClientBuilder,
} from '@commercetools/ts-client/src'
import { createApiBuilderFromCtpClient } from '../../../src'
import { randomUUID } from 'crypto'

describe('Concurrent Modification Middleware', () => {
  let product
  let category
  let taxCategory
  let productType

  beforeAll(async () => {
    category = await createCategory()
    taxCategory = await ensureTaxCategory()
    productType = await createProductType(productTypeDraftForProduct)
  })

  beforeEach(async () => {
    //Published product
    const productDraft = await createProductDraft(
      category,
      taxCategory,
      productType,
      true
    )
    const productCreateResponse = await createProduct(productDraft)
    product = productCreateResponse.body
  })

  afterEach(async () => {
    await fetchAndDeleteProduct(product.id)
  })

  it('should retry the request with correct version when the first time the version is wrong', async () => {
    const ctpClientV3 = new ClientBuilderV3()
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .withConcurrentModificationMiddleware()
      .withClientCredentialsFlow(authMiddlewareOptions)
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
          version: product.version + 1,
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

  it(`should retry the request with the custom logic provided`, async () => {
    let isHandleCalled = false
    const handleConcurrentModification = async (version, request) => {
      if (request.uri.includes('/products/')) {
        isHandleCalled = true
        ;(request.body as { [key: string]: any }).version = version
        return JSON.stringify(request.body)
      } else {
        throw new Error()
      }
    }

    const ctpClientV3 = new ClientBuilderV3()
      .withHttpMiddleware(httpMiddlewareOptionsV3)
      .withConcurrentModificationMiddleware({
        concurrentModificationHandlerFn: handleConcurrentModification,
      })
      .withClientCredentialsFlow(authMiddlewareOptions)
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
          version: product.version + 1,
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
    expect(isHandleCalled).toBe(true)
  })
})

describe('Before and after execution middlewares', () => {
  it('should execute before execution middleware before after execution middleware', async () => {
    let beforeRequest
    let afterRequest
    const before = jest.fn((options: BeforeExecutionMiddlewareOptions) => {
      return (next: Next) => {
        return (req: MiddlewareRequest) => {
          beforeRequest = req
          return next(req)
        }
      }
    })
    const after = jest.fn((options: AfterExecutionMiddlewareOptions) => {
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
    expect(response.headers['x-correlation-id'][0]).toEqual(correlationId)
    expect(response.originalRequest.headers['User-Agent']).toContain(
      'test-app/commercetools-sdk-javascript-v3'
    )
  })

  it('should include request in the logs', async () => {
    let responseFromLoggerMiddleware
    const httpMiddlewareOptions = {
      ...httpMiddlewareOptionsV3,
      includeOriginalRequest: true,
    }

    const ctpClientV3 = new ClientBuilderV3()
      .withHttpMiddleware(httpMiddlewareOptions)
      .withLoggerMiddleware({
        loggerFn: (response) => {
          responseFromLoggerMiddleware = response
        },
      })
      .withClientCredentialsFlow(authMiddlewareOptions)
      .build()

    const apiRootV3 = createApiBuilderFromCtpClient(ctpClientV3).withProjectKey(
      {
        projectKey,
      }
    )

    await apiRootV3.get().execute()

    expect(responseFromLoggerMiddleware).toBeDefined()
    expect(responseFromLoggerMiddleware.originalRequest).toBeInstanceOf(Object)
    expect(
      responseFromLoggerMiddleware.originalRequest.headers['Authorization']
    ).toMatch(/^Bearer [A-Za-z0-9\-_]+$/)
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
