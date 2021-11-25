import ResponseHandler from '../utils/Response'
import { Request, Response } from 'express'
import { ProductRepository } from '../repository'
import { getOptions } from '../utils/options'

/**
 * @description ProductController
 *
 * @function registerUser
 */
class ProductController {
  constructor() {}

  async getProducts(req: Request, res: Response) {
    const options = getOptions(req.headers)
    const data = await new ProductRepository(options).getProducts()

    if (data.statusCode == 200) {
      return ResponseHandler.successResponse(
        res,
        data.statusCode || data.body.statusCode,
        data.message || data.body.message,
        data.body
      )
    }
    return ResponseHandler.errorResponse(
      res,
      data.statusCode || data.body.statusCode,
      data.message || data.body.message,
      data.body
    )
  }
}

export default ProductController
