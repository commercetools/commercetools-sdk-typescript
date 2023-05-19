import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'

import { ZoneDraft } from '../../../src'
import { createZone, deleteZone } from './zone-fixture'

describe('testing zone API calls', () => {
  it('should create and delete a zone by ID', async () => {
    const zoneDraft: ZoneDraft = {
      key: 'test-key-zone' + randomUUID(),
      name: 'test-name-zone' + randomUUID(),
      description: 'test-description-zone' + randomUUID(),
    }

    const responseCreatedZone = await apiRoot
      .zones()
      .post({ body: zoneDraft })
      .execute()

    expect(responseCreatedZone.statusCode).toEqual(201)
    expect(responseCreatedZone.body).not.toBe(null)

    const responseZoneDeleted = await apiRoot
      .zones()
      .withId({ ID: responseCreatedZone.body.id })
      .delete({
        queryArgs: { version: responseCreatedZone.body.version },
      })
      .execute()

    expect(responseZoneDeleted.statusCode).toEqual(200)
  })

  it('should get a zone by ID', async () => {
    const zone = await createZone()

    const getZone = await apiRoot
      .zones()
      .withId({ ID: zone.body.id })
      .get()
      .execute()

    expect(getZone).not.toBe(null)
    expect(getZone.body.id).toEqual(zone.body.id)

    await deleteZone(getZone)
  })

  it('should get a zone by key', async () => {
    const zone = await createZone()

    const getZone = await apiRoot
      .zones()
      .withKey({ key: zone.body.key })
      .get()
      .execute()

    expect(getZone).not.toBe(null)
    expect(getZone.body.key).toEqual(zone.body.key)

    await deleteZone(getZone)
  })

  it('should query a zone', async () => {
    const zone = await createZone()
    const queryZone = await apiRoot
      .zones()
      .get({
        queryArgs: {
          where: 'id=' + '"' + zone.body.id + '"',
        },
      })
      .execute()
    expect(queryZone).not.toBe(null)
    expect(queryZone.body.results.at(0).id).toEqual(zone.body.id)

    await deleteZone(zone)
  })

  it('should update a zone by Id', async () => {
    const zone = await createZone()

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

    expect(updateZone.body.version).not.toBe(zone.body.version)
    expect(updateZone.statusCode).toEqual(200)
    expect(updateZone.body.key).toEqual(newKey)

    await deleteZone(updateZone)
  })

  it('should update a zone by key', async () => {
    const zone = await createZone()

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

    expect(updateZone.body.version).not.toBe(zone.body.version)
    expect(updateZone.statusCode).toEqual(200)
    expect(updateZone.body.key).toEqual(newKey)

    await deleteZone(updateZone)
  })

  it('should delete a zone by key', async () => {
    const zone = await createZone()

    const deleteZone = await apiRoot
      .zones()
      .withKey({ key: zone.body.key })
      .delete({
        queryArgs: {
          version: zone.body.version,
        },
      })
      .execute()

    expect(deleteZone.statusCode).toEqual(200)
  })
})
