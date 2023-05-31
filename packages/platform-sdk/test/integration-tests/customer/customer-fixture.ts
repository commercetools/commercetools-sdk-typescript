import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import {
  BaseAddress,
  CustomerDraft,
  CustomerGroupResourceIdentifier,
} from '../../../src'

export const createCustomerDraft = (customerGroup) => {
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

export const createCustomer = async (customerDraft) => {
  return await apiRoot.customers().post({ body: customerDraft }).execute()
}

export const deleteCustomerFromUpdatableObject = async (
  responseCreatedCustomer
) => {
  return await apiRoot
    .customers()
    .withId({ ID: responseCreatedCustomer.body.id })
    .delete({
      queryArgs: { version: responseCreatedCustomer.body.version },
    })
    .execute()
}

export const deleteCustomer = async (customer) => {
  return await apiRoot
    .customers()
    .withId({ ID: customer.body.customer.id })
    .delete({
      queryArgs: { version: customer.body.customer.version },
    })
    .execute()
}
