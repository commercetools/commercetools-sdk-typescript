const { Router } = require('express')

const project = require('./project')
const product = require('./product')
const customer = require('./customer')

const router = Router()

router.use(project)
router.use(product)
router.use(customer)

module.exports = router
