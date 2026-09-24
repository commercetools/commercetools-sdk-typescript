import {
  applyRetryAfterJitter,
  getRetryDelay,
  hasRetryTiming,
  parseDeltaSeconds,
  parseRetryAfter,
} from '../../src/utils/retryAfter'
import calculateRetryDelay from '../../src/utils/retryDelay'

// A fixed "now" so HTTP-date assertions are deterministic.
const NOW = Date.parse('Wed, 21 Oct 2026 07:28:00 GMT')

describe('parseDeltaSeconds', () => {
  test('parses a positive integer as seconds', () => {
    expect(parseDeltaSeconds('120')).toEqual(120_000)
  })

  test('tolerates surrounding whitespace', () => {
    expect(parseDeltaSeconds('  30  ')).toEqual(30_000)
  })

  test('treats zero as a valid instruction to retry now', () => {
    // RFC 9110 delta-seconds is non-negative, so 0 is fine and means "retry
    // immediately". Returning null would make the executor refuse to retry
    expect(parseDeltaSeconds('0')).toEqual(0)
  })

  test('rejects a value so large it overflows to Infinity in milliseconds', () => {
    const overflowing = '1' + '0'.repeat(306)
    expect(Number.isFinite(Number(overflowing))).toBe(true)
    expect(parseDeltaSeconds(overflowing)).toBeNull()
  })

  test.each([
    ['null', null],
    ['undefined', undefined],
    ['empty string', ''],
    ['zero', '0'],
    ['negative', '-5'],
    ['decimal', '1.5'],
    ['text', 'soon'],
  ])('returns null for %s', (_label, value) => {
    expect(parseDeltaSeconds(value as any)).toBeNull()
  })
})

describe('parseRetryAfter', () => {
  test('parses the delta-seconds form (what Change History sends)', () => {
    expect(parseRetryAfter('120', NOW)).toEqual(120_000)
  })

  test('parses the HTTP-date form', () => {
    expect(parseRetryAfter('Wed, 21 Oct 2026 07:28:30 GMT', NOW)).toEqual(
      30_000
    )
  })

  test('returns null for a date in the past', () => {
    expect(parseRetryAfter('Wed, 21 Oct 2026 07:27:00 GMT', NOW)).toBeNull()
  })

  test('returns null for an unparseable date, without throwing', () => {
    expect(() =>
      parseRetryAfter('Not, 99 Xxx 2026 99:99:99 GMT', NOW)
    ).not.toThrow()
    expect(parseRetryAfter('Not, 99 Xxx 2026 99:99:99 GMT', NOW)).toBeNull()
  })
})

describe('getRetryDelay — choosing between the two headers', () => {
  test('reads Retry-After (Change History, history.*)', () => {
    const response = { status: 429, headers: { 'retry-after': '5' } }
    expect(getRetryDelay(response, NOW)).toEqual(5_000)
  })

  test('reads X-RateLimit-Reset on a 429 (gateway, api.*)', () => {
    const response = { status: 429, headers: { 'x-ratelimit-reset': '40' } }
    expect(getRetryDelay(response, NOW)).toEqual(40_000)
  })

  test('ignores X-RateLimit-Reset when the request was not rate limited', () => {
    // gateway sends this header on every response
    expect(
      getRetryDelay(
        { status: 200, headers: { 'x-ratelimit-reset': '40' } },
        NOW
      )
    ).toBeNull()
    expect(
      getRetryDelay(
        { status: 404, headers: { 'x-ratelimit-reset': '60' } },
        NOW
      )
    ).toBeNull()
    expect(
      getRetryDelay(
        { status: 503, headers: { 'x-ratelimit-reset': '60' } },
        NOW
      )
    ).toBeNull()
  })

  test('reads the unprefixed RateLimit-Reset (forward compatibility, CLT-2648)', () => {
    // cloud-tools wants to drop X- prefix
    const response = { status: 429, headers: { 'ratelimit-reset': '40' } }
    expect(getRetryDelay(response, NOW)).toEqual(40_000)
  })

  test('prefers the prefixed form while both are sent', () => {
    const response = {
      status: 429,
      headers: { 'x-ratelimit-reset': '40', 'ratelimit-reset': '90' },
    }
    expect(getRetryDelay(response, NOW)).toEqual(40_000)
  })

  test('ignores the unprefixed form when not rate limited', () => {
    expect(
      getRetryDelay({ status: 200, headers: { 'ratelimit-reset': '40' } }, NOW)
    ).toBeNull()
  })

  test('prefers Retry-After when both are present', () => {
    const response = {
      status: 429,
      headers: { 'retry-after': '5', 'x-ratelimit-reset': '40' },
    }
    expect(getRetryDelay(response, NOW)).toEqual(5_000)
  })

  test('reads headers from a fetch `Headers` instance', () => {
    const response = {
      status: 429,
      headers: new Headers({ 'X-RateLimit-Reset': '40' }),
    }
    expect(getRetryDelay(response, NOW)).toEqual(40_000)
  })

  test('matches header names case-insensitively on a plain object (axios)', () => {
    const response = { status: 429, headers: { 'X-RateLimit-Reset': '40' } }
    expect(getRetryDelay(response, NOW)).toEqual(40_000)
  })

  test('takes the first value when a header repeats', () => {
    const response = { status: 429, headers: { 'retry-after': ['9', '99'] } }
    expect(getRetryDelay(response, NOW)).toEqual(9_000)
  })

  test('returns null for responses and errors with no headers', () => {
    expect(getRetryDelay({ status: 429 }, NOW)).toBeNull()
    expect(getRetryDelay(new Error('socket hang up'), NOW)).toBeNull()
    expect(getRetryDelay(null, NOW)).toBeNull()
    expect(getRetryDelay(undefined, NOW)).toBeNull()
  })
})

