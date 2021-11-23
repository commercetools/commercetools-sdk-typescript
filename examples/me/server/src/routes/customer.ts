import { Router } from 'express'
import { CustomerService } from '../service'
import { CustomerRepository } from '../repository'
import { CustomerController } from '../controller'
import { Validator } from '../middleware'
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
const customerRepository = new CustomerRepository({
  apiRoot,
  projectKey: options.projectKey,
})
const customerService = new CustomerService(customerRepository)
const customerController = new CustomerController(customerService)

const router = Router()
const { validateSignup, validateLogin } = Validator
const { createCustomer, getCustomer } = customerController

router.get('/customer', validateLogin, getCustomer.bind(customerController))
router.post(
  '/customer',
  validateSignup,
  createCustomer.bind(customerController)
)

export default router
