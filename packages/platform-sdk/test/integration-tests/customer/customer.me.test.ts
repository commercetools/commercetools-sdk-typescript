import { apiRoot } from '../test-utils'
import { ClientResponse, CustomerSignInResult } from '../../../src'
import {
  createCustomer,
  createCustomerDraft,
} from '../customer/customer-fixture'
import { createCustomerGroup } from '../customer-group/customer-group-fixture'

describe('testing customer me endpoint API calls', () => {
  it('should sign in using me endpoint', async () => {
    const customerGroup = await createCustomerGroup()
    const customerDraft = await createCustomerDraft(customerGroup)
    const customer = await createCustomer(customerDraft)

    const responseLoginMe: ClientResponse<CustomerSignInResult> = await apiRoot
      .me()
      .login()
      .post({
        body: {
          email: customer.body.customer.email,
          password: customerDraft.password,
        },
      })
      .execute()
    expect(responseLoginMe.statusCode).toBe(200)
    expect(responseLoginMe.body).not.toBe(null)
  })
})
