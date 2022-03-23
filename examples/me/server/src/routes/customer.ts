import { Router } from 'express'
import { CustomerController } from '../controller'
import { Validator } from '../middleware'

const customerController = new CustomerController()

const router = Router()
const { validateSignup, validateLogin } = Validator
const { createCustomer, getCustomer, logoutCustomer } = customerController

function forwardID(req, res, next) {
  res.locals.anonymousId = req.headers.token
  next()
}

router.post(
  '/login',
  validateLogin,
  forwardID,
  getCustomer.bind(customerController)
)
router.post(
  '/register',
  validateSignup,
  createCustomer.bind(customerController)
)
router.post('/logout', logoutCustomer.bind(customerController))

export default router
