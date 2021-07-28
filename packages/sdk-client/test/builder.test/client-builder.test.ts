import ClientBuilder from '../../src/builder/ClientBuilder';
require('dotenv').config();

export const projectKey = 'demo'
const fetch = require('node-fetch');

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
  };

  const httpMiddlewareOptions = {
    host: 'https://api.europe-west1.gcp.commercetools.com',
    fetch
  }

  test('should set the projectKey', () => {
    const client = new ClientBuilder() as any
    expect(client.projectKey).toEqual(undefined)
    const clientWithKeyProp = client.withProjectKey(projectKey)

    expect(clientWithKeyProp.projectKey).toEqual('demo')
  })

  test('should set authorization middleware', () => {
    const client = new ClientBuilder() as any;
    expect(client.authMiddleware).toEqual(undefined)
    const clientWithKeyProp = client.withClientCredentialsFlow(authMiddlewareOptions)

    expect(clientWithKeyProp.authMiddleware).toBeTruthy()
  })

  test('should set the http middleware', () => {
    const client = new ClientBuilder() as any;
    expect(client.httpMiddleware).toEqual(undefined)
    const clientWithKeyProp = client.withHttpMiddleware(httpMiddlewareOptions);

    expect(clientWithKeyProp.httpMiddleware).toBeTruthy()
  })

  test('should build the client when build method is called', () => {
    const client = new ClientBuilder()
      .withHttpMiddleware(httpMiddlewareOptions)
      .withClientCredentialsFlow(authMiddlewareOptions)
      .build() as any;

    expect(client).toHaveProperty('execute');
    expect(client).toHaveProperty('process');

    expect(typeof client.execute).toEqual('function')
    expect(typeof client.process).toEqual('function')
  })
})
