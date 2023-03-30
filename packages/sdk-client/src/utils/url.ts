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
  return new URLSearchParams(object).toString()
}

export function parseURLString<T>(
  url: string | URLSearchParams,
  parser: <T>(url: string | URLSearchParams) => T = urlParser
): T {
  return parser<T>(url)
}

export function stringifyURLString(
  object: string | Record<string, any> | Array<Array<string>>,
  stringifer: (
    object:
      | string
      | Record<string, any>
      | Array<Array<string>>
      | URLSearchParams
  ) => string = urlStringifier
): string {
  return urlStringifier(object)
}
