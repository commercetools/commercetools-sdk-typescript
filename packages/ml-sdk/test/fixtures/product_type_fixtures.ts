import { ProductType, ProductTypeDraft } from '@commercetools/typescript-sdk'
import { ctpApiBuilder } from '../helpers/ctp-api-helper'

async function createProductType(
  productTypeDraft: ProductTypeDraft
): Promise<ProductType> {
  const resp = await ctpApiBuilder
    .productTypes()
    .post({
      body: productTypeDraft,
    })
    .execute()
  expect(resp.statusCode).toEqual(201)
  return resp.body
}

async function deleteProductType(
  productType: ProductType
): Promise<ProductType> {
  const resp = await ctpApiBuilder
    .productTypes()
    .withId({
      ID: productType.id,
    })
    .delete({
      queryArgs: {
        version: productType.version,
      },
    })
    .execute()
  expect(resp.statusCode).toEqual(200)
  return resp.body
}

export async function withProductType(
  productTypesConsumer: (productType: ProductType) => Promise<void>
) {
  const res = await createProductType({
    name: 'random_product_type',
    description: 'random product type',
  })
  try {
    await productTypesConsumer(res)
  } catch (error) {
    console.error(error)
  }
  await deleteProductType(res)
}
