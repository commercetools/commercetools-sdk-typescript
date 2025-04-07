import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { createType, deleteType } from './type-fixture'

describe('testing type API calls', () => {
  let type
  beforeAll(async () => {
    type = await createType()
  })

  afterAll(async () => {
    await deleteType(type)
  })

  it('should get a type by ID', async () => {
    const getType = await apiRoot
      .types()
      .withId({ ID: type.body.id })
      .get()
      .execute()

    expect(getType).toBeDefined()
    expect(getType.body.id).toEqual(type.body.id)
  })

  it('should get a type by key', async () => {
    const getType = await apiRoot
      .types()
      .withKey({ key: type.body.key })
      .get()
      .execute()

    expect(getType).toBeDefined()
    expect(getType.body.key).toEqual(type.body.key)
  })

  it('should query a type', async () => {
    const queryType = await apiRoot
      .types()
      .get({
        queryArgs: {
          where: 'id=' + '"' + type.body.id + '"',
        },
      })
      .execute()
    expect(queryType).toBeDefined()
    expect(queryType.body.results[0].id).toEqual(type.body.id)
  })

  it('should update a type by Id', async () => {
    const newName = 'test-name-type-' + randomUUID()
    const updateType = await apiRoot
      .types()
      .withId({ ID: type.body.id })
      .post({
        body: {
          version: type.body.version,
          actions: [
            {
              action: 'changeName',
              name: { en: newName },
            },
          ],
        },
      })
      .execute()

    expect(updateType.statusCode).toEqual(200)
    expect(updateType.body.name.en).toEqual(newName)
    expect(updateType.body.version).not.toEqual(type.body.version)
    type = updateType
  })

  it('should update a type by key', async () => {
    const newName = 'test-name-type-' + randomUUID()
    const updateType = await apiRoot
      .types()
      .withKey({ key: type.body.key })
      .post({
        body: {
          version: type.body.version,
          actions: [
            {
              action: 'changeName',
              name: { en: newName },
            },
          ],
        },
      })
      .execute()

    expect(updateType.statusCode).toEqual(200)
    expect(updateType.body.name.en).toEqual(newName)
    expect(updateType.body.version).not.toEqual(type.body.version)
    type = updateType
  })
})
