export default function byteLength<T>(body: T): string {
  if (body && typeof body === 'string') {
    return body.normalize('NFD').length.toString()
  }

  if (body && body instanceof Uint8Array) {
    return new TextDecoder().decode(body).length.toString()
  }

  if (body && typeof body === 'object') {
    return new TextEncoder().encode(JSON.stringify(body)).length.toString()
  }

  return '0'
}
