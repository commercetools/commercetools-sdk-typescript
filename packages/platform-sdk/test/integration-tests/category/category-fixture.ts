import { apiRoot } from '../test-utils'
import { CategoryDraft } from '../../../src'
import { randomUUID } from 'crypto'

const categoryDraft: CategoryDraft = {
  key: 'test-key-category-' + randomUUID(),
  name: { en: 'test-name-category' + randomUUID() },
  slug: { en: 'test-slug-category' + randomUUID() },
}

export const createCategory = async () => {
  return await apiRoot.categories().post({ body: categoryDraft }).execute()
}

export const deleteCategory = async (responseCreatedCategory) => {
  return await apiRoot
    .categories()
    .withId({ ID: responseCreatedCategory.body.id })
    .delete({ queryArgs: { version: responseCreatedCategory.body.version } })
    .execute()
}
