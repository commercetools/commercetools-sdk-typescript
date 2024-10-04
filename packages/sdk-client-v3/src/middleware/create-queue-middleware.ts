import {
  ClientResult,
  Middleware,
  MiddlewareRequest,
  Next,
  QueueMiddlewareOptions,
} from '../types/types'

export default function createQueueMiddleware({
  concurrency = 20,
}: QueueMiddlewareOptions): Middleware {
  let runningCount = 0
  const queue: Array<() => void> = []

  const waitForSlot = (): Promise<void> => {
    if (0 >= concurrency) return Promise.resolve()
    return new Promise((resolve) => {
      const tryNext = () => {
        if (runningCount < concurrency) {
          runningCount++
          resolve()
        } else {
          queue.push(tryNext)
        }
      }
      tryNext()
    })
  }

  // Function to free up a slot after a request is completed
  const freeSlot = () => {
    runningCount--
    if (queue.length > 0) {
      const nextInQueue = queue.shift()
      if (nextInQueue) {
        nextInQueue()
      }
    }
  }

  return (next: Next) => (request: MiddlewareRequest) => {
    return waitForSlot().then(() => {
      const patchedRequest = {
        ...request,
        resolve(data: any) {
          request.resolve(data)
          freeSlot()
        },
        reject(error: any) {
          request.reject(error)
          freeSlot()
        },
      }

      // Process the next middleware
      return next(patchedRequest).finally(() => {
        freeSlot()
      })
    })
  }
}
