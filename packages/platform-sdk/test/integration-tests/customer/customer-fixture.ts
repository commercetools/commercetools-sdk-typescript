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

export const createCustomer = async (_customerDraft) =>
  apiRoot.customers().post({ body: _customerDraft }).execute()

export const deleteCustomer = async (customer) =>
  apiRoot
    .customers()
    .withId({ ID: customer.body.id || customer.body.customer.id })
    .delete({
      queryArgs: {
        version: customer.body.version || customer.body.customer.version,
      },
    })
    .execute()
