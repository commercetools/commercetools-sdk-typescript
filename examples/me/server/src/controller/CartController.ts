import { Request, Response } from 'express'
import ResponseHandler from '../utils/Response'
import { CartRepository } from '../repository'
import { getOptions } from '../utils/options'
import { encrypt } from '../utils/helper'

/**
 * @description CartController
 * @function getActiveCart
 */
class CartController {
  constructor() {}

  async createCartForCurrentCustomer(req: Request, res: Response) {
    const options = getOptions(req.headers) // get the actual option
    const data = await new CartRepository(options).createCartForCurrentCustomer(
      req.body
    )

    if (data.statusCode == 201 || data.statusCode == 200) {
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

  async getActiveCart(req: Request, res: Response) {
    const options = getOptions(req.headers) // get the actual option
    const data = await new CartRepository(options).getActiveCart()

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

  async updateActiveCart(req: Request, res: Response) {
    const options = getOptions(req.headers) // get the header object
    const data = await new CartRepository(options).updateActiveCart(req.body)
    if (data.statusCode == 200) {
      // data.body.token = encrypt(req.headers.token)
      data.body.token = data.body?.anonymousId || data.body?.customerId || null
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

  async removeLineItem(req: Request, res: Response) {
    const options = getOptions(req.headers) // get the actual option
    const data = await new CartRepository(options).removeLineItem(req.body)

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

export default CartController
