import { createAuthMiddlewareForExistingTokenFlow } from '../../src/middleware'

function createTestRequest(options) {
  return {
    url: 'http://auth-url',
    host: 'http://auth-url',
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

function createTestMiddlewareOptions(options) {
  return {
    authorization: 12345,
    ...options,
  }
}

describe('Existing Token Flow', () => {
  test('should throw an error if the provided authorization argument is not a string.', () => {
    new Promise((resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer xxx-xx')
        // expect()

        resolve(null)
      }

      const authorization = 123456 as any

      expect(
        createAuthMiddlewareForExistingTokenFlow(authorization)(next)(
          createTestRequest({})
        )
      ).rejects.toEqual(expect.any(Error))
      resolve(null)
    })
  })

  test('should call the next middleware if token exists in header and `authorization` option is not provided.', () =>
    new Promise((resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe('Bearer token')

        resolve(null)
      }

      const request = createTestRequest({})
      createAuthMiddlewareForExistingTokenFlow('', { force: false })(next)(
        createTestRequest({ headers: { Authorization: 'Bearer token' } })
      )
    }))

  test('should use the provided auth token.', () =>
    new Promise((resolve, reject) => {
      const response = createTestResponse({
        resolve,
        reject,
      })

      const next = (req): any => {
        expect(typeof req.headers).toBe('object')
        expect(req.headers.Authorization).toBe(
          'Bearer xzXCwBY2I1MD5QB3J7oJ3jOBBDXDEZpr8=='
        )

        resolve(null)
      }

      const request = createTestRequest({})
      createAuthMiddlewareForExistingTokenFlow(
        'Bearer xzXCwBY2I1MD5QB3J7oJ3jOBBDXDEZpr8==',
        { force: true }
      )(next)(createTestRequest({}))
    }))

  test('should overide existing authorization', () =>
    new Promise((resolve, rejects) => {
      const next = (req): any => {
        expect(req.headers).toEqual(
          expect.objectContaining({
            Authorization: 'Bearer xzXCwBY2I1MD5QB3J7oJ3jOBBDXDEZpr8==',
          })
        )
        expect(req.headers.Authorization).toEqual(
          'Bearer xzXCwBY2I1MD5QB3J7oJ3jOBBDXDEZpr8=='
        )
        resolve(null)
      }

      const request = createTestRequest({
        headers: { Authorization: `Bearer original-access-token` },
      })
      createAuthMiddlewareForExistingTokenFlow(
        'Bearer xzXCwBY2I1MD5QB3J7oJ3jOBBDXDEZpr8==',
        { force: true }
      )(next)(request)
    }))

  describe('`force option`', () => {
    test('should not overide authorization if force is false', () => {
      new Promise((resolve, rejects) => {
        const next = (req): any => {
          expect(req.headers).toEqual(
            expect.objectContaining({
              Authorization: 'Bearer original-access-token',
            })
          )
          expect(req.headers.Authorization).toEqual(
            'Bearer original-access-token'
          )
          resolve(null)
        }

        const request = createTestRequest({
          headers: { Authorization: `Bearer original-access-token` },
        })
        createAuthMiddlewareForExistingTokenFlow(
          'Bearer xzXCwBY2I1MD5QB3J7oJ3jOBBDXDEZpr8==',
          { force: false }
        )(next)(request)
      })
    })

    test('should overide existing authorization if `force` is true', () => {
      new Promise((resolve, rejects) => {
        const next = (req): any => {
          expect(req.headers).toEqual(
            expect.objectContaining({
              Authorization: 'Bearer xzXCwBY2I1MD5QB3J7oJ3jOBBDXDEZpr8==',
            })
          )
          expect(req.headers.Authorization).toEqual(
            'Bearer xzXCwBY2I1MD5QB3J7oJ3jOBBDXDEZpr8=='
          )
          resolve(null)
        }

        const request = createTestRequest({
          headers: { Authorization: `Bearer original-access-token` },
        })
        createAuthMiddlewareForExistingTokenFlow(
          'Bearer xzXCwBY2I1MD5QB3J7oJ3jOBBDXDEZpr8==',
          { force: true }
        )(next)(request)
      })
    })
  })
})
