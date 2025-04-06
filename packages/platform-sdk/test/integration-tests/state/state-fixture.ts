import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { StateDraft } from '../../../src'

const stateDraft: StateDraft = {
  key: randomUUID(),
  type: 'LineItemState',
  roles: ['Return'],
}

export const createState = async (stateDraftBody?: StateDraft) =>
  apiRoot
    .states()
    .post({ body: stateDraftBody || stateDraft })
    .execute()

export const deleteState = async (responseCreatedState) =>
  apiRoot
    .states()
    .withId({ ID: responseCreatedState.body.id })
    .delete({
      queryArgs: { version: responseCreatedState.body.version },
    })
    .execute()
