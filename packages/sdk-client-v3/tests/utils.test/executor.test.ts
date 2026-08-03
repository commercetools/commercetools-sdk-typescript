import executor from '../../src/utils/executor'
import { HttpClientConfig } from '../../src/types/types'

const mockResponse = {
  data: { ok: true },
  status: 200,
  statusCode: 200,
  headers: {},
}

function createExecutorConfig(
  overrides: Partial<HttpClientConfig> & {
    httpClient?: jest.Mock
  } = {}
): HttpClientConfig {
  const httpClient =
    overrides.httpClient ?? jest.fn(() => Promise.resolve(mockResponse))

  return {
    url: 'https://api.example.com/test',
    method: 'GET',
    headers: {},
    request: {
      uri: '/test',
      method: 'GET',
      body: null,
      headers: {},
    },
    httpClient,
    ...overrides,
  }
}

describe('executor', () => {
  describe('request headers', () => {
    test('passes rest.headers to httpClient', async () => {
      const httpClient = jest.fn(() => Promise.resolve(mockResponse))

      await executor(
        createExecutorConfig({
          httpClient,
          headers: { 'X-Client-Header': 'client-value' },
        })
      )

      expect(httpClient).toHaveBeenCalledWith(
        'https://api.example.com/test',
        expect.objectContaining({
          headers: { 'X-Client-Header': 'client-value' },
        })
      )
    })

    test('merges rest.request.headers with rest.headers', async () => {
      const httpClient = jest.fn(() => Promise.resolve(mockResponse))

      await executor(
        createExecutorConfig({
          httpClient,
          headers: { 'X-Client-Header': 'client-value' },
          request: {
            uri: '/test',
            method: 'GET',
            body: null,
            headers: { 'X-Request-Header': 'request-value' },
          },
        })
      )

      expect(httpClient).toHaveBeenCalledWith(
        'https://api.example.com/test',
        expect.objectContaining({
          headers: {
            'X-Client-Header': 'client-value',
            'X-Request-Header': 'request-value',
          },
        })
      )
    })

    test('rest.request.headers override rest.headers on conflict', async () => {
      const httpClient = jest.fn(() => Promise.resolve(mockResponse))

      await executor(
        createExecutorConfig({
          httpClient,
          headers: { 'X-Shared-Header': 'client-value' },
          request: {
            uri: '/test',
            method: 'GET',
            body: null,
            headers: { 'X-Shared-Header': 'request-value' },
          },
        })
      )

      expect(httpClient).toHaveBeenCalledWith(
        'https://api.example.com/test',
        expect.objectContaining({
          headers: { 'X-Shared-Header': 'request-value' },
        })
      )
    })

    test('uses only rest.headers when rest.request.headers is undefined', async () => {
      const httpClient = jest.fn(() => Promise.resolve(mockResponse))

      await executor(
        createExecutorConfig({
          httpClient,
          headers: { Authorization: 'Bearer token' },
          request: {
            uri: '/test',
            method: 'GET',
            body: null,
            headers: undefined as unknown as Record<string, string>,
          },
        })
      )

      expect(httpClient).toHaveBeenCalledWith(
        'https://api.example.com/test',
        expect.objectContaining({
          headers: { Authorization: 'Bearer token' },
        })
      )
    })
  })

  describe('request timeout', () => {
    afterEach(() => {
      jest.useRealTimers()
    })

    test('aborts the request and reinitializes the abort controller once the timeout elapses', async () => {
      jest.useFakeTimers()

      const controllers: Array<AbortController> = []
      const getAbortController = jest.fn(() => {
        const controller = new AbortController()
        controllers.push(controller)
        return controller
      })

      // Hold the request open so the timeout is guaranteed to fire while it is
      // still in flight, rather than racing a response that resolves instantly.
      let resolveRequest!: (response: typeof mockResponse) => void
      const httpClient = jest.fn(
        () =>
          new Promise<typeof mockResponse>((resolve) => {
            resolveRequest = resolve
          })
      )

      const pending = executor(
        createExecutorConfig({ httpClient, getAbortController, timeout: 10 })
      )

      // Let the executor reach `execute()`; by then the timer has been armed.
      for (let i = 0; i < 10 && httpClient.mock.calls.length === 0; i++) {
        await Promise.resolve()
      }
      expect(httpClient).toHaveBeenCalledTimes(1)
      expect(controllers).toHaveLength(1)

      await jest.advanceTimersByTimeAsync(10)

      expect(controllers[0].signal.aborted).toBe(true)
      expect(controllers).toHaveLength(2)
      expect(controllers[1].signal.aborted).toBe(false)

      resolveRequest(mockResponse)
      await expect(pending).resolves.toEqual(
        expect.objectContaining({ data: { ok: true }, statusCode: 200 })
      )
    })
  })
})
