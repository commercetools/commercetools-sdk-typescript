import fetch from 'node-fetch'
import { default as createClient } from './client'
import * as middleware from '../middleware'
import { constants } from '../utils'

import {
  Client,
  AuthMiddlewareOptions,
  CorrelationIdMiddlewareOptions,
  Credentials,
  ExistingTokenMiddlewareOptions,
  HttpMiddlewareOptions,
  HttpUserAgentOptions,
  Middleware,
  Nullable,
  PasswordAuthMiddlewareOptions,
  QueueMiddlewareOptions,
  RefreshAuthMiddlewareOptions,
  LoggerMiddlewareOptions,
  RetryMiddlewareOptions,
  ErrorMiddlewareOptions,
} from '../types/types'

const {
  createAuthMiddlewareForPasswordFlow,
  createAuthMiddlewareForAnonymousSessionFlow,
  createAuthMiddlewareForClientCredentialsFlow,
  createAuthMiddlewareForRefreshTokenFlow,
  createAuthMiddlewareForExistingTokenFlow,

  createCorrelationIdMiddleware,
  createRetryMiddleware,
  createHttpMiddleware,
  createLoggerMiddleware,
  createQueueMiddleware,
  createUserAgentMiddleware,
  createConcurrentModificationMiddleware,

  createErrorMiddleware,
} = middleware

export default class ClientBuilder {
  private projectKey: string | undefined

  private authMiddleware: Nullable<Middleware>
  private httpMiddleware: Nullable<Middleware>
  private userAgentMiddleware: Nullable<Middleware>
  private correlationIdMiddleware: Nullable<Middleware>
  private loggerMiddleware: Nullable<Middleware>
  private queueMiddleware: Nullable<Middleware>
  private retryMiddleware: Nullable<Middleware>
  private concurrentMiddleware: Nullable<Middleware>
  private errorMiddleware: Nullable<Middleware>

  private middlewares: Array<Middleware> = []

  constructor() {
    this.userAgentMiddleware = createUserAgentMiddleware({})
  }

  withProjectKey(key: string): ClientBuilder {
    this.projectKey = key
    return this
  }

  defaultClient(
    baseUri: string,
    credentials: Credentials,
    oauthUri?: string,
    projectKey?: string,
    scopes?: Array<string>,
    httpClient?: Function
  ): ClientBuilder {
    return this.withClientCredentialsFlow({
      host: oauthUri,
      projectKey: projectKey || this.projectKey,
      credentials,
      scopes,
    }).withHttpMiddleware({
      host: baseUri,
      httpClient: httpClient || fetch,
    })
  }

  private withAuthMiddleware(authMiddleware: Middleware): ClientBuilder {
    this.authMiddleware = authMiddleware
    return this
  }

  public withMiddleware(middleware: Middleware): ClientBuilder {
    this.middlewares.push(middleware)
    return this
  }

  public withClientCredentialsFlow(
    options: AuthMiddlewareOptions
  ): ClientBuilder {
    return this.withAuthMiddleware(
      createAuthMiddlewareForClientCredentialsFlow({
        host: options.host || constants.CTP_AUTH_URL,
        projectKey: options.projectKey || this.projectKey,
        credentials: {
          clientId: options.credentials.clientId || null,
          clientSecret: options.credentials.clientSecret || null,
        },
        oauthUri: options.oauthUri || null,
        scopes: options.scopes,
        httpClient: options.httpClient || fetch,
        ...options,
      })
    )
  }

  public withPasswordFlow(
    options: PasswordAuthMiddlewareOptions
  ): ClientBuilder {
    return this.withAuthMiddleware(
      createAuthMiddlewareForPasswordFlow({
        host: options.host || constants.CTP_AUTH_URL,
        projectKey: options.projectKey || this.projectKey,
        credentials: {
          clientId: options.credentials.clientId || null,
          clientSecret: options.credentials.clientSecret || null,
          user: {
            username: options.credentials.user.username || null,
            password: options.credentials.user.password || null,
          },
        },
        httpClient: options.httpClient || fetch,
        ...options,
      })
    )
  }

