import { apiRoot } from '../test-utils'
import { randomUUID } from 'crypto'
import { ChannelResourceIdentifier, InventoryEntryDraft } from '../../../src'

export function createInventoryDraft(channel) {
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

export function createInventory(inventoryDraft) {
  return apiRoot.inventory().post({ body: inventoryDraft }).execute()
}

export function deleteInventory(inventory) {
  return apiRoot
    .inventory()
    .withId({ ID: inventory.body.id })
    .delete({
      queryArgs: { version: inventory.body.version },
    })
    .execute()
}
