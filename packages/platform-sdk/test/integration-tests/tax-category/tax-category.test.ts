import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { TaxCategoryDraft, TaxRateDraft } from '../../../src'
import { createTaxCategory, deleteTaxCategory } from './tax-category-fixture'

describe('testing taxCategory API calls', () => {
  let taxCategory

  beforeEach(async () => {
    const taxRate: TaxRateDraft = {
      name: 'test-tax-rate-name-' + randomUUID(),
      key: 'test-tax-rate-key-' + randomUUID(),
      amount: 0.19,
      includedInPrice: true,
      country: 'DE',
      state: 'Berlin',
    }

    const taxCategoryDraft: TaxCategoryDraft = {
      key: 'test-key-' + randomUUID(),
      name: 'test-name-' + randomUUID(),
      rates: [taxRate],
    }

    taxCategory = await createTaxCategory(taxCategoryDraft)
  })

  afterEach(async () => {
    const queryTaxCategory = await apiRoot
      .taxCategories()
      .withId({ ID: taxCategory.body.id })
      .get()
      .execute()

    await deleteTaxCategory(queryTaxCategory)
  })

  it('should create and delete a taxCategory by ID', async () => {
    const taxRate: TaxRateDraft = {
      name: 'test-tax-rate-name-' + randomUUID(),
      key: 'test-tax-rate-key-' + randomUUID(),
      amount: 0.19,
      includedInPrice: true,
      country: 'DE',
      state: 'Berlin',
    }

    const taxCategoryDraft: TaxCategoryDraft = {
      key: 'test-key-' + randomUUID(),
      name: 'test-name-' + randomUUID(),
      rates: [taxRate],
    }

    const responseCreatedTaxCategory = await apiRoot
      .taxCategories()
      .post({ body: taxCategoryDraft })
      .execute()

    expect(responseCreatedTaxCategory.statusCode).toEqual(201)
    expect(responseCreatedTaxCategory.body).not.toBe(null)

    const responseTaxCategoryDeleted = await apiRoot
      .taxCategories()
      .withId({ ID: responseCreatedTaxCategory.body.id })
      .delete({
        queryArgs: { version: responseCreatedTaxCategory.body.version },
      })
      .execute()

    expect(responseTaxCategoryDeleted.statusCode).toEqual(200)
  })

  it('should get a taxCategory by ID', async () => {
    const getTaxCategory = await apiRoot
      .taxCategories()
      .withId({ ID: taxCategory.body.id })
      .get()
      .execute()

    expect(getTaxCategory).not.toBe(null)
    expect(getTaxCategory.body.id).toEqual(taxCategory.body.id)
  })

  it('should get a taxCategory by key', async () => {
    const getTaxCategory = await apiRoot
      .taxCategories()
      .withKey({ key: taxCategory.body.key })
      .get()
      .execute()

    expect(getTaxCategory).not.toBe(null)
    expect(getTaxCategory.body.key).toEqual(taxCategory.body.key)
  })

  it('should query a taxCategory', async () => {
    const queryTaxCategory = await apiRoot
      .taxCategories()
      .get({
        queryArgs: {
          where: 'id=' + '"' + taxCategory.body.id + '"',
        },
      })
      .execute()
    expect(queryTaxCategory).not.toBe(null)
    expect(queryTaxCategory.body.results[0].id).toEqual(taxCategory.body.id)
  })

  it('should update a taxCategory by Id', async () => {
    const newKey = 'test-key-taxCategory' + randomUUID()
    const updateTaxCategory = await apiRoot
      .taxCategories()
      .withId({ ID: taxCategory.body.id })
      .post({
        body: {
          version: taxCategory.body.version,
          actions: [
            {
              action: 'setKey',
              key: newKey,
            },
          ],
        },
      })
      .execute()

    expect(updateTaxCategory.body.version).not.toBe(taxCategory.body.version)
    expect(updateTaxCategory.statusCode).toEqual(200)
    expect(updateTaxCategory.body.key).toEqual(newKey)
  })

  it('should update a taxCategory by key', async () => {
    const newKey = 'test-key-taxCategory' + randomUUID()
    const updateTaxCategory = await apiRoot
      .taxCategories()
      .withKey({ key: taxCategory.body.key })
      .post({
        body: {
          version: taxCategory.body.version,
          actions: [
            {
              action: 'setKey',
              key: newKey,
            },
          ],
        },
      })
      .execute()

    expect(updateTaxCategory.body.version).not.toBe(taxCategory.body.version)
    expect(updateTaxCategory.statusCode).toEqual(200)
    expect(updateTaxCategory.body.key).toEqual(newKey)
  })
})
