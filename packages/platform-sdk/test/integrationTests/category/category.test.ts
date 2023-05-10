import { createCategory, deleteCategory } from './category-fixture'
import { apiRoot } from '../test-utils'
import { randomUUID } from 'crypto'
import { createType } from '../type/type-fixture'

describe('testing category API calls', () => {
  it('should create and delete by ID a category', async () => {
    const responseCreatedCategory = await createCategory()

    expect(responseCreatedCategory.statusCode).toEqual(201)
    expect(responseCreatedCategory.body).not.toBe(null)

    const categoryDeleted = await deleteCategory(responseCreatedCategory)

    expect(categoryDeleted.statusCode).toEqual(200)
  })

  it('should delete a category by Key', async () => {
    const responseCreatedCategory = await createCategory()

    const deletedCategory = await apiRoot
      .categories()
      .withKey({ key: responseCreatedCategory.body.key })
      .delete({ queryArgs: { version: responseCreatedCategory.body.version } })
      .execute()

    expect(deletedCategory.statusCode).toEqual(200)
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
