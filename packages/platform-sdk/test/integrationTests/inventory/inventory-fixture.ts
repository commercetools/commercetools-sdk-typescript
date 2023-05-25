import { apiRoot } from '../test-utils'
import { randomUUID } from 'crypto'
import { ChannelResourceIdentifier, InventoryEntryDraft } from '../../../src'

export const createInventoryDraft = (channel) => {
  const channelResourceIdentifier: ChannelResourceIdentifier = {
    typeId: 'channel',
    id: channel.body.id,
  }

  const inventoryDraft: InventoryEntryDraft = {
    sku: randomUUID(),
    supplyChannel: channelResourceIdentifier,
    quantityOnStock: 10,
  }

  return inventoryDraft
}

export const createInventory = async (inventoryDraft) => {
  return await apiRoot.inventory().post({ body: inventoryDraft }).execute()
}

export const deleteInventory = async (inventory) => {
  return await apiRoot
    .inventory()
    .withId({ ID: inventory.body.id })
    .delete({
      queryArgs: { version: inventory.body.version },
    })
    .execute()
}
