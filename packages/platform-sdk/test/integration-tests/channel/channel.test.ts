import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { ChannelDraft, GeoJson } from '../../../src'
import { createChannel, deleteChannel } from './channel-fixture'

describe('testing channel API calls', () => {
  let channel
  it('should create a channel', async () => {
    const geolocation: GeoJson = {
      type: 'Point',
      coordinates: [13.0, 51.0],
    }
    const channelDraft: ChannelDraft = {
      key: randomUUID(),
      roles: ['InventorySupply'],
      geoLocation: geolocation,
    }

    channel = await apiRoot.channels().post({ body: channelDraft }).execute()

    expect(channel.body).toBeDefined()
    expect(channel.statusCode).toEqual(201)
  })

  it('should update a channel by Id', async () => {
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

    expect(updateChannel.statusCode).toEqual(200)
    expect(updateChannel.body.version).not.toEqual(channel.body.version)
    channel = updateChannel
  })

  it('should get a channel by Id', async () => {
    const getChannel = await apiRoot
      .channels()
      .withId({ ID: channel.body.id })
      .get()
      .execute()

    expect(getChannel).toBeDefined()
    expect(getChannel.body.id).toEqual(channel.body.id)
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

    expect(queryChannel).toBeDefined()
    expect(queryChannel.body.results[0].id).toEqual(channel.body.id)
  })

  afterAll(async () => {
    await deleteChannel(channel)
  })
})
