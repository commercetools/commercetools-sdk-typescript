import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { CartDiscountResourceIdentifier, DiscountCodeDraft } from '../../../src'
import {
  createCartDiscount,
  deleteCartDiscount,
} from '../cart-discount/cart-discount-fixture'
import {
  createDiscountCode,
  createDiscountCodeDraft,
  deleteDiscountCode,
} from './discount-code-fixture'

describe('testing discount code API calls', () => {
  it('should create and delete a discount code by ID', async () => {
    const cartDiscount = await createCartDiscount()

    const cartDiscountResourceIdentifier: CartDiscountResourceIdentifier[] = [
      {
        typeId: 'cart-discount',
        id: cartDiscount.body.id,
      },
    ]

    const discountCodeDraft: DiscountCodeDraft = {
      name: { en: 'test-discount-code-' + randomUUID() },
      code: randomUUID(),
      cartDiscounts: cartDiscountResourceIdentifier,
      cartPredicate: 'country="DE"',
      isActive: false,
    }

    const responseCreatedDiscountCode = await apiRoot
      .discountCodes()
      .post({ body: discountCodeDraft })
      .execute()

    expect(responseCreatedDiscountCode.statusCode).toEqual(201)
    expect(responseCreatedDiscountCode.body).not.toBe(null)

    const responseDiscountCodeDeleted = await apiRoot
      .discountCodes()
      .withId({ ID: responseCreatedDiscountCode.body.id })
      .delete({
        queryArgs: { version: responseCreatedDiscountCode.body.version },
      })
      .execute()
    await deleteCartDiscount(cartDiscount)
    expect(responseDiscountCodeDeleted.statusCode).toEqual(200)
  })

  it('should get a discount code by ID', async () => {
    const cartDiscount = await createCartDiscount()
    const discountCodeDraft = await createDiscountCodeDraft(cartDiscount)
    const discountCode = await createDiscountCode(discountCodeDraft)
    const getDiscountCode = await apiRoot
      .discountCodes()
      .withId({ ID: discountCode.body.id })
      .get()
      .execute()
    expect(getDiscountCode).not.toBe(null)
    expect(getDiscountCode.body.id).toEqual(discountCode.body.id)

    await deleteDiscountCode(discountCode)
    await deleteCartDiscount(cartDiscount)
  })

  it('should query a discount code', async () => {
    const cartDiscount = await createCartDiscount()
    const discountCodeDraft = await createDiscountCodeDraft(cartDiscount)
    const discountCode = await createDiscountCode(discountCodeDraft)
    const queryDiscountCode = await apiRoot
      .discountCodes()
      .get({
        queryArgs: {
          where: 'id=' + '"' + discountCode.body.id + '"',
        },
      })
      .execute()
    expect(queryDiscountCode).not.toBe(null)
    expect(queryDiscountCode.body.results.at(0).id).toEqual(
      discountCode.body.id
    )

    await deleteDiscountCode(discountCode)
    await deleteCartDiscount(cartDiscount)
  })

  it('should update a discount code by ID', async () => {
    const cartDiscount = await createCartDiscount()
    const discountCodeDraft = await createDiscountCodeDraft(cartDiscount)
    const discountCode = await createDiscountCode(discountCodeDraft)

    const updateDiscountCode = await apiRoot
      .discountCodes()
      .withId({ ID: discountCode.body.id })
      .post({
        body: {
          version: discountCode.body.version,
          actions: [
            {
              action: 'setMaxApplications',
              maxApplications: 10,
            },
          ],
        },
      })
      .execute()

    expect(updateDiscountCode.body.version).not.toBe(cartDiscount.body.version)
    expect(updateDiscountCode.statusCode).toEqual(200)

    await deleteDiscountCode(updateDiscountCode)
    await deleteCartDiscount(cartDiscount)
  })
})
