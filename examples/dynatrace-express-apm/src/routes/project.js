const { Router } = require('express')
const { ProjectService } = require('../service')
const { ProjectController } = require('../controller')
const { apiRoot } = require('../sdk-v3/sdk')

const projectService = new ProjectService({ apiRoot })
const projectController = new ProjectController({ projectService })

const router = Router()
const { getProject } = projectController

router.get('/project', getProject.bind(projectController))

module.exports = router
