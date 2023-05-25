import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { createProduct, createProductDraft } from '../product/product-fixture'
import { createCategory } from '../category/category-fixture'
import { createTaxCategory } from '../tax-category/tax-category-fixture'
import { createProductType } from '../product-type/product-type-fixture'
import { createCart, deleteCart } from '../cart/cart-fixture'
import {
  CartReference,
  CartResourceIdentifier,
  OrderFromCartDraft,
  ProductTypeResourceIdentifier,
} from '../../../src'

export const createOrder = async (cart, product) => {
  const updateCart = await apiRoot
    .carts()
    .withKey({ key: cart.body.key })
    .post({
      body: {
        version: cart.body.version,
        actions: [
          {
            action: 'addLineItem',
            sku: product.body.masterData.current.masterVariant.sku,
          },
          {
            action: 'setShippingAddress',
            address: {
              country: 'DE',
              state: 'Berlin',
            },
          },
        ],
      },
    })
    .execute()
  const cartResourceIdentifier: CartResourceIdentifier = {
    typeId: 'cart',
    id: updateCart.body.id,
  }

  const orderFromCartDraft: OrderFromCartDraft = {
    cart: cartResourceIdentifier,
    version: updateCart.body.version,
    orderNumber: randomUUID(),
  }

  return await apiRoot.orders().post({ body: orderFromCartDraft }).execute()
}

export const deleteOrder = async (order) => {
  return await apiRoot
    .orders()
    .withId({ ID: order.body.id })
    .delete({
      queryArgs: { version: order.body.version },
    })
    .execute()
}

export const deleteOrderEdit = async (order) => {
  return await apiRoot
    .orders()
    .edits()
    .withId({ ID: order.body.id })
    .delete({
      queryArgs: { version: order.body.version },
    })
    .execute()
}
