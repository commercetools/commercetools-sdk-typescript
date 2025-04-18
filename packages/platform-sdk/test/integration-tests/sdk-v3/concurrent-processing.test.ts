import { createCategory, deleteCategory } from '../category/category-fixture'
import { apiRoot, createTokenCache } from '../test-utils'

describe('Concurrent processing in sdk v3', () => {
  let category1, category2
  it(`should fetch 2 categories concurrently`, async () => {
    category1 = await createCategory()
    category2 = await createCategory()

    const [response1, response2] = await Promise.all([
      apiRoot.categories().withKey({ key: category1.body.key }).get().execute(),
      apiRoot.categories().withKey({ key: category2.body.key }).get().execute(),
    ])

    expect(response1.statusCode).toBe(200)
    expect(response2.statusCode).toBe(200)
  })

  afterAll(async () => {
    await deleteCategory(category1)
    await deleteCategory(category2)
  })
})
