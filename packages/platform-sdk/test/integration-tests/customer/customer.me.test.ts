import { apiRoot } from '../test-utils'
import {
  Cart,
  CartPagedQueryResponse,
  ClientResponse,
  createApiBuilderFromCtpClient,
  CustomerSignInResult,
} from '../../../src'
import { createCustomer, createCustomerDraft } from './customer-fixture'
import { createCustomerGroup } from '../customer-group/customer-group-fixture'
import { requireEnvVar } from '../../helpers/test-utils'
import { ClientBuilder } from '@commercetools/sdk-client-v2'

const projectKey = requireEnvVar('CTP_PROJECT_KEY')
const clientId = requireEnvVar('CTP_CLIENT_ID')
const clientSecret = requireEnvVar('CTP_CLIENT_SECRET')
const authURL = requireEnvVar('CTP_AUTH_URL')
const ctp_host = requireEnvVar('CTP_API_URL')

describe('testing me endpoint API calls', () => {
  describe('testing customer endpoint', () => {
    it('should sign in using me endpoint', async () => {
      const customerGroup = await createCustomerGroup()
      const customerDraft = await createCustomerDraft(customerGroup)
      const customer = await createCustomer(customerDraft)

      const responseLoginMe: ClientResponse<CustomerSignInResult> =
        await apiRoot
          .me()
          .login()
          .post({
            body: {
              email: customer.body.customer.email,
              password: customerDraft.password,
            },
          })
          .execute()
      expect(responseLoginMe.statusCode).toBe(200)
      expect(responseLoginMe.body).not.toBe(null)
    })
  })

  describe('testing cart endpoint', () => {
    it('should create cart using me endpoint and anonymous session', async () => {
      const ctpClient = new ClientBuilder()
        .withAnonymousSessionFlow({
          host: authURL,
          projectKey,
          credentials: {
            clientId: clientId,
            clientSecret: clientSecret,
          },
        })
        // .withHttpMiddleware({host: 'https://api.europe-west1.gcp.commercetools.com'})
        .build()

      await ctpClient.execute({
        method: 'POST',
        uri: `https://auth.europe-west1.gcp.commercetools.com/oauth/${projectKey}/anonymous/token`,
      })

      const anonymousApiRoot = createApiBuilderFromCtpClient(
        ctpClient
      ).withProjectKey({
        projectKey,
      })

      await anonymousApiRoot
        .me()
        .carts()
        .post({
          body: {
            currency: 'EUR',
            country: 'DE',
          },
        })
        .execute()

      const responseGetCarts: ClientResponse<CartPagedQueryResponse> =
        await anonymousApiRoot.me().carts().get().execute()

      expect(responseGetCarts.statusCode).toBe(200)
    })
  })
})
