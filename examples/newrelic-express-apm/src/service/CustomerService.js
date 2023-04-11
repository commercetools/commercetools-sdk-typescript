class CustomerService {
  constructor({ apiRoot }) {
    this.apiRoot = apiRoot
  }

  async getCustomers() {
    return this.apiRoot.customers().get().execute()
  }
}

module.exports = CustomerService
