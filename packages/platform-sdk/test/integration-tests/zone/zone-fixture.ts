import { apiRoot } from '../test-utils'
import { randomUUID } from 'crypto'
import { ZoneDraft } from '../../../src'

const zoneDraft: ZoneDraft = {
  key: 'test-key-zone' + randomUUID(),
  name: 'test-name-zone' + randomUUID(),
  description: 'test-description-zone' + randomUUID(),
}

export const createZone = async (zoneDraftBody?: ZoneDraft) =>
  apiRoot
    .zones()
    .post({ body: zoneDraftBody || zoneDraft })
    .execute()

export const deleteZone = async (responseCreatedZone) =>
  apiRoot
    .zones()
    .withId({ ID: responseCreatedZone.body.id })
    .delete({ queryArgs: { version: responseCreatedZone.body.version } })
    .execute()
