import { createCorrelationIdMiddleware } from '../../src/middleware'

function createTestRequest(options) {
  return {
    uri: '',
    method: 'GET',
    body: null,
    headers: {},
    ...options,
  }
}

const request = createTestRequest({
  headers: {
    Authorization: '123',
  },
})

describe('Correlation id middleware', () => {
  const correlationId = 'abc-def-123'

  test('should generate and inject `X-Correlation-ID` in header even if `generate` function is not provided', () => {
    const next = (req): any => {
      expect(req.headers['X-Correlation-ID']).toBeDefined()
      expect(typeof req.headers['X-Correlation-ID']).toEqual('string')
    }

    createCorrelationIdMiddleware({})(next)(request)
  })

  test('should call `generate()` function and inject id into the header object', () => {
    const next = (req): any => {
      expect(req.headers['X-Correlation-ID']).toBe(correlationId)
    }

    const middlewareOptions = {
      generate: jest.fn(() => correlationId),
    }

    createCorrelationIdMiddleware(middlewareOptions)(next)(request)
    expect(middlewareOptions.generate).toHaveBeenCalled()
    expect(middlewareOptions.generate).toHaveBeenCalledTimes(1)
  })

  test('retains existing headers', () => {
    const next = (req): any => {
      expect(req.headers.Authorization).toBe('123')
      expect(req.headers['X-Correlation-ID']).toBe(correlationId)
    }

    const middlewareOptions = {
      generate: jest.fn(() => correlationId),
    }

    createCorrelationIdMiddleware(middlewareOptions)(next)(request)
    expect(middlewareOptions.generate).toHaveBeenCalled()
    expect(middlewareOptions.generate).toHaveBeenCalledTimes(1)
  })
})
