import { randomUUID } from 'crypto'
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

describe('testing product projection API calls', () => {
  it('should get a product by Id', async () => {
    const category = await createCategory()
    const taxCategory = await createTaxCategory()
    const productType = await createProductType(productTypeDraftForProduct)
    const productDraft = await createProductDraft(
      category,
      taxCategory,
      productType
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
      productType
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
      productProjectionResponse.body.masterVariant.attributes
        .filter((attribute) => attribute.name === 'test-text')
        .at(0).value
    ).toEqual('foo')
    expect(
      productProjectionResponse.body.masterVariant.attributes
        .filter((attribute) => attribute.name === 'test-number')
        .at(0).value
    ).toEqual(10.0)
    expect(
      productProjectionResponse.body.masterVariant.attributes
        .filter((attribute) => attribute.name === 'test-integer')
        .at(0).value
    ).toEqual(10)
    expect(
      productProjectionResponse.body.masterVariant.attributes
        .filter((attribute) => attribute.name === 'test-set-text')
        .at(0).value
    ).toContain('foo')
    expect(
      productProjectionResponse.body.masterVariant.attributes
        .filter((attribute) => attribute.name === 'test-set-number')
        .at(0).value
    ).toContain(11.0)
    expect(
      productProjectionResponse.body.masterVariant.attributes
        .filter((attribute) => attribute.name === 'test-set-integer')
        .at(0).value
    ).toContain(11)
    expect(
      productProjectionResponse.body.masterVariant.attributes
        .filter((attribute) => attribute.name === 'test-enum')
        .at(0).value
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
      productType
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
    expect(productProjectionQueryResponse.body.results.at(0).id).toEqual(
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
      productType
    )
    const product = await createProduct(productDraft)
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
  })

  // it('should get a product by SKU using query predicates', async () => {
  //   const category = await createCategory()
  //   const taxCategory = await createTaxCategory()
  //   const productType = await createProductType(productTypeDraftForProduct)
  //   const productDraft = await createProductDraft(
  //     category,
  //     taxCategory,
  //     productType
  //   )
  //   const product = await createProduct(productDraft)
  //
  //   const sku = product.body.masterData.current.masterVariant.sku
  //   const productProjectionResponse = await apiRoot
  //     .productProjections()
  //     .get({
  //       queryArgs: {
  //         limit: 1,
  //         staged: true,
  //         where: `masterVariant(sku in :sku) or variants(sku in :sku)`,
  //         sku,
  //       },
  //     })
  //     .execute()
  //
  //   expect(productProjectionResponse).not.toBe(null)
  //   expect(productProjectionResponse.body.results.length).toEqual(1)
  //   expect(productProjectionResponse.body.results.at(0).key).toEqual(product.body.key)
  //
  //   await deleteProduct(product)
  //   await deleteProductType(productType)
  //   await deleteTaxCategory(taxCategory)
  //   await deleteCategory(category)
  // })
  //
  // it('should get a product by SKU using query predicates', async () => {
  //   const category = await createCategory()
  //   const taxCategory = await createTaxCategory()
  //   const productType = await createProductType(productTypeDraftForProduct)
  //   const productDraft = await createProductDraft(
  //     category,
  //     taxCategory,
  //     productType
  //   )
  //   const product = await createProduct(productDraft)
  //
  //   const sku = product.body.masterData.current.masterVariant.sku
  //   const productProjectionResponse = await apiRoot
  //     .productProjections()
  //     .get({
  //       queryArgs: {
  //         limit: 1,
  //         staged: true,
  //         where: `masterVariant(sku in :sku) or variants(sku in :sku)`,
  //         sku,
  //       },
  //     })
  //     .execute()
  //
  //   expect(productProjectionResponse).not.toBe(null)
  //   expect(productProjectionResponse.body.results.length).toEqual(1)
  //   expect(productProjectionResponse.body.results.at(0).key).toEqual(product.body.key)
  //
  //   await deleteProduct(product)
  //   await deleteProductType(productType)
  //   await deleteTaxCategory(taxCategory)
  //   await deleteCategory(category)
  // })
  //
  // it('should update a product by Id', async () => {
  //   const category = await createCategory()
  //   const taxCategory = await createTaxCategory()
  //   const productType = await createProductType(productTypeDraftForProduct)
  //   const productDraft = await createProductDraft(
  //     category,
  //     taxCategory,
  //     productType
  //   )
  //   const product = await createProduct(productDraft)
  //
  //   const updateProduct = await apiRoot
  //     .products()
  //     .withId({ ID: product.body.id })
  //     .post({
  //       body: {
  //         version: product.body.version,
  //         actions: [
  //           {
  //             action: 'changeName',
  //             name: { en: 'test-name' + randomUUID() },
  //           },
  //         ],
  //       },
  //     })
  //     .execute()
  //
  //   expect(updateProduct.body.version).not.toBe(product.body.version)
  //   expect(updateProduct.statusCode).toEqual(200)
  //
  //   await deleteProduct(updateProduct)
  //   await deleteProductType(productType)
  //   await deleteTaxCategory(taxCategory)
  //   await deleteCategory(category)
  // })
  //
  // it('should update a product by key', async () => {
  //   const category = await createCategory()
  //   const taxCategory = await createTaxCategory()
  //   const productType = await createProductType(productTypeDraftForProduct)
  //   const productDraft = await createProductDraft(
  //     category,
  //     taxCategory,
  //     productType
  //   )
  //   const product = await createProduct(productDraft)
  //
  //   const updateProduct = await apiRoot
  //     .products()
  //     .withKey({ key: product.body.key })
  //     .post({
  //       body: {
  //         version: product.body.version,
  //         actions: [
  //           {
  //             action: 'changeName',
  //             name: { en: 'test-name' + randomUUID() },
  //           },
  //         ],
  //       },
  //     })
  //     .execute()
  //
  //   expect(updateProduct.body.version).not.toBe(product.body.version)
  //   expect(updateProduct.statusCode).toEqual(200)
  //
  //   await deleteProduct(updateProduct)
  //   await deleteProductType(productType)
  //   await deleteTaxCategory(taxCategory)
  //   await deleteCategory(category)
  // })
  //
})
