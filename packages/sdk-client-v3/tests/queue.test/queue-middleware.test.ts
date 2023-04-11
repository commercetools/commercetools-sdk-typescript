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

describe('Queue', () => {
  test('correctly enqueue / resolve tasks based on concurrency', () =>
    new Promise((resolve) => {
      const resolveSpy = jest.fn()
      const rejectSpy = jest.fn()

      const request = createTestRequest({
        uri: '/foo/bar',
        ...createTestMiddlewareOptions({
          resolve: resolveSpy,
          reject: rejectSpy,
        }),
      })

      const middlewareOptions = createTestMiddlewareOptions({ concurrency: 2 })
      const queueMiddleware = createQueueMiddleware(middlewareOptions)
      let count = 0
      const responseArgs = []
      const nextCount = (req): any => {
        count += 1
        responseArgs.push(req)
      }

      // Trigger multiple concurrent dispatches (with max concurrency 2)
      queueMiddleware(nextCount)(request)
      queueMiddleware(nextCount)(request)
      // First 2 tasks should be dispatched straight away
      expect(count).toBe(2)
      // Dispatch new tasks, they won't be executed though
      queueMiddleware(nextCount)(request)
      queueMiddleware(nextCount)(request)
      // Until running tasks are resolved, no more task should run
      expect(count).toBe(2)
      // Resolve the first task. We expect a new task to be dispatched since
      // there is a free slot
      responseArgs[0].resolve()
      expect(count).toBe(3)
      // Reject the second task. We expect a new task to be dispatched since
      // there is a free slot
      responseArgs[1].reject()
      expect(count).toBe(4)
      // Trigger the remaining tasks
      responseArgs[2].resolve()
      responseArgs[3].reject()
      expect(resolveSpy).toHaveBeenCalledTimes(2)
      expect(rejectSpy).toHaveBeenCalledTimes(2)
      // All good, end the test
      resolve(null)
    }))

  test('dispatch incoming tasks with default concurrency', () =>
    new Promise((resolve) => {
      const request = createTestRequest({
        uri: '/foo/bar',
      })
      const response = createTestResponse(null)
      const middlewareOptions = createTestMiddlewareOptions(null)
      const queueMiddleware = createQueueMiddleware(middlewareOptions)
      const nextSpy = jest.fn()

      // Trigger multiple concurrent dispatches (default 20)
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      // 5
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      // 10
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      // 15
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      queueMiddleware(nextSpy)(request)
      // 20
      queueMiddleware(nextSpy)(request)

      expect(nextSpy).toHaveBeenCalledTimes(20)

      // All good, end the test
      resolve(null)
    }))
})
