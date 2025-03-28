import { apiRoot } from '../test-utils'
import { CategoryDraft } from '../../../src'
import { randomUUID } from 'crypto'

export const createCategory = async () => {
  const categoryDraft: CategoryDraft = {
    key: 'test-key-category-' + randomUUID(),
    name: { en: 'test-name-category-' + randomUUID() },
    slug: { en: 'test-slug-category-' + randomUUID() },
  }
  return apiRoot.categories().post({ body: categoryDraft }).execute()
}

export const deleteCategory = async (category) =>
  apiRoot
    .categories()
    .withId({ ID: category.body.id })
    .delete({ queryArgs: { version: category.body.version } })
    .execute()
