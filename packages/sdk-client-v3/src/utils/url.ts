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
  const params = new URLSearchParams(object)
  for (const [key, value] of Object.entries(object)) {
    if (Array.isArray(value)) {
      params.delete(key)
      value.filter(Boolean).forEach((v) => params.append(key, v))
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
  return urlStringifier(object)
}
