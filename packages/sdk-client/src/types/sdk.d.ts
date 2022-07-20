export type JsonObject<T = unknown> = { [key: string]: T }
export type Nullable<T> = T | null;
export type Credentials = {
  clientId: string
  clientSecret: string
  anonymousId?: string
}

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

export type RequestOptions = {
  [key: string]: any
}

export type executeRequest = (request: ClientRequest) => Promise<ClientResponse>

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

/* Middlewares */
export type MiddlewareRequest = ClientRequest

export type MiddlewareResponse = {
  resolve(response: JsonObject): void
  reject(error: JsonObject): void
  body?: JsonObject
  error?: HttpErrorType
  statusCode: number
  headers?: JsonObject<string>
  request?: JsonObject
}

export type Dispatch = (
  request: MiddlewareRequest,
  response: MiddlewareResponse
) => unknown

export type Middleware = (next: Dispatch) => Dispatch
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

export type ClientResponse<T = any> = {
  body?: T
  statusCode?: number
  headers?: JsonObject<string>
  error?: HttpErrorType
  request?: Object
}


export type AuthRequest = {
  uri: string
  body: string
  basicAuth: string
  authType: string
  headers?: JsonObject<string>
}


export type SuccessResult = {
  body: {
    results: JsonObject<JsonObject<string>>
    count: number
  }
  statusCode: number
  headers?: JsonObject<string>
}

export type ClientResult = SuccessResult | HttpErrorType

export type ProcessFn = (result: SuccessResult) => Promise<any>

export type ProcessOptions = {
  accumulate?: boolean
  total?: number
}

export type Client = {
  execute: (request: ClientRequest) => Promise<any>
  process: (
    request: ClientRequest,
    fn: ProcessFn,
    processOpt: ProcessOptions
  ) => Promise<any>
}

export type ValiadateOption = {
  allowedMethods: MethodType
}

export type ClientOptions = {
  middlewares: Array<Middleware>
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
  fetch?: any
  tokenCache?: TokenCache
}

export type AuthOptions = {
  host: string
  token?: string
  authType?: string
  projectKey?: string
  disableRefreshToken?: boolean
  credentials: {
    clientId: string
    clientSecret: string
  }
  headers?: JsonObject<string>
  scopes?: Array<string>
  fetch?: any
}

export type CustomAuthOptions = {
  host?: string
  token?: string
  authType?: string
  projectKey?: string
  disableRefreshToken?: boolean
  credentials?: {
    clientId: string
    clientSecret: string
  }
  headers?: JsonObject<string>
  scopes?: Array<string>
  fetch?: any
}

export type TokenInfo = {
  refresh_token: string
  access_token: string
  expires_at: number
  expires_in: number // since this will always be used to calculate the expiration time, it shouldn't be made optional
  scope?: string
  token_type?: string
}

export type AnonymousAuthMiddlewareOptions = {
  host: string
  projectKey: string
  credentials: {
    clientId: string
    clientSecret: string
    anonymousId?: string
  }
  scopes?: Array<string>
  // For internal usage only
  oauthUri?: string
  fetch?: any
  tokenCache?: TokenCache
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
  fetch?: any
}

export type Task = {
  request: MiddlewareRequest
  response: MiddlewareResponse
  next: Next
}

export type RequestState = boolean
export type TokenStore = {
  token: string
  expirationTime: number
  refreshToken?: string
}

export type TokenCacheOptions = {
  clientId: string
  projectKey: string
  host: string
}

export type TokenCache = {
  get: (tokenCacheOptions?: TokenCacheOptions) => TokenStore
  set: (cache: TokenStore, tokenCacheOptions?: TokenCacheOptions) => void
}

/* Request */
type requestBaseOptions = {
  response: MiddlewareResponse
  url: string
  body: string
  basicAuth: string
  pendingTasks: Array<Task>
  requestState: {
    get: () => RequestState
    set: (requestState: RequestState) => void
  }
  tokenCache: TokenCache
  tokenCacheKey?: TokenCacheOptions
}
export type executeRequestOptions = requestBaseOptions & {
  fetcher: any
}

export type AuthMiddlewareBaseOptions = requestBaseOptions & {
  request: MiddlewareRequest
  fetch?: any
}

export type UserAuthOptions = {
  username: string
  password: string
}

export type ClientAuthOptions = {
  clientId: string
  clientSecret: string
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
  fetch?: any
}

