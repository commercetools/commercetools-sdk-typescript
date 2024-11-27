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

    if (data.statusCode == 200) {
      const end = performance.now()
      newrelic.recordMetric(
        'Commercetools/Test/Response/Time/Total',
        end - start
      )
      return ResponseHandler.successResponse(
        res,
        data.statusCode || data.body.statusCode,
        data.message || data.body.message,
        data.body
      )
    }

    const end = performance.now()
    newrelic.recordMetric('Commercetools/Test/Response/Time/Total', end - start)
    return ResponseHandler.errorResponse(
      res,
      data.statusCode || data.body.statusCode,
      data.message || data.body.message,
      data.body
    )
  }
}

module.exports = ProductController
