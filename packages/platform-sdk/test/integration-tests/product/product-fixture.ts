import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import {
  _Money,
  AssetDraft,
  Attribute,
  CategoryResourceIdentifier,
  Image,
  PriceDraft,
  Product,
  ProductDraft,
  ProductTypeResourceIdentifier,
  ProductVariantDraft,
  TaxCategoryResourceIdentifier,
} from '../../../src'
import { ClientResponse } from '@commercetools/ts-client'

export const createProductDraft = (
  category,
  taxCategory,
  productType,
  publish
) => {
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
    key: 'test-productDraft' + randomUUID(),
    name: { en: 'test-product-name' + randomUUID() },
    productType: productTypeResourceIdentifier,
    slug: { en: 'test-product-slug' + randomUUID() },
    description: { en: 'test-product-description' + randomUUID() },
    categories: [categoryResourceIdentifier],
    masterVariant: productVariantDraft,
    taxCategory: taxCategoryResourceIdentifier,
    publish,
  }

  return productDraft
}

export const createProduct = async (productDraft) => {
  return await apiRoot.products().post({ body: productDraft }).execute()
}

export const deleteProduct = async (product) => {
  let updateProduct: ClientResponse<Product>
  if (product.body?.masterData?.published) {
    updateProduct = await apiRoot
      .products()
      .withId({ ID: product.body.id })
      .post({
        body: {
          version: product.body.version,
          actions: [
            {
              action: 'unpublish',
            },
          ],
        },
      })
      .execute()
  }
  const productToDelete = updateProduct ? updateProduct : product

  return await apiRoot
    .products()
    .withId({ ID: productToDelete.body.id })
    .delete({
      queryArgs: { version: productToDelete.body.version },
    })
    .execute()
}
