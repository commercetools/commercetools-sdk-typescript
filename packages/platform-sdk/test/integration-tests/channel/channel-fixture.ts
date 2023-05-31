import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { ChannelDraft, GeoJson } from '../../../src'

const geolocation: GeoJson = {
  type: 'Point',
  coordinates: [13.0, 51.0],
}
const channelDraft: ChannelDraft = {
  key: randomUUID(),
  roles: ['InventorySupply'],
  geoLocation: geolocation,
}

export const createChannel = async () => {
  return await apiRoot.channels().post({ body: channelDraft }).execute()
}

export const deleteChannel = async (responseCreatedChannel) => {
  return await apiRoot
    .channels()
    .withId({ ID: responseCreatedChannel.body.id })
    .delete({ queryArgs: { version: responseCreatedChannel.body.version } })
    .execute()
}
