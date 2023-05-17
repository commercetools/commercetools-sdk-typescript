import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { StoreDraft } from '../../../src'
import { createStore, deleteStore } from './store-fixture'

describe('testing store API calls', () => {
  it('should create and delete a store by ID', async () => {
    const storeDraft: StoreDraft = {
      key: randomUUID(),
    }

    const responseCreatedStore = await apiRoot
      .stores()
      .post({ body: storeDraft })
      .execute()

    expect(responseCreatedStore.statusCode).toEqual(201)
    expect(responseCreatedStore.body).not.toBe(null)

    const responseStoreDeleted = await apiRoot
      .stores()
      .withId({ ID: responseCreatedStore.body.id })
      .delete({
        queryArgs: { version: responseCreatedStore.body.version },
      })
      .execute()

    expect(responseStoreDeleted.statusCode).toEqual(200)
  })

  it('should get a store by ID', async () => {
    const store = await createStore()

    const getStore = await apiRoot
      .stores()
      .withId({ ID: store.body.id })
      .get()
      .execute()

    expect(getStore).not.toBe(null)
    expect(getStore.body.id).toEqual(store.body.id)

    await deleteStore(getStore)
  })

  it('should get a store by key', async () => {
    const store = await createStore()

    const getStore = await apiRoot
      .stores()
      .withKey({ key: store.body.key })
      .get()
      .execute()

    expect(getStore).not.toBe(null)
    expect(getStore.body.id).toEqual(store.body.id)

    await deleteStore(getStore)
  })

  it('should query a store', async () => {
    const store = await createStore()
    const queryStore = await apiRoot
      .stores()
      .get({
        queryArgs: {
          where: 'id=' + '"' + store.body.id + '"',
        },
      })
      .execute()
    expect(queryStore).not.toBe(null)
    expect(queryStore.body.results.at(0).id).toEqual(store.body.id)

    await deleteStore(store)
  })

  it('should update a store by Id', async () => {
    const store = await createStore()

    const newName = { en: 'test-name-store' + randomUUID() }
    const updateStore = await apiRoot
      .stores()
      .withId({ ID: store.body.id })
      .post({
        body: {
          version: store.body.version,
          actions: [
            {
              action: 'setName',
              name: newName,
            },
          ],
        },
      })
      .execute()

    expect(updateStore.body.version).not.toBe(store.body.version)
    expect(updateStore.statusCode).toEqual(200)
    expect(updateStore.body.name).toEqual(newName)

    await deleteStore(updateStore)
  })

  it('should update a store by Key', async () => {
    const store = await createStore()

    const newName = { en: 'test-name-store' + randomUUID() }
    const updateStore = await apiRoot
      .stores()
      .withKey({ key: store.body.key })
      .post({
        body: {
          version: store.body.version,
          actions: [
            {
              action: 'setName',
              name: newName,
            },
          ],
        },
      })
      .execute()

    expect(updateStore.body.version).not.toBe(store.body.version)
    expect(updateStore.statusCode).toEqual(200)
    expect(updateStore.body.name).toEqual(newName)

    await deleteStore(updateStore)
  })

  it('should delete a store by Key', async () => {
    const store = await createStore()

    const responseStoreDeleted = await apiRoot
      .stores()
      .withKey({ key: store.body.key })
      .delete({
        queryArgs: {
          version: store.body.version,
        },
      })
      .execute()

    expect(responseStoreDeleted.statusCode).toEqual(200)
  })
})
