export default function byteLength<T>(body: T): string {
  if (typeof body === 'string') return body.length.toString()
  if (body && typeof body === 'object')
    return new TextEncoder().encode(JSON.stringify(body)).length.toString()
  if (body instanceof Uint8Array) return body.length.toString()
  return '0'
}
