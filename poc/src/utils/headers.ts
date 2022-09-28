import { JsonObject } from '../types/types'

function parse(headers: JsonObject<any>) {
  return [
    'content-type',
    'access-control-allow-origin',
    'access-control-allow-headers',
    'access-control-allow-methods',
    'access-control-expose-headers',
    'access-control-max-ag',
    'x-correlation-id',
    'server-timing',
    'date',
    'server',
    'transfer-encoding',
    'access-control-max-age',
    'content-encoding',
    'x-envoy-upstream-service-time',
    'via',
    'alt-svc',
    'connection',
  ].reduce((result: object, key: string): object => {
    let val = headers.get(key)
    if (val) result[key] = val

    return result
  }, {})

  // .reduce((result, key) => result[key] = headers.get(key))
}

export default function getHeaders(
  headers: JsonObject<any>
): JsonObject<string> {
  // node-fetch
  if (headers.raw && typeof headers.raw == 'function') return headers.raw()

  // Tmp fix for Firefox until it supports iterables
  if (!headers.forEach) return parse(headers)

  // whatwg-fetch
  const map: JsonObject<string> = {}
  return headers.forEach(
    (value: any, name: string | number) => (map[name] = value)
  )
}
