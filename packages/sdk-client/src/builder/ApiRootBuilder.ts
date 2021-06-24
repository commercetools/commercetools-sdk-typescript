import { ApiRoot } from '@commercetools/platform-sdk'
import { Middleware, AuthMiddlewareOptions, HttpMiddlewareOptions } from '../types/sdk'
import { default as createClient } from '../sdk-client/client'
import { default as createHttpClient } from '../sdk-middleware-http/http'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import { default as createAuthForClientCredentialsFlow } from '../sdk-middleware-auth/client-credentials-flow'

export default class ApiRootBuilder {
  private projectKey: string | undefined
  private middlewares: Array<Middleware> = []

  withProjectKey(key: string): ApiRootBuilder {
    this.projectKey = key;
    return this;
  }

  withAuthMiddleware(options: AuthMiddlewareOptions): ApiRootBuilder {
    const authMiddleware = createAuthForClientCredentialsFlow({
      ...options,
      host: options.host || 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey: this.projectKey || options.projectKey,
      credentials: {
        clientId: options.credentials.clientId || '',
        clientSecret: options.credentials.clientSecret || '',
      },
      oauthUri: options.oauthUri || '',
      scopes: options.scopes,
      fetch: options.fetch,
    })

    // TODO: add other authMiddleware and add to middlewares list

    this.middlewares.push(authMiddleware);
    return this;
  }

  withHttpMiddleware(options: HttpMiddlewareOptions): ApiRootBuilder {
    // TODO: check to make sure authMiddleware has been added before adding this middleware
    const httpMiddleware = createHttpClient({
      ...options,
      host: options.host || 'https://api.europe-west1.gcp.commercetools.com',
      fetch: options.fetch,
    })

    this.middlewares.push(httpMiddleware);
    return this;
  }

  // TODO: add other middleware builder functions

  build(): ApiRoot {
    const { middlewares } = this;
    return createApiBuilderFromCtpClient(createClient({ middlewares }));
  }
}