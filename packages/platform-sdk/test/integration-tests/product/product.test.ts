import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
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
  _Money,
  AssetDraft,
  Attribute,
  CategoryResourceIdentifier,
  ClientResponse,
  Image,
  PriceDraft,
  Product,
  ProductDraft,
  ProductTypeResourceIdentifier,
  ProductVariantDraft,
  TaxCategoryResourceIdentifier,
} from '../../../src'
import { createCategory, deleteCategory } from '../category/category-fixture'
import {
  createProduct,
  createProductDraft,
  deleteProduct,
} from './product-fixture'
import fs from 'node:fs/promises'
import path from 'path'

describe('testing product API calls', () => {
  it('should create and delete a product by ID', async () => {
    const category = await createCategory()
    const taxCategory = await createTaxCategory()
    const productType = await createProductType(productTypeDraftForProduct)

    const productTypeResourceIdentifier: ProductTypeResourceIdentifier = {
      typeId: 'product-type',
      id: productType.body.id,
    }

    const categoryResourceIdentifier: CategoryResourceIdentifier = {
      typeId: 'category',
      id: category.body.id,
    }

    const taxCategoryResourceIdentifier: TaxCategoryResourceIdentifier = {
      typeId: 'tax-category',
      id: taxCategory.body.id,
    }

    const image: Image = {
      url: 'http://www.google.com',
      dimensions: { w: 100, h: 100 },
      label: randomUUID(),
    }

    const money: _Money = {
      centAmount: 1000,
      currencyCode: 'EUR',
    }

    const priceDraft: PriceDraft = {
      value: money,
      country: 'DE',
      tiers: [
        {
          minimumQuantity: 10,
          value: money,
        },
      ],
    }

    const assetDraft: AssetDraft = {
      key: 'test-asset-' + randomUUID(),
      sources: [
        {
          uri: 'http://www.google.com',
          key: 'test-sources-' + randomUUID(),
          dimensions: { w: 100, h: 100 },
          contentType: 'application/json',
        },
      ],
      name: { en: 'test-asset-name' + randomUUID() },
    }

    const attributes: Attribute[] = [
      {
        name: 'test-text',
        value: 'foo',
      },
      {
        name: 'test-number',
        value: 10.0,
      },
      {
        name: 'test-integer',
        value: 10,
      },
      {
        name: 'test-enum',
        value: 'test',
      },
      {
        name: 'test-set-text',
        value: ['foo'],
      },
      {
        name: 'test-set-integer',
        value: [11],
      },
      {
        name: 'test-set-number',
        value: [11.0],
      },
    ]

    const productVariantDraft: ProductVariantDraft = {
      sku: 'test-sku-' + randomUUID(),
      key: 'test-key' + randomUUID(),
      images: [image],
      prices: [priceDraft],
      assets: [assetDraft],
      attributes,
    }

    const productDraft: ProductDraft = {
      key: randomUUID(),
      name: { en: 'test-product-name' + randomUUID() },
      productType: productTypeResourceIdentifier,
      slug: { en: 'test-product-slug' + randomUUID() },
      description: { en: 'test-product-description' + randomUUID() },
      categories: [categoryResourceIdentifier],
      masterVariant: productVariantDraft,
      taxCategory: taxCategoryResourceIdentifier,
      publish: false,
    }

    const responseCreatedProduct = await apiRoot
      .products()
      .post({ body: productDraft })
      .execute()

    expect(responseCreatedProduct.statusCode).toEqual(201)
    expect(responseCreatedProduct.body).not.toBe(null)

    const responseProductDeleted = await apiRoot
      .products()
      .withId({ ID: responseCreatedProduct.body.id })
      .delete({
        queryArgs: { version: responseCreatedProduct.body.version },
      })
      .execute()

    expect(responseProductDeleted.statusCode).toEqual(200)

    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })

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

    const getProduct = await apiRoot
      .products()
      .withId({ ID: product.body.id })
      .get()
      .execute()

    expect(getProduct).not.toBe(null)
    expect(getProduct.body.id).toEqual(product.body.id)

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

    const getProduct = await apiRoot
      .products()
      .withKey({ key: product.body.key })
      .get()
      .execute()

    expect(getProduct).not.toBe(null)
    expect(getProduct.body.key).toEqual(product.body.key)

    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })

  it('should get a product by SKU using query predicates', async () => {
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

    const sku = product.body.masterData.current.masterVariant.sku
    const getProduct = await apiRoot
      .productProjections()
      .get({
        queryArgs: {
          limit: 1,
          staged: true,
          where: `masterVariant(sku in :sku) or variants(sku in :sku)`,
          sku,
        },
      })
      .execute()

    expect(getProduct).not.toBe(null)
    expect(getProduct.body.results.length).toEqual(1)
    expect(getProduct.body.results[0].key).toEqual(product.body.key)

    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })

  it('should update a product by Id', async () => {
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

    const updateProduct = await apiRoot
      .products()
      .withId({ ID: product.body.id })
      .post({
        body: {
          version: product.body.version,
          actions: [
            {
              action: 'changeName',
              name: { en: 'test-name' + randomUUID() },
            },
          ],
        },
      })
      .execute()

    expect(updateProduct.body.version).not.toBe(product.body.version)
    expect(updateProduct.statusCode).toEqual(200)

    await deleteProduct(updateProduct)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })

  it('should update a product by key', async () => {
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

    const updateProduct = await apiRoot
      .products()
      .withKey({ key: product.body.key })
      .post({
        body: {
          version: product.body.version,
          actions: [
            {
              action: 'changeName',
              name: { en: 'test-name' + randomUUID() },
            },
          ],
        },
      })
      .execute()

    expect(updateProduct.body.version).not.toBe(product.body.version)
    expect(updateProduct.statusCode).toEqual(200)

    await deleteProduct(updateProduct)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })

  it('should query a product', async () => {
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
    const queryProduct = await apiRoot
      .products()
      .get({
        queryArgs: {
          where: 'id=' + '"' + product.body.id + '"',
        },
      })
      .execute()
    expect(queryProduct).not.toBe(null)
    expect(queryProduct.body.results[0].id).toEqual(product.body.id)

    await deleteProduct(product)
    await deleteProductType(productType)
    await deleteTaxCategory(taxCategory)
    await deleteCategory(category)
  })

  it('should upload an image to a product variant', async () => {
    const imagePath = path.resolve(`${__dirname}/resources/image.jpeg`)
    const imageFile = await fs.readFile(imagePath)
    const category = await createCategory()
    const taxCategory = await createTaxCategory()
    const productType = await createProductType(productTypeDraftForProduct)
    const productDraft = await createProductDraft(
      category,
      taxCategory,
      productType,
      false
    )
    const productResponse = await createProduct(productDraft)
    const product = productResponse.body
    const fileName = randomUUID()

    const responseImageUpload: ClientResponse<Product> = await apiRoot
      .products()
      .withId({ ID: product.id })
      .images()
      .post({
        body: imageFile,
        queryArgs: {
          sku: product.masterData.staged.masterVariant.sku,
          filename: fileName,
        },
        headers: { 'Content-Type': 'image/jpeg' },
      })
      .execute()
    expect(responseImageUpload.statusCode).toEqual(200)
    expect(
      responseImageUpload.body.masterData.staged.masterVariant.images.find(
        (image) => image.url.includes(fileName)
      )
    ).not.toBeNull()
  })
})
