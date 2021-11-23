import { Router } from 'express'
import { ProductService } from '../service'
import { ProductRepository } from '../repository'
import { ProductController } from '../controller'
import ApiRoot from '../client/Client'

// build the client
const options = {
  projectKey: process.env.CTP_PROJECT_KEY || '',
  oauthUri: 'https://auth.europe-west1.gcp.commercetools.com',
  baseUri: 'https://api.europe-west1.gcp.commercetools.com',
  credentials: {
    clientId: process.env.CTP_CLIENT_ID || '',
    clientSecret: process.env.CTP_CLIENT_SECRET || '',
  },
}

const root = new ApiRoot(options)
const apiRoot = root.getApiRoot(root.getDefaultClient())

// concrete implementation and dependency injection
const productRepository = new ProductRepository({
  apiRoot,
  projectKey: options.projectKey,
})
const productService = new ProductService(productRepository)
const productController = new ProductController(productService)

const router = Router()
const { getProducts } = productController

router.get('/product', getProducts.bind(productController))

export default router
