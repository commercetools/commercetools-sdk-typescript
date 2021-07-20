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
  CorrelationIdMiddlewareOptions
} from '../types/sdk.d'
import { default as createClient } from '../sdk-client/client'
import { default as createHttpMiddleware } from '../sdk-middleware-http/http'
import { default as createAuthForClientCredentialsFlow } from '../sdk-middleware-auth/client-credentials-flow'

import { default as createUserAgentMiddleware } from '../sdk-middleware-user-agent/user-agent'
import { default as createQueueMiddleware } from '../sdk-middleware-queue/queue'
import { default as createLoggerMiddleware } from '../sdk-middleware-logger/logger'
import { default as createCorrelationIdMiddleware } from '../sdk-middleware-correlation-id/correlation-id'

export default class ApiRootBuilder {
  private projectKey: string | undefined
  private authMiddleware: Nullable<Middleware>;
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
    return this.withAuthMiddleware({
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

  withAuthMiddleware(options: AuthMiddlewareOptions): ApiRootBuilder {
    const authMiddleware = createAuthForClientCredentialsFlow({
      host: options.host || 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey: this.projectKey || options.projectKey,
      credentials: {
        clientId: options.credentials.clientId || '',
        clientSecret: options.credentials.clientSecret || '',
      },
      oauthUri: options.oauthUri || '',
      scopes: options.scopes,
      fetch: options.fetch || fetch,
      ...options,
    })

    this.authMiddleware = authMiddleware;
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

  withUserAgentMiddleware(options: UserAgentMiddlewareOptions) {
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

  withQueueMiddleware(options: QueueMiddlewareOptions) {
    const queueMiddleware = createQueueMiddleware({
      concurrency: options.concurrency,
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

  withCorrelationIdMiddleware(options: CorrelationIdMiddlewareOptions) {
    const correlationIdMiddleware = createCorrelationIdMiddleware({
      generate: options.generate || null,
      ...options
    })

    this.correlationIdMiddleware = correlationIdMiddleware;
    return this;
  }

  build(): ApiRoot {
    const { middlewares } = this;
    if (this.authMiddleware) this.middlewares.push(this.authMiddleware);
    if (this.httpMiddleware) this.middlewares.push(this.httpMiddleware);
    if (this.userAgentMiddleware) this.middlewares.push(this.userAgentMiddleware);
    if (this.correlationIdMiddleware) this.middlewares.push(this.correlationIdMiddleware);
    if (this.loggerMiddleware) this.middlewares.push(this.loggerMiddleware);
    if (this.queueMiddleware) this.middlewares.push(this.queueMiddleware);

    // const middlewares = Object.getOwnPropertyNames(this).map(v => this[v]);
    return createApiBuilderFromCtpClient(createClient({ middlewares }));
  }
}