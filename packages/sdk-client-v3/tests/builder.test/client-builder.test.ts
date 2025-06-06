import { ClientBuilder } from '../../src'
require('dotenv').config()

export const projectKey = 'demo'

describe('Client Builder', () => {
  const authMiddlewareOptions = {
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey: process.env.PROJECT_KEY || projectKey,
    credentials: {
      clientId: process.env.CTP_CLIENT_ID || '',
      clientSecret: process.env.CTP_CLIENT_SECRET || '',
    },
    oauthUri: process.env.OAUTH_URL || '',
    scopes: ['manage_project:demo-1'],
    httpClient: fetch,
  }

  const httpMiddlewareOptions = {
    host: 'https://api.europe-west1.gcp.commercetools.com',
    httpClient: fetch,
  }

  describe('general', () => {
    test('should set the projectKey', () => {
      const client = new ClientBuilder() as any
      expect(client.projectKey).toEqual(undefined)
      const clientWithKeyProp = client.withProjectKey(projectKey)

      expect(clientWithKeyProp.projectKey).toEqual('demo')
    })

    test('should set authorization middleware', () => {
      const client = new ClientBuilder() as any
      expect(client.authMiddleware).toEqual(undefined)
      const clientWithKeyProp = client.withClientCredentialsFlow(
        authMiddlewareOptions
      )

      expect(clientWithKeyProp.authMiddleware).toBeTruthy()
    })

    test('should set the http middleware', () => {
      const client = new ClientBuilder() as any
      expect(client.httpMiddleware).toEqual(undefined)
      const clientWithKeyProp = client.withHttpMiddleware(httpMiddlewareOptions)

      expect(clientWithKeyProp.httpMiddleware).toBeTruthy()
    })

    test('should build the client when build method is called', () => {
      const client = new ClientBuilder()
        .withHttpMiddleware(httpMiddlewareOptions)
        .withClientCredentialsFlow(authMiddlewareOptions)
        .build() as any

      expect(client).toHaveProperty('execute')
      expect(client).toHaveProperty('process')

      expect(typeof client.execute).toEqual('function')
      expect(typeof client.process).toEqual('function')
    })
  })

  describe('middlewares', () => {
    test('should create should create default client', () => {
      const client = new ClientBuilder() as any
      expect(client.authMiddleware).toEqual(undefined)
      const defaultClient = client.defaultClient(
        httpMiddlewareOptions.host,
        authMiddlewareOptions.credentials,
        authMiddlewareOptions.host,
        authMiddlewareOptions.projectKey
      )
      expect(defaultClient.httpMiddleware).toBeTruthy()
      expect(defaultClient.authMiddleware).toBeTruthy()
    })
  })

  test('should create a client using a middleware', () => {
    const middleware = {
      request: () => {},
      response: () => {},
    }
    const client = new ClientBuilder() as any
    expect(client.middlewares).toHaveLength(0)
    const clientWithMiddleware = client.withMiddleware(middleware)
    expect(clientWithMiddleware.middlewares).toHaveLength(1)
  })

  test('should create a client using password flow middleware', () => {
    const client = new ClientBuilder() as any
    expect(client.authMiddleware).toBeFalsy()

    const clientWithUserCredentials = client.withPasswordFlow({
      ...authMiddlewareOptions,
      credentials: {
        ...authMiddlewareOptions.credentials,
        user: { username: 'user', password: 'password' },
      },
    })
    expect(clientWithUserCredentials.authMiddleware).toBeTruthy()
  })

  test('should create a client with anonymousId', () => {
    const client = new ClientBuilder() as any
    expect(client.authMiddleware).toBeFalsy()

    const clientWithAnonymousID = client.withAnonymousSessionFlow({
      ...authMiddlewareOptions,
      credentials: {
        ...authMiddlewareOptions.credentials,
        anonymousId: 'super-anonymous-id',
      },
    })

    expect(clientWithAnonymousID.authMiddleware).toBeTruthy()
  })

  test('should create a client with refreshToken', () => {
    const client = new ClientBuilder() as any
    expect(client.authMiddleware).toBeFalsy()

    const clientWithRefreshToken = client.withRefreshTokenFlow({
      ...authMiddlewareOptions,
      refreshToken: 'refresh-token',
    })
    expect(clientWithRefreshToken.authMiddleware).toBeTruthy()
  })

  test('should create a client with existingToken', () => {
    const client = new ClientBuilder() as any
    expect(client.authMiddleware).toBeFalsy()

    const clientWithExistingToken = client.withExistingTokenFlow('token', {
      force: true,
    })
    expect(clientWithExistingToken.authMiddleware).toBeTruthy()
  })

  test('should create client with userAgentMiddleware', () => {
    const client = new ClientBuilder() as any
    expect(client.userAgentMiddleware).toBeTruthy()

    const clientWithUserAgentMiddleware = client.withUserAgentMiddleware()
    expect(clientWithUserAgentMiddleware.userAgentMiddleware).toBeTruthy()
  })

  test('should create client with queue middleware', () => {
    const client = new ClientBuilder() as any
    expect(client.queueMiddleware).toBeFalsy()

    const clientWithQueueMiddleware = client.withQueueMiddleware({
      concurrency: 20,
    })
    expect(clientWithQueueMiddleware.queueMiddleware).toBeTruthy()
  })

  test('should create client with correlation id middleware', () => {
    const client = new ClientBuilder() as any
    expect(client.correlationIdMiddleware).toBeFalsy()

    const clientWithCorrelationIDMiddleware =
      client.withCorrelationIdMiddleware({ generate: 'generated-uuid-string' })
    expect(
      clientWithCorrelationIDMiddleware.correlationIdMiddleware
    ).toBeTruthy()
  })

  test('should create client with concurrent modification middleware', () => {
    const client = new ClientBuilder() as any
    expect(client.concurrentMiddleware).toBeFalsy()

    const clientWithConcurrentModificationMiddleware =
      client.withConcurrentModificationMiddleware()
    expect(
      clientWithConcurrentModificationMiddleware.concurrentMiddleware
    ).toBeTruthy()
  })

  test('should create client with logger middleware', () => {
    const client = new ClientBuilder() as any
    expect(client.loggerMiddleware).toBeFalsy()

    const clientWithLoggerMiddleware = client.withLoggerMiddleware({
      loggerFn: jest.fn(),
    })
    expect(clientWithLoggerMiddleware.withLoggerMiddleware).toBeTruthy()
  })

  describe('builder method', () => {
    test('build client', () => {
      const client = new ClientBuilder()
        .withCorrelationIdMiddleware({ generate: jest.fn() })
        .withUserAgentMiddleware({ name: 'test-user-agent' })
        .withClientCredentialsFlow(authMiddlewareOptions)
        .withQueueMiddleware({ concurrency: 20 })
        .withLoggerMiddleware({ loggerFn: jest.fn() })
        .withConcurrentModificationMiddleware()
        .withHttpMiddleware(httpMiddlewareOptions)
        .build()

      expect(client).toBeTruthy()
      expect(typeof client).toEqual('object')
      expect(typeof client.execute).toEqual('function')
      expect(typeof client.process).toEqual('function')
    })
  })
})
