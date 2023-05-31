import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { CustomerGroupDraft } from '../../../src'

const customerGroupDraft: CustomerGroupDraft = {
  key: 'test-key-customer-group-' + randomUUID(),
  groupName: 'test-name-customerGroup' + randomUUID(),
}

export const createCustomerGroup = async (
  customerGroupDraftBody?: CustomerGroupDraft
) => {
  return await apiRoot
    .customerGroups()
    .post({ body: customerGroupDraftBody || customerGroupDraft })
    .execute()
}

export const deleteCustomerGroup = async (responseCreatedCustomerGroup) => {
  return await apiRoot
    .customerGroups()
    .withId({ ID: responseCreatedCustomerGroup.body.id })
    .delete({
      queryArgs: { version: responseCreatedCustomerGroup.body.version },
    })
    .execute()
}
