import { ApiRoot } from '@commercetools/platform-sdk'

interface IProductRepository {
  apiRoot: ApiRoot
  projectKey: string
  getProducts(): any | never
}

class Product implements IProductRepository {
  apiRoot: ApiRoot
  projectKey: string
  constructor({ apiRoot, projectKey }) {
    this.apiRoot = apiRoot
    this.projectKey = projectKey
  }

  async getProducts() {
    try {
      const products = await this.apiRoot
        .withProjectKey({ projectKey: this.projectKey })
        .products()
        .get()
        .execute()

      return products
    } catch (error) {
      return error
    }
  }
}

export default Product
