import { Router } from 'express'
import { ProductController } from '../controller'

const productController = new ProductController()

const router = Router()
const { getProducts } = productController

router.get('/product', getProducts.bind(productController))

export default router
