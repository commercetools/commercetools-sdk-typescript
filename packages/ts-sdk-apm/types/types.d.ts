export type JsonObject<T = unknown> = { [key: string]: T }
export type MiddlewareRequest = ClientRequest

export type Middleware = (next: Next) => (request: MiddlewareRequest) => Promise<MiddlewareResponse>

// export type Dispatch = (next: Next) => (request: MiddlewareRequest) => Promise<MiddlewareResponse>
export type Next = (request: MiddlewareRequest) => Promise<MiddlewareResponse>

export type MiddlewareResponse<T = unknown> = {
  resolve: Function;
  reject: Function;
  body: T;
  error?: HttpErrorType;
  statusCode: number;
  headers?: Record<string, any>
  originalRequest?: MiddlewareRequest;
}

export interface ClientRequest {
  baseUri?: string
  uri?: string
  headers?: Record<string, any>
  method: MethodType
  uriTemplate?: string
  pathVariables?: VariableMap
  queryParams?: VariableMap
  body?: Record<string, any> | string | Uint8Array;
  response?: ClientResponse
  resolve?: Function;
  reject?: Function;
  [key: string]: any
}

export type ClientResponse<T = any> = {
  body: T
  code?: string
  statusCode?: number
  headers?: Record<string, any>
  error?: HttpErrorType
  retryCount?: number
}

export type HttpErrorType = {
  name?: string
  message: string
  code?: string
  status?: number
  method: MethodType
  statusCode: number
  originalRequest?: ClientRequest
  body: JsonObject
  retryCount?: number
  headers?: Record<string, any>
  [key: string]: any
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
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'

export type CustomMetric = {
  newrelic?: boolean;
  datadog?: boolean;
}

export type TelemetryMiddlewareOptions = {
  apm?: Function;
  tracer?: Function;
  userAgent?: string;
  customMetrics?: CustomMetric;
  createTelemetryMiddleware: (options?: OTelemetryMiddlewareOptions) => Middleware
}

export type OTelemetryMiddlewareOptions = Omit<TelemetryMiddlewareOptions, 'createTelemetryMiddleware'>


// LEGACY TYPES
/**
 * @deprecated
 */
export type NextLegacy = (
  request: MiddlewareRequestLegacy,
  response: MiddlewareResponseLegacy
) => unknown

/**
 * @deprecated
 */
export type MiddlewareResponseLegacy = {
  resolve(response: JsonObject): void
  reject(error: JsonObject): void
  body?: JsonObject
  error?: HttpErrorType
  statusCode: number
  headers?: JsonObject<string>
  request?: JsonObject
}

/**
 * @deprecated
 */
export interface ClientRequestLegacy {
  baseUri?: string
  uri?: string
  headers?: VariableMap
  method: MethodType
  uriTemplate?: string
  pathVariables?: VariableMap
  queryParams?: VariableMap
  body?: any,
}

/**
 * @deprecated
 */
export type MiddlewareLegacy = (next: NextLegacy) => NextLegacy

/**
 * @deprecated
 */
export type MiddlewareRequestLegacy = ClientRequestLegacy