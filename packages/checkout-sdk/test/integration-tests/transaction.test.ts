import { ClientBuilder } from '@commercetools/ts-client'
import { createApiBuilderFromCtpClient as cApiClient } from '@commercetools/platform-sdk'
import { createApiBuilderFromCtpClient } from '@commercetools/checkout-sdk'

describe('::transaction', () => {
  let cart, api, apiCheckout, projectKey

  beforeAll(() => {
    projectKey = process.env.CTP_PROJECT_KEY

    const authMiddlewareOptions = {
      projectKey,
      host: 'https://auth.europe-west1.gcp.commercetools.com',
      credentials: {
        clientId: process.env.CTP_CLIENT_ID || '',
        clientSecret: process.env.CTP_CLIENT_SECRET || '',
      },
      httpClient: fetch,
    }

    const httpMiddlewareOptions = {
      host: 'https://api.europe-west1.gcp.commercetools.com',
      includeOriginalRequest: true,
      maskSensitiveHeaderData: false,
      httpClient: fetch,
    }

    const httpMiddlewareOptionsCheckout = {
      host: 'https://checkout.europe-west1.gcp.commercetools.com',
      includeOriginalRequest: true,
      maskSensitiveHeaderData: false,
      httpClient: fetch,
    }

    const client = new ClientBuilder()
      .withProjectKey(projectKey)
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withConcurrentModificationMiddleware()
      .withHttpMiddleware(httpMiddlewareOptions)
      .build()

    const clientCheckout = new ClientBuilder()
      .withProjectKey(projectKey)
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withConcurrentModificationMiddleware()
      .withHttpMiddleware(httpMiddlewareOptionsCheckout)
      .build()

    api = cApiClient(client)
    apiCheckout = createApiBuilderFromCtpClient(
      clientCheckout,
      'https://checkout.europe-west1.gcp.commercetools.com'
    )
  })

  afterAll(async () => {
    const updatedCart = await api
      .withProjectKey({ projectKey })
      .carts()
      .withId({ ID: cart.body.id })
      .get()
      .execute()

    await api
      .withProjectKey({ projectKey })
      .carts()
      .withId({ ID: cart.body.id })
      .delete({ queryArgs: { version: updatedCart.body.version } })
      .execute()
  })

  it('should create a cart', async () => {
    cart = await api
      .withProjectKey({ projectKey })
      .carts()
      .post({
        body: {
          currency: 'EUR',
        },
      })
      .execute()

    expect(cart).toBeDefined()
  })

  it('should create a transaction using created cart', async () => {
    const transactions = await apiCheckout
      .withProjectKey({ projectKey })
      .transactions()
      .post({
        body: {
          application: {
            typeId: 'application',
            key: process.env.CHECKOUT_APPLICATION_KEY,
          },
          transactionItems: [
            {
              paymentIntegration: {
                typeId: 'payment-integration',
                id: process.env.PAYMENT_INTEGRATION_ID,
              },
              amount: {
                centAmount: 1000,
                currencyCode: 'EUR',
              },
            },
          ],
          cart: {
            typeId: 'cart',
            id: cart.body.id,
          },
        },
      })
      .execute()

    expect(transactions).toBeDefined()
    expect(transactions.statusCode).toEqual(201)
  })
})
