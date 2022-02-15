import Client from '../client/Client'
import { ApiRoot } from '@commercetools/platform-sdk'

interface IProductRepository {
  apiRoot: ApiRoot
  projectKey: string
  getProducts(): any | Error
}

class Product implements IProductRepository {
  apiRoot: ApiRoot
  projectKey: string
  constructor(options) {
    const rootClient = new Client(options)
    this.apiRoot = rootClient.getApiRoot(
      rootClient.getClientFromOption(options)
    )
    this.projectKey = rootClient.getProjectKey()
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
