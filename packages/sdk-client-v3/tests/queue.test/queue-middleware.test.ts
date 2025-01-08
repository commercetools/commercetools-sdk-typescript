import { MethodType } from '../../src'
import { createQueueMiddleware } from '../../src/middleware'

function createTestRequest(options) {
  return {
    uri: '',
    method: 'GET',
    body: null,
    headers: {},
    ...options,
  }
}

function createTestResponse(options) {
  return {
    ...options,
  }
}

function createTestMiddlewareOptions(options) {
  return {
    ...options,
  }
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

describe('createQueueMiddleware', () => {
  let next: jest.Mock
  let middleware: ReturnType<typeof createQueueMiddleware>

  beforeEach(() => {
    next = jest.fn(async (request) => {
      await delay(100)
      request.resolve('success') // Simulate resolving the request
    })

    middleware = createQueueMiddleware({ concurrency: 2 })
  })

  it('should resolve the queue if concurreny option is a zero value', async () => {
    const promises: Array<Promise<void>> = []

    const createRequest = (id: number) => ({
      resolve: jest.fn(),
      reject: jest.fn(),
      method: 'GET' as MethodType,
      id,
    })

    // Simulate 5 requests
    for (let i = 0; i < 5; i++) {
      const request = createRequest(i)
      const middleware = createQueueMiddleware({ concurrency: 0 })
      const promise = middleware(next)(request as any)
      promises.push(promise as any)
    }

    await delay(50)
    expect(next).toHaveBeenCalledTimes(5)

    await Promise.all(promises)
    expect(next).toHaveBeenCalledTimes(5)
  })

  it('should resolve the queue if concurreny option is a negative value', async () => {
    const promises: Array<Promise<void>> = []

    const createRequest = (id: number) => ({
      resolve: jest.fn(),
      reject: jest.fn(),
      method: 'GET' as MethodType,
      id,
    })

    // Simulate 5 requests
    for (let i = 0; i < 5; i++) {
      const request = createRequest(i)
      const middleware = createQueueMiddleware({ concurrency: -1 })
      const promise = middleware(next)(request as any)
      promises.push(promise as any)
    }

    await delay(50)
    expect(next).toHaveBeenCalledTimes(5)

    await Promise.all(promises)
    expect(next).toHaveBeenCalledTimes(5)
  })

  it('should process requests with concurrency limit', async () => {
    const promises: Array<Promise<void>> = []

    const createRequest = (id: number) => ({
      resolve: jest.fn(),
      reject: jest.fn(),
      id,
    })

    // Simulate 5 requests
    for (let i = 0; i < 5; i++) {
      const request = createRequest(i)
      const promise = middleware(next)(request as any)
      promises.push(promise as any)
    }

    await delay(50)

    // Ensure next is called exactly 2 times initially (due to concurrency limit of 2)
    expect(next).toHaveBeenCalledTimes(2)

    await Promise.all(promises)
    expect(next).toHaveBeenCalledTimes(5)
  })

  it('should resolve requests in the correct order', async () => {
    const createRequest = (id: number) => ({
      resolve: jest.fn(),
      reject: jest.fn(),
      method: 'POST' as MethodType,
      id,
    })

    let resolveOrder: number[] = []

    next.mockImplementation(async (request) => {
      await delay(100) // Simulate async task
      resolveOrder.push(request.id) // Track resolution order
      request.resolve(`success ${request.id}`)
    })

    const requests = [createRequest(1), createRequest(2), createRequest(3)]

    const promise1 = middleware(next)(requests[0])
    const promise2 = middleware(next)(requests[1])
    const promise3 = middleware(next)(requests[2])

    await delay(50)

    expect(next).toHaveBeenCalledTimes(2)

    await Promise.all([promise1, promise2, promise3])

    expect(resolveOrder).toEqual([1, 2, 3])
    expect(next).toHaveBeenCalledTimes(3)
  })

  it('should call resolve on successful completion', async () => {
    const request = {
      resolve: jest.fn(),
      reject: jest.fn(),
      method: 'POST' as MethodType,
    }

    await middleware(next)(request)

    expect(request.resolve).toHaveBeenCalledWith('success')
    expect(request.reject).not.toHaveBeenCalled()
  })

  it('should call reject on error', async () => {
    next.mockImplementationOnce(async (request) => {
      throw new Error('failure')
    })

    const request = {
      resolve: jest.fn(),
      reject: jest.fn(),
      method: 'POST' as MethodType,
    }

    try {
      await middleware(next)(request)
    } catch (err) {
      expect(err).toBeDefined()
      expect(err.message).toEqual('failure')
      expect(request.resolve).not.toHaveBeenCalled()
    }
  })
})
