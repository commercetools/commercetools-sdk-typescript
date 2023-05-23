import { apiRoot } from '../test-utils'
import { randomUUID } from 'crypto'
import { ZoneDraft } from '../../../src'

const zoneDraft: ZoneDraft = {
  key: 'test-key-zone' + randomUUID(),
  name: 'test-name-zone' + randomUUID(),
  description: 'test-description-zone' + randomUUID(),
}

export function createZone(zoneDraftBody?: ZoneDraft) {
  return apiRoot
    .zones()
    .post({ body: zoneDraftBody || zoneDraft })
    .execute()
}

export function deleteZone(responseCreatedZone) {
  return apiRoot
    .zones()
    .withId({ ID: responseCreatedZone.body.id })
    .delete({ queryArgs: { version: responseCreatedZone.body.version } })
    .execute()
}
