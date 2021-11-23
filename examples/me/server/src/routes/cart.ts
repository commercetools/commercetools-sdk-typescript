import { Router } from 'express'
import fetch from 'node-fetch'
import { createAuthForPasswordFlow } from '@commercetools/sdk-client-v2'
import { CartService } from '../service'
import { CartRepository } from '../repository'
import { CartController } from '../controller'
import ApiRoot from '../client/Client'

// build the client
const authMiddleware = createAuthForPasswordFlow({
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: process.env.CTP_PROJECT_KEY || '',
  credentials: {
    clientId: process.env.CTP_CLIENT_ID || '',
    clientSecret: process.env.CTP_CLIENT_SECRET || '',
    user: {
      username: 'test40@test.com',
      password: '12345678',
    },
  },
  scopes: [`manage_project:${process.env.CTP_PROJECT_KEY}`],
  fetch,
})

const options = {
  projectKey: process.env.CTP_PROJECT_KEY || '',
  authMiddleware,
  httpMiddlewareOptions: {
    host: 'https://api.europe-west1.gcp.commercetools.com',
    fetch,
  },
}

const root = new ApiRoot(options)
const apiRoot = root.getApiRoot(root.getClientFromOption(options))

// concrete implementation and dependency injection
const cartRepository = new CartRepository({
  apiRoot,
  projectKey: options.projectKey,
})
const cartService = new CartService(cartRepository)
const cartController = new CartController(cartService)

const router = Router()
const {
  createCartForCurrentCustomer,
  getActiveCart,
  updateActiveCart,
  removeLineItem,
} = cartController

router.get('/cart', getActiveCart.bind(cartController))
router.post('/cart', createCartForCurrentCustomer.bind(cartController))
router.put('/cart', updateActiveCart.bind(cartController))
router.delete('/cart', removeLineItem.bind(cartController))

export default router
