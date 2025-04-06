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
  describe('with an existing product discount', () => {
    let productDiscount

    beforeAll(async () => {
      productDiscount = await createProductDiscount()
    })

    it('should get a product discount by ID', async () => {
      const getProductDiscount = await apiRoot
        .productDiscounts()
        .withId({ ID: productDiscount.body.id })
        .get()
        .execute()

      expect(getProductDiscount).toBeDefined()
      expect(getProductDiscount.body.id).toEqual(productDiscount.body.id)
    })

    it('should get a product discount by key', async () => {
      const getProductDiscount = await apiRoot
        .productDiscounts()
        .withKey({ key: productDiscount.body.key })
        .get()
        .execute()

      expect(getProductDiscount).toBeDefined()
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
      expect(queryProductDiscount).toBeDefined()
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

      expect(updateProductDiscount.statusCode).toEqual(200)
      expect(updateProductDiscount.body.version).not.toEqual(
        productDiscount.body.version
      )

      productDiscount = updateProductDiscount
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

      expect(updateProductDiscount.statusCode).toEqual(200)
      expect(updateProductDiscount.body.version).not.toEqual(
        productDiscount.body.version
      )

      productDiscount = updateProductDiscount
    })

    afterAll(async () => {
      await deleteProductDiscount(productDiscount)
    })
  })
})
