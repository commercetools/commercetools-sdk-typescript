import { apiRoot } from '../test-utils'
import { CustomObjectDraft } from '../../../src'
import { randomUUID } from 'crypto'

const customObjectDraft: CustomObjectDraft = {
  key: randomUUID(),
  container: 'a',
  value: 2,
}

export const createCustomObject = async () => {
  return await apiRoot
    .customObjects()
    .post({ body: customObjectDraft })
    .execute()
}

export const deleteCustomObject = async (container, key, version) => {
  return await apiRoot
    .customObjects()
    .withContainerAndKey({
      container,
      key,
    })
    .delete({ queryArgs: { version } })
    .execute()
}
