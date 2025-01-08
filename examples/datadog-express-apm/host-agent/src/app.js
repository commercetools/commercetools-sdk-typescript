require('dotenv').config()
const cors = require('cors')
const express = require('express')

const { apiRoot } = require('./sdk-v3')
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

app.get('/project', async (req, res, next) => {
  try {
    const project = await apiRoot.get().execute()

    // Log the full response for debugging
    console.log('API Response for Project:', project)

    if (!project || !project.body) {
      console.error('API response is undefined or empty:', project)
      return ResponseHandler.errorResponse(
        req,
        res,
        500,
        'Empty response from API for project',
        project
      )
    }

    if (project.statusCode !== 200) {
      console.error(
        'API response status code is not 200 for project:',
        project.statusCode
      )
      return ResponseHandler.errorResponse(
        req,
        res,
        project.statusCode,
        'Error in API response for project',
        project
      )
    }

    // Return success response if status code is 200
    return ResponseHandler.successResponse(
      req,
      res,
      project.statusCode || 200, // Default to status code 200 if undefined
      project.message || 'Success',
      project.body
    )
  } catch (error) {
    console.error('Error fetching project:', error)
    return ResponseHandler.errorResponse(
      req,
      res,
      500,
      'Error fetching project',
      { error: error.message }
    )
  }
})

app.get('/customers', async (req, res, next) => {
  try {
    const response = await apiRoot.customers().get().execute()

    // Log the full response for debugging
    console.log('API Response:', response)

    if (!response || !response.body) {
      console.error('API response is undefined or empty:', response)
      return ResponseHandler.errorResponse(
        req,
        res,
        500,
        'Empty response from API',
        response
      )
    }

    if (response.statusCode !== 200) {
      console.error('API response status code is not 200:', response.statusCode)
      return ResponseHandler.errorResponse(
        req,
        res,
        response.statusCode,
        'Error in API response',
        response
      )
    }

    ResponseHandler.successResponse(
      req,
      res,
      response.statusCode || 200, // Use status code 200 if undefined
      'Success',
      response.body
    )
  } catch (error) {
    console.error('Error fetching customers:', error)
    ResponseHandler.errorResponse(req, res, 500, 'Error fetching customers', {
      error: error.message,
    })
    next(error)
  }
})

app.get('/products', async (req, res, next) => {
  try {
    const products = await apiRoot.products().get().execute()

    // Log the full response for debugging
    console.log('API Response for Products:', products)

    if (!products || !products.body) {
      console.error('API response is undefined or empty:', products)
      return ResponseHandler.errorResponse(
        req,
        res,
        500,
        'Empty response from API for products',
        products
      )
    }

    if (products.statusCode !== 200) {
      console.error(
        'API response status code is not 200 for products:',
        products.statusCode
      )
      return ResponseHandler.errorResponse(
        req,
        res,
        products.statusCode,
        'Error in API response for products',
        products
      )
    }

    // Return success response if status code is 200
    return ResponseHandler.successResponse(
      req,
      res,
      products.statusCode || 200, // Default to status code 200 if undefined
      products.message || 'Success',
      products.body
    )
  } catch (error) {
    console.error('Error fetching products:', error)
    return ResponseHandler.errorResponse(
      req,
      res,
      500,
      'Error fetching products',
      { error: error.message }
    )
  }
})

app.use(function (err, req, res, next) {
  return ResponseHandler.errorResponse(req, res, 500, 'server error', {
    error: { message: 'server error', error: err },
  })
  next()
})

app.use('*', function (req, res) {
  return ResponseHandler.errorResponse(req, res, 404, 'Not Found', {
    error: { message: 'resource not found' },
  })
})

module.exports = app
