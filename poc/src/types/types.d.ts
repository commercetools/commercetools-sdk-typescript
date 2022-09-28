export type JsonObject<T = unknown> = { [key: string]: T }
export type MiddlewareRequest = ClientRequest

export type Middleware = (next: Next) => (request: MiddlewareRequest) => Promise<MiddlewareResponse> | Promise<void>

export type MiddlewareResponse = {
  resolve(response: JsonObject): void;
  reject(error: JsonObject): void;
  body?: JsonObject;
  error?: HttpErrorType;
  statusCode: number;
  headers?: JsonObject<string>;
  request?: JsonObject;
}

export type HttpErrorType = {
  name: string
  message: string
  code?: number
  status?: number
  method: MethodType
  statusCode: number
  originalRequest: ClientRequest
  body?: JsonObject
  retryCount?: number
  headers?: JsonObject<string>
}

export interface ClientRequest {
  baseUri?: string
  uri?: string
  headers?: VariableMap
  method: MethodType
  uriTemplate?: string
  pathVariables?: VariableMap
  queryParams?: VariableMap
  body?: any
  response?: ClientResponse
  resolve?: (response: JsonObject) => void;
  reject?: (error: JsonObject) => void;
}

export type Next = (request: MiddlewareRequest) => Promise<MiddlewareResponse>

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

export type QueryParam =
  | string
  | string[]
  | number
  | number[]
  | boolean
  | boolean[]
  | undefined

export type VariableMap = {
  [key: string]: QueryParam
}

export type ClientResponse<T = any> = {
  body?: T
  statusCode?: number
  headers?: JsonObject<string>
  error?: HttpErrorType
  // request?: Object
}

export type ClientResult = ClientResponse | unknown
export type ClientOptions = { middlewares: Array<Middleware> }

export type Credentials = {
  clientId: string
  clientSecret: string
  anonymousId?: string
}

export type AuthMiddlewareOptions = {
  host: string
  projectKey: string
  credentials: Credentials
  scopes?: Array<string>
  // For internal usage only
  oauthUri?: string
  /**
   * fix until we understand how to
   * type the new node-fetch version 
   */
  httpClient?: any
  tokenCache?: TokenCache
}

export type TokenCacheOptions = {
  clientId: string
  projectKey: string
  host: string
}

export type TokenStore = {
  token: string
  expirationTime: number
  refreshToken?: string
}

export type TokenCache = {
  get: (tokenCacheOptions?: TokenCacheOptions) => TokenStore
  set: (cache: TokenStore, tokenCacheOptions?: TokenCacheOptions) => void
}

export type IBuiltRequestParams = {
  basicAuth: string
  url: string
  body: string
}

export type RefreshAuthMiddlewareOptions = {
  host: string
  projectKey: string
  credentials: {
    clientId: string
    clientSecret: string
  }
  refreshToken: string
  // For internal usage only
  oauthUri?: string
  httpClient?: any
}

/* Request */
type requestBaseOptions = {
  url: string
  body: string
  basicAuth: string
  request: MiddlewareRequest
}

export type executeRequestOptions = requestBaseOptions & {
  httpClient: any
}

export type AuthMiddlewareBaseOptions = requestBaseOptions & {
  request: MiddlewareRequest
  httpClient?: any
}

export type RequestState = boolean

export type Task = {
  request: MiddlewareRequest
  next?: Next
}

export type UserAuthOptions = {
  username: string
  password: string
}

export type PasswordAuthMiddlewareOptions = {
  host: string
  projectKey: string
  credentials: {
    clientId: string
    clientSecret: string
    user: UserAuthOptions
  }
  scopes?: Array<string>
  // For internal usage only
  oauthUri?: string
  httpClient?: any
}

export type TokenInfo = {
  refresh_token: string
  access_token: string
  expires_at: number
  expires_in: number // since this will always be used to calculate the expiration time, it shouldn't be made optional
  scope?: string
  token_type?: string
}

export type Dispatch = (next: Next) => (request: MiddlewareRequest) => Promise<MiddlewareResponse>

export type HttpMiddlewareOptions = {
  host: string
  credentialsMode?: 'omit' | 'same-origin' | 'include'
  includeHeaders?: boolean
  includeResponseHeaders?: boolean
  includeOriginalRequest?: boolean
  includeRequestInErrorResponse?: boolean
  // maskSensitiveHeaderData?: boolean
  // timeout?: number
  // enableRetry?: boolean
  // retryConfig?: {
  //   maxRetries?: number
  //   retryDelay?: number
  //   backoff?: boolean
  //   maxDelay?: number
  //   retryCodes?: Array<number | string>,
  // }
  httpClient: any
  abortController?: AbortController // deprecated
  getAbortController?: () => AbortController
}

export type HttpOptions = {
  url: string;
  clientOptions: JsonObject;
  httpClient: any
}

export type LogLevel = 'WARN' | 'ERROR' | 'INFO'

export type LoggerMiddlewareOptions = {
  logLevel?: LogLevel
  maskSensitiveHeaderData?: boolean
  includeOriginalRequest?: boolean
  includeResponseHeaders?: boolean
  includeRequestInErrorResponse?: boolean
  loggerFn?: (options: ClientResponse) => void
}

export type RetryMiddlewareOptions = {
  timeout?: number
  enableRetry: boolean
  retryCount?: number
  backoff?: boolean
  maxRetries?: number
  retryDelay?: number
  maxDelay?: typeof Infinity
  retryCodes?: Array<number | string>
}

export type CorrelationIdMiddlewareOptions = {
  generate: () => string
}

/* HTTP User Agent */
export type HttpUserAgentOptions = {
  name?: string
  version?: string
  libraryName?: string
  libraryVersion?: string
  contactUrl?: string
  contactEmail?: string
  customAgent?: string
}

export type QueueMiddlewareOptions = {
  concurrency: number
}

export type executeRequest = (request: ClientRequest) => Promise<ClientResponse>
