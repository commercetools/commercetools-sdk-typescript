const { Router } = require('express')

const project = require('./project')
const product = require('./product')
const customer = require('./customer')
const cart = require('./cart')
const cartDiscount = require('./cart-discount')

const router = Router()

router.use(project)
router.use(product)
router.use(customer)
router.use(cart)
router.use(cartDiscount)

module.exports = router
