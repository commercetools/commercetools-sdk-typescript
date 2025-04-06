import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { ZoneDraft } from '../../../src'
import { createZone, deleteZone } from './zone-fixture'

describe('testing zone API calls', () => {
  let zone
  it('should create a zone', async () => {
    const zoneDraft: ZoneDraft = {
      key: 'test-key-zone' + randomUUID(),
      name: 'test-name-zone' + randomUUID(),
      description: 'test-description-zone' + randomUUID(),
    }

    zone = await apiRoot.zones().post({ body: zoneDraft }).execute()

    expect(zone.body).toBeDefined()
    expect(zone.statusCode).toEqual(201)
  })

  it('should get a zone by ID', async () => {
    const getZone = await apiRoot
      .zones()
      .withId({ ID: zone.body.id })
      .get()
      .execute()

    expect(getZone).toBeDefined()
    expect(getZone.body.id).toEqual(zone.body.id)
  })

  it('should get a zone by key', async () => {
    const getZone = await apiRoot
      .zones()
      .withKey({ key: zone.body.key })
      .get()
      .execute()

    expect(getZone).toBeDefined()
    expect(getZone.body.key).toEqual(zone.body.key)
  })

  it('should query a zone', async () => {
    const queryZone = await apiRoot
      .zones()
      .get({
        queryArgs: {
          where: 'id=' + '"' + zone.body.id + '"',
        },
      })
      .execute()

    expect(queryZone).toBeDefined()
    expect(queryZone.body.results[0].id).toEqual(zone.body.id)
  })

  it('should update a zone by Id', async () => {
    const newKey = 'test-key-zone-' + randomUUID()
    const updateZone = await apiRoot
      .zones()
      .withId({ ID: zone.body.id })
      .post({
        body: {
          version: zone.body.version,
          actions: [
            {
              action: 'setKey',
              key: newKey,
            },
          ],
        },
      })
      .execute()

    expect(updateZone.statusCode).toEqual(200)
    expect(updateZone.body.key).toEqual(newKey)
    expect(updateZone.body.version).not.toEqual(zone.body.version)
    zone = updateZone
  })

  it('should update a zone by key', async () => {
    const newKey = 'test-key-zone-' + randomUUID()
    const updateZone = await apiRoot
      .zones()
      .withKey({ key: zone.body.key })
      .post({
        body: {
          version: zone.body.version,
          actions: [
            {
              action: 'setKey',
              key: newKey,
            },
          ],
        },
      })
      .execute()

    expect(updateZone.statusCode).toEqual(200)
    expect(updateZone.body.key).toEqual(newKey)
    expect(updateZone.body.version).not.toEqual(zone.body.version)
    zone = updateZone
  })

  afterAll(async () => {
    await deleteZone(zone)
  })
})
