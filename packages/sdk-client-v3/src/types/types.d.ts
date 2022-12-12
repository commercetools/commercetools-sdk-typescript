import { Buffer } from 'buffer/'
import fetch from 'node-fetch'
import axios from 'axios'

export type Nullable<T> = T | null
export type JsonObject<T = unknown> = { [key: string]: T }
export type MiddlewareRequest = ClientRequest

export type Middleware = (next: Next) => (request: MiddlewareRequest) => Promise<MiddlewareResponse>

export type MiddlewareResponse = {
  resolve(response: JsonObject): void;
  reject(error: JsonObject): void;
  body?: JsonObject;
  error?: HttpErrorType;
  statusCode: number;
  // headers?: JsonObject<string>;
  headers?: Record<string, any>
  request?: MiddlewareRequest;
}

export type HttpErrorType = {
  name?: string
  message: string
  code?: number
  status?: number
  method: MethodType
  statusCode: number
  originalRequest?: ClientRequest
  body?: JsonObject
  retryCount?: number
  // headers?: JsonObject<QueryParam>
  headers?: Record<string, any>
  [key: string]: any
}

export interface ClientRequest {
  baseUri?: string
  uri?: string
  // headers?: VariableMap
  headers?: Record<string, any>
  method: MethodType
  uriTemplate?: string
  pathVariables?: VariableMap
  queryParams?: VariableMap
  body?: string | Buffer
  response?: ClientResponse
  resolve?: (response: JsonObject) => void;
  reject?: (error: JsonObject) => void;
  [key: string]: any
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
  // headers?: JsonObject<string>
  headers?: Record<string, any>
  error?: HttpErrorType
  // request?: Object
}

export type ClientResult = ClientResponse
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
  httpClient?: fetch | typeof axios
  tokenCache?: TokenCache
}

export type TokenCacheOptions = {
  clientId: string
  projectKey: string
  host: string
}

export type TokenStore = {
  token: string
  expirationTime?: number
  refreshToken?: string
  tokenCacheKey?: TokenCacheOptions
}

export type TokenCache = {
  get: (tokenCacheOptions?: TokenCacheOptions) => TokenStore
  set: (cache: TokenStore, tokenCacheOptions?: TokenCacheOptions) => void
}

export type IBuiltRequestParams = {
  basicAuth: string
  url: string
  body: string
  data?: string
}

export type RefreshAuthMiddlewareOptions = {
  host: string
  projectKey: string
  credentials: {
    clientId: string
    clientSecret: string
  }
  refreshToken: string
  tokenCache?: TokenCache,
  // For internal usage only
  oauthUri?: string
  httpClient?: any
}

export type RequestStateStore = {
  get: () => RequestState
  set: (requestState: RequestState) => void
}

/* Request */
type requestBaseOptions = {
  url: string
  body: string
  basicAuth: string
  request: MiddlewareRequest
  tokenCache: TokenCache,
  requestState: RequestStateStore,
  pendingTasks: Array<Task>,
  tokenCacheKey?: TokenCacheOptions,
}

export type executeRequestOptions = requestBaseOptions & {
  next: Next
  httpClient: any
  userOption?: AuthMiddlewareOptions | PasswordAuthMiddlewareOptions
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
  tokenCache?: TokenCache,
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

export type CredentialsMode = 'omit' | 'same-origin' | 'include'

export type HttpMiddlewareOptions = {
  host: string
  credentialsMode?: CredentialsMode
  includeHeaders?: boolean
  includeResponseHeaders?: boolean
  includeOriginalRequest?: boolean
  includeRequestInErrorResponse?: boolean
  // maskSensitiveHeaderData?: boolean
  timeout?: number
  // enableRetry?: boolean
  // retryConfig?: {
  //   maxRetries?: number
  //   retryDelay?: number
  //   backoff?: boolean
  //   maxDelay?: number
  //   retryCodes?: Array<number | string>,
  // }
  httpClient: Function
  getAbortController?: () => AbortController
  httpClientOptions?: object
}

export type HttpOptions = {
  url: string
  clientOptions: IClientOptions
  httpClient: any
}

export type LogLevel = 'INFO' | 'ERROR'

export type LoggerMiddlewareOptions = {
  logLevel?: LogLevel
  maskSensitiveHeaderData?: boolean
  includeOriginalRequest?: boolean
  includeResponseHeaders?: boolean
  includeRequestInErrorResponse?: boolean
  loggerFn?: (options: MiddlewareResponse) => void
}

export type RetryMiddlewareOptions = {
  backoff?: boolean
  maxRetries?: number
  retryDelay?: number
  maxDelay?: typeof Infinity
  retryCodes?: Array<number | string>
}

export type CorrelationIdMiddlewareOptions = {
  generate?: () => string
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
  concurrency?: number
}

export type ExistingTokenMiddlewareOptions = {
  force: boolean
}

export type IClientOptions = {
  method: MethodType;
  // headers: JsonObject<QueryParam>;
  headers: Record<string, any>
  credentialsMode?: CredentialsMode;
  body?: string | Buffer
  timeout?: number
  abortController?: AbortController
  [k: string | number | symbol]: unknown
}

export type HttpClientConfig = IClientOptions & {
  url: string
  httpClient: Function
}

export type TResponse = {
  statusCode: number
  // headers: JsonObject<QueryParam>
  headers: Record<string, any>
  data: {
    statusCode?: number
    errors?: any
    error?: string
    message: string
    [k: string | number | symbol]: any
  }
  [k: string | number | symbol]: any
}

export type Client = {
  execute(request: ClientRequest): Promise<ClientResult>
  // execute: (request: MiddlewareRequest) => Promise<MiddlewareResponse>
  // process: (
  //   request: ClientRequest,
  //   fn: ProcessFn,
  //   processOpt: ProcessOptions
  // ) => Promise<any>
}

export type ErrorMiddlewareOptions = {}

export type executeRequest = (request: ClientRequest) => Promise<ClientResponse>
