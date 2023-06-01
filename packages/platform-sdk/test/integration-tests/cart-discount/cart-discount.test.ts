import {
  CartDiscountDraft,
  CartDiscountShippingCostTarget,
  CartDiscountValueRelativeDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from '../../../src'
import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'

import { createCartDiscount, deleteCartDiscount } from './cart-discount-fixture'
import { createType, deleteType } from '../type/type-fixture'

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
      sortOrder: '0.651',
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

  it('should get a cart discount  by Id', async () => {
    const cartDiscount = await createCartDiscount()

    const getCartDiscount = await apiRoot
      .cartDiscounts()
      .withId({ ID: cartDiscount.body.id })
      .get()
      .execute()

    expect(getCartDiscount).not.toBe(null)
    expect(getCartDiscount.body.id).toEqual(cartDiscount.body.id)

    await deleteCartDiscount(cartDiscount)
  })

  it('should get a cart discount  by key', async () => {
    const cartDiscount = await createCartDiscount()

    const getCartDiscount = await apiRoot
      .cartDiscounts()
      .withKey({ key: cartDiscount.body.key })
      .get()
      .execute()

    expect(getCartDiscount).not.toBe(null)
    expect(getCartDiscount.body.key).toEqual(cartDiscount.body.key)

    await deleteCartDiscount(cartDiscount)
  })

  it('should query a cart discount', async () => {
    const cartDiscount = await createCartDiscount()

    const queryCartDiscount = await apiRoot
      .cartDiscounts()
      .get({
        queryArgs: {
          where: 'id=' + '"' + cartDiscount.body.id + '"',
        },
      })
      .execute()

    expect(queryCartDiscount).not.toBe(null)
    expect(queryCartDiscount.body.results[0].id).toEqual(cartDiscount.body.id)

    await deleteCartDiscount(cartDiscount)
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

  it('should set customer type to a cart discount', async () => {
    const type = await createType()
    const cartDiscount = await createCartDiscount()

    const typeResourceIdentifier: TypeResourceIdentifier = {
      typeId: 'type',
      id: type.body.id,
    }
    const fieldName: string = type.body.fieldDefinitions[0].name
    const fieldValue = 'fieldValue'
    const fieldContainer: FieldContainer = {
      [fieldName]: fieldValue,
    }

    const updateCartDiscount = await apiRoot
      .cartDiscounts()
      .withKey({ key: cartDiscount.body.key })
      .post({
        body: {
          version: cartDiscount.body.version,
          actions: [
            {
              action: 'setCustomType',
              type: typeResourceIdentifier,
              fields: fieldContainer,
            },
          ],
        },
      })
      .execute()

    expect(updateCartDiscount.body.version).not.toBe(cartDiscount.body.version)
    expect(updateCartDiscount.statusCode).toEqual(200)

    await deleteCartDiscount(updateCartDiscount)
    await deleteType(type)
  })
})
