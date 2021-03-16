const path = require('path') //.location(path.posix.join(req.originalUrl, `/${user.id}`))
const express = require('express')

const compRouter = express.Router()

compRouter
    .route('/')
    .get((req, res, next) => {
        res.status(200).json('Hello World')
    })

module.exports = compRouter