export type HttpMiddlewareOptions = {
  host: string
  credentialsMode?: 'omit' | 'same-origin' | 'include'
  includeHeaders?: boolean
  includeResponseHeaders?: boolean
  includeOriginalRequest?: boolean
  includeRequestInErrorResponse?: boolean
  maskSensitiveHeaderData?: boolean
  timeout?: number
  enableRetry?: boolean
  retryConfig?: {
    maxRetries?: number
    retryDelay?: number
    backoff?: boolean
    maxDelay?: number
    retryCodes?: Array<number | string>,
  }
  fetch?: any
  abortController?: AbortController // deprecated
  getAbortController?: () => AbortController
}
export type QueueMiddlewareOptions = {
  concurrency: number
}
export type UserAgentMiddlewareOptions = {
  libraryName?: string
  libraryVersion?: string
  contactUrl?: string
  contactEmail?: string
}

export type Next = (
  request: MiddlewareRequest,
  response: MiddlewareResponse
) => unknown

/* API Request Builder */
export type ServiceBuilderDefaultParams = {
  expand: Array<string>
  searchKeywords: Array<{ lang: string; value: string }>
  pagination: {
    page: number | null
    perPage: number | null
    sort: Array<string>
    withTotal: boolean | null
  }
  id?: string | null
  staged?: boolean
  priceCurrency?: string
  priceCountry?: string
  priceCustomerGroup?: string
  priceChannel?: string
  query?: {
    operator: 'and' | 'or'
    where: Array<string>
  }
  location?: {
    country?: string
    currency?: string
    state?: string
  }
  search?: {
    facet: Array<string>
    filter: Array<string>
    filterByQuery: Array<string>
    filterByFacets: Array<string>
    fuzzy: boolean
    fuzzyLevel: number
    markMatchingVariants: boolean
    text: {
      lang: string
      value: string
    } | null
  }
  version?: number
  customerId?: string
  cartId?: string
  dataErasure?: string
  applyOrderEditTo?: string
}
export type ServiceBuilderParams = {
  // query-expand
  expand?: Array<string>

  // query-id
  id?: string | null
  key?: string | null
  customerId?: string | null
  cartId?: string | null

  // query-page
  sort: Array<{ by: string; direction: 'asc' | 'desc' }>
  page: number | null
  perPage: number | null
  withTotal: boolean | null

  // query-projection
  staged?: boolean
  priceCurrency?: string
  priceCountry?: string
  priceCustomerGroup?: string
  priceChannel?: string

  // query-search
  text?: {
    language?: string
    value?: string
  } | null
  fuzzy?: boolean
  fuzzyLevel?: number
  markMatchingVariants?: boolean
  facet?: Array<string>
  filter?: Array<string>
  filterByQuery?: Array<string>
  filterByFacets?: Array<string>

  // query-suggest
  searchKeywords?: Array<{ language: string; value: string }>

  // query
  where?: Array<string>
  whereOperator?: 'and' | 'or'

  // query-location
  country?: string
  currency?: string
  state?: string

  // version
  version?: string

  // data-erasure
  dataErasure?: string

  // applyOrderEditTo
  applyOrderEditTo?: boolean

  // container
  container?: string | null

  // params
  orderNumber?: number
}
export type ServiceBuilder = {
  type: string
  features: Array<string>
  params: ServiceBuilderDefaultParams
  build(): string
}
export type ServiceBuilderDefinition = {
  type: string
  endpoint: string
  features: Array<string>
}
export type ServiceBuilderInstance = {
  withVersion: (version: number) => Object
  withFullDataErasure(): Object
  where: (predicate: string) => Object
  whereOperator: (option: string) => Object
  sort: (option: string) => Object
  page: (page: number) => Object
  perPage: (amount: number) => Object
  withTotal(value: boolean): Object
  byId: (id: string) => Object
  byKey: (key: string) => Object
  byCustomerId: (id: string) => Object
  byCartId: (id: string) => Object
  expand: (string: string) => Object
  build(): string
  parse(): string
}
export type ApiRequestBuilder = {
  [key: string]: ServiceBuilder
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

/* Sync Actions */
export type UpdateAction = {
  action: string
  [key: string]: any
}
export type SyncAction = {
  buildActions: (now: Object, before: Object) => Array<UpdateAction>
}
export type SyncActionConfig = {
  shouldOmitEmptyString: boolean
}
export type ActionGroup = {
  type: string
  group: 'ignore' | 'allow'
}

export type ExistingTokenMiddlewareOptions = {
  force?: boolean
}

export type CorrelationIdMiddlewareOptions = {
  generate: () => string
}
