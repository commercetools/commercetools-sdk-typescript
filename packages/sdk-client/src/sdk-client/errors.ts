import { JsonObject } from '../types/sdk.d'

function defineError(
  this: any,
  statusCode: number,
  message: string,
  meta: JsonObject<any> = {}
) {
  this.status = this.statusCode = this.code = statusCode
  this.message = message
  Object.assign(this, meta)

  this.name = this.constructor.name

  this.constructor.prototype.__proto__ = Error.prototype

  if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor)
}

export function NetworkError(this: any, ...args: Array<unknown>) {
  defineError.call(
    this,
    0 /* special code to indicate network errors */,
    ...args
  )
}
export function HttpError(...args: Array<unknown>) {
  defineError.call(this, /* code will be passed as arg */ ...args)
}
export function BadRequest(this: any, ...args: Array<unknown>) {
  defineError.call(this, 400, ...args)
}
export function Unauthorized(this: any, ...args: Array<unknown>) {
  defineError.call(this, 401, ...args)
}
export function Forbidden(this: any, ...args: Array<unknown>) {
  defineError.call(this, 403, ...args)
}
export function NotFound(this: any, ...args: Array<unknown>) {
  defineError.call(this, 404, ...args)
}
export function ConcurrentModification(this: any, ...args: Array<unknown>) {
  defineError.call(this, 409, ...args)
}
export function InternalServerError(this: any, ...args: Array<unknown>) {
  defineError.call(this, 500, ...args)
}
export function ServiceUnavailable(this: any, ...args: Array<unknown>) {
  defineError.call(this, 503, ...args)
}

export default function getErrorByCode(code: number) {
  switch (code) {
    case 0:
      return NetworkError
    case 400:
      return BadRequest
    case 401:
      return Unauthorized
    case 403:
      return Forbidden
    case 404:
      return NotFound
    case 409:
      return ConcurrentModification
    case 500:
      return InternalServerError
    case 503:
      return ServiceUnavailable
    default:
      return undefined
  }
}
