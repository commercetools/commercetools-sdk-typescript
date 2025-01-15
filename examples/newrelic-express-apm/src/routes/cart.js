const { Router } = require('express')
const { CartService } = require('../service')
const { CartController } = require('../controller')
const { apiRoot } = require('../sdk-v3/sdk')

const cartService = new CartService({ apiRoot })
const cartController = new CartController({ cartService })

const router = Router()
const { getActiveCart, createCartForCurrentCustomer } = cartController

router.get('/cart', getActiveCart.bind(cartController))
router.post('/cart', createCartForCurrentCustomer.bind(cartController))

module.exports = router
