import fetch from 'node-fetch'
import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk'
import {
  AnonymousAuthMiddlewareOptions,
  AuthMiddlewareOptions,
  CorrelationIdMiddlewareOptions,
  Credentials,
  ExistingTokenMiddlewareOptions,
  HttpMiddlewareOptions,
  Middleware,
  Nullable,
  PasswordAuthMiddlewareOptions,
  QueueMiddlewareOptions,
  RefreshAuthMiddlewareOptions,
  UserAgentMiddlewareOptions,
} from '../types/sdk.d'
import { default as createClient } from '../sdk-client/client'
import { default as createHttpMiddleware } from '../sdk-middleware-http/http'
import * as authMiddlewares from '../sdk-middleware-auth'

import { default as createUserAgentMiddleware } from '../sdk-middleware-user-agent/user-agent'
import { default as createQueueMiddleware } from '../sdk-middleware-queue/queue'
import { default as createLoggerMiddleware } from '../sdk-middleware-logger/logger'
import { default as createCorrelationIdMiddleware } from '../sdk-middleware-correlation-id/correlation-id'

const {
  createAuthMiddlewareForPasswordFlow,
  createAuthMiddlewareForAnonymousSessionFlow,
  createAuthMiddlewareForClientCredentialsFlow,
  createAuthMiddlewareForRefreshTokenFlow,
  createAuthMiddlewareWithExistingToken,
} = authMiddlewares

export default class ApiRootBuilder {
  private projectKey: string | undefined
  private authMiddleware: Nullable<Middleware>
  private httpMiddleware: Nullable<Middleware>
  private userAgentMiddleware: Nullable<Middleware>
  private correlationIdMiddleware: Nullable<Middleware>
  private loggerMiddleware: Nullable<Middleware>
  private queueMiddleware: Nullable<Middleware>
  private middlewares: Array<Middleware> = []

  withProjectKey(key: string): ApiRootBuilder {
    this.projectKey = key
    return this
  }

  defaultClient(
    baseUri: string,
    credentials: Credentials,
    oauthUri?: string,
    projectKey?: string
  ): ApiRootBuilder {
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

  withAuthMiddleware(authMiddleware: Middleware): ApiRootBuilder {
    this.authMiddleware = authMiddleware
    return this
  }

  withMiddleware(middleware: Middleware): ApiRootBuilder {
    this.middlewares.push(middleware)
    return this
  }

  withClientCredentialsFlow(options: AuthMiddlewareOptions): ApiRootBuilder {
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

  withPasswordFlow(options: PasswordAuthMiddlewareOptions): ApiRootBuilder {
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
  ): ApiRootBuilder {
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

  withRefreshTokenFlow(options: RefreshAuthMiddlewareOptions): ApiRootBuilder {
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
  ): ApiRootBuilder {
    return this.withAuthMiddleware(
      createAuthMiddlewareWithExistingToken(authorization, {
        force: options.force || true,
        ...options,
      })
    )
  }

  withHttpMiddleware(options: HttpMiddlewareOptions): ApiRootBuilder {
    this.httpMiddleware = createHttpMiddleware({
      host: options.host || 'https://api.europe-west1.gcp.commercetools.com',
      fetch: options.fetch || fetch,
      ...options,
    })
    return this
  }

  withUserAgentMiddleware(options: UserAgentMiddlewareOptions): ApiRootBuilder {
    this.userAgentMiddleware = createUserAgentMiddleware({
      libraryName: options.libraryName || '',
      libraryVersion: options.libraryVersion || '',
      contactUrl: options.contactUrl || '',
      contactEmail: options.contactEmail || '',
      ...options,
    })
    return this
  }

  withQueueMiddleware(options: QueueMiddlewareOptions): ApiRootBuilder {
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
  ): ApiRootBuilder {
    this.correlationIdMiddleware = createCorrelationIdMiddleware({
      generate: options.generate || null,
      ...options,
    })
    return this
  }

  build(): ApiRoot {
    const middlewares = this.middlewares.slice()

    if (this.correlationIdMiddleware)
      middlewares.push(this.correlationIdMiddleware)
    if (this.userAgentMiddleware) middlewares.push(this.userAgentMiddleware)
    if (this.authMiddleware) middlewares.push(this.authMiddleware)
    if (this.loggerMiddleware) middlewares.push(this.loggerMiddleware)
    if (this.queueMiddleware) middlewares.push(this.queueMiddleware)
    if (this.httpMiddleware) middlewares.push(this.httpMiddleware)

    return createApiBuilderFromCtpClient(createClient({ middlewares }))
  }
}
