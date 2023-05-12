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

  it('should update a customObject with object', async () => {
    const customObject = await createCustomObject()

    const foo = {
      1: "World's End",
      2: 'Winchester',
    }

    const customObjectDraft: CustomObjectDraft = {
      key: customObject.body.key,
      container: customObject.body.container,
      value: foo,
    }

    const updateCustomObject = await apiRoot
      .customObjects()
      .post({
        body: customObjectDraft,
      })
      .execute()

    expect(updateCustomObject).not.toBe(null)
    expect(
      updateCustomObject.body.value[
        Object.keys(updateCustomObject.body.value)[0]
      ]
    ).toEqual("World's End")

    await deleteCustomObject(
      updateCustomObject.body.container,
      updateCustomObject.body.key,
      updateCustomObject.body.version
    )
  })

  it('should update a customObject with new string value', async () => {
    const customObject = await createCustomObject()

    const customObjectDraft: CustomObjectDraft = {
      key: customObject.body.key,
      container: customObject.body.container,
      value: 'foo',
    }

    const updateCustomObject = await apiRoot
      .customObjects()
      .post({
        body: customObjectDraft,
      })
      .execute()

    expect(updateCustomObject).not.toBe(null)
    expect(updateCustomObject.body.value).toEqual('foo')

    await deleteCustomObject(
      updateCustomObject.body.container,
      updateCustomObject.body.key,
      updateCustomObject.body.version
    )
  })

  it('should query a customObject', async () => {
    const customObject = await createCustomObject()

    const queryCustomObject = await apiRoot
      .customObjects()
      .get({
        queryArgs: {
          where: 'id=' + '"' + customObject.body.id + '"',
        },
      })
      .execute()

    expect(queryCustomObject).not.toBe(null)
    expect(queryCustomObject.body.results.at(0).id).toEqual(
      customObject.body.id
    )
    await deleteCustomObject(
      customObject.body.container,
      customObject.body.key,
      customObject.body.version
    )
  })
})
