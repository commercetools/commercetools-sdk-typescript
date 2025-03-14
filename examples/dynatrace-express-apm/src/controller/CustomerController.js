const ResponseHandler = require('../utils/response')

/**
 * @description CustomerController
 * @function getCustomers
 */
class CustomerController {
  constructor({ customerService }) {
    this.customerService = customerService
  }

  async getCustomers(req, res) {
    const data = await this.customerService.getCustomers(req.body)

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

module.exports = CustomerController
