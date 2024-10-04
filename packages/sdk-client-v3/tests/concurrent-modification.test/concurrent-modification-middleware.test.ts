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
    /**
     * first call will be made to get a response
     * which will then be checked for `409`, if false
     * then call `next()` again (2nd call) to move on
     */
    expect(next).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith(request)

    expect(res).toEqual(response)
  })

  test('should modify a request with a `409` status or error code.', async () => {
    // we are trying to update with an outdated version (v2)
    const request = createTestRequest({ body: { version: 4 } })
    const errorResponse = createTestResponse({
      statusCode: 409,
      // current version is at v5
      error: { body: { errors: [{ currentVersion: 5 }] } },
    })

    // before the call version is 4
    expect(request.body.version).toEqual(4)

    // after the call that returned a 409
    const next = jest.fn((req) => {
      if (req.body.version === 5) {
        return createTestResponse({ statusCode: 200 })
      }

      return errorResponse
    })

    await createConcurrentModificationMiddleware()(next)(request)
    expect(next).toHaveBeenCalled()
    expect(next).toHaveBeenCalledTimes(2)
    expect(next).toHaveBeenCalledWith(request)

    // <--------- original request
    expect(next).toHaveBeenNthCalledWith(1, request)

    // <------- second call use modified request body
    expect(next).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        ...request,
        body: { ...request.body, version: 5 },
      })
    )
  })

  test('should call the custom function with correct version', async () => {
    const request = createTestRequest({ body: { version: 4 } })
    const errorResponse = createTestResponse({
      statusCode: 409,
      error: { body: { errors: [{ currentVersion: 5 }] } },
    })

    // after the call that returned a 409
    const next = jest.fn((req) => {
      if (req.body.version === 5) {
        return createTestResponse({ statusCode: 200 })
      }
      return errorResponse
    })

    const callbackFn = jest.fn(async (version) => {
      return JSON.stringify({ version: version })
    })

    await createConcurrentModificationMiddleware(callbackFn)(next)(request)
    expect(callbackFn).toHaveBeenCalled()
    expect(callbackFn).toHaveBeenCalledTimes(1)
    expect(callbackFn).toHaveBeenCalledWith(
      5,
      expect.objectContaining({
        body: '{"version":5}',
        headers: {},
        method: 'GET',
        uri: '',
      }),
      expect.objectContaining({
        error: { body: { errors: [{ currentVersion: 5 }] } },
        statusCode: 409,
      })
    )
  })
})
