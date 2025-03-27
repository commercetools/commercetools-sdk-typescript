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
