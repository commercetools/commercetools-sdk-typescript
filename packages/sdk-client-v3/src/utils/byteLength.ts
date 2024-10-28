var Buffer = require('buffer/').Buffer

export default function byteLength<T>(body: T): string {
  if (body && (typeof body === 'string' || body instanceof Uint8Array)) {
    return Buffer.byteLength(body)
  }

  if (body && typeof body === 'object') {
    return Buffer.byteLength(JSON.stringify(body))
  }

  return '0'
}
