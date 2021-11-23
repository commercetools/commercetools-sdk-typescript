import ResponseHandler from '../utils/Response'
import { Request, Response } from 'express'

/**
 * @description ProductController
 *
 * @function registerUser
 */
class ProductController {
  private productService
  constructor(ProductService) {
    this.productService = ProductService
  }

  async getProducts(req: Request, res: Response) {
    const data = await this.productService.getProducts()

    if (data.statusCode == 200) {
      return ResponseHandler.successResponse(
        res,
        data.statusCode,
        data.message,
        data.body
      )
    }
    return ResponseHandler.errorResponse(
      res,
      data.statusCode,
      data.message,
      data.body
    )
  }
}

export default ProductController
