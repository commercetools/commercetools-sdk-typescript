// class DefineError {
//   name: string
//   code: number
//   status: number
//   statusCode: number
//   message: string
//   constructor(statusCode: number, message: string, meta: object) {
//     this.status = this.statusCode = this.code = statusCode
//     this.message = message
//     Object.assign(this, meta)

//     this.name = this.constructor.name
//     this.constructor.prototype.__proto__ = Error.prototype

//     if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor)
//   }
// }

function DefineError(statusCode, message, meta = {}) {
  // eslint-disable-next-line no-multi-assign
  this.status = this.statusCode = this.code = statusCode
  this.message = message
  Object.assign(this, meta)

  this.name = this.constructor.name
  // eslint-disable-next-line no-proto
  this.constructor.prototype.__proto__ = Error.prototype
  if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor)
}

export function NetworkError(...args: Array<unknown>) {
  DefineError.call(this, 0, ...args)
}

export function HttpError(...args: Array<unknown>) {
  DefineError.call(this, ...args)
}

export function BadRequest(...args: Array<unknown>) {
  DefineError.call(this, 400, ...args)
}

export function Unauthorized(...args: Array<unknown>) {
  DefineError.call(this, 401, ...args)
}

export function Forbidden(...args: Array<unknown>) {
  DefineError.call(this, 403, ...args)
}

export function NotFound(...args: Array<unknown>) {
  DefineError.call(this, 404)
}

export function ConcurrentModification(...args: Array<unknown>) {
  DefineError.call(this, 409, ...args)
}

export function InternalServerError(...args: Array<unknown>) {
  DefineError.call(this, 500, ...args)
}

export function ServiceUnavailable(...args: Array<unknown>) {
  DefineError.call(this, 503, ...args)
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
