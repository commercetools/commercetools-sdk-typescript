import { createCategory, deleteCategory } from './category-fixture'
import { apiRoot } from '../test-utils'
import { randomUUID } from 'crypto'
import { CategoryDraft } from '../../../src'

describe('testing category API calls', () => {
  it('should create and delete a category by ID', async () => {
    const categoryDraft: CategoryDraft = {
      key: randomUUID(),
      name: { en: 'test-name-category' + randomUUID() },
      slug: { en: 'test-slug-category' + randomUUID() },
    }

    const responseCreatedCategory = await apiRoot
      .categories()
      .post({ body: categoryDraft })
      .execute()

    expect(responseCreatedCategory.statusCode).toEqual(201)
    expect(responseCreatedCategory.body).not.toBe(null)

    const responseCategoryDeleted = await apiRoot
      .categories()
      .withId({ ID: responseCreatedCategory.body.id })
      .delete({ queryArgs: { version: responseCreatedCategory.body.version } })
      .execute()

    expect(responseCategoryDeleted.statusCode).toEqual(200)
  })

  it('should delete a category by Key', async () => {
    const responseCreatedCategory = await createCategory()

    const responseCategoryDeleted = await apiRoot
      .categories()
      .withKey({ key: responseCreatedCategory.body.key })
      .delete({ queryArgs: { version: responseCreatedCategory.body.version } })
      .execute()

    expect(responseCategoryDeleted.statusCode).toEqual(200)
  })

  it('should update a category', async () => {
    const category = await createCategory()

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

    expect(updateCategory.body.version).not.toBe(category.body.version)
    expect(updateCategory.statusCode).toEqual(200)

    await deleteCategory(updateCategory)
  })
})
