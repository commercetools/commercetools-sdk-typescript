import { Middleware } from '../../src'
import ClientBuilder from '../../src/client-builder/ClientBuilder'
require('dotenv').config()

export const projectKey = 'demo'

describe('client builder', () => {
  const authMiddlewareOptions = {
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey: process.env.PROJECT_KEY || projectKey,
    credentials: {
      clientId: process.env.CTP_CLIENT_ID || '',
      clientSecret: process.env.CTP_CLIENT_SECRET || '',
    },
    oauthUri: process.env.OAUTH_URL || '',
    scopes: ['manage_project:demo-1'],
    fetch,
  }

  const httpMiddlewareOptions = {
    host: 'https://api.europe-west1.gcp.commercetools.com',
    fetch,
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
      expect(defaultClient.userAgentMiddleware).toBeTruthy()
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
      credentials: { user: { username: 'user', password: 'password' } },
    })
    expect(clientWithUserCredentials.authMiddleware).toBeTruthy()
  })

  test('should create a client with anonymousId', () => {
    const client = new ClientBuilder() as any
    expect(client.authMiddleware).toBeFalsy()

    const clientWithAnonymousID = client.withAnonymousSessionFlow({
      ...authMiddlewareOptions,
      credentials: { anonymousId: 'super-anonymous-id' },
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
    expect(client.userAgentMiddleware).toBeFalsy()

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

  test('should create client with apm middleware', () => {
    const client = new ClientBuilder() as any
    expect(client.telemetryMiddleware).toBeFalsy()

    const options = {
      apm: jest.fn(() => ({ apm: 'module' })),
      tracer: jest.fn(() => ({ tracer: 'module' })),
      createTelemetryMiddleware: jest.fn(() => ({ m: 'middleware' })),
    }

    const clientWithTelemetryMiddleware =
      client.withTelemetryMiddleware(options)
    expect(clientWithTelemetryMiddleware.telemetryMiddleware).toBeTruthy()
  })

  test('should create client with a custom logger function', () => {
    const client = new ClientBuilder() as any
    expect(client.loggerMiddleware).toBeFalsy()

    const options = { logger: jest.fn() }
    const clientWithLoggerMiddleware = client.withLoggerMiddleware(options)

    expect(options.logger).toHaveBeenCalled()
    expect(options.logger).toBeCalledTimes(1)
    expect(clientWithLoggerMiddleware.withLoggerMiddleware).toBeTruthy()
  })

  test('should create client with a before middleware function', () => {
    const client = new ClientBuilder() as any
    expect(client.beforeMiddleware).toBeFalsy()

    const options = { middleware: jest.fn() }
    const clientWithBeforeMiddleware =
      client.withBeforeExecutionMiddleware(options)

    expect(options.middleware).toHaveBeenCalled()
    expect(options.middleware).toHaveBeenCalledTimes(1)
    expect(
      clientWithBeforeMiddleware.withBeforeExecutionMiddleware
    ).toBeTruthy()
  })

  test('should create client with an after middleware function', () => {
    const client = new ClientBuilder() as any
    expect(client.afterMiddleware).toBeFalsy()

    const options = { middleware: jest.fn() }
    const clientWithAfterMiddleware =
      client.withAfterExecutionMiddleware(options)

    expect(options.middleware).toHaveBeenCalled()
    expect(options.middleware).toBeCalledTimes(1)
    expect(clientWithAfterMiddleware.withAfterExecutionMiddleware).toBeTruthy()
  })

  describe('builder method', () => {
    test('build client', () => {
      const client = new ClientBuilder()
        .withCorrelationIdMiddleware({ generate: jest.fn() })
        .withUserAgentMiddleware({ name: 'test-user-agent' })
        .withClientCredentialsFlow(authMiddlewareOptions)
        .withQueueMiddleware({ concurrency: 20 })
        .withLoggerMiddleware()
        .withHttpMiddleware(httpMiddlewareOptions)
        .withTelemetryMiddleware<{
          apm: Function
          tracer: Function
          createTelemetryMiddleware: (options: {
            apm: Function
            tracer: Function
          }) => Middleware
        }>({
          apm: jest.fn(),
          tracer: jest.fn(),
          createTelemetryMiddleware: (): Middleware => jest.fn(),
        })
        .withLoggerMiddleware({ logger: jest.fn() })
        .withBeforeExecutionMiddleware({ middleware: jest.fn() })
        .withAfterExecutionMiddleware({ middleware: jest.fn() })
        .build()

      expect(client).toBeTruthy()
      expect(client.execute).toBeTruthy()
      expect(client.process).toBeTruthy()
      expect(typeof client).toEqual('object')
      expect(typeof client.execute).toEqual('function')
      expect(typeof client.process).toEqual('function')
    })
  })
})
