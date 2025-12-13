import { ctpApiBuilder as ctpApiRoot } from '../helpers/ctp-api-helper'
import { ctpApiBuilder, Transaction } from '../helpers/api-helpers'

describe('::transaction', () => {
  let cart: any, transactions: Transaction

  afterAll(async () => {
    const updatedCart = await ctpApiRoot
      .carts()
      .withId({ ID: cart.body.id })
      .get()
      .execute()

    await ctpApiRoot
      .carts()
      .withId({ ID: cart.body.id })
      .delete({ queryArgs: { version: updatedCart.body.version } })
      .execute()
  })

  it('should create a cart', async () => {
    cart = await ctpApiRoot
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
    const _transactions = await ctpApiBuilder
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

    expect(_transactions).toBeDefined()
    expect(_transactions.statusCode).toEqual(201)
    transactions = _transactions.body
  })

  it('should retrieve a transaction using ID', async () => {
    const _transaction = await ctpApiBuilder
      .transactions()
      .withId({ id: transactions.id })
      .get()
      .execute()

    expect(_transaction).toBeDefined()
    expect(_transaction.statusCode).toEqual(200)
  })
})
