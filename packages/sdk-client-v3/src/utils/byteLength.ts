var Buffer = require('buffer/').Buffer

export default function byteLength<T>(body: T): string {
  if (typeof body === 'string') {
    return Buffer.byteLength(body)
  }

  if (body && typeof body === 'object') {
    return Buffer.byteLength(JSON.stringify(body))
  }

  return '0'
}
