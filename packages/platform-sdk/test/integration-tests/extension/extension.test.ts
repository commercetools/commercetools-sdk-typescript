import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { ExtensionDraft, HttpDestination } from '../../../src'
import { deleteExtension } from './extension-fixture'

describe('testing extension API calls', () => {
  let extension
  it('should create an extension', async () => {
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

    extension = await apiRoot
      .extensions()
      .post({ body: extensionDraft })
      .execute()

    expect(extension.body).toBeDefined()
    expect(extension.statusCode).toEqual(201)
  })

  afterAll(async () => {
    await deleteExtension(extension)
  })
})
