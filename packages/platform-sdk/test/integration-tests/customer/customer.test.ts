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
import {
  createCustomer,
  createCustomerDraft,
  deleteCustomer,
  deleteCustomerFromUpdatableObject,
} from './customer-fixture'
import { createStore, deleteStore } from '../store/store-fixture'

describe('testing customer API calls', () => {
  it('should create and delete a customer by ID', async () => {
    const customerGroup = await createCustomerGroup()

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
      key: randomUUID(),
      email: 'test-email-customer' + randomUUID(),
      password: 'test-password-customer' + randomUUID(),
      customerGroup: customerGroupResourceIdentifier,
      addresses: address,
    }

    const responseCreatedCustomer = await apiRoot
      .customers()
      .post({ body: customerDraft })
      .execute()

    expect(responseCreatedCustomer.statusCode).toEqual(201)
    expect(responseCreatedCustomer.body.customer).not.toBe(null)

    const responseCustomerDeleted = await apiRoot
      .customers()
      .withId({ ID: responseCreatedCustomer.body.customer.id })
      .delete({
        queryArgs: { version: responseCreatedCustomer.body.customer.version },
      })
      .execute()

    expect(responseCustomerDeleted.statusCode).toEqual(200)

    await deleteCustomerGroup(customerGroup)
  })

  it('should get a customer by Id', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)

    const getCustomer = await apiRoot
      .customers()
      .withId({ ID: customer.body.customer.id })
      .get()
      .execute()

    expect(getCustomer).not.toBe(null)
    expect(getCustomer.body.id).toEqual(customer.body.customer.id)

    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)
  })

  it('should get a customer by key', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)

    const getCustomer = await apiRoot
      .customers()
      .withKey({ key: customer.body.customer.key })
      .get()
      .execute()

    expect(getCustomer).not.toBe(null)
    expect(getCustomer.body.key).toEqual(customer.body.customer.key)

    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)
  })

  it('should query a customer', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)

    const queryCustomer = await apiRoot
      .customers()
      .get({
        queryArgs: {
          where: 'id=' + '"' + customer.body.customer.id + '"',
        },
      })
      .execute()

    expect(queryCustomer).not.toBe(null)
    expect(queryCustomer.body.results.at(0).id).toEqual(
      customer.body.customer.id
    )

    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)
  })

  it('should update a customer by Id', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)

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

    expect(updateCustomer.body.version).not.toBe(customer.body.customer.version)
    expect(updateCustomer.statusCode).toEqual(200)

    await deleteCustomerFromUpdatableObject(updateCustomer)
    await deleteCustomerGroup(customerGroup)
  })

  it('should update a customer by key', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)

    const updateCustomer = await apiRoot
      .customers()
      .withKey({ key: customer.body.customer.key })
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

    expect(updateCustomer.body.version).not.toBe(customer.body.customer.version)
    expect(updateCustomer.statusCode).toEqual(200)

    await deleteCustomerFromUpdatableObject(updateCustomer)
    await deleteCustomerGroup(customerGroup)
  })

  it('should adding new address to a customer', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)

    const newAddressKey = randomUUID()

    const newAddress: _BaseAddress = {
      key: newAddressKey,
      country: 'DE',
    }

    const updateCustomer = await apiRoot
      .customers()
      .withId({ ID: customer.body.customer.id })
      .post({
        body: {
          version: customer.body.customer.version,
          actions: [
            {
              action: 'addAddress',
              address: newAddress,
            },
          ],
        },
      })
      .execute()

    expect(updateCustomer.body.version).not.toBe(customer.body.customer.version)
    expect(updateCustomer.statusCode).toEqual(200)
    expect(updateCustomer.body.addresses.at(1).key).toEqual(newAddressKey)

    await deleteCustomerFromUpdatableObject(updateCustomer)
    await deleteCustomerGroup(customerGroup)
  })

  it('should setting customer to a store', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)
    const store = await createStore()

    const storeResourceIdentifier: StoreResourceIdentifier = {
      typeId: 'store',
      key: store.body.key,
    }

    const updateCustomer = await apiRoot
      .customers()
      .withId({ ID: customer.body.customer.id })
      .post({
        body: {
          version: customer.body.customer.version,
          actions: [
            {
              action: 'setStores',
              stores: [storeResourceIdentifier],
            },
          ],
        },
      })
      .execute()

    expect(updateCustomer.body.version).not.toBe(customer.body.customer.version)
    expect(updateCustomer.statusCode).toEqual(200)
    expect(updateCustomer.body.stores.at(0).key).toEqual(store.body.key)

    await deleteCustomerFromUpdatableObject(updateCustomer)
    await deleteStore(store)
    await deleteCustomerGroup(customerGroup)
  })

  it('should delete a customer by Key', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)

    const responseCustomerDeleted = await apiRoot
      .customers()
      .withKey({ key: customer.body.customer.key })
      .delete({
        queryArgs: {
          version: customer.body.customer.version,
        },
      })
      .execute()

    expect(responseCustomerDeleted.statusCode).toEqual(200)
  })
})
