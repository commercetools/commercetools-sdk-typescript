import { requireEnvVar } from '../../helpers/test-utils'
import {
  Next,
  ClientBuilder,
  ClientRequest,
  Middleware,
} from '@commercetools/sdk-client-v2'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import fetch from 'node-fetch'

const projectKey = requireEnvVar('CTP_PROJECT_KEY')
const clientId = requireEnvVar('CTP_CLIENT_ID')
const clientSecret = requireEnvVar('CTP_CLIENT_SECRET')
const authURL = requireEnvVar('CTP_AUTH_URL')
const apiURL = requireEnvVar('CTP_API_URL')

describe('testing api root client', () => {
  it('should create api root client with anonymous session', async () => {
    const authMiddlewareOptions = {
      host: authURL,
      projectKey,
      credentials: {
        clientId: clientId,
        clientSecret: clientSecret,
      },
      scopes: [`manage_project:${projectKey}`],
      fetch,
    }

    const httpMiddlewareOptions = {
      host: authURL,
      headersWithStringBody: ['application/x-www-form-urlencoded'],
      fetch,
    }

    const client = new ClientBuilder()
      .withHttpMiddleware(httpMiddlewareOptions)
      .build()

    const request: ClientRequest = {
      method: 'POST',
      uri: `/oauth/${projectKey}/anonymous/token`,
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${authMiddlewareOptions.credentials.clientId}:${authMiddlewareOptions.credentials.clientSecret}`
        ).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&scope=${authMiddlewareOptions.scopes.join(
        ' '
      )}`,
    }

    const response = await client.execute(request)
    expect(response.statusCode).toBe(200)
    expect(response.body.access_token).toBeDefined()
  })

  it('should create api root client with anonymous session', async () => {
    const authMiddlewareOptions = {
      host: authURL,
      projectKey,
      credentials: {
        clientId: clientId,
        clientSecret: clientSecret,
      },
      scopes: [`manage_project:${projectKey}`],
      fetch,
    }

    const httpMiddlewareOptions = {
      host: apiURL,
      headersWithStringBody: ['application/x-www-form-urlencoded'],
      fetch,
    }

    const client = new ClientBuilder()
      .withProjectKey(projectKey)
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withHttpMiddleware(httpMiddlewareOptions)
      .withLoggerMiddleware({
        level: 'debug',
        name: 'test-logger',
        logger(o): Middleware {
          return (next: Next): Next => {
            return (req, res) => {
              expect(o).toHaveProperty('name')
              expect(o).toHaveProperty('level')
              expect(o.name).toEqual('test-logger')
              expect(o.level).toEqual('debug')

              expect(req.baseUri).toEqual(apiURL)
              expect(req.uri).toMatch(projectKey)

              expect(res.statusCode).toEqual(200)
              expect(res.error).toBeUndefined()
              next(req, res)
            }
          }
        },
      })
      .build()

    createApiBuilderFromCtpClient(client)
      .withProjectKey({ projectKey })
      .get()
      .execute()
  })
})
