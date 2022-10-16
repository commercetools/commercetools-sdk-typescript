export type TRetryPolicy = {
  retryCount: number
  retryDelay: number
  maxRetries: number
  backoff: boolean
  maxDelay: number
}

export default function calculateRetryDelay({
  retryCount,
  retryDelay,
  // maxRetries,
  backoff,
  maxDelay,
}: TRetryPolicy): number {
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

Math.min(Math.round((Math.random() + 1) * 200 * 2 ** 10), Infinity)
