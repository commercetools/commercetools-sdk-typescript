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
})
