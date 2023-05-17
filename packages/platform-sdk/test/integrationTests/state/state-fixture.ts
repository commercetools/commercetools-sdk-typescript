import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { StateDraft } from '../../../src'

const stateDraft: StateDraft = {
  key: randomUUID(),
  type: 'LineItemState',
  roles: ['Return'],
}

export function createState(stateDraft?: StateDraft) {
  return apiRoot.states().post({ body: stateDraft }).execute()
}

export function deleteState(responseCreatedState) {
  return apiRoot
    .states()
    .withId({ ID: responseCreatedState.body.id })
    .delete({
      queryArgs: { version: responseCreatedState.body.version },
    })
    .execute()
}
