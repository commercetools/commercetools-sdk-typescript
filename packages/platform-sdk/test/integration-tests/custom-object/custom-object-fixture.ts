import { apiRoot } from '../test-utils'

export const deleteCustomObject = async (customObject) =>
  apiRoot
    .customObjects()
    .withContainerAndKey({
      container: customObject.body.container,
      key: customObject.body.key,
    })
    .delete({ queryArgs: { version: customObject.body.version } })
    .execute()
