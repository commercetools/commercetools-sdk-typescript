import { apiRootV3 } from '../test-utils'
import {
  createProductType,
  productTypeDraftForProduct,
} from '../product-type/product-type-fixture'
import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from '../product/product-fixture'
import { createCategory } from '../category/category-fixture'
import { createTaxCategory } from '../tax-category/tax-category-fixture'

describe('Concurrent Modification Middleware', () => {
  let product

  beforeEach(async () => {
    const category = await createCategory()
    const taxCategory = await createTaxCategory()
    const productType = await createProductType(productTypeDraftForProduct)

    //Published product
    const productDraft = await createProductDraft(
      category,
      taxCategory,
      productType,
      true
    )
    const productCreateResponse = await createProduct(productDraft)
    product = productCreateResponse.body
  })

  afterEach(async () => {
    const productGetResponse = await apiRootV3
      .products()
      .withId({ ID: product.id })
      .get()
      .execute()

    await deleteProduct(productGetResponse)
  })

  it('should retry the request with correct version when the first time the version is wrong', async () => {
    const productUpdateResponse = await apiRootV3
      .products()
      .withId({ ID: product.id })
      .post({
        body: {
          version: product.version + 1,
          actions: [
            {
              action: 'changeName',
              name: { en: 'test-name' + new Date().getTime() },
            },
          ],
        },
      })
      .execute()
    expect(productUpdateResponse.statusCode).toBe(200)
  })
})
