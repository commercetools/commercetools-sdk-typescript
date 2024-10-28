var Buffer = require('buffer/').Buffer

export default function byteLength<T>(body: T): string {
  if (body && typeof body === 'string') {
    return new TextEncoder().encode(body).length.toString()
  }

  if (body && (body instanceof Uint8Array || typeof body == 'object')) {
    return Buffer.byteLength(body)
  }

  return '0'
}
