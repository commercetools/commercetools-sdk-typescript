import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { CustomerGroupDraft } from '../../../src'

const customerGroupDraft: CustomerGroupDraft = {
  key: 'test-key-customer-group-' + randomUUID(),
  groupName: 'test-name-customerGroup' + randomUUID(),
}
export function createCustomerGroup(
  customerGroupDraftBody?: CustomerGroupDraft
) {
  return apiRoot
    .customerGroups()
    .post({ body: customerGroupDraftBody || customerGroupDraft })
    .execute()
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
