import { apiRoot } from '../test-utils'

export const deleteInventory = async (inventory) =>
  apiRoot
    .inventory()
    .withId({ ID: inventory.body.id })
    .delete({
      queryArgs: { version: inventory.body.version },
    })
    .execute()
