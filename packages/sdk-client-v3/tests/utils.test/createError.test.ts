import { HttpErrorType, MethodType } from '../../src'
import { createError } from '../../src/utils'

type ErrorType = ErrorArgs & Partial<HttpErrorType>
type ErrorArgs = {
  statusCode: number
  message: string
  originalRequest?: {
    uri: string
    method: MethodType
  }
}

const errorObject = (errorArgs = {}): ErrorType => ({
  statusCode: 404,
  message: 'resource not found.',
  originalRequest: {
    uri: '/error-path-uri',
    method: 'GET',
  },
  ...errorArgs,
})

describe('createError', () => {
  test('a 404 error', () => {
    const _error = errorObject()
    const errorResponse = createError(_error)
    expect(errorResponse.code).toEqual(404)
    expect(errorResponse.status).toEqual(404)
    expect(errorResponse.statusCode).toEqual(404)
    expect(errorResponse.name).toEqual('NotFound')
    expect(errorResponse instanceof Error).toEqual(true)
    expect(errorResponse.message).toEqual('URI not found: /error-path-uri')
  })

  test('a 400 error', () => {
    const _error = errorObject({ statusCode: 400, message: 'Bad request.' })
    const errorResponse = createError(_error)
    expect(errorResponse.code).toEqual(400)
    expect(errorResponse.status).toEqual(400)
    expect(errorResponse.statusCode).toEqual(400)
    expect(errorResponse.name).toEqual('BadRequest')
    expect(errorResponse.message).toEqual('Bad request.')
    expect(errorResponse instanceof Error).toEqual(true)
  })

  test('a network error', () => {
    const _error = errorObject({ statusCode: 0, message: 'Network error.' })
    const errorResponse = createError(_error)

    expect(errorResponse.code).toEqual(0)
    expect(errorResponse.status).toEqual(0)
    expect(errorResponse.statusCode).toEqual(0)
    expect(errorResponse.name).toEqual('NetworkError')
    expect(errorResponse.message).toEqual('Network error.')
    expect(errorResponse instanceof Error).toEqual(true)
  })

  test('a 401 error', () => {
    const _error = errorObject({
      statusCode: 401,
      message: 'Unauthorized client request.',
    })

    const errorResponse = createError(_error)

    expect(errorResponse.code).toEqual(401)
    expect(errorResponse.status).toEqual(401)
    expect(errorResponse.statusCode).toEqual(401)
    expect(errorResponse.name).toEqual('Unauthorized')
    expect(errorResponse.message).toEqual('Unauthorized client request.')
    expect(errorResponse instanceof Error).toEqual(true)
  })

  test('a 403 error', () => {
    const _error = errorObject({
      statusCode: 403,
      message: 'Forbidden client request.',
    })

    const errorResponse = createError(_error)

    expect(errorResponse.code).toEqual(403)
    expect(errorResponse.status).toEqual(403)
    expect(errorResponse.statusCode).toEqual(403)
    expect(errorResponse.name).toEqual('Forbidden')
    expect(errorResponse.message).toEqual('Forbidden client request.')
    expect(errorResponse instanceof Error).toEqual(true)
  })

  test('a 409 error', () => {
    const _error = errorObject({
      statusCode: 409,
      message: 'Concurrent modification error.',
    })

    const errorResponse = createError(_error)

    expect(errorResponse.code).toEqual(409)
    expect(errorResponse.status).toEqual(409)
    expect(errorResponse.statusCode).toEqual(409)
    expect(errorResponse.name).toEqual('ConcurrentModification')
    expect(errorResponse.message).toEqual('Concurrent modification error.')
    expect(errorResponse instanceof Error).toEqual(true)
  })

  test('a 500 error', () => {
    const _error = errorObject({
      statusCode: 500,
      message: 'Internal server error.',
    })

    const errorResponse = createError(_error)

    expect(errorResponse.code).toEqual(500)
    expect(errorResponse.status).toEqual(500)
    expect(errorResponse.statusCode).toEqual(500)
    expect(errorResponse.name).toEqual('InternalServerError')
    expect(errorResponse.message).toEqual('Internal server error.')
    expect(errorResponse instanceof Error).toEqual(true)
  })

  test('a 503 error', () => {
    const _error = errorObject({
      statusCode: 503,
      message: 'Service unavailable, try again later.',
    })

    const errorResponse = createError(_error)

    expect(errorResponse.code).toEqual(503)
    expect(errorResponse.status).toEqual(503)
    expect(errorResponse.statusCode).toEqual(503)
    expect(errorResponse.name).toEqual('ServiceUnavailable')
    expect(errorResponse.message).toEqual(
      'Service unavailable, try again later.'
    )
    expect(errorResponse instanceof Error).toEqual(true)
  })

  test('a 504 (generic) error', () => {
    const _error = errorObject({
      statusCode: 504,
      message: 'Gateway timeout.',
    })

    const errorResponse = createError(_error)

    expect(errorResponse.code).toEqual(504)
    expect(errorResponse.status).toEqual(504)
    expect(errorResponse.statusCode).toEqual(504)
    expect(errorResponse.name).toEqual('HttpError')
    expect(errorResponse.message).toEqual('Gateway timeout.')
    expect(errorResponse instanceof Error).toEqual(true)
  })
})
