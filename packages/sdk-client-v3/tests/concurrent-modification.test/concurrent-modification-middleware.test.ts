import { createConcurrentModificationMiddleware } from '../../src/middleware'

function createTestRequest(options) {
  return {
    uri: '',
    method: 'GET',
    body: null,
    headers: {},
    ...options,
  }
}

function createTestResponse(options) {
  return {
    ...options,
  }
}

describe('Concurrent Modification Middleware.', () => {
  test('should not modify a request with a non `409` status or error code.', async () => {
    const request = createTestRequest({ body: { version: 4 } })
    const response = createTestResponse({ statusCode: 200 })

    expect(request.body.version).toEqual(4)
    const next = jest.fn((req) => {
      expect(req.body.version).toEqual(4)
      return response
    })

    const res = await createConcurrentModificationMiddleware()(next)(request)
    expect(next).toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith(request)

    expect(res).toEqual(response)
  })

  test('should modify a request with a `409` status or error code.', async () => {
    const request = createTestRequest({ body: { version: 4 } })
    const response = createTestResponse({
      statusCode: 409,
      error: { body: { errors: [{ currentVersion: 5 }] } },
    })

    // before the call version is 4
    expect(request.body.version).toEqual(4)

    // after the call that returned a 409
    const next = jest.fn((req) => {
      // expect(req.body.version).toEqual(4) // <<-------------------- first call
      // expect(req.body.version).toEqual(5) // <<-------------------- second call

      return response
    })

    await createConcurrentModificationMiddleware()(next)(request)
    expect(next).toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(2)
    expect(next).toHaveBeenCalledWith(request)

    // <--------- original request
    expect(next).toHaveBeenNthCalledWith(1, request)

    // <------- second call use modified request body
    expect(next).toHaveBeenNthCalledWith(2, {
      ...request,
      body: { ...request.body, version: 5 },
    })
  })
})
