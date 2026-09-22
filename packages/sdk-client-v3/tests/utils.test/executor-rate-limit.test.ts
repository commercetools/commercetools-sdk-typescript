import executor from '../../src/utils/executor'

function fakeResponse(
  status: number,
  headers: Record<string, string>,
  body = ''
) {
  return {
    status,
    headers: new Headers(headers),
    text: async () => body,
  }
}

function makeRequest(httpClient: Function, retryConfig: any = {}) {
  return {
    url: 'https://api.example.commercetools.com/my-project/products',
    method: 'GET',
    httpClient,
    enableRetry: true,
    retryConfig: { retryDelay: 1, maxDelay: 50, ...retryConfig },
  } as any
}

describe('executor — gateway rate limiting', () => {
  test('surfaces the 429 status when the body is empty', async () => {
    // Regression test
    const httpClient = jest
      .fn()
      .mockResolvedValue(fakeResponse(429, { 'x-ratelimit-reset': '1' }, ''))

    const result = await executor(makeRequest(httpClient, { maxRetries: 1 }))

    expect(result.statusCode).toEqual(429)
    expect(result.data).toBeNull()
  })

  test('still parses a JSON error body (Change History shape)', async () => {
    const body = JSON.stringify({
      code: 'TooManyRequests',
      message: 'You have made too many requests. Please try again later.',
    })
    const httpClient = jest
      .fn()
      .mockResolvedValue(fakeResponse(429, { 'retry-after': '1' }, body))

    const result = await executor(makeRequest(httpClient, { maxRetries: 1 }))

    expect(result.statusCode).toEqual(429)
    expect(result.data).toEqual({
      code: 'TooManyRequests',
      message: 'You have made too many requests. Please try again later.',
    })
  })

  test('retries a 429 that carries a timing header', async () => {
    const httpClient = jest
      .fn()
      .mockResolvedValue(fakeResponse(429, { 'x-ratelimit-reset': '1' }, ''))

    await executor(makeRequest(httpClient, { maxRetries: 2 }))

    // initial attempt + 2 retries
    expect(httpClient).toHaveBeenCalledTimes(3)
  })

  test('does not retry a 429 with no timing header', async () => {
    const httpClient = jest.fn().mockResolvedValue(fakeResponse(429, {}, ''))

    const result = await executor(makeRequest(httpClient, { maxRetries: 3 }))

    expect(httpClient).toHaveBeenCalledTimes(1)
    expect(result.statusCode).toEqual(429)
  })

  test('still retries a 503 with no timing header', async () => {
    const httpClient = jest.fn().mockResolvedValue(fakeResponse(503, {}, ''))

    await executor(makeRequest(httpClient, { maxRetries: 2 }))

    expect(httpClient).toHaveBeenCalledTimes(3)
  })

  test('does not retry a 200 carrying X-RateLimit-Reset', async () => {
    // the gateway sends the header on successful responses too
    const httpClient = jest
      .fn()
      .mockResolvedValue(
        fakeResponse(200, { 'x-ratelimit-reset': '40' }, '{"count":0}')
      )

    const result = await executor(makeRequest(httpClient, { maxRetries: 3 }))

    expect(httpClient).toHaveBeenCalledTimes(1)
    expect(result.statusCode).toEqual(200)
  })

  test('waits for the server-specified delay rather than the backoff', async () => {
    const httpClient = jest
      .fn()
      .mockResolvedValue(fakeResponse(429, { 'x-ratelimit-reset': '1' }, ''))

    const start = Date.now()
    await executor(
      makeRequest(httpClient, {
        maxRetries: 1,
        retryDelay: 1,
        maxDelay: Infinity,
      })
    )
    const elapsed = Date.now() - start

    // configured backoff would be ~1ms, the header asked for 1 second.
    expect(elapsed).toBeGreaterThanOrEqual(1000)
  })
})
