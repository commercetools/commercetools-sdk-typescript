import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import {
  deleteTaxCategory,
  ensureTaxCategory,
} from '../tax-category/tax-category-fixture'
import {
  ensureProductType,
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
import { deleteProduct } from './product-fixture'
import fs from 'node:fs/promises'
import path from 'path'

describe('testing product API calls', () => {
  let category, taxCategory, productType, product: ClientResponse<Product>
  it('should create a product', async () => {
    category = await createCategory()
    taxCategory = await ensureTaxCategory()
    productType = await ensureProductType(productTypeDraftForProduct)

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

    product = await apiRoot.products().post({ body: productDraft }).execute()

    expect(product.body).toBeDefined()
    expect(product.statusCode).toEqual(201)
  })

  it('should get a product by Id', async () => {
    const getProduct = await apiRoot
      .products()
      .withId({ ID: product.body.id })
      .get()
      .execute()

    expect(getProduct).not.toBe(null)
    expect(getProduct.body.id).toEqual(product.body.id)
  })

  it('should get a product by key', async () => {
    const getProduct = await apiRoot
      .products()
      .withKey({ key: product.body.key })
      .get()
      .execute()

    expect(getProduct).not.toBe(null)
    expect(getProduct.body.key).toEqual(product.body.key)
  })

  it('should get a product by SKU using query predicates', async () => {
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

    expect(getProduct).toBeDefined()
    expect(getProduct.body.results.length).toEqual(1)
    expect(getProduct.body.results[0].key).toEqual(product.body.key)
  })

  it('should update a product by Id', async () => {
    const _product = await apiRoot
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

    expect(_product.statusCode).toEqual(200)
    expect(_product.body.version).not.toEqual(product.body.version)
    product = _product
  })

  it('should update a product by key', async () => {
    const _product = await apiRoot
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

    expect(_product.statusCode).toEqual(200)
    expect(_product.body.version).not.toBe(product.body.version)
    product = _product
  })

  it('should query a product', async () => {
    const queryProduct = await apiRoot
      .products()
      .get({
        queryArgs: {
          where: 'id=' + '"' + product.body.id + '"',
        },
      })
      .execute()
    expect(queryProduct).toBeDefined()
    expect(queryProduct.body.results[0].id).toEqual(product.body.id)
  })

  it('should upload an image to a product variant', async () => {
    const imagePath = path.resolve(`${__dirname}/resources/image.jpeg`)
    const imageFile = await fs.readFile(imagePath)
    const _product = product.body
    const fileName = randomUUID()

    const responseImageUpload: ClientResponse<Product> = await apiRoot
      .products()
      .withId({ ID: _product.id })
      .images()
      .post({
        body: imageFile,
        queryArgs: {
          sku: _product.masterData.staged.masterVariant.sku,
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

    // update our global product
    product = responseImageUpload
  })

  afterAll(async () => {
    await deleteProduct(product)
    await deleteCategory(category)
    await deleteTaxCategory(taxCategory)
  })
})
