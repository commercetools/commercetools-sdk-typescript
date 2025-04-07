import { createCategory, deleteCategory } from './category-fixture'
import { apiRoot } from '../test-utils'
import { randomUUID } from 'crypto'
import {
  AssetDraft,
  AssetSource,
  CategoryDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from '../../../src'
import { createType, deleteType } from '../type/type-fixture'

describe('testing category API calls', () => {
  let category, type
  it('should create category', async () => {
    category = await createCategory()
    expect(category.body).toBeDefined()
    expect(category.statusCode).toEqual(201)
  })

  it('should get a category by Id', async () => {
    const getCategory = await apiRoot
      .categories()
      .withId({ ID: category.body.id })
      .get()
      .execute()

    expect(getCategory).toBeDefined()
    expect(getCategory.body.id).toEqual(category.body.id)
  })

  it('should get a category by key', async () => {
    const getCategory = await apiRoot
      .categories()
      .withKey({ key: category.body.key })
      .get()
      .execute()

    expect(getCategory).toBeDefined()
    expect(getCategory.body.key).toEqual(category.body.key)
  })

  it('should query a category', async () => {
    const queryCategory = await apiRoot
      .categories()
      .get({
        queryArgs: {
          where: 'id=' + '"' + category.body.id + '"',
        },
      })
      .execute()

    expect(queryCategory).toBeDefined()
    expect(queryCategory.body.results[0].id).toEqual(category.body.id)
  })

  it('should update a category', async () => {
    const updateCategory = await apiRoot
      .categories()
      .withId({ ID: category.body.id })
      .post({
        body: {
          version: category.body.version,
          actions: [
            {
              action: 'changeName',
              name: { en: 'new-name-category' + randomUUID() },
            },
          ],
        },
      })
      .execute()

    expect(updateCategory.body.version).not.toEqual(category.body.version)
    expect(updateCategory.statusCode).toEqual(200)
    category = updateCategory
  })

  it('should update a category adding Assets and CustomFields', async () => {
    type = await createType()
    const typeResourceIdentifier: TypeResourceIdentifier = {
      typeId: 'type',
      id: type.body.id,
    }

    const assetSource: AssetSource = {
      uri: 'www.myphoto.com',
    }
    const assetDraft: AssetDraft = {
      sources: [assetSource],
      name: { en: 'test-photo' },
      key: 'test-key-asset' + randomUUID(),
    }

    const fieldName: string = type.body.fieldDefinitions[0].name
    const fieldValue = 'fieldValue'
    const fieldContainer: FieldContainer = {
      [fieldName]: fieldValue,
    }

    const updateCategory = await apiRoot
      .categories()
      .withId({ ID: category.body.id })
      .post({
        body: {
          version: category.body.version,
          actions: [
            {
              action: 'addAsset',
              asset: assetDraft,
            },
            {
              action: 'setCustomType',
              type: typeResourceIdentifier,
              fields: fieldContainer,
            },
          ],
        },
      })
      .execute()

    expect(updateCategory.body.version).not.toEqual(category.body.version)
    expect(updateCategory.statusCode).toEqual(200)
    category = updateCategory
  })

  afterAll(async () => {
    await deleteCategory(category)
    await deleteType(type)
  })
})
