import { apiRoot } from '../test-utils'
import { randomUUID } from 'crypto'
import { ExtensionDraft, HttpDestination } from '../../../src'

const httpDestination: HttpDestination = {
  type: 'HTTP',
  url: 'http://www.commercetools.com',
}

const extensionDraft: ExtensionDraft = {
  key: randomUUID(),
  destination: httpDestination,
  triggers: [
    {
      resourceTypeId: 'cart',
      actions: ['Create'],
    },
  ],
}

export const createExtension = async () => {
  return await apiRoot.extensions().post({ body: extensionDraft }).execute()
}

export const deleteExtension = async (extension) => {
  return await apiRoot
    .extensions()
    .withId({ ID: extension.body.id })
    .delete({
      queryArgs: { version: extension.body.version },
    })
    .execute()
}
