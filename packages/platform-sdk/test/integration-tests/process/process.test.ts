import { ClientBuilder } from '@commercetools/sdk-client-v2'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import fetch from 'node-fetch'

describe('integration test for process function', () => {
  const projectKey = process.env.CTP_PROJECT_KEY
  function getAuthOptions(options: object = {}) {
    return {
      host: 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey,
      credentials: {
        clientId: process.env.CTP_CLIENT_ID || '',
        clientSecret: process.env.CTP_CLIENT_SECRET || '',
      },
      oauthUri: process.env.adminAuthUrl || '',
      scopes: [`manage_project:${projectKey}`],
      fetch,
      ...options,
    }
  }

  function getHttpOptions(options: object = {}) {
    return {
      host: 'https://api.europe-west1.gcp.commercetools.com',
      fetch,
      ...options,
    }
  }

  test('should process customer list using provided limit', async () => {
    const client = new ClientBuilder()
      .withProjectKey(projectKey)
      .withClientCredentialsFlow(getAuthOptions())
      .withHttpMiddleware(getHttpOptions())
      .build()

    const apiRoot = createApiBuilderFromCtpClient(client)

    const request = apiRoot
      .withProjectKey({ projectKey })
      .customers()
      .get()
      .clientRequest()

    const limit = 30
    const fn = (data: any) => data

    client
      .process(request, fn, { limit })
      /**
       * response is an array of processed results
       */
      .then((response) => {
        // @ts-ignore
        expect(response[0].statusCode).toEqual(200)
        expect(response[0].body.limit).toEqual(limit)
        expect(response[0].body.results.length).toEqual(response[0].body.count)
      })
      .catch(fn)
  })

  test('should process customer list using provided limit', async () => {
    const client = new ClientBuilder()
      .withProjectKey(projectKey)
      .withClientCredentialsFlow(getAuthOptions())
      .withHttpMiddleware(getHttpOptions())
      .build()

    const apiRoot = createApiBuilderFromCtpClient(client)

    const request = apiRoot
      .withProjectKey({ projectKey })
      .customers()
      .get()
      .clientRequest()

    const limit = 5
    const fn = (data: any) => data

    client
      .process(request, fn, { total: 2, limit, sort: 'id asc' })
      /**
       * response is an array of processed results
       */
      .then((response) => {
        const id1 = response[0].body.results[0].id
        const id2 = response[0].body.results[1].id

        expect(id1 < id2).toBe(true)
      })
      .catch(fn)
  })

  test('should process customer list using provided limit', () => {
    const client = new ClientBuilder()
      .withProjectKey(projectKey)
      .withClientCredentialsFlow(getAuthOptions())
      .withHttpMiddleware(getHttpOptions())
      .build()

    const apiRoot = createApiBuilderFromCtpClient(client)

    const request = apiRoot
      .withProjectKey({ projectKey })
      .customers()
      .get()
      .clientRequest()

    const limit = 20
    const fn = (data: any) => data

    client
      .process(request, fn, { total: 2, limit, sort: 'id desc' })
      /**
       * response is an array of processed results
       */
      .then((response) => {
        const id1 = response[0].body.results[0].id
        const id2 = response[0].body.results[1].id

        expect(id1 > id2).toBe(true)
      })
      .catch(fn)
  })

  test('should properly the `expand` args as a uri parameter', () => {
    const client = new ClientBuilder()
      .withProjectKey(projectKey)
      .withClientCredentialsFlow(getAuthOptions())
      .withHttpMiddleware(getHttpOptions())
      .build()

    const apiRoot = createApiBuilderFromCtpClient(client)

    const request = apiRoot
      .withProjectKey({ projectKey })
      .categories()
      .get({
        queryArgs: {
          limit: 2,
          withTotal: false,
          expand: ['parent', 'ancestors[*]'],
        },
      })
      .clientRequest()

    const fn = (data: any) => data
    return client
      .process(request, fn, {})
      .then((response) => {
        expect(response[0].statusCode).toEqual(200)
      })
      .catch(fn)
  })
})
