import {
  CartDiscountDraft,
  CartDiscountShippingCostTarget,
  CartDiscountValueRelativeDraft,
} from '../../../src'
import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'

import { createCartDiscount, deleteCartDiscount } from './cart-discount-fixture'

describe('testing cart discount API calls', () => {
  it('should create and delete a cart discount by ID', async () => {
    const cartDiscountValueDraft: CartDiscountValueRelativeDraft = {
      type: 'relative',
      permyriad: 10,
    }

    const cartDiscountShippingCostTarget: CartDiscountShippingCostTarget = {
      type: 'shipping',
    }
    const cartDiscountDraft: CartDiscountDraft = {
      key: randomUUID(),
      name: { en: 'test-name-cartDiscount' + randomUUID() },
      value: cartDiscountValueDraft,
      cartPredicate: 'country="DE"',
      target: cartDiscountShippingCostTarget,
      sortOrder: '0.61',
    }

    const responseCreatedCartDiscount = await apiRoot
      .cartDiscounts()
      .post({ body: cartDiscountDraft })
      .execute()

    expect(responseCreatedCartDiscount.statusCode).toEqual(201)
    expect(responseCreatedCartDiscount.body).not.toBe(null)

    const responseCartDiscountDeleted = await apiRoot
      .cartDiscounts()
      .withId({ ID: responseCreatedCartDiscount.body.id })
      .delete({
        queryArgs: { version: responseCreatedCartDiscount.body.version },
      })
      .execute()

    expect(responseCartDiscountDeleted.statusCode).toEqual(200)
  })

  it('should update a cart discount by Id', async () => {
    const cartDiscount = await createCartDiscount()

    const updateCartDiscount = await apiRoot
      .cartDiscounts()
      .withId({ ID: cartDiscount.body.id })
      .post({
        body: {
          version: cartDiscount.body.version,
          actions: [
            {
              action: 'setKey',
              key: randomUUID(),
            },
          ],
        },
      })
      .execute()

    expect(updateCartDiscount.body.version).not.toBe(cartDiscount.body.version)
    expect(updateCartDiscount.statusCode).toEqual(200)

    await deleteCartDiscount(updateCartDiscount)
  })

  it('should update a cart discount by Key', async () => {
    const cartDiscount = await createCartDiscount()

    const updateCartDiscount = await apiRoot
      .cartDiscounts()
      .withKey({ key: cartDiscount.body.key })
      .post({
        body: {
          version: cartDiscount.body.version,
          actions: [
            {
              action: 'setKey',
              key: randomUUID(),
            },
          ],
        },
      })
      .execute()

    expect(updateCartDiscount.body.version).not.toBe(cartDiscount.body.version)
    expect(updateCartDiscount.statusCode).toEqual(200)

    await deleteCartDiscount(updateCartDiscount)
  })
})
