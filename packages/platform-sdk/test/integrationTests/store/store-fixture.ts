import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { StoreDraft } from '../../../src'

const storeDraft: StoreDraft = {
  key: randomUUID(),
}

export function createStore() {
  return apiRoot.stores().post({ body: storeDraft }).execute()
}

export function deleteStore(responseCreatedStore) {
  return apiRoot
    .stores()
    .withId({ ID: responseCreatedStore.body.id })
    .delete({
      queryArgs: { version: responseCreatedStore.body.version },
    })
    .execute()
}
