import fetch from 'node-fetch'
import * as middleware from '../middleware'
import { constants } from '../utils'
import { default as createClient } from './client'

import {
  AuthMiddlewareOptions,
  Client,
  CorrelationIdMiddlewareOptions,
  Credentials,
  ErrorMiddlewareOptions,
  ExistingTokenMiddlewareOptions,
  HttpMiddlewareOptions,
  HttpUserAgentOptions,
  LoggerMiddlewareOptions,
  Middleware,
  MiddlewareRequest,
  MiddlewareResponse,
  Nullable,
  PasswordAuthMiddlewareOptions,
  QueueMiddlewareOptions,
  RefreshAuthMiddlewareOptions,
} from '../types/types'
import { Buffer } from 'buffer'

const {
  createAuthMiddlewareForPasswordFlow,
  createAuthMiddlewareForAnonymousSessionFlow,
  createAuthMiddlewareForClientCredentialsFlow,
  createAuthMiddlewareForRefreshTokenFlow,
  createAuthMiddlewareForExistingTokenFlow,

  createCorrelationIdMiddleware,
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
  private concurrentMiddleware: Nullable<Middleware>
  private errorMiddleware: Nullable<Middleware>

  private middlewares: Array<Middleware> = []

  constructor() {
    this.userAgentMiddleware = createUserAgentMiddleware({})
  }

  public withProjectKey(key: string): ClientBuilder {
    this.projectKey = key
    return this
  }

  public defaultClient(
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

  public withAnonymousSessionFlow(
    options: AuthMiddlewareOptions
  ): ClientBuilder {
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

  public withRefreshTokenFlow(
    options: RefreshAuthMiddlewareOptions
  ): ClientBuilder {
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

  public withExistingTokenFlow(
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

  public withHttpMiddleware(options: HttpMiddlewareOptions): ClientBuilder {
    this.httpMiddleware = createHttpMiddleware({
      host: options.host || constants.CTP_API_URL,
      httpClient: options.httpClient || fetch,
      ...options,
    })

    return this
  }

  public withUserAgentMiddleware(
    options?: HttpUserAgentOptions
  ): ClientBuilder {
    this.userAgentMiddleware = createUserAgentMiddleware(options)

    return this
  }

  public withQueueMiddleware(options?: QueueMiddlewareOptions): ClientBuilder {
    this.queueMiddleware = createQueueMiddleware({
      concurrency: options.concurrency || constants.CONCURRENCT_REQUEST,
      ...options,
    })

    return this
  }

  public withLoggerMiddleware(options?: LoggerMiddlewareOptions) {
    this.loggerMiddleware = createLoggerMiddleware(options)

    return this
  }

  public withCorrelationIdMiddleware(
    options?: CorrelationIdMiddlewareOptions
  ): ClientBuilder {
    this.correlationIdMiddleware = createCorrelationIdMiddleware({
      generate: options?.generate,
      ...options,
    })

    return this
  }

  public withConcurrentModificationMiddleware(
    customLogic?: (
      version: number,
      request: MiddlewareRequest,
      response: MiddlewareResponse
    ) => Promise<Record<string, any> | string | Buffer>
  ): ClientBuilder {
    this.concurrentMiddleware =
      createConcurrentModificationMiddleware(customLogic)

    return this
  }

  public withErrorMiddleware(options?: ErrorMiddlewareOptions): ClientBuilder {
    this.errorMiddleware = createErrorMiddleware(options)

    return this
  }

  build(): Client {
    const middlewares = this.middlewares.slice()

    /**
     * - use default retry policy if not explicity added
     * - add retry middleware to be used by concurrent modification
     *   middleware if not explicitly added as part of the middleware
     */
    if (this.correlationIdMiddleware)
      middlewares.push(this.correlationIdMiddleware)
    if (this.userAgentMiddleware) middlewares.push(this.userAgentMiddleware)
    if (this.authMiddleware) middlewares.push(this.authMiddleware)
    if (this.queueMiddleware) middlewares.push(this.queueMiddleware)
    if (this.loggerMiddleware) middlewares.push(this.loggerMiddleware)
    if (this.errorMiddleware) middlewares.push(this.errorMiddleware)
    if (this.concurrentMiddleware) middlewares.push(this.concurrentMiddleware)
    if (this.httpMiddleware) middlewares.push(this.httpMiddleware)

    return createClient({ middlewares })
  }
}
