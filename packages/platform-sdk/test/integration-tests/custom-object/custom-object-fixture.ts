import { apiRoot } from '../test-utils'
import { CustomObjectDraft } from '../../../src'
import { randomUUID } from 'crypto'

const customObjectDraft: CustomObjectDraft = {
  key: randomUUID(),
  container: 'a',
  value: 2,
}

export const createCustomObject = async () =>
  apiRoot.customObjects().post({ body: customObjectDraft }).execute()

export const deleteCustomObject = async (customObject) =>
  apiRoot
    .customObjects()
    .withContainerAndKey({
      container: customObject.body.container,
      key: customObject.body.key,
    })
    .delete({ queryArgs: { version: customObject.body.version } })
    .execute()
