import { apiRoot } from '../test-utils'
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
import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from '../product/product-fixture'
import { waitUntil } from '../../helpers/test-utils'

describe('testing product projection API calls', () => {
  it('should get a product by Id', async () => {
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

    const productProjectionResponse = await apiRoot
      .productProjections()
      .withId({ ID: product.body.id })
      .get({
        queryArgs: {
          staged: true,
        },
      })
      .execute()

    expect(productProjectionResponse).not.toBe(null)
    expect(productProjectionResponse.body.id).toEqual(product.body.id)

    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })

  it('should get a product by key', async () => {
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

    const productProjectionResponse = await apiRoot
      .productProjections()
      .withKey({ key: product.body.key })
      .get({
        queryArgs: {
          staged: true,
        },
      })
      .execute()

    expect(productProjectionResponse).not.toBe(null)
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

    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })

  it('should query a product by product projection', async () => {
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
    const productProjectionQueryResponse = await apiRoot
      .productProjections()
      .get({
        queryArgs: {
          where: 'id=' + '"' + product.body.id + '"',
          staged: true,
        },
      })
      .execute()
    expect(productProjectionQueryResponse).not.toBe(null)
    expect(productProjectionQueryResponse.body.results[0].id).toEqual(
      product.body.id
    )

    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })

  it('should search a product by product projection', async () => {
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
    expect(productProjectionSearchResponse).not.toBe(null)
    expect(productProjectionSearchResponse.body.facets).not.toBe(null)

    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  }, 40_000)
})
