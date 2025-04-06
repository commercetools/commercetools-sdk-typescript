import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { CartDraft } from '../../../src'

const cartDraft: CartDraft = {
  key: 'test-cart-key-' + randomUUID(),
  currency: 'EUR',
  country: 'DE',
  shippingAddress: {
    country: 'DE',
    state: 'Berlin',
  },
}
export const createCartDraftWithCustomer = (customer) => {
  const cartDraft: CartDraft = {
    key: 'test-cart-key-' + randomUUID(),
    currency: 'EUR',
    country: 'DE',
    customerId: customer.body.customer.id,
  }

  return cartDraft
}

export const createCart = async (cartDraftBody?) =>
  apiRoot
    .carts()
    .post({ body: cartDraftBody || cartDraft })
    .execute()

export const deleteCart = async (cart) => {
  // get latest cart
  const _cart = await apiRoot
    .carts()
    .withId({ ID: cart.body.id })
    .get()
    .execute()

  // delete cart
  await apiRoot
    .carts()
    .withId({ ID: cart.body.id })
    .delete({
      queryArgs: { version: _cart.body.version },
    })
    .execute()
}
