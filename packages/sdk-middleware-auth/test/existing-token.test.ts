import { createAuthMiddlewareWithExistingToken } from '../src'

describe('Existing Token', () => {
  const response = {
    statusText: 'OK',
    status: 200,
    body: null,
    headers: {},
  }
  const restOfRequest = {
    url: '',
    method: 'GET',
    body: null,
  }
  function createRequest(options) {
    return {
      url: '',
      method: 'GET',
      body: null,
      headers: {},
      ...options,
    }
  }

  describe('Basics', () => {
    test('should not modify request if no argument passed', () => {
      const request = createRequest(null)
      const next = req => {
        expect(req).toBe(request)
      }
      const authMiddleware = createAuthMiddlewareWithExistingToken() as any
      authMiddleware(next)(request, response)
    })

    test('should throw if `authorization` is not a string', () => {
      expect(createAuthMiddlewareWithExistingToken({} as any)(null)).toThrow(
        /authorization must be a string/
      )
    })
  })

  describe('with only authorization argument', () => {
    test('should configure request header with authorization', () => {
      const next = req => {
        expect(req).toEqual(expect.objectContaining(restOfRequest))
        expect(req).toEqual(
          expect.objectContaining({
            headers: { Authorization: 'Bearer my-optimized-access-token' },
          })
        )
      }
      const request = createRequest(null)
      const authMiddleware = createAuthMiddlewareWithExistingToken(
        'Bearer my-optimized-access-token'
      ) as any
      authMiddleware(next)(request, response)
    })

    test('should overide existing authorization', () => {
      const next = req => {
        expect(req).toEqual(expect.objectContaining(restOfRequest))
        expect(req).toEqual(
          expect.objectContaining({
            headers: { Authorization: 'Bearer my-optimized-access-token' },
          })
        )
      }
      const request = createRequest({
        headers: { Authorization: 'Basic old-access-token' },
      })
      const authMiddleware = createAuthMiddlewareWithExistingToken(
        'Bearer my-optimized-access-token'
      ) as any
      authMiddleware(next)(request, response)
    })
  })

  describe('with two arguments', () => {
    test('should overide existing authorization if false is true', () => {
      const next = req => {
        expect(req).toEqual(expect.objectContaining(restOfRequest))
        expect(req).toEqual(
          expect.objectContaining({
            headers: { Authorization: 'Bearer my-optimized-access-token' },
          })
        )
      }
      const request = createRequest({
        headers: { Authorization: 'Basic old-access-token' },
      })
      const authMiddleware = createAuthMiddlewareWithExistingToken(
        'Bearer my-optimized-access-token',
        { force: true }
      ) as any
      authMiddleware(next)(request, response)
    })

    test('should not overide authorization if force is false', () => {
      const next = req => {
        expect(req).toEqual(expect.objectContaining(restOfRequest))
        expect(req).toEqual(
          expect.objectContaining({
            headers: { Authorization: 'Basic old-access-token' },
          })
        )
      }
      const request = createRequest({
        headers: { Authorization: 'Basic old-access-token' },
      })
      const authMiddleware = createAuthMiddlewareWithExistingToken(
        'Bearer my-optimized-access-token',
        { force: false }
      ) as any
      authMiddleware(next)(request, response)
    })
  })
})
