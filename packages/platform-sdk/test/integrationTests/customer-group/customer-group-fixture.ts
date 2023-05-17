import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { CustomerGroupDraft } from '../../../src'

const customerGroupDraft: CustomerGroupDraft = {
  key: randomUUID(),
  groupName: 'test-name-customerGroup' + randomUUID(),
}
export function createCustomerGroup() {
  return apiRoot.customerGroups().post({ body: customerGroupDraft }).execute()
}

export function deleteCustomerGroup(responseCreatedCustomerGroup) {
  return apiRoot
    .customerGroups()
    .withId({ ID: responseCreatedCustomerGroup.body.id })
    .delete({
      queryArgs: { version: responseCreatedCustomerGroup.body.version },
    })
    .execute()
}
