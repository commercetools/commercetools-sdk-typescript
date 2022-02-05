import { Router } from 'express'
import { CartController } from '../controller'
import { isAuthenticated } from '../middleware'

// build the client
const cartController = new CartController()

const router = Router()
const {
  createCartForCurrentCustomer,
  getActiveCart,
  updateActiveCart,
  removeLineItem,
} = cartController

router.get(
  '/cart',
  // isAuthenticated,
  getActiveCart.bind(cartController)
)
router.post(
  '/cart',
  // isAuthenticated,
  createCartForCurrentCustomer.bind(cartController)
)
router.put(
  '/cart',
  // isAuthenticated,
  updateActiveCart.bind(cartController)
)
router.delete(
  '/cart',
  // isAuthenticated,
  removeLineItem.bind(cartController)
)

export default router
