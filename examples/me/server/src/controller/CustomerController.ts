import ResponseHandler from '../utils/Response'
import { Request, Response } from 'express'

/**
 * @description CustomerController
 *
 * @function createCustomer
 * @function getCustomer
 */
class CustomerController {
  private customerService
  constructor(CustomerService) {
    this.customerService = CustomerService
  }

  async createCustomer(req: Request, res: Response) {
    const data = await this.customerService.createCustomer(req.body)

    if (data?.statusCode == 201) {
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

  async getCustomer(req: Request, res: Response) {
    const data = await this.customerService.getCustomer(req.body)

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

export default CustomerController
