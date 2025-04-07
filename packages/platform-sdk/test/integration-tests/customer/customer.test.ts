import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import {
  _BaseAddress,
  BaseAddress,
  CustomerDraft,
  CustomerGroupResourceIdentifier,
  StoreResourceIdentifier,
} from '../../../src'
import {
  createCustomerGroup,
  deleteCustomerGroup,
} from '../customer-group/customer-group-fixture'
import { createStore, deleteStore } from '../store/store-fixture'
import { createCustomer } from './customer-fixture'

describe('testing customer API calls', () => {
  let customerGroup, customer, store
  it('should create a customer', async () => {
    customerGroup = await createCustomerGroup()

    const customerGroupResourceIdentifier: CustomerGroupResourceIdentifier = {
      typeId: 'customer-group',
      id: customerGroup.body.id,
    }

    const address: BaseAddress[] = [
      {
        id: randomUUID(),
        country: 'DE',
      },
    ]
    const customerDraft: CustomerDraft = {
      key: 'customer-key-' + randomUUID(),
      email: 'test-email-customer' + randomUUID(),
      password: 'test-password-customer' + randomUUID(),
      customerGroup: customerGroupResourceIdentifier,
      addresses: address,
    }

    customer = await createCustomer(customerDraft)

    expect(customer.statusCode).toEqual(201)
    expect(customer.body.customer).toBeDefined()
  })

  it('should get a customer by Id', async () => {
    const getCustomer = await apiRoot
      .customers()
      .withId({ ID: customer.body.customer.id })
      .get()
      .execute()

    expect(getCustomer).toBeDefined()
    expect(getCustomer.body.id).toEqual(customer.body.customer.id)
  })

  it('should get a customer by key', async () => {
    const getCustomer = await apiRoot
      .customers()
      .withKey({ key: customer.body.customer.key })
      .get()
      .execute()

    expect(getCustomer).toBeDefined()
    expect(getCustomer.body.key).toEqual(customer.body.customer.key)
  })

  it('should query a customer', async () => {
    const queryCustomer = await apiRoot
      .customers()
      .get({
        queryArgs: {
          where: 'id=' + '"' + customer.body.customer.id + '"',
        },
      })
      .execute()

    expect(queryCustomer).toBeDefined()
    expect(queryCustomer.body.results[0].id).toEqual(customer.body.customer.id)
  })

  it('should update a customer by Id', async () => {
    const updateCustomer = await apiRoot
      .customers()
      .withId({ ID: customer.body.customer.id })
      .post({
        body: {
          version: customer.body.customer.version,
          actions: [
            {
              action: 'setKey',
              key: randomUUID(),
            },
          ],
        },
      })
      .execute()

    expect(updateCustomer.statusCode).toEqual(200)
    expect(updateCustomer.body.version).not.toEqual(
      customer.body.customer.version
    )
    customer = updateCustomer
  })

  it('should update a customer by key', async () => {
    const updateCustomer = await apiRoot
      .customers()
      .withKey({ key: customer.body.key })
      .post({
        body: {
          version: customer.body.version,
          actions: [
            {
              action: 'setKey',
              key: randomUUID(),
            },
          ],
        },
      })
      .execute()

    expect(updateCustomer.statusCode).toEqual(200)
    expect(updateCustomer.body.version).not.toEqual(customer.body.version)
    customer = updateCustomer
  })

  it('should adding new address to a customer', async () => {
    const newAddressKey = randomUUID()
    const newAddress: _BaseAddress = {
      key: newAddressKey,
      country: 'DE',
    }

    const updateCustomer = await apiRoot
      .customers()
      .withId({ ID: customer.body.id })
      .post({
        body: {
          version: customer.body.version,
          actions: [
            {
              action: 'addAddress',
              address: newAddress,
            },
          ],
        },
      })
      .execute()

    expect(updateCustomer.statusCode).toEqual(200)
    expect(updateCustomer.body.version).not.toEqual(customer.body.version)
    expect(updateCustomer.body.addresses[1].key).toEqual(newAddressKey)
    customer = updateCustomer
  })

  it('should set customer to a store', async () => {
    store = await createStore()
    const storeResourceIdentifier: StoreResourceIdentifier = {
      typeId: 'store',
      key: store.body.key,
    }

    const updateCustomer = await apiRoot
      .customers()
      .withId({ ID: customer.body.id })
      .post({
        body: {
          version: customer.body.version,
          actions: [
            {
              action: 'setStores',
              stores: [storeResourceIdentifier],
            },
          ],
        },
      })
      .execute()

    expect(updateCustomer.statusCode).toEqual(200)
    expect(updateCustomer.body.version).not.toEqual(customer.body.version)
    expect(updateCustomer.body.stores[0].key).toEqual(store.body.key)
    customer = updateCustomer
  })

  it('should delete a customer by Key', async () => {
    const responseCustomerDeleted = await apiRoot
      .customers()
      .withKey({ key: customer.body.key })
      .delete({
        queryArgs: {
          version: customer.body.version,
        },
      })
      .execute()

    expect(responseCustomerDeleted.statusCode).toEqual(200)
  })

  afterAll(async () => {
    await deleteStore(store)
    await deleteCustomerGroup(customerGroup)
  })
})
