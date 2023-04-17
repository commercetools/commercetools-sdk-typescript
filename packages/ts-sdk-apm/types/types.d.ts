export type JsonObject<T = unknown> = { [key: string]: T }
export type MiddlewareRequest = ClientRequest
export type Middleware = (next: Dispatch) => Dispatch

export type Dispatch = (
  request: MiddlewareRequest,
  response: MiddlewareResponse
) => unknown

export type Next = (
  request: MiddlewareRequest,
  response: MiddlewareResponse
) => unknown

export type MiddlewareResponse = {
  resolve(response: JsonObject): void
  reject(error: JsonObject): void
  body?: JsonObject
  error?: HttpErrorType
  statusCode: number
  headers?: JsonObject<string>
  request?: JsonObject
}

export interface ClientRequest {
  baseUri?: string
  uri?: string
  headers?: VariableMap
  method: MethodType
  uriTemplate?: string
  pathVariables?: VariableMap
  queryParams?: VariableMap
  body?: any,
}

export type HttpErrorType = {
  name: string
  message: string
  code: number
  status: number
  statusCode: number
  originalRequest: ClientRequest
  body?: JsonObject
  retryCount?: number
  headers?: JsonObject<string>
}

export type VariableMap = {
  [key: string]: QueryParam
}

export type QueryParam =
  | string
  | string[]
  | number
  | number[]
  | boolean
  | boolean[]
  | undefined

export type MethodType =
  | 'ACL'
  | 'BIND'
  | 'CHECKOUT'
  | 'CONNECT'
  | 'COPY'
  | 'DELETE'
  | 'GET'
  | 'HEAD'
  | 'LINK'
  | 'LOCK'
  | 'M-SEARCH'
  | 'MERGE'
  | 'MKACTIVITY'
  | 'MKCALENDAR'
  | 'MKCOL'
  | 'MOVE'
  | 'NOTIFY'
  | 'OPTIONS'
  | 'PATCH'
  | 'POST'
  | 'PROPFIND'
  | 'PROPPATCH'
  | 'PURGE'
  | 'PUT'
  | 'REBIND'
  | 'REPORT'
  | 'SEARCH'
  | 'SOURCE'
  | 'SUBSCRIBE'
  | 'TRACE'
  | 'UNBIND'
  | 'UNLINK'
  | 'UNLOCK'
  | 'UNSUBSCRIBE'

export type ApmMiddlewareOptions = {
  apm: any,
  createApmMiddleware: (options?: any) => Middleware
}
