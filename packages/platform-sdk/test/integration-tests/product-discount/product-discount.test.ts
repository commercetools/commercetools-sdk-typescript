import { randomUUID } from 'crypto'
import { apiRoot, SORT_ORDER } from '../test-utils'
import {
  ProductDiscountDraft,
  ProductDiscountValueRelativeDraft,
} from '../../../src'
import {
  createProductDiscount,
  deleteProductDiscount,
} from './product-discount-fixture'

describe('testing product Discount API calls', () => {
  it('should create and delete a product discount by ID', async () => {
    const productDiscountValueDraft: ProductDiscountValueRelativeDraft = {
      type: 'relative',
      permyriad: 10,
    }

    const productDiscountDraft: ProductDiscountDraft = {
      key: randomUUID(),
      name: { en: 'test-name-productDiscount' + randomUUID() },
      value: productDiscountValueDraft,
      predicate: 'product.key="random-key"',
      sortOrder: SORT_ORDER,
      isActive: false,
    }

    const responseCreatedProductDiscount = await apiRoot
      .productDiscounts()
      .post({ body: productDiscountDraft })
      .execute()

    expect(responseCreatedProductDiscount.statusCode).toEqual(201)
    expect(responseCreatedProductDiscount.body).not.toBe(null)

    const responseProductDiscountDeleted = await apiRoot
      .productDiscounts()
      .withId({ ID: responseCreatedProductDiscount.body.id })
      .delete({
        queryArgs: { version: responseCreatedProductDiscount.body.version },
      })
      .execute()

    expect(responseProductDiscountDeleted.statusCode).toEqual(200)
  })

  describe('with an existing product discount', () => {
    let productDiscount

    beforeEach(async () => {
      productDiscount = await createProductDiscount()
    })

    afterEach(async () => {
      await deleteProductDiscount(productDiscount)
    })

    it('should get a product discount by ID', async () => {
      const getProductDiscount = await apiRoot
        .productDiscounts()
        .withId({ ID: productDiscount.body.id })
        .get()
        .execute()

      expect(getProductDiscount).not.toBe(null)
      expect(getProductDiscount.body.id).toEqual(productDiscount.body.id)
    })

    it('should get a product discount by key', async () => {
      const getProductDiscount = await apiRoot
        .productDiscounts()
        .withKey({ key: productDiscount.body.key })
        .get()
        .execute()

      expect(getProductDiscount).not.toBe(null)
      expect(getProductDiscount.body.id).toEqual(productDiscount.body.id)
    })

    it('should query a product discount', async () => {
      const queryProductDiscount = await apiRoot
        .productDiscounts()
        .get({
          queryArgs: {
            where: 'id=' + '"' + productDiscount.body.id + '"',
          },
        })
        .execute()
      expect(queryProductDiscount).not.toBe(null)
      expect(queryProductDiscount.body.results[0].id).toEqual(
        productDiscount.body.id
      )
    })

    it('should update a product discount by Id', async () => {
      const updateProductDiscount = await apiRoot
        .productDiscounts()
        .withId({ ID: productDiscount.body.id })
        .post({
          body: {
            version: productDiscount.body.version,
            actions: [
              {
                action: 'changeIsActive',
                isActive: !productDiscount.body.isActive,
              },
            ],
          },
        })
        .execute()

      expect(updateProductDiscount.body.version).not.toBe(
        productDiscount.body.version
      )
      expect(updateProductDiscount.statusCode).toEqual(200)
    })

    it('should update a product discount by Key', async () => {
      const updateProductDiscount = await apiRoot
        .productDiscounts()
        .withKey({ key: productDiscount.body.key })
        .post({
          body: {
            version: productDiscount.body.version,
            actions: [
              {
                action: 'changeIsActive',
                isActive: !productDiscount.body.isActive,
              },
            ],
          },
        })
        .execute()

      expect(updateProductDiscount.body.version).not.toBe(
        productDiscount.body.version
      )
      expect(updateProductDiscount.statusCode).toEqual(200)
    })
  })
})
