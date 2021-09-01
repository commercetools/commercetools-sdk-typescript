import { JsonObject } from '../types/sdk.d'

export default function parseHeaders(
  headers: JsonObject<any>
): JsonObject<string> {
  if (headers.raw)
    // node-fetch
    return headers.raw()

  // Tmp fix for Firefox until it supports iterables
  if (!headers.forEach) return {}

  // whatwg-fetch
  const map: JsonObject<string> = {}
  headers.forEach((value: any, name: string | number) => {
    map[name] = value
  })
  return map
}
