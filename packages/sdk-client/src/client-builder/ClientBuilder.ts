import fetch from 'node-fetch'
import { default as createClient } from '../sdk-client/client'
import * as authMiddlewares from '../sdk-middleware-auth'
import { default as createCorrelationIdMiddleware } from '../sdk-middleware-correlation-id/correlation-id'
import { default as createHttpMiddleware } from '../sdk-middleware-http/http'
import { default as createLoggerMiddleware } from '../sdk-middleware-logger/logger'
import { default as createQueueMiddleware } from '../sdk-middleware-queue/queue'
import { default as createUserAgentMiddleware } from '../sdk-middleware-user-agent/user-agent'
import {
  AnonymousAuthMiddlewareOptions,
  AuthMiddlewareOptions,
  Client,
  CorrelationIdMiddlewareOptions,
  Credentials,
  ExistingTokenMiddlewareOptions,
  HttpMiddlewareOptions,
  Middleware,
  Nullable,
  PasswordAuthMiddlewareOptions,
  QueueMiddlewareOptions,
  RefreshAuthMiddlewareOptions,
} from '../types/sdk'

const {
  createAuthMiddlewareForPasswordFlow,
  createAuthMiddlewareForAnonymousSessionFlow,
  createAuthMiddlewareForClientCredentialsFlow,
  createAuthMiddlewareForRefreshTokenFlow,
  createAuthMiddlewareWithExistingToken,
} = authMiddlewares

export default class ClientBuilder {
  private projectKey: string | undefined
  private authMiddleware: Nullable<Middleware>
  private httpMiddleware: Nullable<Middleware>
  private userAgentMiddleware: Nullable<Middleware>
  private correlationIdMiddleware: Nullable<Middleware>
  private loggerMiddleware: Nullable<Middleware>
  private queueMiddleware: Nullable<Middleware>
  private middlewares: Array<Middleware> = []

  withProjectKey(key: string): ClientBuilder {
    this.projectKey = key
    return this
  }

  defaultClient(
    baseUri: string,
    credentials: Credentials,
    oauthUri?: string,
    projectKey?: string
  ): ClientBuilder {
    return this.withClientCredentialsFlow({
      host: oauthUri,
      projectKey: projectKey || this.projectKey,
      credentials,
    })
      .withHttpMiddleware({
        host: baseUri,
        fetch: fetch,
      })
      .withLoggerMiddleware()
  }

  withAuthMiddleware(authMiddleware: Middleware): ClientBuilder {
    this.authMiddleware = authMiddleware
    return this
  }

  withMiddleware(middleware: Middleware): ClientBuilder {
    this.middlewares.push(middleware)
    return this
  }

  withClientCredentialsFlow(options: AuthMiddlewareOptions): ClientBuilder {
    return this.withAuthMiddleware(
      createAuthMiddlewareForClientCredentialsFlow({
        host: options.host || 'https://auth.europe-west1.gcp.commercetools.com',
        projectKey: options.projectKey || this.projectKey,
        credentials: {
          clientId: options.credentials.clientId || '',
          clientSecret: options.credentials.clientSecret || '',
        },
        oauthUri: options.oauthUri || '',
        scopes: options.scopes,
        fetch: options.fetch || fetch,
        ...options,
      })
    )
  }

  withPasswordFlow(options: PasswordAuthMiddlewareOptions): ClientBuilder {
    return this.withAuthMiddleware(
      createAuthMiddlewareForPasswordFlow({
        host: options.host || 'https://auth.europe-west1.gcp.commercetools.com',
        projectKey: options.projectKey || this.projectKey,
        credentials: {
          clientId: process.env.myClientId,
          clientSecret: process.env.myClientSecret,
          user: {
            username: options.credentials.user.username || '',
            password: options.credentials.user.password || '',
          },
        },
        fetch: options.fetch || fetch,
        ...options,
      })
    )
  }

  withAnonymousSessionFlow(
    options: AnonymousAuthMiddlewareOptions
  ): ClientBuilder {
    return this.withAuthMiddleware(
      createAuthMiddlewareForAnonymousSessionFlow({
        host: options.host || 'https://auth.europe-west1.gcp.commercetools.com',
        projectKey: this.projectKey || options.projectKey,
        credentials: {
          clientId: options.credentials.clientId || '',
          clientSecret: options.credentials.clientSecret || '',
          anonymousId: options.credentials.anonymousId || '',
        },
        fetch: options.fetch || fetch,
        ...options,
      })
    )
  }

  withRefreshTokenFlow(options: RefreshAuthMiddlewareOptions): ClientBuilder {
    return this.withAuthMiddleware(
      createAuthMiddlewareForRefreshTokenFlow({
        host: options.host || 'https://auth.europe-west1.gcp.commercetools.com',
        projectKey: this.projectKey || options.projectKey,
        credentials: {
          clientId: options.credentials.clientId || '',
          clientSecret: options.credentials.clientSecret || '',
        },
        fetch: options.fetch || fetch,
        refreshToken: options.refreshToken || '',
        ...options,
      })
    )
  }

  withExistingTokenFlow(
    authorization: string,
    options: ExistingTokenMiddlewareOptions
  ): ClientBuilder {
    return this.withAuthMiddleware(
      createAuthMiddlewareWithExistingToken(authorization, {
        force: options.force || true,
        ...options,
      })
    )
  }

  withHttpMiddleware(options: HttpMiddlewareOptions): ClientBuilder {
    this.httpMiddleware = createHttpMiddleware({
      host: options.host || 'https://api.europe-west1.gcp.commercetools.com',
      fetch: options.fetch || fetch,
      ...options,
    })
    return this
  }

  withUserAgentMiddleware(): ClientBuilder {
    this.userAgentMiddleware = createUserAgentMiddleware()
    return this
  }

  withQueueMiddleware(options: QueueMiddlewareOptions): ClientBuilder {
    this.queueMiddleware = createQueueMiddleware({
      concurrency: options.concurrency || 20,
      ...options,
    })
    return this
  }

  withLoggerMiddleware() {
    this.loggerMiddleware = createLoggerMiddleware()
    return this
  }

  withCorrelationIdMiddleware(
    options: CorrelationIdMiddlewareOptions
  ): ClientBuilder {
    this.correlationIdMiddleware = createCorrelationIdMiddleware({
      generate: options.generate || null,
      ...options,
    })
    return this
  }

  build(): Client {
    const middlewares = this.middlewares.slice()

    if (this.correlationIdMiddleware)
      middlewares.push(this.correlationIdMiddleware)
    if (this.userAgentMiddleware) middlewares.push(this.userAgentMiddleware)
    if (this.authMiddleware) middlewares.push(this.authMiddleware)
    if (this.loggerMiddleware) middlewares.push(this.loggerMiddleware)
    if (this.queueMiddleware) middlewares.push(this.queueMiddleware)
    if (this.httpMiddleware) middlewares.push(this.httpMiddleware)

    return createClient({ middlewares })
  }
}
