export function requireEnvVar(varName: string): string {
  const value = process.env[varName]
  if (value === null || value === undefined) {
    throw new Error(`environment variable ${varName} not defined`)
  }
  return value
}

export async function waitUntil(
  waitCondition: () => Promise<boolean>,
  maxRetry: number = 30,
  maxWaitingTimePerRetryInMs: number = 40000
) {
  let counter = 0
  while (true) {
    const shouldContinue = await waitCondition()
    if (shouldContinue || counter >= maxRetry) break
    else {
      await new Promise((resolve) =>
        setTimeout(
          resolve,
          Math.min(2 * counter * 1000, maxWaitingTimePerRetryInMs)
        )
      )
      counter++
    }
  }
}

export const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const waitForIndexing = async (
  fetchResource: () => Promise<any>,
  timeout = 30000,
  interval = 10000
) => {
  const start = Date.now()
  while (Date.now() - start < timeout) {
    try {
      const result = await fetchResource()
      if (result) return result // Resource is now indexed
    } catch (e) {
      /** noop */
    }

    // sleep
    await sleep(interval)
  }

  /* istanbul ignore next */
  throw new Error('Resource did not indexed within timeout')
}
