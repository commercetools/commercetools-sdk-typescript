import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from '../product/product-fixture'
import { createCategory, deleteCategory } from '../category/category-fixture'
import {
  createTaxCategory,
  deleteTaxCategory,
} from '../tax-category/tax-category-fixture'
import {
  createProductType,
  deleteProductType,
  productTypeDraftForProduct,
} from '../product-type/product-type-fixture'
import { apiRoot } from '../test-utils'

describe('testing message API calls', () => {
  it('should get a message', async () => {
    const category = await createCategory()
    const taxCategory = await createTaxCategory()
    const productType = await createProductType(productTypeDraftForProduct)
    const productDraft = await createProductDraft(
      category,
      taxCategory,
      productType,
      false
    )
    const product = await createProduct(productDraft)
    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)

    const message = await apiRoot.messages().get().execute()

    expect(message.body.results).not.toBe(null)
  })

  it('should get a message by Id', async () => {
    const category = await createCategory()
    const taxCategory = await createTaxCategory()
    const productType = await createProductType(productTypeDraftForProduct)
    const productDraft = await createProductDraft(
      category,
      taxCategory,
      productType,
      false
    )
    const product = await createProduct(productDraft)
    await deleteProduct(product)

    const messageResponse = await apiRoot.messages().get().execute()
    const messageId = messageResponse.body.results[0].id
    const message = await apiRoot
      .messages()
      .withId({ ID: messageId })
      .get()
      .execute()

    expect(message.body).not.toBe(null)
    expect(message.body.id).toEqual(messageId)

    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })
})
