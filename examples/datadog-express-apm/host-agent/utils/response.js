const agent = require('../agent').default
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
   * @param request Request Object
   * @param response Response Object
   * @param statusCode String
   * @param message String
   * @param data Object | Array
   *
   * @return response JSON
   */
  static successResponse = (request, response, statusCode, message, data) => {
    const responseBody = { status: 'success' }

    if (message !== '') {
      responseBody.message = message
    }

    if (data) {
      responseBody.data = data
    }

    // Ensure we're not overwriting a valid response with an error
    return response.status(statusCode).json(responseBody)
  }
  /**
   *
   * @description method to handle all error responses
   *
   * @param request Object
   * @param response Object
   * @param statusCode
   * @param message
   * @param data
   *
   * @return response JSON
   */
  static errorResponse = (request, response, statusCode, message, data) => {
    // Check if response is the Express response object
    if (!response || typeof response.status !== 'function') {
      console.error('Invalid response object passed:', response)
      return // Handle this case accordingly (maybe send an error response directly)
    }

    const responseBody = { status: 'error' }

    if (message !== '') {
      responseBody.message = message
    }

    if (data) {
      responseBody.data = data
    }

    return response.status(statusCode).json(responseBody)
  }
}

module.exports = ResponseHandler
