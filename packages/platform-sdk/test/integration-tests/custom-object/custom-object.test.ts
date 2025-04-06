import { apiRoot } from '../test-utils'
import { randomUUID } from 'crypto'
import { CustomObjectDraft } from '../../../src'
import { createCustomObject, deleteCustomObject } from './custom-object-fixture'

describe('testing customObject API calls', () => {
  let customObject
  it('should create a custom object', async () => {
    const customObjectDraft: CustomObjectDraft = {
      key: randomUUID(),
      container: 'a',
      value: 2,
    }

    customObject = await apiRoot
      .customObjects()
      .post({ body: customObjectDraft })
      .execute()

    expect(customObject.body).toBeDefined()
    expect(customObject.statusCode).toEqual(201)
  })

  it('should get a customObject by Container and Key ', async () => {
    const getCustomObject = await apiRoot
      .customObjects()
      .withContainerAndKey({
        container: customObject.body.container,
        key: customObject.body.key,
      })
      .get()
      .execute()

    expect(getCustomObject.body.version).toBeDefined()
    expect(getCustomObject.body.id).toEqual(customObject.body.id)
  })

  it('should update a customObject with object', async () => {
    const newObejct = {
      1: 'customObjet',
      2: 'anotherObject',
    }

    const customObjectDraft: CustomObjectDraft = {
      key: customObject.body.key,
      container: customObject.body.container,
      value: newObejct,
    }

    const updateCustomObject = await apiRoot
      .customObjects()
      .post({
        body: customObjectDraft,
      })
      .execute()

    expect(updateCustomObject).toBeDefined()
    expect(updateCustomObject.body.value).toEqual(newObejct)
    customObject = updateCustomObject
  })

  it('should update a customObject with new string value', async () => {
    const customObjectDraft: CustomObjectDraft = {
      key: customObject.body.key,
      container: customObject.body.container,
      value: 'newObject',
    }

    const updateCustomObject = await apiRoot
      .customObjects()
      .post({
        body: customObjectDraft,
      })
      .execute()

    expect(updateCustomObject).toBeDefined()
    expect(updateCustomObject.body.value).toEqual('newObject')
    customObject = updateCustomObject
  })

  it('should query a customObject when createdAt is equal to today', async () => {
    const queryCustomObject = await apiRoot
      .customObjects()
      .withContainerAndKey({
        container: customObject.body.container,
        key: customObject.body.key,
      })
      .get({
        queryArgs: {
          where: 'createdAt = :createdAt',
          'var.createdAt': new Date().toISOString(),
        },
      })
      .execute()

    expect(queryCustomObject).toBeDefined()
    expect(queryCustomObject.body.id).toEqual(customObject.body.id)
  })

  afterAll(async () => {
    await deleteCustomObject(customObject)
  })
})
