export default function byteLength<T>(body: T): string {
  if (body && typeof body === 'string') {
    return new TextEncoder().encode(body).length.toString()
  }

  if (body && body instanceof Uint8Array) {
    return body.byteLength.toString()
  }

  if (body && typeof body === 'object') {
    return new TextEncoder().encode(JSON.stringify(body)).length.toString()
  }

  return '0'
}
