const { newrelic } = require('@commercetools/ts-sdk-apm')
const ResponseHandler = require('../utils/response')

/**
 * @description ProductController
 * @function getProducts
 */
class ProductController {
  constructor({ productService }) {
    this.productService = productService
  }

  async getProducts(req, res) {
    const start = performance.now()
    const data = await this.productService.getProduct(req.body)

    newrelic.recordMetric(
      'GetProductsEndpoint/Response/Time/Total',
      performance.now() - start
    )

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

module.exports = ProductController
