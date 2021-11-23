import ResponseHandler from '../utils/Response'
import { Request, Response } from 'express'

/**
 * @description CartController
 *
 * @function getActiveCart
 */
class CartController {
  private cartService
  constructor(CartService) {
    this.cartService = CartService
  }

  async createCartForCurrentCustomer(req: Request, res: Response) {
    const data = await this.cartService.createCartForCurrentCustomer(req.body)

    if (data.statusCode == 201) {
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

  async getActiveCart(req: Request, res: Response) {
    const data = await this.cartService.getActiveCart()

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

  async updateActiveCart(req: Request, res: Response) {
    const data = await this.cartService.updateActiveCart(req.body)
    console.log(data, '>>>>>')

    if (data.statusCode == 200) {
      return ResponseHandler.successResponse(
        res,
        data.statusCode,
        data.message,
        data.bdoy
      )
    }
    return ResponseHandler.errorResponse(
      res,
      data.statusCode,
      data.message,
      data.body
    )
  }

  async removeLineItem(req: Request, res: Response) {
    const data = await this.cartService.removeLineItem(req.body)

    if (data.statusCode == 200) {
      return ResponseHandler.successResponse(
        res,
        data.statusCode,
        data.message,
        data.bdoy
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

export default CartController
