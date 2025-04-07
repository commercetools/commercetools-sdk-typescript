import { apiRoot } from '../test-utils'
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
import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from '../product/product-fixture'
import { GraphQLRequest } from '../../../src'

describe('testing graphQL API calls', () => {
  let category, taxCategory, productType, product
  it('should make a graphQL request with string', async () => {
    category = await createCategory()
    taxCategory = await ensureTaxCategory()
    productType = await ensureProductType(productTypeDraftForProduct)
    const productDraft = await createProductDraft(
      category,
      taxCategory,
      productType,
      false
    )

    product = await createProduct(productDraft)
    const query =
      'query ProductId {\n' +
      '    products {\n' +
      '        results {\n' +
      '            id\n' +
      '        }\n' +
      '    }\n' +
      '}'

    const graphQLRequest: GraphQLRequest = {
      query,
    }
    const graphQLResponse = await apiRoot
      .graphql()
      .post({
        body: graphQLRequest,
      })
      .execute()

    expect(graphQLResponse).toBeDefined()
  })

  afterAll(async () => {
    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteCategory(category)
    await deleteTaxCategory(taxCategory)
  })
})
