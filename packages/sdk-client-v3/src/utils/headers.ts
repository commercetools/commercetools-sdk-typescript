import { JsonObject } from '../types/types'
import { DEFAULT_HEADERS } from './constants'

function parse(headers: JsonObject<any>) {
  return DEFAULT_HEADERS.reduce((result: object, key: string): object => {
    let val = headers[key]
      ? headers[key]
      : typeof headers.get == 'function'
        ? headers.get(key)
        : null

    if (val) result[key] = val

    return result
  }, {})
}

export default function getHeaders(
  headers: JsonObject<any>
): JsonObject<string> {
  if (!headers) return null

  // node-fetch
  if (headers.raw && typeof headers.raw == 'function') return headers.raw()

  // Tmp fix for Firefox until it supports iterables
  if (!headers.forEach) return parse(headers)

  // whatwg-fetch
  const map: JsonObject<string> = {}
  headers.forEach((value: any, name: string | number) => (map[name] = value))
  return map
}
