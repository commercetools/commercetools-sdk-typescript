function isDefined<T>(value: T | undefined | null): value is T {
  return typeof value !== 'undefined' && value !== null
}

function clean<T = { [k: string]: any }>(value: T) {
  if (!isDefined(value)) return ''
  if (typeof value == 'string') return value
  return Object.fromEntries(
    Object.entries(value).filter(
      ([_, value]) => ![null, undefined, ''].includes(value)
    )
  ) as T
}

function urlParser<T>(url: string | URLSearchParams): T {
  const object = {} as T
  const data = new URLSearchParams(url)
  for (let x of data.keys()) {
    if (data.getAll(x).length > 1) {
      object[x] = data.getAll(x)
    } else {
      object[x] = data.get(x)
    }
  }

  return object
}

function urlStringifier(
  object: string | Record<string, any> | Array<Array<string>> | URLSearchParams
): string {
  object = clean(object)
  if (!object) return ''

  const params = new URLSearchParams(object)
  for (const [key, value] of Object.entries(object)) {
    if (Array.isArray(value)) {
      params.delete(key)
      value.filter(isDefined).forEach((v) => params.append(key, v))
    }
  }

  return params.toString()
}

export function parseURLString<T>(
  url: string | URLSearchParams,
  parser: <T>(url: string | URLSearchParams) => T = urlParser
): T {
  return parser<T>(url)
}

export function stringifyURLString(
  object: string | Record<string, any> | Array<Array<string>>,
  stringifier: (
    object:
      | string
      | Record<string, any>
      | Array<Array<string>>
      | URLSearchParams
  ) => string = urlStringifier
): string {
  return stringifier(object)
}
