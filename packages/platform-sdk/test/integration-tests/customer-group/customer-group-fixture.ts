import { randomUUID } from 'crypto'
import { apiRoot } from '../test-utils'
import { CustomerGroupDraft } from '../../../src'

const customerGroupDraft: CustomerGroupDraft = {
  key: 'test-key-customer-group-' + randomUUID(),
  groupName: 'test-name-customerGroup' + randomUUID(),
}

export const createCustomerGroup = async (
  customerGroupDraftBody?: CustomerGroupDraft
) =>
  apiRoot
    .customerGroups()
    .post({ body: customerGroupDraftBody || customerGroupDraft })
    .execute()

export const deleteCustomerGroup = async (customerGroup) =>
  apiRoot
    .customerGroups()
    .withId({ ID: customerGroup.body.id })
    .delete({
      queryArgs: { version: customerGroup.body.version },
    })
    .execute()
