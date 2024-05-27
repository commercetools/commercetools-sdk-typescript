require('dotenv').config()
const cors = require('cors')
const express = require('express')

const { apiRoot } = require('./sdk-v2')
const ResponseHandler = require('../utils/response')
const request = require('../utils/request')
const agent = require('../agent').default

const app = express()
const count = request()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function (req, res, next) {
  const total = count()
  agent.init().dogstatsd.gauge(`Commercetools_Client_Request_Total`, total, {
    env: 'dev',
  })
  next()
})

app.get('/project', async function (req, res, next) {
  const project = await apiRoot.get().execute()

  if (project.statusCode == 200) {
    return ResponseHandler.successResponse(
      res,
      project.statusCode || project.body.statusCode,
      project.message || project.body.message || 'success',
      project.body
    )
  }

  return ResponseHandler.errorResponse(
    res,
    project.statusCode || project.body.statusCode,
    project.message || project.body.message || 'error',
    project.body
  )
})

app.get('/customers', async function (req, res, next) {
  const customers = await apiRoot.customers().get().execute()

  if (customers.statusCode == 200) {
    return ResponseHandler.successResponse(
      res,
      customers.statusCode || customers.body.statusCode,
      customers.message || customers.body.message || 'success',
      customers.body
    )
  }

  return ResponseHandler.errorResponse(
    res,
    customers.statusCode || customers.body.statusCode,
    customers.message || customers.body.message || 'error',
    customers.body
  )
})

app.get('/products', async function (req, res, next) {
  const products = await apiRoot.products().get().execute()

  if (products.statusCode == 200) {
    return ResponseHandler.successResponse(
      res,
      products.statusCode || products.body.statusCode,
      products.message || products.body.message || 'success',
      products.body
    )
  }

  return ResponseHandler.errorResponse(
    res,
    products.statusCode || products.body.statusCode,
    products.message || products.body.message || 'error',
    products.body
  )
})

app.use(function (err, req, res, next) {
  return ResponseHandler.errorResponse(res, 500, 'server error', {
    error: { message: 'server error', error: err },
  })
  next()
})

app.use('*', function (req, res) {
  return ResponseHandler.errorResponse(res, 404, 'Not Found', {
    error: { message: 'resource not found' },
  })
})

module.exports = app
