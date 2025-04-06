import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { CustomerGroupDraft } from '../../../src'
import { deleteCustomerGroup } from './customer-group-fixture'

describe('testing customer group API calls', () => {
  let customerGroup
  it('should create a customer group', async () => {
    const customerGroupDraft: CustomerGroupDraft = {
      key: randomUUID(),
      groupName: 'test-name-customerGroup' + randomUUID(),
    }

    customerGroup = await apiRoot
      .customerGroups()
      .post({ body: customerGroupDraft })
      .execute()

    expect(customerGroup.body).toBeDefined()
    expect(customerGroup.statusCode).toEqual(201)
  })

  it('should get a customer group by Id', async () => {
    const getCustomerGroup = await apiRoot
      .customerGroups()
      .withId({ ID: customerGroup.body.id })
      .get()
      .execute()

    expect(getCustomerGroup).toBeDefined()
    expect(getCustomerGroup.body.id).toEqual(customerGroup.body.id)
  })

  it('should get a customer group by key', async () => {
    const getCustomerGroup = await apiRoot
      .customerGroups()
      .withKey({ key: customerGroup.body.key })
      .get()
      .execute()

    expect(getCustomerGroup).toBeDefined()
    expect(getCustomerGroup.body.key).toEqual(customerGroup.body.key)
  })

  it('should query a customer group', async () => {
    const queryCustomerGroup = await apiRoot
      .customerGroups()
      .get({
        queryArgs: {
          where: 'id=' + '"' + customerGroup.body.id + '"',
        },
      })
      .execute()

    expect(queryCustomerGroup).toBeDefined()
    expect(queryCustomerGroup.body.results[0].id).toEqual(customerGroup.body.id)
  })

  it('should update a customer group by Id', async () => {
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

    expect(updateCustomerGroup.statusCode).toEqual(200)
    expect(updateCustomerGroup.body.version).not.toEqual(
      customerGroup.body.version
    )

    customerGroup = updateCustomerGroup
  })

  it('should update a customer group by Key', async () => {
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

    expect(updateCustomerGroup.statusCode).toEqual(200)
    expect(updateCustomerGroup.body.version).not.toEqual(
      customerGroup.body.version
    )

    customerGroup = updateCustomerGroup
  })

  afterAll(async () => {
    await deleteCustomerGroup(customerGroup)
  })
})
