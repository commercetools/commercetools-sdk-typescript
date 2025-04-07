import { apiRoot } from '../test-utils'

export const deleteExtension = async (extension) =>
  apiRoot
    .extensions()
    .withId({ ID: extension.body.id })
    .delete({
      queryArgs: { version: extension.body.version },
    })
    .execute()
