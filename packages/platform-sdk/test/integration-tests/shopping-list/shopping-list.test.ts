import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import {
  CustomerResourceIdentifier,
  ShoppingListDraft,
  TextLineItemDraft,
} from '../../../src'
import {
  createCustomer,
  createCustomerDraft,
  deleteCustomer,
} from '../customer/customer-fixture'
import {
  createCustomerGroup,
  deleteCustomerGroup,
} from '../customer-group/customer-group-fixture'
import {
  createShoppingList,
  createShoppingListDraft,
  deleteShoppingList,
} from './shopping-list-fixture'

describe('testing shopping list API calls', () => {
  it('should create and delete a shopping list by ID', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)

    const customerResourceIdentifier: CustomerResourceIdentifier = {
      typeId: 'customer',
      id: customer.body.customer.id,
    }

    const textLineItemDraft: TextLineItemDraft = {
      description: { en: 'test-description-textLineItem' + randomUUID() },
      name: { en: 'test-name-textLineItem' + randomUUID() },
      quantity: 10,
    }

    const shoppingListDraft: ShoppingListDraft = {
      key: 'test-key-shopping-list' + randomUUID(),
      name: { en: 'test-name-shopping-list-' + randomUUID() },
      slug: { en: 'test-slug-shopping-list-' + randomUUID() },
      description: { en: 'test-description-shopping-list-' + randomUUID() },
      customer: customerResourceIdentifier,
      textLineItems: [textLineItemDraft],
      deleteDaysAfterLastModification: 2,
    }

    const responseCreatedShoppingList = await apiRoot
      .shoppingLists()
      .post({ body: shoppingListDraft })
      .execute()

    expect(responseCreatedShoppingList.statusCode).toEqual(201)
    expect(responseCreatedShoppingList.body).not.toBe(null)

    const responseShoppingListDeleted = await apiRoot
      .shoppingLists()
      .withId({ ID: responseCreatedShoppingList.body.id })
      .delete({
        queryArgs: { version: responseCreatedShoppingList.body.version },
      })
      .execute()
    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)

    expect(responseShoppingListDeleted.statusCode).toEqual(200)
  })

  it('should get a shopping list by ID', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)

    const shoppingListDraft = await createShoppingListDraft(customer)
    const shoppingList = await createShoppingList(shoppingListDraft)
    const queryShoppingList = await apiRoot
      .shoppingLists()
      .withId({ ID: shoppingList.body.id })
      .get()
      .execute()

    expect(queryShoppingList).not.toBe(null)
    expect(queryShoppingList.body.id).toEqual(shoppingList.body.id)

    await deleteShoppingList(shoppingList)
    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)
  })

  it('should get a shopping list by key', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)

    const shoppingListDraft = await createShoppingListDraft(customer)
    const shoppingList = await createShoppingList(shoppingListDraft)
    const queryShoppingList = await apiRoot
      .shoppingLists()
      .withKey({ key: shoppingList.body.key })
      .get()
      .execute()

    expect(queryShoppingList).not.toBe(null)
    expect(queryShoppingList.body.key).toEqual(shoppingList.body.key)

    await deleteShoppingList(shoppingList)
    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)
  })

  it('should query a shopping list', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)
    const shoppingListDraft = await createShoppingListDraft(customer)
    const shoppingList = await createShoppingList(shoppingListDraft)
    const queryShoppingList = await apiRoot
      .shoppingLists()
      .get({
        queryArgs: {
          where: 'id=' + '"' + shoppingList.body.id + '"',
        },
      })
      .execute()
    expect(queryShoppingList).not.toBe(null)
    expect(queryShoppingList.body.results[0].id).toEqual(shoppingList.body.id)

    await deleteShoppingList(shoppingList)
    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)
  })

  it('should update a shopping list by ID', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)
    const shoppingListDraft = await createShoppingListDraft(customer)
    const shoppingList = await createShoppingList(shoppingListDraft)

    const newKey = 'test-new-key-' + randomUUID()
    const updateShoppingList = await apiRoot
      .shoppingLists()
      .withId({ ID: shoppingList.body.id })
      .post({
        body: {
          version: shoppingList.body.version,
          actions: [
            {
              action: 'setKey',
              key: newKey,
            },
          ],
        },
      })
      .execute()

    expect(updateShoppingList.body.version).not.toBe(shoppingList.body.version)
    expect(updateShoppingList.statusCode).toEqual(200)

    await deleteShoppingList(updateShoppingList)
    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)
  })

  it('should update a shopping list by key', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)
    const shoppingListDraft = await createShoppingListDraft(customer)
    const shoppingList = await createShoppingList(shoppingListDraft)

    const newKey = 'test-new-key-' + randomUUID()
    const updateShoppingList = await apiRoot
      .shoppingLists()
      .withKey({ key: shoppingList.body.key })
      .post({
        body: {
          version: shoppingList.body.version,
          actions: [
            {
              action: 'setKey',
              key: newKey,
            },
          ],
        },
      })
      .execute()

    expect(updateShoppingList.body.version).not.toBe(shoppingList.body.version)
    expect(updateShoppingList.statusCode).toEqual(200)

    await deleteShoppingList(updateShoppingList)
    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)
  })

  it('should delete a shopping list by Key', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)
    const shoppingListDraft = await createShoppingListDraft(customer)
    const shoppingList = await createShoppingList(shoppingListDraft)

    const responseShoppingListDeleted = await apiRoot
      .shoppingLists()
      .withKey({ key: shoppingList.body.key })
      .delete({
        queryArgs: {
          version: shoppingList.body.version,
        },
      })
      .execute()

    expect(responseShoppingListDeleted.statusCode).toEqual(200)
    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)
  })
})
