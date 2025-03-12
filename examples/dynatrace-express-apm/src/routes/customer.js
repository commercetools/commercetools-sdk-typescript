const { Router } = require('express')
const { CustomerService } = require('../service')
const { CustomerController } = require('../controller')
const { apiRoot } = require('../sdk-v3/sdk')

const customerService = new CustomerService({ apiRoot })
const customerController = new CustomerController({ customerService })

const router = Router()
const { getCustomers } = customerController

router.get('/customers', getCustomers.bind(customerController))

module.exports = router
