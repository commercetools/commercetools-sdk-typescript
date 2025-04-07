import { apiRoot } from '../test-utils'
import { createCategory, deleteCategory } from '../category/category-fixture'
import {
  deleteTaxCategory,
  ensureTaxCategory,
} from '../tax-category/tax-category-fixture'
import {
  ensureProductType,
  productTypeDraftForProduct,
} from '../product-type/product-type-fixture'
import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from '../product/product-fixture'
import { waitUntil } from '../../helpers/test-utils'

describe('testing product projection API calls', () => {
  let category, taxCategory, productType, product
  it('should create a product', async () => {
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
    expect(product.body).toBeDefined()
    expect(product.statusCode).toEqual(201)
  })

  it('should get a product by Id', async () => {
    const productProjectionResponse = await apiRoot
      .productProjections()
      .withId({ ID: product.body.id })
      .get({
        queryArgs: {
          staged: true,
        },
      })
      .execute()

    expect(productProjectionResponse).toBeDefined()
    expect(productProjectionResponse.body.id).toEqual(product.body.id)
  })

  it('should get a product by key', async () => {
    const productProjectionResponse = await apiRoot
      .productProjections()
      .withKey({ key: product.body.key })
      .get({
        queryArgs: {
          staged: true,
        },
      })
      .execute()

    expect(productProjectionResponse).toBeDefined()
    expect(productProjectionResponse.body.key).toEqual(product.body.key)
    //attributes
    expect(
      productProjectionResponse.body.masterVariant.attributes.filter(
        (attribute) => attribute.name === 'test-text'
      )[0].value
    ).toEqual('foo')
    expect(
      productProjectionResponse.body.masterVariant.attributes.filter(
        (attribute) => attribute.name === 'test-number'
      )[0].value
    ).toEqual(10.0)
    expect(
      productProjectionResponse.body.masterVariant.attributes.filter(
        (attribute) => attribute.name === 'test-integer'
      )[0].value
    ).toEqual(10)
    expect(
      productProjectionResponse.body.masterVariant.attributes.filter(
        (attribute) => attribute.name === 'test-set-text'
      )[0].value
    ).toContain('foo')
    expect(
      productProjectionResponse.body.masterVariant.attributes.filter(
        (attribute) => attribute.name === 'test-set-number'
      )[0].value
    ).toContain(11.0)
    expect(
      productProjectionResponse.body.masterVariant.attributes.filter(
        (attribute) => attribute.name === 'test-set-integer'
      )[0].value
    ).toContain(11)
    expect(
      productProjectionResponse.body.masterVariant.attributes.filter(
        (attribute) => attribute.name === 'test-enum'
      )[0].value
    ).toEqual({ key: 'test', label: 'test' })
  })

  it('should query a product by product projection', async () => {
    const productProjectionQueryResponse = await apiRoot
      .productProjections()
      .get({
        queryArgs: {
          where: 'id=' + '"' + product.body.id + '"',
          staged: true,
        },
      })
      .execute()
    expect(productProjectionQueryResponse).toBeDefined()
    expect(productProjectionQueryResponse.body.results[0].id).toEqual(
      product.body.id
    )
  })

  it('should search a product by product projection', async () => {
    await waitUntil(async () => {
      const productProjectionSearchResponse = await apiRoot
        .productProjections()
        .search()
        .get({
          queryArgs: {
            facet: 'categories.id',
            staged: true,
          },
        })
        .execute()

      return productProjectionSearchResponse.body.facets !== null
    })

    const productProjectionSearchResponse = await apiRoot
      .productProjections()
      .search()
      .get({
        queryArgs: {
          facet: 'categories.id',
          staged: true,
        },
      })
      .execute()
    expect(productProjectionSearchResponse).toBeDefined()
    expect(productProjectionSearchResponse.body.facets).toBeDefined()
  }, 40_000)

  afterAll(async () => {
    await deleteProduct(product)
    await deleteCategory(category)
    await deleteTaxCategory(taxCategory)
  })
})