  withAnonymousSessionFlow(options: AuthMiddlewareOptions): ClientBuilder {
    return this.withAuthMiddleware(
      createAuthMiddlewareForAnonymousSessionFlow({
        host: options.host || constants.CTP_AUTH_URL,
        projectKey: this.projectKey || options.projectKey,
        credentials: {
          clientId: options.credentials.clientId || null,
          clientSecret: options.credentials.clientSecret || null,
          anonymousId: options.credentials.anonymousId || null,
        },
        httpClient: options.httpClient || fetch,
        ...options,
      })
    )
  }

  withRefreshTokenFlow(options: RefreshAuthMiddlewareOptions): ClientBuilder {
    return this.withAuthMiddleware(
      createAuthMiddlewareForRefreshTokenFlow({
        host: options.host || constants.CTP_AUTH_URL,
        projectKey: this.projectKey || options.projectKey,
        credentials: {
          clientId: options.credentials.clientId || null,
          clientSecret: options.credentials.clientSecret || null,
        },
        httpClient: options.httpClient || fetch,
        refreshToken: options.refreshToken || null,
        ...options,
      })
    )
  }

  withRetryMiddleware(options: RetryMiddlewareOptions): ClientBuilder {
    this.retryMiddleware = createRetryMiddleware({
      ...options,
    })

    return this
  }

  withExistingTokenFlow(
    authorization: string,
    options?: ExistingTokenMiddlewareOptions
  ): ClientBuilder {
    return this.withAuthMiddleware(
      createAuthMiddlewareForExistingTokenFlow(authorization, {
        force: options.force || true,
        ...options,
      })
    )
  }

  withHttpMiddleware(options: HttpMiddlewareOptions): ClientBuilder {
    this.httpMiddleware = createHttpMiddleware({
      host: options.host || constants.CTP_API_URL,
      httpClient: options.httpClient || fetch,
      ...options,
    })

    return this
  }

  withUserAgentMiddleware(options?: HttpUserAgentOptions): ClientBuilder {
    this.userAgentMiddleware = createUserAgentMiddleware(options)

    return this
  }

  withQueueMiddleware(options?: QueueMiddlewareOptions): ClientBuilder {
    this.queueMiddleware = createQueueMiddleware({
      concurrency: options.concurrency || constants.CONCURRENCT_REQUEST,
      ...options,
    })

    return this
  }

  withLoggerMiddleware(options?: LoggerMiddlewareOptions) {
    this.loggerMiddleware = createLoggerMiddleware(options)

    return this
  }

  withCorrelationIdMiddleware(
    options?: CorrelationIdMiddlewareOptions
  ): ClientBuilder {
    this.correlationIdMiddleware = createCorrelationIdMiddleware({
      generate: options?.generate,
      ...options,
    })

    return this
  }

  withConcurrentModificationMiddleware(): ClientBuilder {
    this.concurrentMiddleware = createConcurrentModificationMiddleware()

    return this
  }

  withErrorMiddleware(options?: ErrorMiddlewareOptions): ClientBuilder {
    this.errorMiddleware = createErrorMiddleware(options)

    return this
  }

  // builder
  build(): Client {
    const middlewares = this.middlewares.slice()

    /**
     * - use default retry policy if not explicity added
     * - add retry middleware to be used by concurrent modification
     *   middleware if not explicitly added as part of the middleware
     */
    if (!this.retryMiddleware && this.concurrentMiddleware)
      this.withRetryMiddleware({})

    if (this.correlationIdMiddleware)
      middlewares.push(this.correlationIdMiddleware)
    if (this.userAgentMiddleware) middlewares.push(this.userAgentMiddleware)
    if (this.authMiddleware) middlewares.push(this.authMiddleware)
    if (this.queueMiddleware) middlewares.push(this.queueMiddleware)
    if (this.loggerMiddleware) middlewares.push(this.loggerMiddleware)
    if (this.errorMiddleware) middlewares.push(this.errorMiddleware)
    if (this.retryMiddleware) middlewares.push(this.retryMiddleware)
    if (this.concurrentMiddleware) middlewares.push(this.concurrentMiddleware)

    if (this.httpMiddleware) middlewares.push(this.httpMiddleware)

    return createClient({ middlewares })
  }
}