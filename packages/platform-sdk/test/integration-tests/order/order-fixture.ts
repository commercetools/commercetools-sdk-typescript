import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { CartResourceIdentifier, OrderFromCartDraft } from '../../../src'

export const createOrder = async (cart) => {
  const cartResourceIdentifier: CartResourceIdentifier = {
    typeId: 'cart',
    id: cart.body.id,
  }

  const orderFromCartDraft: OrderFromCartDraft = {
    cart: cartResourceIdentifier,
    version: cart.body.version,
    orderNumber: randomUUID(),
  }

  return apiRoot.orders().post({ body: orderFromCartDraft }).execute()
}

export const deleteOrder = async (order) =>
  apiRoot
    .orders()
    .withId({ ID: order.body.id })
    .delete({
      queryArgs: { version: order.body.version },
    })
    .execute()
