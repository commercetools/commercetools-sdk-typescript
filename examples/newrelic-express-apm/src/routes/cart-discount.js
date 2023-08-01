const { Router } = require('express')
const { CartDiscountService } = require('../service')
const { CartDiscountController } = require('../controller')
const { apiRoot } = require('../sdk-v2/sdk')

const cartDiscountService = new CartDiscountService({ apiRoot })
const cartDiscountController = new CartDiscountController({
  cartDiscountService,
})

const router = Router()
const { getCartDiscount, createCartDiscount } = cartDiscountController

router.get('/cart-discount', getCartDiscount.bind(cartDiscountController))
router.post('/cart-discount', createCartDiscount.bind(cartDiscountController))

module.exports = router
