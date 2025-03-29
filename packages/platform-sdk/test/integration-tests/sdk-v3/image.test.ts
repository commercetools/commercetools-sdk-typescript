import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from '../product/product-fixture'
import { createCategory, deleteCategory } from '../category/category-fixture'
import { ensureProductType } from '../product-type/product-type-fixture'
import {
  deleteTaxCategory,
  ensureTaxCategory,
} from '../tax-category/tax-category-fixture'
import { apiRoot } from '../test-utils'

describe('Image Upload Tests', () => {
  const getImage = async (url: string) => {
    const response = await fetch(url)
    return Buffer.from(await response.arrayBuffer())
  }

  let product, category, taxCategory
  test('upload a product image', async () => {
    category = await createCategory()
    const productType = await ensureProductType()
    taxCategory = await ensureTaxCategory()

    const productDraft = createProductDraft(
      category,
      taxCategory,
      productType,
      true
    )

    product = await createProduct(productDraft)
    const uploadResponse = await apiRoot
      .products()
      .withId({ ID: product.body.id })
      .images()
      .post({
        headers: {
          'Content-Type': 'image/jpeg',
        },
        body: await getImage(
          'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/085498_1_medium.jpg'
        ),
        queryArgs: {
          filename: 'DKNY.jpeg',
        },
      })
      .execute()

    expect(uploadResponse.statusCode).toEqual(200)
    expect(uploadResponse.body.id).toEqual(product.body.id)
    product = uploadResponse
  })

  afterAll(async () => {
    await deleteProduct(product)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })
})
