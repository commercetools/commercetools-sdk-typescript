import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { ChannelResourceIdentifier, InventoryEntryDraft } from '../../../src'
import { createChannel, deleteChannel } from '../channel/channel-fixture'
import {
  createInventory,
  createInventoryDraft,
  deleteInventory,
} from './inventory-fixture'

describe('testing inventory API calls', () => {
  it('should create and delete an inventory by ID', async () => {
    const channel = await createChannel()
    const channelResourceIdentifier: ChannelResourceIdentifier = {
      typeId: 'channel',
      id: channel.body.id,
    }

    const inventoryDraft: InventoryEntryDraft = {
      sku: randomUUID(),
      supplyChannel: channelResourceIdentifier,
      quantityOnStock: 10,
    }

    const responseCreatedInventory = await apiRoot
      .inventory()
      .post({ body: inventoryDraft })
      .execute()

    expect(responseCreatedInventory.statusCode).toEqual(201)
    expect(responseCreatedInventory.body).not.toBe(null)

    const responseInventoryDeleted = await apiRoot
      .inventory()
      .withId({ ID: responseCreatedInventory.body.id })
      .delete({
        queryArgs: { version: responseCreatedInventory.body.version },
      })
      .execute()

    expect(responseInventoryDeleted.statusCode).toEqual(200)

    await deleteChannel(channel)
  })

  it('should get an inventory by ID', async () => {
    const channel = await createChannel()
    const inventoryDraft = await createInventoryDraft(channel)
    const inventory = await createInventory(inventoryDraft)
    const getInventory = await apiRoot
      .inventory()
      .withId({ ID: inventory.body.id })
      .get()
      .execute()
    expect(getInventory).not.toBe(null)
    expect(getInventory.body.id).toEqual(inventory.body.id)

    await deleteInventory(inventory)
    await deleteChannel(channel)
  })

  it('should query a inventory by SKU', async () => {
    const channel = await createChannel()
    const inventoryDraft = await createInventoryDraft(channel)
    const inventory = await createInventory(inventoryDraft)
    const getInventory = await apiRoot
      .inventory()
      .get({
        queryArgs: {
          where: 'sku=' + '"' + inventory.body.sku + '"',
        },
      })
      .execute()
    expect(getInventory).not.toBe(null)
    expect(getInventory.body.results.at(0).sku).toEqual(inventory.body.sku)

    await deleteInventory(inventory)
    await deleteChannel(channel)
  })

  it('should update a inventory setting restockable', async () => {
    const channel = await createChannel()
    const inventoryDraft = await createInventoryDraft(channel)
    const inventory = await createInventory(inventoryDraft)

    const updateInventory = await apiRoot
      .inventory()
      .withId({ ID: inventory.body.id })
      .post({
        body: {
          version: inventory.body.version,
          actions: [
            {
              action: 'setRestockableInDays',
              restockableInDays: 10,
            },
          ],
        },
      })
      .execute()

    expect(updateInventory.body.version).not.toBe(inventory.body.version)
    expect(updateInventory.statusCode).toEqual(200)

    await deleteInventory(updateInventory)
    await deleteChannel(channel)
  })
})
