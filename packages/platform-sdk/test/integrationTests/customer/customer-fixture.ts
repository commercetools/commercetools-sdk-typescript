import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import {
  BaseAddress,
  CustomerDraft,
  CustomerGroupResourceIdentifier,
} from '../../../src'

export function createCustomerDraft(customerGroup) {
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

  return customerDraft
}

export function createCustomer(customerDraft) {
  return apiRoot.customers().post({ body: customerDraft }).execute()
}

export function deleteCustomer(responseCreatedCustomer) {
  return apiRoot
    .customers()
    .withId({ ID: responseCreatedCustomer.body.id })
    .delete({
      queryArgs: { version: responseCreatedCustomer.body.version },
    })
    .execute()
}
