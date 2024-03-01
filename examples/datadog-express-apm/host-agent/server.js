require('dotenv').config()
const cors = require('cors')
const express = require('express')

const { apiRoot } = require('./sdk-v2')

const PORT = 9000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/project', async function (req, res, next) {
  const project = await apiRoot.get().execute()
  res.status(200).json({
    message: 'success',
    data: project.body,
  })
})

app.get('/customers', async function (req, res, next) {
  const customers = await apiRoot.customers().get().execute()
  res.status(200).json({
    message: 'success',
    data: customers.body,
  })
})

app.get('/products', async function (req, res, next) {
  const products = await apiRoot.products().get().execute()
  res.status(200).json({
    message: 'success',
    data: products.body,
  })
})

app.use(function (err, req, res, next) {
  res.status(500).json({
    message: 'server error',
    error: {
      message: 'server error',
      error: err,
    },
  })
})

app.use('*', function (req, res) {
  res.status(404).json({
    message: 'success',
    error: {
      message: 'resource not found',
    },
  })
})

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`)
})
