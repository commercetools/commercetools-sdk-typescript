import { apiRoot } from '../test-utils'
import { CategoryDraft } from '../../../src'
import { randomUUID } from 'crypto'

const categoryDraft: CategoryDraft = {
  key: randomUUID(),
  name: { en: 'test-name-category' + randomUUID() },
  slug: { en: 'test-slug-category' + randomUUID() },
}

export function createCategory() {
  return apiRoot.categories().post({ body: categoryDraft }).execute()
}

export function deleteCategory(responseCreatedCategory) {
  return apiRoot
    .categories()
    .withId({ ID: responseCreatedCategory.body.id })
    .delete({ queryArgs: { version: responseCreatedCategory.body.version } })
    .execute()
}
