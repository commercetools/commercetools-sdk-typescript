require('dotenv').config()
const agent = require('dd-trace').init()
const cors = require('cors')
const express = require('express')
const ResponseHandler = require('./utils/response')
const request = require('./utils/request')
const { apiRoot } = require('./sdk-v3')

const app = express()
const count = request()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function (req, res, next) {
  const total = count()
  agent.dogstatsd.gauge(`ct_request_count`, total, {
    env: 'dev',
  })
  next()
})

app.get('/project', async function (req, res, next) {
  const project = await apiRoot.get().execute()
  const responseHandler = new ResponseHandler(agent)

  if (project.statusCode === 200) {
    return responseHandler.successResponse(
      res,
      project.statusCode || project.body.statusCode,
      project.message || project.body.message || 'success',
      project.body
    )
  }

  return responseHandler.errorResponse(
    res,
    project.statusCode || project.body.statusCode,
    project.message || project.body.message || 'error',
    project.body
  )
})

app.get('/customers', async function (req, res, next) {
  const customers = await apiRoot.customers().get().execute()
  const responseHandler = new ResponseHandler(agent)

  if (customers.statusCode === 200) {
    return responseHandler.successResponse(
      res,
      customers.statusCode || customers.body.statusCode,
      customers.message || customers.body.message || 'success',
      customers.body
    )
  }

  return responseHandler.errorResponse(
    res,
    customers.statusCode || customers.body.statusCode,
    customers.message || customers.body.message || 'error',
    customers.body
  )
})

app.get('/products', async function (req, res, next) {
  const products = await apiRoot.products().get().execute()
  const responseHandler = new ResponseHandler(agent)

  if (products.statusCode === 200) {
    return responseHandler.successResponse(
      res,
      products.statusCode || products.body.statusCode,
      products.message || products.body.message || 'success',
      products.body
    )
  }

  return responseHandler.errorResponse(
    res,
    products.statusCode || products.body.statusCode,
    products.message || products.body.message || 'error',
    products.body
  )
})

app.use(function (err, req, res, next) {
  const responseHandler = new ResponseHandler(agent)

  return responseHandler.errorResponse(res, 500, 'server error', {
    error: { message: 'server error', error: err },
  })
  next()
})

app.use('*', function (req, res) {
  const responseHandler = new ResponseHandler(agent)

  return responseHandler.errorResponse(res, 404, 'Not Found', {
    error: { message: 'resource not found' },
  })
})

module.exports = app
