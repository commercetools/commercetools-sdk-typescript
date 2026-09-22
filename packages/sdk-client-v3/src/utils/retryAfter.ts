const RETRY_AFTER_HEADER = 'retry-after'
const RATE_LIMIT_RESET_HEADERS = ['x-ratelimit-reset', 'ratelimit-reset']
const TOO_MANY_REQUESTS = 429
const RETRY_AFTER_JITTER = 0.25

function readHeader(response: any, name: string): string | null {
  const headers = response?.headers
  if (!headers) return null

  if (typeof headers.get === 'function') {
    return headers.get(name) ?? null
  }

  if (typeof headers !== 'object') return null

  const match = Object.keys(headers).find(
    (key) => key.toLowerCase() === name.toLowerCase()
  )
  if (match === undefined) return null

  const value = headers[match]
  // may have repeated headers as an array
  return Array.isArray(value) ? (value[0] ?? null) : value
}

export function parseDeltaSeconds(
  value: string | null | undefined
): number | null {
  if (value === null || value === undefined) return null

  const trimmed = String(value).trim()
  if (trimmed === '' || !/^\d+$/.test(trimmed)) return null

  const seconds = Number(trimmed)
  if (!Number.isFinite(seconds) || seconds <= 0) return null

  return seconds * 1000
}

export function parseRetryAfter(
  value: string | null | undefined,
  now: number = Date.now()
): number | null {
  const seconds = parseDeltaSeconds(value)
  if (seconds !== null) return seconds

  if (value === null || value === undefined) return null
  const trimmed = String(value).trim()
  if (trimmed === '') return null

  const timestamp = Date.parse(trimmed)
  if (Number.isNaN(timestamp)) return null

  const delay = timestamp - now
  return delay > 0 ? delay : null
}

export function getRetryDelay(
  response: any,
  now: number = Date.now()
): number | null {
  // Retry-After is the standard wherever it appears.
  const retryAfter = parseRetryAfter(
    readHeader(response, RETRY_AFTER_HEADER),
    now
  )
  if (retryAfter !== null) return retryAfter

  const status = response?.status ?? response?.statusCode
  if (status === TOO_MANY_REQUESTS) {
    for (const header of RATE_LIMIT_RESET_HEADERS) {
      const reset = parseDeltaSeconds(readHeader(response, header))
      if (reset !== null) return reset
    }
  }

  return null
}

export function hasRetryTiming(
  response: any,
  now: number = Date.now()
): boolean {
  return getRetryDelay(response, now) !== null
}

// uses positive jitter to a server-specified delay and caps it
export function applyRetryAfterJitter(
  delay: number,
  maxDelay: number,
  random: () => number = Math.random
): number {
  const jittered = Math.round(delay * (1 + random() * RETRY_AFTER_JITTER))
  return Math.min(jittered, maxDelay)
}
