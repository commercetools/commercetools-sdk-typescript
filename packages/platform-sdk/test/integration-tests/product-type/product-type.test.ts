import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { AttributeDefinitionDraft, ProductTypeDraft } from '../../../src'
import { createProductType, deleteProductType } from './product-type-fixture'

describe('testing product type API calls', () => {
  it('should create and delete a product type by ID', async () => {
    const attributeDefinitionDraft: AttributeDefinitionDraft = {
      type: {
        name: 'text',
      },
      name: 'test-name-attribute-definition' + randomUUID(),
      label: { en: 'test-label-attribute-definition' + randomUUID() },
      isRequired: true,
      attributeConstraint: 'None',
      inputTip: { en: 'test-inputTip-attribute-definition' + randomUUID() },
      inputHint: 'SingleLine',
      isSearchable: true,
    }

    const productTypeDraft: ProductTypeDraft = {
      key: randomUUID(),
      name: 'test-name-productType' + randomUUID(),
      description: randomUUID(),
      attributes: [attributeDefinitionDraft],
    }

    const responseCreatedProductType = await apiRoot
      .productTypes()
      .post({ body: productTypeDraft })
      .execute()

    expect(responseCreatedProductType.statusCode).toEqual(201)
    expect(responseCreatedProductType.body).not.toBe(null)

    const responseProductTypeDeleted = await apiRoot
      .productTypes()
      .withId({ ID: responseCreatedProductType.body.id })
      .delete({
        queryArgs: { version: responseCreatedProductType.body.version },
      })
      .execute()

    expect(responseProductTypeDeleted.statusCode).toEqual(200)
  })

  it('should get a product type by ID', async () => {
    const productType = await createProductType()

    const getProductType = await apiRoot
      .productTypes()
      .withId({ ID: productType.body.id })
      .get()
      .execute()

    expect(getProductType).not.toBe(null)
    expect(getProductType.body.id).toEqual(productType.body.id)

    await deleteProductType(getProductType)
  })

  it('should get a product type by key', async () => {
    const productType = await createProductType()

    const getProductType = await apiRoot
      .productTypes()
      .withKey({ key: productType.body.key })
      .get()
      .execute()

    expect(getProductType).not.toBe(null)
    expect(getProductType.body.id).toEqual(productType.body.id)

    await deleteProductType(getProductType)
  })

  it('should query a product type', async () => {
    const productType = await createProductType()
    const queryProductType = await apiRoot
      .productTypes()
      .get({
        queryArgs: {
          where: 'id=' + '"' + productType.body.id + '"',
        },
      })
      .execute()
    expect(queryProductType).not.toBe(null)
    expect(queryProductType.body.results.at(0).id).toEqual(productType.body.id)

    await deleteProductType(productType)
  })

  it('should update a product type by Id', async () => {
    const productType = await createProductType()

    const updateProductType = await apiRoot
      .productTypes()
      .withId({ ID: productType.body.id })
      .post({
        body: {
          version: productType.body.version,
          actions: [
            {
              action: 'setKey',
              key: randomUUID(),
            },
          ],
        },
      })
      .execute()

    expect(updateProductType.body.version).not.toBe(productType.body.version)
    expect(updateProductType.statusCode).toEqual(200)

    await deleteProductType(updateProductType)
  })

  it('should update a product type by Key', async () => {
    const productType = await createProductType()

    const updateProductType = await apiRoot
      .productTypes()
      .withKey({ key: productType.body.key })
      .post({
        body: {
          version: productType.body.version,
          actions: [
            {
              action: 'setKey',
              key: randomUUID(),
            },
          ],
        },
      })
      .execute()

    expect(updateProductType.body.version).not.toBe(productType.body.version)
    expect(updateProductType.statusCode).toEqual(200)

    await deleteProductType(updateProductType)
  })

  it('should delete a product type by Key', async () => {
    const productType = await createProductType()

    const responseProductTypeDeleted = await apiRoot
      .productTypes()
      .withKey({ key: productType.body.key })
      .delete({
        queryArgs: {
          version: productType.body.version,
        },
      })
      .execute()

    expect(responseProductTypeDeleted.statusCode).toEqual(200)
  })
})
