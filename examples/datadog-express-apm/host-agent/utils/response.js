const agent = require('dd-trace').default
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
    const responseBody = { status: 'success' }

    if (message !== '') {
      responseBody.message = message
    }

    if (data) {
      responseBody.data = data
    }

    agent.init().dogstatsd.increment(`Commercetools_Client_Response`, 1, {
      env: 'dev',
      status_code: statusCode,

      success: true,
    })

    return response.status(statusCode).json({
      ...responseBody,
    })
  }

  /**
   *
   * @description method to handle all error responses
   *
   * @param  response object
   * @param statusCode
   * @param message
   * @param data
   *
   * @return response JSON
   */
  static errorResponse = (response, statusCode, message, data) => {
    const responseBody = { status: 'error' }
    if (message !== '') {
      responseBody.message = message
    }

    if (data) {
      responseBody.data = data
    }

    agent.init().dogstatsd.increment(`Commercetools_Client_Response`, 1, {
      env: 'dev',
      status_code: statusCode,

      success: false,
    })

    return response.status(statusCode).json({
      ...responseBody,
    })
  }
}

module.exports = ResponseHandler
