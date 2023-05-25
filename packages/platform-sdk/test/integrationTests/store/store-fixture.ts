import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { StoreDraft } from '../../../src'

const storeDraft: StoreDraft = {
  key: randomUUID(),
}

export const createStore = async () => {
  return await apiRoot.stores().post({ body: storeDraft }).execute()
}

export const deleteStore = async (responseCreatedStore) => {
  return await apiRoot
    .stores()
    .withId({ ID: responseCreatedStore.body.id })
    .delete({
      queryArgs: { version: responseCreatedStore.body.version },
    })
    .execute()
}
