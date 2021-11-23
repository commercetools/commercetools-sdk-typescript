import { ApiRoot } from '@commercetools/platform-sdk'

type CustomerData = {
  email: string
  password: string
  firstName: string
  lastName: string
  countryCode: string
  key: string
}

interface ICustomerRepository {
  apiRoot: ApiRoot
  projectKey: string
  createCustomerDraft(customerData: CustomerData): object
  createCustomer(customerData: CustomerData): any | never
  getCustomer({
    email,
    password,
  }: {
    email: string
    password: string
  }): any | never
}

class CustomerRepository implements ICustomerRepository {
  apiRoot: ApiRoot
  projectKey: string
  constructor({ apiRoot, projectKey }) {
    this.apiRoot = apiRoot
    this.projectKey = projectKey
  }

  createCustomerDraft(customerData) {
    const { email, password, firstName, lastName, countryCode, key } =
      customerData

    return {
      email,
      password,
      key,
      firstName,
      lastName,
      addresses: [
        {
          country: countryCode,
        },
      ],
      defaultShippingAddress: 0,
    }
  }

  async createCustomer(customerData) {
    try {
      const customer = await this.apiRoot
        .withProjectKey({ projectKey: this.projectKey })
        .customers()
        .post({
          body: this.createCustomerDraft(customerData),
        })
        .execute()

      // check to make sure status is 201
      return customer
    } catch (error) {
      return error
    }
  }

  async getCustomer({ email, password }) {
    try {
      const customer = await this.apiRoot
        .withProjectKey({ projectKey: this.projectKey })
        .me()
        .login()
        .post({
          body: {
            email,
            password,
          },
        })
        .execute()

      return customer
    } catch (error) {
      return error
    }
  }
}

export default CustomerRepository
