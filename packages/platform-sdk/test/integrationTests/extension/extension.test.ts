import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { ExtensionDraft, ExtensionTrigger, HttpDestination } from '../../../src'

describe('testing extension API calls', () => {
  it('should create and delete an extension by ID', async () => {
    const httpDestination: HttpDestination = {
      type: 'HTTP',
      url: 'http://www.commercetools.com',
    }

    const extensionDraft: ExtensionDraft = {
      key: randomUUID(),
      destination: httpDestination,
      triggers: [
        {
          resourceTypeId: 'cart',
          actions: ['Create'],
        },
      ],
    }

    const responseCreatedExtension = await apiRoot
      .extensions()
      .post({ body: extensionDraft })
      .execute()

    expect(responseCreatedExtension.statusCode).toEqual(201)
    expect(responseCreatedExtension.body).not.toBe(null)

    const responseExtensionDeleted = await apiRoot
      .extensions()
      .withId({ ID: responseCreatedExtension.body.id })
      .delete({
        queryArgs: { version: responseCreatedExtension.body.version },
      })
      .execute()

    expect(responseExtensionDeleted.statusCode).toEqual(200)
  })
})
