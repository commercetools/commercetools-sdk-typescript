import {
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Next,
  Task,
  QueueMiddlewareOptions,
} from '../types/types'

export default function createQueueMiddleware({
  concurrency = 20,
}: QueueMiddlewareOptions): Middleware {
  let runningCount = 0
  const queue: Array<Task> = []

  const dequeue = (next: Next): Promise<MiddlewareResponse> => {
    runningCount--
    if (queue.length && runningCount <= concurrency) {
      const nextTask = queue.shift()
      runningCount++

      return next(nextTask.request)
    }
  }

  const enqueue = ({ request }: { request: MiddlewareRequest }) =>
    queue.push({ request })

  return (next: Next) => (request: MiddlewareRequest) => {
    // wrap and override resolve and reject functions
    const patchedRequest = {
      ...request,
      resolve(data: any) {
        request.resolve(data)
        dequeue(next)
      },
      reject(error: any) {
        request.reject(error)
        dequeue(next)
      },
    }

    // enqueue requests
    enqueue({ request: patchedRequest })

    if (runningCount < concurrency) {
      runningCount++
      const nextTask = queue.shift()

      return next(nextTask.request)
    }
  }
}
