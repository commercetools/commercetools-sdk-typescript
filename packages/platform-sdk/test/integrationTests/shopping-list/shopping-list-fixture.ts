import { apiRoot } from '../test-utils'
import {
  CartDiscountResourceIdentifier,
  CustomerResourceIdentifier,
  ShoppingListDraft,
  TextLineItemDraft,
} from '../../../src'
import { randomUUID } from 'crypto'

export const createShoppingListDraft = (customer) => {
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

  return shoppingListDraft
}

export const createShoppingList = async (shoppingListDraft) => {
  return await apiRoot
    .shoppingLists()
    .post({ body: shoppingListDraft })
    .execute()
}

export const deleteShoppingList = async (shoppingList) => {
  return await apiRoot
    .shoppingLists()
    .withId({ ID: shoppingList.body.id })
    .delete({ queryArgs: { version: shoppingList.body.version } })
    .execute()
}
