import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { AttributeDefinitionDraft, ProductTypeDraft } from '../../../src'
import { deleteProductType } from './product-type-fixture'

describe('testing product type API calls', () => {
  let productType
  it('should create a product type', async () => {
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

    productType = await apiRoot
      .productTypes()
      .post({ body: productTypeDraft })
      .execute()

    expect(productType.body).toBeDefined()
    expect(productType.statusCode).toEqual(201)
  })

  it('should get a product type by ID', async () => {
    const getProductType = await apiRoot
      .productTypes()
      .withId({ ID: productType.body.id })
      .get()
      .execute()

    expect(getProductType).toBeDefined()
    expect(getProductType.body.id).toEqual(productType.body.id)
  })

  it('should get a product type by key', async () => {
    const getProductType = await apiRoot
      .productTypes()
      .withKey({ key: productType.body.key })
      .get()
      .execute()

    expect(getProductType).toBeDefined()
    expect(getProductType.body.id).toEqual(productType.body.id)
  })

  it('should query a product type', async () => {
    const queryProductType = await apiRoot
      .productTypes()
      .get({
        queryArgs: {
          where: 'id=' + '"' + productType.body.id + '"',
        },
      })
      .execute()

    expect(queryProductType).toBeDefined()
    expect(queryProductType.body.results[0].id).toEqual(productType.body.id)
  })

  it('should update a product type by Id', async () => {
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

    expect(updateProductType.statusCode).toEqual(200)
    expect(updateProductType.body.version).not.toEqual(productType.body.version)
    productType = updateProductType
  })

  it('should update a product type by Key', async () => {
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

    expect(updateProductType.statusCode).toEqual(200)
    expect(updateProductType.body.version).not.toEqual(productType.body.version)
    productType = updateProductType
  })

  afterAll(async () => {
    await deleteProductType(productType)
  })
})
