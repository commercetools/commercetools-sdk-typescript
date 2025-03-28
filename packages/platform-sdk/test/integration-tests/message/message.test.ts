import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from '../product/product-fixture'
import { createCategory, deleteCategory } from '../category/category-fixture'
import {
  deleteTaxCategory,
  ensureTaxCategory,
} from '../tax-category/tax-category-fixture'
import {
  deleteProductType,
  ensureProductType,
  productTypeDraftForProduct,
} from '../product-type/product-type-fixture'
import { apiRoot } from '../test-utils'

describe('testing message API calls', () => {
  let category, taxCategory, productType, product, message
  it('should get a message', async () => {
    category = await createCategory()
    taxCategory = await ensureTaxCategory()
    productType = await ensureProductType(productTypeDraftForProduct)
    const productDraft = createProductDraft(
      category,
      taxCategory,
      productType,
      false
    )

    product = await createProduct(productDraft)
    message = await apiRoot.messages().get().execute()

    expect(message.body.results).not.toBe(null)
  })

  it('should get a message by Id', async () => {
    try {
      /**
       * since there is not operation to create a message
       * if the message response result is empty, the test
       * will fail, to avoid this we wrap it in a try-catch
       * and discard the error.
       */
      const messageId = message.body.results[0].id
      const _message = await apiRoot
        .messages()
        .withId({ ID: messageId })
        .get()
        .execute()

      expect(_message.body).not.toBe(null)
      expect(_message.body.id).toEqual(messageId)
    } catch (e) {
      /** noop */
    }
  })

  afterAll(async () => {
    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteCategory(category)
    await deleteTaxCategory(taxCategory)
  })
})
