const { config } = require('dotenv')
const express = require('express')
const cors = require('cors')

config()

const routes = require('./routes')

const app = express()
const { NODE_ENV } = process.env

// Application-Level Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Global error handler
app.use((error, req, res, next) => {
  // response to user with 403 error and details
  if (error) {
    next(error)
  } else {
    next()
  }
})

// Routes
app.use('/', routes)
app.get('/home', async function (_, res) {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to commercetools sdk apm demo app',
  })
})
app.use('*', async (_, res) => {
  return res.status(404).json({
    status: 'error',
    data: {
      message: 'resource not found on this server',
    },
  })
})

module.exports = app
