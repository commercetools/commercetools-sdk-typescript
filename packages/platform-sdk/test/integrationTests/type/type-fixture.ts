import { apiRoot } from '../test-utils'
import { TypeDraft } from '../../../src'
import { randomUUID } from 'crypto'

const typeDraft: TypeDraft = {
  key: randomUUID(),
  name: { en: 'test-name-type' + randomUUID() },
  resourceTypeIds: ['asset', 'category', 'order'],
}

export function createType() {
  return apiRoot.types().post({ body: typeDraft }).execute()
}

export function deleteType(responseCreatedType) {
  return apiRoot
    .types()
    .withId({ ID: responseCreatedType.body.id })
    .delete({ queryArgs: { version: responseCreatedType.body.version } })
    .execute()
}
