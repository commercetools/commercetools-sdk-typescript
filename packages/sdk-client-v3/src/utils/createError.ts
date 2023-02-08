import { HttpErrorType } from '../types/types'
import getErrorByCode, { HttpError } from './errors'

type ErrorType = ErrorArgs & Partial<HttpErrorType>

type ErrorArgs = {
  statusCode: number
  message: string
}

function createError({
  statusCode,
  message,
  ...rest
}: ErrorType): HttpErrorType {
  let errorMessage = message || 'Unexpected non-JSON error response'
  if (statusCode === 404)
    errorMessage = `URI not found: ${rest.originalRequest?.uri || rest.uri}`

  const ResponseError = getErrorByCode(statusCode)
  if (ResponseError) return new ResponseError(errorMessage, rest)
  return new HttpError(statusCode, errorMessage, rest)
}

export default createError
