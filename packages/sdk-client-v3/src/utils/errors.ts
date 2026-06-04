function DefineError(
  this: any,
  statusCode: number,
  message: string,
  meta: object = {}
) {
  this.code = meta['code'] ??= this.constructor.name
  this.statusCode = statusCode
  this.status = statusCode
  this.message = message

  Object.assign(this, meta)

  this.name = this.constructor.name
  this.constructor.prototype.__proto__ = Error.prototype
  if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor)
}

export function NetworkError(this: any, ...args: Array<unknown>) {
  DefineError.apply(this, [0, ...args] as any)
}

export function HttpError(this: any, ...args: Array<unknown>) {
  DefineError.apply(this, args as any)
}

export function BadRequest(this: any, ...args: Array<unknown>) {
  DefineError.apply(this, [400, ...args] as any)
}

export function Unauthorized(this: any, ...args: Array<unknown>) {
  DefineError.apply(this, [401, ...args] as any)
}

export function Forbidden(this: any, ...args: Array<unknown>) {
  DefineError.apply(this, [403, ...args] as any)
}

export function NotFound(this: any, ...args: Array<unknown>) {
  DefineError.apply(this, [404, ...args] as any)
}

export function ConcurrentModification(this: any, ...args: Array<unknown>) {
  DefineError.apply(this, [409, ...args] as any)
}

export function InternalServerError(this: any, ...args: Array<unknown>) {
  DefineError.apply(this, [500, ...args] as any)
}

export function ServiceUnavailable(this: any, ...args: Array<unknown>) {
  DefineError.apply(this, [503, ...args] as any)
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
