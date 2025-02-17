const ResponseHandler = require('../utils/response')

/**
 * @description CustomerController
 * @function getCustomers
 */
class CartController {
  constructor({ cartService }) {
    this.cartService = cartService
  }

  async createCartForCurrentCustomer(req, res) {
    const data = await this.cartService.createCartForCurrentCustomer(req.body)

    if (data.statusCode === 201 || data.statusCode === 200) {
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

  async getActiveCart(req, res) {
    const data = await this.cartService.getActiveCart()

    if (data.statusCode === 200) {
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

module.exports = CartController
