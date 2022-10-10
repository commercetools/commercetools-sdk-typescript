export type IRequest = {
  url: string
  httpClient: Function
  method: string
  body: object | string
  headers: Record<string, string>
}

export default async function executor(request: IRequest) {
  const { url, body, method, headers, httpClient } = request || {}

  return httpClient(url, {
    method,
    headers,
    body,
  })
}
