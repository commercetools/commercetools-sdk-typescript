import { Router } from 'express'
import { CartController } from '../controller'

// build the client
const cartController = new CartController()

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
