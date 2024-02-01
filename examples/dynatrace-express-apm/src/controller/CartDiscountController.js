const ResponseHandler = require('../utils/response')

/**
 * @description CustomerController
 * @function getCustomers
 */
class CartDiscountController {
  constructor({ cartDiscountService }) {
    this.cartDiscountService = cartDiscountService
  }

  async createCartDiscount(req, res) {
    const data = await this.cartDiscountService.createCartDiscount(req.body)

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

  async getCartDiscount(req, res) {
    const data = await this.cartDiscountService.getCartDiscount(req.body.id)

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

module.exports = CartDiscountController
