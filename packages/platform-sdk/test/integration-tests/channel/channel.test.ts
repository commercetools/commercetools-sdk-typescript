import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { ChannelDraft, GeoJson } from '../../../src'
import { createChannel, deleteChannel } from './channel-fixture'

describe('testing channel API calls', () => {
  it('should create and delete a channel by ID', async () => {
    const geolocation: GeoJson = {
      type: 'Point',
      coordinates: [13.0, 51.0],
    }
    const channelDraft: ChannelDraft = {
      key: randomUUID(),
      roles: ['InventorySupply'],
      geoLocation: geolocation,
    }

    const responseCreatedChannel = await apiRoot
      .channels()
      .post({ body: channelDraft })
      .execute()

    expect(responseCreatedChannel.statusCode).toEqual(201)
    expect(responseCreatedChannel.body).not.toBe(null)

    const responseChannelDeleted = await apiRoot
      .channels()
      .withId({ ID: responseCreatedChannel.body.id })
      .delete({ queryArgs: { version: responseCreatedChannel.body.version } })
      .execute()

    expect(responseChannelDeleted.statusCode).toEqual(200)
  })

  it('should update a channel by Id', async () => {
    const channel = await createChannel()
    const geoLocation: GeoJson = {
      type: 'Point',
      coordinates: [0, 0],
    }

    const updateChannel = await apiRoot
      .channels()
      .withId({ ID: channel.body.id })
      .post({
        body: {
          version: channel.body.version,
          actions: [
            {
              action: 'setGeoLocation',
              geoLocation,
            },
          ],
        },
      })
      .execute()

    expect(updateChannel.body.version).not.toBe(channel.body.version)
    expect(updateChannel.statusCode).toEqual(200)

    await deleteChannel(updateChannel)
  })

  it('should get a channel by Id', async () => {
    const channel = await createChannel()

    const getChannel = await apiRoot
      .channels()
      .withId({ ID: channel.body.id })
      .get()
      .execute()

    expect(getChannel).not.toBe(null)
    expect(getChannel.body.id).toEqual(channel.body.id)

    await deleteChannel(channel)
  })

  it('should query channels', async () => {
    const channel = await createChannel()

    const queryChannel = await apiRoot
      .channels()
      .get({
        queryArgs: {
          where: 'id=' + '"' + channel.body.id + '"',
        },
      })
      .execute()

    expect(queryChannel).not.toBe(null)
    expect(queryChannel.body.results[0].id).toEqual(channel.body.id)

    await deleteChannel(channel)
  })
})
