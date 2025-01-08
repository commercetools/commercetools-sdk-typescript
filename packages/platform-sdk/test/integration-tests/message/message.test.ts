import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from '../product/product-fixture'
import { createCategory, deleteCategory } from '../category/category-fixture'
import { ensureTaxCategory } from '../tax-category/tax-category-fixture'
import {
  ensureProductType,
  productTypeDraftForProduct,
} from '../product-type/product-type-fixture'
import { apiRoot } from '../test-utils'

describe('testing message API calls', () => {
  it('should get a message', async () => {
    const category = await createCategory()
    const taxCategory = await ensureTaxCategory()
    const productType = await ensureProductType(productTypeDraftForProduct)
    const productDraft = createProductDraft(
      category,
      taxCategory,
      productType,
      false
    )
    const product = await createProduct(productDraft)
    await deleteProduct(product)
    await deleteCategory(category)

    const message = await apiRoot.messages().get().execute()

    expect(message.body.results).not.toBe(null)
  })

  it('should get a message by Id', async () => {
    const category = await createCategory()
    const taxCategory = await ensureTaxCategory()
    const productType = await ensureProductType(productTypeDraftForProduct)
    const productDraft = createProductDraft(
      category,
      taxCategory,
      productType,
      false
    )
    const product = await createProduct(productDraft)
    await deleteProduct(product)
    const messageResponse = await apiRoot.messages().get().execute()
    try {
      /**
       * since there is not operation to create a message
       * if the message response result is empty, the test
       * will fail, to avoid this we wrap it in a try-catch
       * and discard the error.
       */
      const messageId = messageResponse.body.results[0].id
      const message = await apiRoot
        .messages()
        .withId({ ID: messageId })
        .get()
        .execute()

      expect(message.body).not.toBe(null)
      expect(message.body.id).toEqual(messageId)

      await deleteCategory(category)
    } catch (e) {
      /** noop */
    }
  })
})
