import { apiRoot } from '../test-utils'
import { randomUUID } from 'crypto'
import { CustomObjectDraft } from '../../../src'
import { createCustomObject, deleteCustomObject } from './custom-object-fixture'

describe('testing customObject API calls', () => {
  it('should create and delete a customObject by ID', async () => {
    const customObjectDraft: CustomObjectDraft = {
      key: randomUUID(),
      container: 'a',
      value: 2,
    }

    const responseCreatedCustomObject = await apiRoot
      .customObjects()
      .post({ body: customObjectDraft })
      .execute()

    expect(responseCreatedCustomObject.statusCode).toEqual(201)
    expect(responseCreatedCustomObject.body).not.toBe(null)

    const responseCustomObjectsDeleted = await apiRoot
      .customObjects()
      .withContainerAndKey({
        container: responseCreatedCustomObject.body.container,
        key: responseCreatedCustomObject.body.key,
      })
      .delete({
        queryArgs: { version: responseCreatedCustomObject.body.version },
      })
      .execute()

    expect(responseCustomObjectsDeleted.statusCode).toEqual(200)
  })

  it('should delete a customObject by Key', async () => {
    const responseCreatedCustomObjects = await createCustomObject()

    const responseCustomObjectsDeleted = await apiRoot
      .customObjects()
      .withContainerAndKey({
        container: responseCreatedCustomObjects.body.container,
        key: responseCreatedCustomObjects.body.key,
      })
      .delete({
        queryArgs: { version: responseCreatedCustomObjects.body.version },
      })
      .execute()

    expect(responseCustomObjectsDeleted.statusCode).toEqual(200)
  })

  it('should get a customObject by Container and Key ', async () => {
    const customObject = await createCustomObject()

    const getCustomObject = await apiRoot
      .customObjects()
      .withContainerAndKey({
        container: customObject.body.container,
        key: customObject.body.key,
      })
      .get()
      .execute()

    expect(getCustomObject.body.version).not.toBe(null)
    expect(getCustomObject.body.id).toEqual(customObject.body.id)

    await deleteCustomObject(
      getCustomObject.body.container,
      getCustomObject.body.key,
      getCustomObject.body.version
    )
  })
})
