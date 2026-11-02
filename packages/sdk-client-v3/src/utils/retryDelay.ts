import { applyRetryAfterJitter, getRetryDelay } from './retryAfter'

export type TRetryPolicy = {
  retryCount: number
  retryDelay: number
  maxRetries: number
  backoff: boolean
  maxDelay: number
  response?: unknown
  // whether to prefer a server-specified delay (Retry-After, or X-RateLimit-Reset on a 429)
  useRetryAfter?: boolean
}

export default function calculateRetryDelay({
  retryCount,
  retryDelay,
  backoff,
  maxDelay,
  response,
  useRetryAfter = true,
}: TRetryPolicy): number {
  if (useRetryAfter) {
    const serverDelay = getRetryDelay(response)
    if (serverDelay !== null) {
      return applyRetryAfterJitter(serverDelay, maxDelay)
    }
  }

  if (backoff) {
    return retryCount !== 0 // do not increase if it's the first retry
      ? Math.min(
          Math.round((Math.random() + 1) * retryDelay * 2 ** retryCount),
          maxDelay
        )
      : retryDelay
  }

  return retryDelay
}
