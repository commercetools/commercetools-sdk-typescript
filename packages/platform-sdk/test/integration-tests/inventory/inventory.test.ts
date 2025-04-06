import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { ChannelResourceIdentifier, InventoryEntryDraft } from '../../../src'
import { createChannel, deleteChannel } from '../channel/channel-fixture'
import { deleteInventory } from './inventory-fixture'

describe('testing inventory API calls', () => {
  let inventory, channel
  it('should create an inventory', async () => {
    channel = await createChannel()
    const channelResourceIdentifier: ChannelResourceIdentifier = {
      typeId: 'channel',
      id: channel.body.id,
    }

    const inventoryDraft: InventoryEntryDraft = {
      sku: randomUUID(),
      supplyChannel: channelResourceIdentifier,
      quantityOnStock: 10,
    }

    inventory = await apiRoot
      .inventory()
      .post({ body: inventoryDraft })
      .execute()

    expect(inventory.body).toBeDefined()
    expect(inventory.statusCode).toEqual(201)
  })

  it('should get an inventory by ID', async () => {
    const getInventory = await apiRoot
      .inventory()
      .withId({ ID: inventory.body.id })
      .get()
      .execute()

    expect(getInventory).toBeDefined()
    expect(getInventory.body.id).toEqual(inventory.body.id)
  })

  it('should query a inventory by SKU', async () => {
    const getInventory = await apiRoot
      .inventory()
      .get({
        queryArgs: {
          where: 'sku=' + '"' + inventory.body.sku + '"',
        },
      })
      .execute()

    expect(getInventory).toBeDefined()
    expect(getInventory.body.results[0].sku).toEqual(inventory.body.sku)
  })

  it('should update a inventory setting restockable', async () => {
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

    expect(updateInventory.statusCode).toEqual(200)
    expect(updateInventory.body.version).not.toEqual(inventory.body.version)
  })

  afterAll(async () => {
    await deleteInventory(inventory)
    await deleteChannel(channel)
  })
})