describe('hasRetryTiming', () => {
  test('true when the server told us when to retry', () => {
    expect(
      hasRetryTiming(
        { status: 429, headers: { 'x-ratelimit-reset': '40' } },
        NOW
      )
    ).toBe(true)
  })

  test('false for a 429 with no timing header', () => {
    expect(hasRetryTiming({ status: 429, headers: {} }, NOW)).toBe(false)
  })

  test('true for a 429 with Retry-After: 0', () => {
    expect(
      hasRetryTiming({ status: 429, headers: { 'retry-after': '0' } }, NOW)
    ).toBe(true)
  })
})

describe('applyRetryAfterJitter', () => {
  test('never returns a delay shorter than the server asked for', () => {
    for (let i = 0; i < 100; i++) {
      expect(applyRetryAfterJitter(10_000, Infinity)).toBeGreaterThanOrEqual(
        10_000
      )
    }
  })

  test('adds at most 25% jitter', () => {
    expect(applyRetryAfterJitter(10_000, Infinity, () => 1)).toEqual(12_500)
  })

  test('adds none at the low end of the random range', () => {
    expect(applyRetryAfterJitter(10_000, Infinity, () => 0)).toEqual(10_000)
  })

  test('caps at maxDelay', () => {
    expect(applyRetryAfterJitter(86_400_000, 60_000, () => 0)).toEqual(60_000)
  })

  test('caps after jitter, not before', () => {
    expect(applyRetryAfterJitter(10_000, 11_000, () => 1)).toEqual(11_000)
  })
})

describe('calculateRetryDelay', () => {
  const basePolicy = {
    retryCount: 1,
    retryDelay: 200,
    maxRetries: 3,
    backoff: true,
    maxDelay: Infinity,
  }

  test('prefers a server-specified delay over exponential backoff', () => {
    const delay = calculateRetryDelay({
      ...basePolicy,
      response: { status: 429, headers: { 'x-ratelimit-reset': '30' } },
    })

    // Backoff at retryCount 1 would be 400-800ms, in header it's 30s
    expect(delay).toBeGreaterThanOrEqual(30_000)
    expect(delay).toBeLessThanOrEqual(37_500)
  })

  test('honours Retry-After from Change History', () => {
    const delay = calculateRetryDelay({
      ...basePolicy,
      response: { status: 429, headers: { 'retry-after': '10' } },
    })

    expect(delay).toBeGreaterThanOrEqual(10_000)
  })

  test('caps the server delay at maxDelay', () => {
    const delay = calculateRetryDelay({
      ...basePolicy,
      maxDelay: 5_000,
      response: { status: 429, headers: { 'x-ratelimit-reset': '3600' } },
    })

    expect(delay).toEqual(5_000)
  })

  test('falls back to backoff for a 503 with no timing header', () => {
    const delay = calculateRetryDelay({
      ...basePolicy,
      response: { status: 503, headers: {} },
    })

    // exponential: round((random()+1) * 200 * 2**1) => 400..800
    expect(delay).toBeGreaterThanOrEqual(400)
    expect(delay).toBeLessThanOrEqual(800)
  })

  test('falls back to backoff when the header is malformed', () => {
    const delay = calculateRetryDelay({
      ...basePolicy,
      response: { status: 429, headers: { 'x-ratelimit-reset': 'whenever' } },
    })

    expect(delay).toBeLessThanOrEqual(800)
  })

  test('ignores server timing when respectRetryAfter is false', () => {
    const delay = calculateRetryDelay({
      ...basePolicy,
      useRetryAfter: false,
      response: { status: 429, headers: { 'x-ratelimit-reset': '30' } },
    })

    expect(delay).toBeLessThanOrEqual(800)
  })

  test('preserves existing behaviour when no response is supplied', () => {
    expect(calculateRetryDelay({ ...basePolicy, retryCount: 0 })).toEqual(200)
    expect(calculateRetryDelay({ ...basePolicy, backoff: false })).toEqual(200)
  })
})
