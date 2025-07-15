export type Nullable<T> = T | null
export type Keys = string | number | symbol
export type JsonObject<T = unknown> = { [key in Keys]: T }
export type MiddlewareRequest = ClientRequest
export type Optional = { [k in Keys]: any }

export type Middleware = (next: Next) => (request: MiddlewareRequest) => Promise<MiddlewareResponse>

export type MiddlewareResponse<T = unknown> = {
  resolve: Function;
  reject: Function;
  body: T;
  error?: HttpErrorType;
  statusCode: number;
  headers?: Record<string, any>
  originalRequest?: MiddlewareRequest;
}

export type HttpErrorType = {
  name?: string
  message?: string
  code?: string
  status?: number
  method: MethodType
  statusCode: number
  originalRequest?: ClientRequest
  /**
    * @deprecated use `error` instead
    */
  body?: JsonObject
  error?: JsonObject
  retryCount?: number
  headers?: Record<string, any>
  [key: string]: any
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
  code?: string
  statusCode?: number
  headers?: Record<string, any>
  error?: HttpErrorType
  retryCount?: number
}

export type ClientResult<T extends object = any> = ClientResponse<T>
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
  tokenCache?: TokenCache
  httpClient?: Function
  httpClientOptions?: object
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
  tokenCacheKey?: TokenCacheOptions
}

export type TokenCache = {
  get: (tokenCacheOptions?: TokenCacheOptions) => Promise<TokenStore | undefined>
  set: (cache: TokenStore, tokenCacheOptions?: TokenCacheOptions) => Promise<void>
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
  httpClient?: Function
  httpClientOptions?: object
}

/* Request */
type RequestBaseOptions = {
  url: string
  body: string
  basicAuth: string
  request: MiddlewareRequest
  tokenCache: TokenCache
  tokenCacheKey?: TokenCacheOptions
  tokenCacheObject?: TokenStore
  httpClientOptions?: object
}

export type ExecuteRequestOptions = RequestBaseOptions & {
  next: Next
  httpClient?: Function
  userOption?: AuthMiddlewareOptions | PasswordAuthMiddlewareOptions
}

export type AuthMiddlewareBaseOptions = RequestBaseOptions & {
  request: MiddlewareRequest
  httpClient?: Function
}

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
  httpClient?: Function
  httpClientOptions?: object
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
  includeResponseHeaders?: boolean
  includeOriginalRequest?: boolean
  includeRequestInErrorResponse?: boolean
  maskSensitiveHeaderData?: boolean
  timeout?: number
  enableRetry?: boolean
  retryConfig?: RetryOptions
  httpClient?: Function
  stringBodyContentTypes?: Array<string>
  httpClientOptions?: object // will be passed as a second argument to your httpClient function for configuration
  getAbortController?: () => AbortController
}

export type RetryOptions = RetryMiddlewareOptions

export type HttpOptions = {
  url: string
  clientOptions: HttpClientOptions
  httpClient?: Function
}

export type LoggerMiddlewareOptions = {
  loggerFn?: (options: MiddlewareResponse) => void
}

export type RetryMiddlewareOptions = {
  backoff?: boolean
  maxRetries?: number
  retryDelay?: number
  maxDelay?: typeof Infinity
  retryOnAbort?: boolean
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

export type ConcurrentModificationMiddlewareOptions = {
  concurrentModificationHandlerFn?: (
    version: number,
    request: MiddlewareRequest,
    response: MiddlewareResponse
  ) => Promise<Record<string, any> | string | Uint8Array>;
}

export type BeforeExecutionMiddlewareOptions = {
  [key: string]: any;
  middleware: (options?: Omit<BeforeExecutionMiddlewareOptions, 'middleware'>) => Middleware
}

export type AfterExecutionMiddlewareOptions = {
  [key: string]: any;
  middleware: (options?: Omit<AfterExecutionMiddlewareOptions, 'middleware'>) => Middleware
}
export type TelemetryOptions = {
  apm?: Function;
  tracer?: Function;
  userAgent?: string;
  createTelemetryMiddleware: (options?: Omit<TelemetryOptions, 'createTelemetryMiddleware'>) => Middleware
}

export type IClientOptions = {
  method: MethodType;
  headers: Record<string, any>
  credentialsMode?: CredentialsMode;
  body?: Record<string, any> | string | Uint8Array;
  timeout?: number
  abortController?: AbortController
  signal?: AbortSignal,
  getAbortController?: () => AbortController
  includeOriginalRequest?: boolean
  enableRetry?: boolean
  retryConfig?: RetryOptions
  maskSensitiveHeaderData?: boolean
  httpClientOptions?: object
}

export type HttpClientOptions = IClientOptions & Optional

export type HttpClientConfig = IClientOptions & {
  url: string
  httpClient?: Function
}

type TResponse = {
  data: Record<string, any>
  message?: string
  statusCode: number
  retryCount: number
  headers: Record<string, any>
}

export type Client = {
  execute(request: ClientRequest): Promise<ClientResult>
  process<T extends object = any>(
    request: ClientRequest,
    fn: ProcessFn<T>,
    processOpt?: ProcessOptions
  ): Promise<Array<T> | Array<void>>
}

export type ProcessFn<T extends object> = (result: ClientResult<T>) => Promise<ClientResult<T>>
export type ProcessOptions = {
  limit?: number;
  sort?: string;
  accumulate?: boolean;
  total?: number;
}

export type ErrorHandlerOptions = {
  error: HttpErrorType
  request: MiddlewareRequest
  response: MiddlewareResponse
  next: Next
}

export type ErrorMiddlewareOptions = {
  handler?: (args: ErrorHandlerOptions) => Promise<MiddlewareResponse>
}

export type SuccessResult<T extends Record<string | number, Record<string, any>>> = {
  body: {
    results: Array<T>;
    count: number;
  };
  statusCode: number;
  headers?: JsonObject<string>;
}

export type IResponse = Response & { statusCode?: number; data?: object }

export type executeRequest = (request: ClientRequest) => Promise<ClientResponse>
