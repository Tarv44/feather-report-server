require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const CatRouter = require('./categories/categories-router')
const CompRouter =  require('./companies/companies-router')
const ProdRouter = require('./products/products-router')
const FeatRouter = require('./features/features-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.use('/api/categories', CatRouter)
app.use('/api/companies', CompRouter)
app.use('/api/products', ProdRouter)
app.use('/api/features', FeatRouter)

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.use((error, req, res, next) => {
    let response
    if (NODE_ENV === 'production') {
        response = {error: {message: 'server error'}}
    } else {
        console.error(error)
        response = {message: error.message, error}
    }
    res.status(500).json(response)
})

module.exports = app