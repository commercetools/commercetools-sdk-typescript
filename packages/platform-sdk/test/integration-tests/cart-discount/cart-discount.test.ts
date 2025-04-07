import {
  CartDiscountDraft,
  CartDiscountShippingCostTarget,
  CartDiscountValueRelativeDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from '../../../src'
import { randomUUID } from 'crypto'
import { apiRoot, SORT_ORDER } from '../test-utils'

import { deleteCartDiscount } from './cart-discount-fixture'
import { createType, deleteType } from '../type/type-fixture'

describe('testing cart discount API calls', () => {
  let cartDiscount, type
  it('should create a cart discount', async () => {
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
      sortOrder: SORT_ORDER,
    }

    const responseCreatedCartDiscount = await apiRoot
      .cartDiscounts()
      .post({ body: cartDiscountDraft })
      .execute()

    cartDiscount = responseCreatedCartDiscount
    expect(responseCreatedCartDiscount.body).toBeDefined()
    expect(responseCreatedCartDiscount.statusCode).toEqual(201)
  })

  it('should get a cart discount  by Id', async () => {
    const getCartDiscount = await apiRoot
      .cartDiscounts()
      .withId({ ID: cartDiscount.body.id })
      .get()
      .execute()

    expect(getCartDiscount).toBeDefined()
    expect(getCartDiscount.body.id).toEqual(cartDiscount.body.id)
  })

  it('should get a cart discount  by key', async () => {
    const getCartDiscount = await apiRoot
      .cartDiscounts()
      .withKey({ key: cartDiscount.body.key })
      .get()
      .execute()

    expect(getCartDiscount).toBeDefined()
    expect(getCartDiscount.body.key).toEqual(cartDiscount.body.key)
  })

  it('should query a cart discount', async () => {
    const queryCartDiscount = await apiRoot
      .cartDiscounts()
      .get({
        queryArgs: {
          where: 'name(en= :name)',
          'var.name': cartDiscount.body.name.en,
        },
      })
      .execute()

    expect(queryCartDiscount).toBeDefined()
    expect(queryCartDiscount.body.results[0].id).toEqual(cartDiscount.body.id)
  })

  it('should update a cart discount by Id', async () => {
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

    expect(updateCartDiscount.body.version).not.toEqual(
      cartDiscount.body.version
    )
    expect(updateCartDiscount.statusCode).toEqual(200)
    cartDiscount = updateCartDiscount
  })

  it('should update a cart discount by Key', async () => {
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

    expect(updateCartDiscount.statusCode).toEqual(200)
    expect(updateCartDiscount.body.version).not.toEqual(
      cartDiscount.body.version
    )
    cartDiscount = updateCartDiscount
  })

  it('should set customer type to a cart discount', async () => {
    type = await createType()
    const typeResourceIdentifier: TypeResourceIdentifier = {
      typeId: 'type',
      id: type.body.id,
    }
    const fieldName: string = type.body.fieldDefinitions[0].name
    const fieldContainer: FieldContainer = {
      [fieldName]: 'fieldValue',
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

    expect(updateCartDiscount.statusCode).toEqual(200)
    expect(updateCartDiscount.body.version).not.toEqual(
      cartDiscount.body.version
    )

    cartDiscount = updateCartDiscount
  })

  afterAll(async () => {
    await deleteCartDiscount(cartDiscount)
    await deleteType(type)
  })
})
