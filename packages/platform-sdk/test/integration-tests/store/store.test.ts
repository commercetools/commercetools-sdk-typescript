import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { StoreDraft } from '../../../src'
import { createStore, deleteStore } from './store-fixture'

describe('testing store API calls', () => {
  let store
  it('should create a store', async () => {
    const storeDraft: StoreDraft = {
      key: randomUUID(),
    }

    store = await apiRoot.stores().post({ body: storeDraft }).execute()

    expect(store.statusCode).toEqual(201)
    expect(store.body).toBeDefined()
  })

  it('should get a store by ID', async () => {
    const getStore = await apiRoot
      .stores()
      .withId({ ID: store.body.id })
      .get()
      .execute()

    expect(getStore).toBeDefined()
    expect(getStore.body.id).toEqual(store.body.id)
  })

  it('should get a store by key', async () => {
    const getStore = await apiRoot
      .stores()
      .withKey({ key: store.body.key })
      .get()
      .execute()

    expect(getStore).toBeDefined()
    expect(getStore.body.id).toEqual(store.body.id)
  })

  it('should query a store', async () => {
    const queryStore = await apiRoot
      .stores()
      .get({
        queryArgs: {
          where: 'id=' + '"' + store.body.id + '"',
        },
      })
      .execute()

    expect(queryStore).toBeDefined()
    expect(queryStore.body.results[0].id).toEqual(store.body.id)
  })

  it('should update a store by Id', async () => {
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

    expect(updateStore.statusCode).toEqual(200)
    expect(updateStore.body.name).toEqual(newName)
    expect(updateStore.body.version).not.toEqual(store.body.version)
    store = updateStore
  })

  it('should update a store by Key', async () => {
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

    expect(updateStore.statusCode).toEqual(200)
    expect(updateStore.body.name).toEqual(newName)
    expect(updateStore.body.version).not.toEqual(store.body.version)
    store = updateStore
  })

  afterAll(async () => {
    await deleteStore(store)
  })
})
