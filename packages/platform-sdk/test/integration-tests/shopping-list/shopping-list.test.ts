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

describe('testing shopping list API calls', () => {
  let customerGroup, customer, shoppingList
  it('should create a shopping list', async () => {
    customerGroup = await createCustomerGroup()
    const customerDraft = createCustomerDraft(customerGroup)
    customer = await createCustomer(customerDraft)

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

    shoppingList = await apiRoot
      .shoppingLists()
      .post({ body: shoppingListDraft })
      .execute()

    expect(shoppingList.body).toBeDefined()
    expect(shoppingList.statusCode).toEqual(201)
  })

  it('should get a shopping list by ID', async () => {
    const queryShoppingList = await apiRoot
      .shoppingLists()
      .withId({ ID: shoppingList.body.id })
      .get()
      .execute()

    expect(queryShoppingList).toBeDefined()
    expect(queryShoppingList.body.id).toEqual(shoppingList.body.id)
  })

  it('should get a shopping list by key', async () => {
    const queryShoppingList = await apiRoot
      .shoppingLists()
      .withKey({ key: shoppingList.body.key })
      .get()
      .execute()

    expect(queryShoppingList).toBeDefined()
    expect(queryShoppingList.body.key).toEqual(shoppingList.body.key)
  })

  it('should query a shopping list', async () => {
    const queryShoppingList = await apiRoot
      .shoppingLists()
      .get({
        queryArgs: {
          where: 'id=' + '"' + shoppingList.body.id + '"',
        },
      })
      .execute()

    expect(queryShoppingList).toBeDefined()
    expect(queryShoppingList.body.results[0].id).toEqual(shoppingList.body.id)
  })

  it('should update a shopping list by ID', async () => {
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

    expect(updateShoppingList.statusCode).toEqual(200)
    expect(updateShoppingList.body.version).not.toEqual(
      shoppingList.body.version
    )
    shoppingList = updateShoppingList
  })

  it('should update a shopping list by key', async () => {
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

    expect(updateShoppingList.statusCode).toEqual(200)
    expect(updateShoppingList.body.version).not.toEqual(
      shoppingList.body.version
    )
    shoppingList = updateShoppingList
  })

  it('should delete a shopping list by Key', async () => {
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
  })

  afterAll(async () => {
    await deleteCustomer(customer)
    await deleteCustomerGroup(customerGroup)
  })
})
