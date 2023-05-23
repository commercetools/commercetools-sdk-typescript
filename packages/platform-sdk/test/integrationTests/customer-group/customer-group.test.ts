import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { CustomerGroupDraft } from '../../../src'
import {
  createCustomerGroup,
  deleteCustomerGroup,
} from './customer-group-fixture'

describe('testing customer group API calls', () => {
  it('should create and delete a customer group by ID', async () => {
    const customerGroupDraft: CustomerGroupDraft = {
      key: randomUUID(),
      groupName: 'test-name-customerGroup' + randomUUID(),
    }

    const responseCreatedCustomerGroup = await apiRoot
      .customerGroups()
      .post({ body: customerGroupDraft })
      .execute()

    expect(responseCreatedCustomerGroup.statusCode).toEqual(201)
    expect(responseCreatedCustomerGroup.body).not.toBe(null)

    const responseCustomerGroupDeleted = await apiRoot
      .customerGroups()
      .withId({ ID: responseCreatedCustomerGroup.body.id })
      .delete({
        queryArgs: { version: responseCreatedCustomerGroup.body.version },
      })
      .execute()

    expect(responseCustomerGroupDeleted.statusCode).toEqual(200)
  })

  it('should get a customer group by Id', async () => {
    const customerGroup = await createCustomerGroup()

    const getCustomerGroup = await apiRoot
      .customerGroups()
      .withId({ ID: customerGroup.body.id })
      .get()
      .execute()

    expect(getCustomerGroup).not.toBe(null)
    expect(getCustomerGroup.body.id).toEqual(customerGroup.body.id)

    await deleteCustomerGroup(customerGroup)
  })

  it('should get a customer group by key', async () => {
    const customerGroup = await createCustomerGroup()

    const getCustomerGroup = await apiRoot
      .customerGroups()
      .withKey({ key: customerGroup.body.key })
      .get()
      .execute()

    expect(getCustomerGroup).not.toBe(null)
    expect(getCustomerGroup.body.key).toEqual(customerGroup.body.key)

    await deleteCustomerGroup(customerGroup)
  })

  it('should query a customer group', async () => {
    const customerGroup = await createCustomerGroup()

    const queryCustomerGroup = await apiRoot
      .customerGroups()
      .get({
        queryArgs: {
          where: 'id=' + '"' + customerGroup.body.id + '"',
        },
      })
      .execute()

    expect(queryCustomerGroup).not.toBe(null)
    expect(queryCustomerGroup.body.results.at(0).id).toEqual(
      customerGroup.body.id
    )

    await deleteCustomerGroup(customerGroup)
  })

  it('should update a customer group by Id', async () => {
    const customerGroup = await createCustomerGroup()

    const updateCustomerGroup = await apiRoot
      .customerGroups()
      .withId({ ID: customerGroup.body.id })
      .post({
        body: {
          version: customerGroup.body.version,
          actions: [
            {
              action: 'setKey',
              key: randomUUID(),
            },
          ],
        },
      })
      .execute()

    expect(updateCustomerGroup.body.version).not.toBe(
      customerGroup.body.version
    )
    expect(updateCustomerGroup.statusCode).toEqual(200)

    await deleteCustomerGroup(updateCustomerGroup)
  })

  it('should update a customer group by Key', async () => {
    const customerGroup = await createCustomerGroup()

    const updateCustomerGroup = await apiRoot
      .customerGroups()
      .withKey({ key: customerGroup.body.key })
      .post({
        body: {
          version: customerGroup.body.version,
          actions: [
            {
              action: 'setKey',
              key: randomUUID(),
            },
          ],
        },
      })
      .execute()

    expect(updateCustomerGroup.body.version).not.toBe(
      customerGroup.body.version
    )
    expect(updateCustomerGroup.statusCode).toEqual(200)

    await deleteCustomerGroup(updateCustomerGroup)
  })

  it('should delete a customer group by Key', async () => {
    const customerGroup = await createCustomerGroup()

    const responseCustomerGroupDeleted = await apiRoot
      .customerGroups()
      .withKey({ key: customerGroup.body.key })
      .delete({
        queryArgs: {
          version: customerGroup.body.version,
        },
      })
      .execute()

    expect(responseCustomerGroupDeleted.statusCode).toEqual(200)
  })
})
