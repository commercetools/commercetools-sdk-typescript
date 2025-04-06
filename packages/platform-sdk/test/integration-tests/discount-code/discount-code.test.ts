import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { CartDiscountResourceIdentifier, DiscountCodeDraft } from '../../../src'
import {
  createCartDiscount,
  deleteCartDiscount,
} from '../cart-discount/cart-discount-fixture'
import { deleteDiscountCode } from './discount-code-fixture'

describe('testing discount code API calls', () => {
  let cartDiscount, discountCode
  it('should create a discount code', async () => {
    cartDiscount = await createCartDiscount()
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

    discountCode = await apiRoot
      .discountCodes()
      .post({ body: discountCodeDraft })
      .execute()

    expect(discountCode.body).toBeDefined()
    expect(discountCode.statusCode).toEqual(201)
  })

  it('should get a discount code by ID', async () => {
    const getDiscountCode = await apiRoot
      .discountCodes()
      .withId({ ID: discountCode.body.id })
      .get()
      .execute()

    expect(getDiscountCode).toBeDefined()
    expect(getDiscountCode.body.id).toEqual(discountCode.body.id)
  })

  it('should query a discount code', async () => {
    const queryDiscountCode = await apiRoot
      .discountCodes()
      .get({
        queryArgs: {
          where: 'id=' + '"' + discountCode.body.id + '"',
        },
      })
      .execute()

    expect(queryDiscountCode).toBeDefined()
    expect(queryDiscountCode.body.results[0].id).toEqual(discountCode.body.id)
  })

  it('should update a discount code by ID', async () => {
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

    expect(updateDiscountCode.statusCode).toEqual(200)
    expect(updateDiscountCode.body.version).not.toEqual(
      cartDiscount.body.version
    )

    discountCode = updateDiscountCode
  })

  afterAll(async () => {
    await deleteDiscountCode(discountCode)
    await deleteCartDiscount(cartDiscount)
  })
})
