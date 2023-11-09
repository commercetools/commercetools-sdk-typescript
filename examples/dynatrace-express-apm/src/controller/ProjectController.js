const ResponseHandler = require('../utils/response')

/**
 * @description ProjectController
 * @function getProject
 */
class ProjectController {
  constructor({ projectService }) {
    this.projectService = projectService
  }

  async getProject(req, res) {
    const data = await this.projectService.getProject(req.body)

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

module.exports = ProjectController
