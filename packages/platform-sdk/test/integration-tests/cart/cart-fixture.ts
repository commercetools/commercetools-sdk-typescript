import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { CartDraft } from '../../../src'

const cartDraft: CartDraft = {
  key: 'test-cart-key-' + randomUUID(),
  currency: 'EUR',
  country: 'DE',
}
export const createCartDraftWithCustomer = async (customer) => {
  const cartDraft: CartDraft = {
    key: 'test-cart-key-' + randomUUID(),
    currency: 'EUR',
    country: 'DE',
    customerId: customer.body.customer.id,
  }

  return cartDraft
}

export const createCart = async (cartDraftBody?) => {
  return await apiRoot
    .carts()
    .post({ body: cartDraftBody || cartDraft })
    .execute()
}

export const deleteCart = async (cart) => {
  return await apiRoot
    .carts()
    .withId({ ID: cart.body.id })
    .delete({
      queryArgs: { version: cart.body.version },
    })
    .execute()
}
