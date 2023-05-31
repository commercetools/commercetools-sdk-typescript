import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { createType, deleteType } from './type-fixture'
import { TypeDraft } from '../../../src'

describe('testing type API calls', () => {
  it('should create and delete a type by ID', async () => {
    const typeDraft: TypeDraft = {
      key: 'test-key-' + randomUUID(),
      name: { en: 'test-name-type' + randomUUID() },
      resourceTypeIds: [
        'asset',
        'category',
        'order',
        'payment-interface-interaction',
        'payment',
        'cart-discount',
      ],
    }

    const responseCreatedType = await apiRoot
      .types()
      .post({ body: typeDraft })
      .execute()

    expect(responseCreatedType.statusCode).toEqual(201)
    expect(responseCreatedType.body).not.toBe(null)

    const responseTypeDeleted = await apiRoot
      .types()
      .withId({ ID: responseCreatedType.body.id })
      .delete({
        queryArgs: { version: responseCreatedType.body.version },
      })
      .execute()

    expect(responseTypeDeleted.statusCode).toEqual(200)
  })

  it('should get a type by ID', async () => {
    const type = await createType()

    const getType = await apiRoot
      .types()
      .withId({ ID: type.body.id })
      .get()
      .execute()

    expect(getType).not.toBe(null)
    expect(getType.body.id).toEqual(type.body.id)

    await deleteType(getType)
  })

  it('should get a type by key', async () => {
    const type = await createType()

    const getType = await apiRoot
      .types()
      .withKey({ key: type.body.key })
      .get()
      .execute()

    expect(getType).not.toBe(null)
    expect(getType.body.key).toEqual(type.body.key)

    await deleteType(getType)
  })

  it('should query a type', async () => {
    const type = await createType()
    const queryType = await apiRoot
      .types()
      .get({
        queryArgs: {
          where: 'id=' + '"' + type.body.id + '"',
        },
      })
      .execute()
    expect(queryType).not.toBe(null)
    expect(queryType.body.results.at(0).id).toEqual(type.body.id)

    await deleteType(type)
  })

  it('should update a type by Id', async () => {
    const type = await createType()

    const newKey = 'test-key-type-' + randomUUID()
    const updateType = await apiRoot
      .types()
      .withId({ ID: type.body.id })
      .post({
        body: {
          version: type.body.version,
          actions: [
            {
              action: 'changeKey',
              key: newKey,
            },
          ],
        },
      })
      .execute()

    expect(updateType.body.version).not.toBe(type.body.version)
    expect(updateType.statusCode).toEqual(200)
    expect(updateType.body.key).toEqual(newKey)

    await deleteType(updateType)
  })

  it('should update a type by key', async () => {
    const type = await createType()

    const newKey = 'test-key-type-' + randomUUID()
    const updateType = await apiRoot
      .types()
      .withKey({ key: type.body.key })
      .post({
        body: {
          version: type.body.version,
          actions: [
            {
              action: 'changeKey',
              key: newKey,
            },
          ],
        },
      })
      .execute()

    expect(updateType.body.version).not.toBe(type.body.version)
    expect(updateType.statusCode).toEqual(200)
    expect(updateType.body.key).toEqual(newKey)

    await deleteType(updateType)
  })

  it('should delete a type by key', async () => {
    const type = await createType()

    const deleteType = await apiRoot
      .types()
      .withKey({ key: type.body.key })
      .delete({
        queryArgs: {
          version: type.body.version,
        },
      })
      .execute()

    expect(deleteType.statusCode).toEqual(200)
  })
})
