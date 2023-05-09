const { Router } = require('express')
const { ProductService } = require('../service')
const { ProductController } = require('../controller')
const { apiRoot } = require('../sdk-v2/sdk')

const productService = new ProductService({ apiRoot })
const productController = new ProductController({ productService })

const router = Router()
const { getProducts } = productController

router.get('/products', getProducts.bind(productController))

module.exports = router
