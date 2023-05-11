import { apiRoot } from '../test-utils'
import { CustomObjectDraft } from '../../../src'
import { randomUUID } from 'crypto'

const customObjectDraft: CustomObjectDraft = {
  key: randomUUID(),
  container: 'a',
  value: 2,
}

export function createCustomObject() {
  return apiRoot.customObjects().post({ body: customObjectDraft }).execute()
}

export function deleteCustomObject(container, key, version) {
  return apiRoot
    .customObjects()
    .withContainerAndKey({
      container,
      key,
    })
    .delete({ queryArgs: { version } })
    .execute()
}
