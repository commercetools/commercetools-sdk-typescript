import {
  Cart,
  ClientResponse,
  createApiBuilderFromCtpClient,
} from '../../../src'
import { requireEnvVar } from '../../helpers/test-utils'
import { ClientBuilder } from '@commercetools/sdk-client-v2'
import { ByProjectKeyRequestBuilder } from '../../../src/generated/client/by-project-key-request-builder'
import fetch from 'node-fetch'

const projectKey = requireEnvVar('CTP_PROJECT_KEY')
const clientId = requireEnvVar('CTP_CLIENT_ID')
const clientSecret = requireEnvVar('CTP_CLIENT_SECRET')
const authURL = requireEnvVar('CTP_AUTH_URL')
const apiUrl = requireEnvVar('CTP_API_URL')

describe('testing me endpoint cart', () => {
  let anonymousApiRoot: ByProjectKeyRequestBuilder

  beforeAll(async () => {
    const ctpClient = new ClientBuilder()
      .withAnonymousSessionFlow({
        host: authURL,
        projectKey,
        credentials: {
          clientId: clientId,
          clientSecret: clientSecret,
        },
        scopes: [`manage_project:${projectKey}`],
        fetch,
      })
      .withHttpMiddleware({ host: apiUrl, fetch })
      .build()

    anonymousApiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
      projectKey,
    })

    const responseCarts = await anonymousApiRoot.carts().get().execute()
    for (const cart of responseCarts.body.results) {
      await anonymousApiRoot
        .carts()
        .withId({ ID: cart.id })
        .delete({ queryArgs: { version: cart.version } })
        .execute()
    }
  })

  it('should create cart using me endpoint and anonymous session', async () => {
    const responseCartCreate: ClientResponse<Cart> = await anonymousApiRoot
      .me()
      .carts()
      .post({
        body: {
          currency: 'EUR',
          country: 'DE',
        },
      })
      .execute()

    expect(responseCartCreate.statusCode).toBe(201)
    expect(responseCartCreate.body).not.toBeNull()
  })
})
