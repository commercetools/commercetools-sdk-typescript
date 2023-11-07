class ProductService {
  constructor({ apiRoot }) {
    this.apiRoot = apiRoot
  }

  async getProduct() {
    return this.apiRoot.products().get().execute()
  }
}

module.exports = ProductService
