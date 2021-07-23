import fetch from 'node-fetch'
import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import {
  Nullable,
  Middleware,
  Credentials,
  AuthMiddlewareOptions,
  HttpMiddlewareOptions,
  UserAgentMiddlewareOptions,
  QueueMiddlewareOptions,
  AnonymousAuthMiddlewareOptions,
  CorrelationIdMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
  ExistingTokenMiddlewareOptions,
  RefreshAuthMiddlewareOptions
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
} = authMiddlewares;

export default class ApiRootBuilder {
  private projectKey: string | undefined
  private authMiddleware: Nullable<Middleware>
  private authForClientCredentialFlow: Nullable<Middleware>;
  private authForPasswordFlow: Nullable<Middleware>;
  private authForAnonymousSessionFlow: Nullable<Middleware>;
  private authForRefreshTokenFlow: Nullable<Middleware>;
  private authForExistingTokenFlow: Nullable<Middleware>;
  private httpMiddleware: Nullable<Middleware>;
  private userAgentMiddleware: Nullable<Middleware>;
  private correlationIdMiddleware: Nullable<Middleware>;
  private loggerMiddleware: Nullable<Middleware>;
  private queueMiddleware: Nullable<Middleware>;
  private middlewares: Array<Middleware> = []

  withProjectKey(key: string): ApiRootBuilder {
    this.projectKey = key;
    return this;
  }

  defaultClient(baseUri: string, credentials: Credentials, oauthUri?: string, projectKey?: string): ApiRootBuilder {
    return this.withClientCredentialsFlow({
      host: oauthUri,
      projectKey: projectKey || this.projectKey,
      credentials
    })
      .withHttpMiddleware({
        host: baseUri,
        fetch: fetch,
      })
      .withLoggerMiddleware()
  }

  withClientCredentialsFlow(options: AuthMiddlewareOptions): ApiRootBuilder {
    const authForClientCredentialFlow = createAuthMiddlewareForClientCredentialsFlow({
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

    this.authForClientCredentialFlow = authForClientCredentialFlow;
    return this;
  }

  withPasswordFlow(options: PasswordAuthMiddlewareOptions): ApiRootBuilder  {
    const authForPasswordFlow = createAuthMiddlewareForPasswordFlow({
      host: options.host || "https://auth.europe-west1.gcp.commercetools.com",
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
      ...options
    })

    this.authForPasswordFlow = authForPasswordFlow;
    return this;
  }

  withAnonymousSessionFlow(options: AnonymousAuthMiddlewareOptions): ApiRootBuilder  {
    const authForAnonymousSessionFlow = createAuthMiddlewareForAnonymousSessionFlow({
      host: options.host || 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey: this.projectKey || options.projectKey,
      credentials: {
        clientId: options.credentials.clientId || '',
        clientSecret: options.credentials.clientSecret || '',
        anonymousId: options.credentials.anonymousId || ''
      },
      fetch: options.fetch || fetch,
      ...options,
    });

    this.authForAnonymousSessionFlow = authForAnonymousSessionFlow;
    return this;
  }

  withRefreshTokenFlow(options: RefreshAuthMiddlewareOptions): ApiRootBuilder  {
    const authForRefreshTokenFlow = createAuthMiddlewareForRefreshTokenFlow({
      host: options.host || 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey: this.projectKey || options.projectKey,
      credentials: {
        clientId: options.credentials.clientId || '',
        clientSecret: options.credentials.clientSecret || ''
      },
      fetch: options.fetch || fetch,
      refreshToken: options.refreshToken || '',
      ...options
    });

    this.authForRefreshTokenFlow = authForRefreshTokenFlow;
    return this;
  }

  withExistingTokenFlow(authorization: string, options: ExistingTokenMiddlewareOptions): ApiRootBuilder  {
    const authForExistingTokenFlow = createAuthMiddlewareWithExistingToken(authorization, {
      force: options.force || true,
      ...options
    });

    this.authForExistingTokenFlow = authForExistingTokenFlow;
    return this;
  }

  withHttpMiddleware(options: HttpMiddlewareOptions): ApiRootBuilder {
    const httpMiddleware = createHttpMiddleware({
      host: options.host || 'https://api.europe-west1.gcp.commercetools.com',
      fetch: options.fetch || fetch,
      ...options,
    })

    this.httpMiddleware = httpMiddleware;
    return this;
  }

  withUserAgentMiddleware(options: UserAgentMiddlewareOptions): ApiRootBuilder  {
    const userAgentMiddleware = createUserAgentMiddleware({
      libraryName: options.libraryName || '',
      libraryVersion: options.libraryVersion || '',
      contactUrl: options.contactUrl || '',
      contactEmail: options.contactEmail || '',
      ...options
    })

    this.userAgentMiddleware = userAgentMiddleware;
    return this;
  }

  withQueueMiddleware(options: QueueMiddlewareOptions): ApiRootBuilder  {
    const queueMiddleware = createQueueMiddleware({
      concurrency: options.concurrency || 20,
      ...options
    })

    this.queueMiddleware = queueMiddleware;
    return this;
  }

  withLoggerMiddleware() {
    const loggerMiddleware = createLoggerMiddleware();

    this.loggerMiddleware = loggerMiddleware
    return this;
  }

  withCorrelationIdMiddleware(options: CorrelationIdMiddlewareOptions): ApiRootBuilder  {
    const correlationIdMiddleware = createCorrelationIdMiddleware({
      generate: options.generate || null,
      ...options
    })

    this.correlationIdMiddleware = correlationIdMiddleware;
    return this;
  }

  build(): ApiRoot {
    const {
      middlewares,
      authForClientCredentialFlow,
      authForPasswordFlow,
      authForAnonymousSessionFlow,
      authForRefreshTokenFlow,
      authForExistingTokenFlow
    } = this;

    this.authMiddleware = [
      authForClientCredentialFlow,
      authForPasswordFlow,
      authForAnonymousSessionFlow,
      authForRefreshTokenFlow,
      authForExistingTokenFlow
    ].find(v => v);

    if (this.authMiddleware) this.middlewares.push(this.authMiddleware);
    if (this.correlationIdMiddleware) this.middlewares.push(this.correlationIdMiddleware);
    if (this.httpMiddleware) this.middlewares.push(this.httpMiddleware);
    if (this.queueMiddleware) this.middlewares.push(this.queueMiddleware);
    if (this.userAgentMiddleware) this.middlewares.push(this.userAgentMiddleware);
    if (this.loggerMiddleware) this.middlewares.push(this.loggerMiddleware);

    return createApiBuilderFromCtpClient(createClient({ middlewares }));
  }
}
