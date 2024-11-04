var Buffer = require('buffer/').Buffer

export default function byteLength<T>(body: T): string {
  if (body && (typeof body === 'string' || body instanceof Uint8Array)) {
    return Buffer.byteLength(body).toString()
  }

  if (body && typeof body === 'object') {
    return new TextEncoder().encode(JSON.stringify(body)).length.toString()
  }

  return '0'
}
