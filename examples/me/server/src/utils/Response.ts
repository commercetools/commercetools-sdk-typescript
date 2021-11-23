interface Response {
  status: string
  message?: string
  data?: object
}
/**
 * @class Response
 *
 * @description class to handle all http response
 */
class ResponseHandler {
  /**
   *
   * @description method to handle all success responses
   *
   * @param response Object
   * @param statusCode String
   * @param message String
   * @param data Object | Array
   *
   * @return response JSON
   */
  static successResponse = (response, statusCode, message, data) => {
    const responseBody: Response = { status: 'success' }

    if (message !== '') {
      responseBody.message = message
    }

    if (data) {
      responseBody.data = data
    }

    return response.status(statusCode).json({
      ...responseBody,
    })
  }

  /**
   *
   * @description method to handle all error responses
   *
   * @parma { response object }
   * @param statusCode
   * @param message
   * @param data
   *
   * @return response JSON
   */
  static errorResponse = (response, statusCode, message, data) => {
    const responseBody: Response = { status: 'error' }
    if (message !== '') {
      responseBody.message = message
    }

    if (data) {
      responseBody.data = data
    }

    return response.status(statusCode).json({
      ...responseBody,
    })
  }
}

export default ResponseHandler
