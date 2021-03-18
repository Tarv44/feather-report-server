const path = require('path')
const express = require('express')
const jsonParser = express.json()
const CatService = require('./categories-service')

const CatRouter = express.Router()

CatRouter
    .route('/')
    .post(jsonParser, (req, res, next) => {
        const { title, company } = req.body
        const newCat = { title, company }
        for (const [key, value] of Object.entries(newCat)) {
            if (!value) {
                return res.status(401).json({
                    error: { message: `Missing ${key} in request body.`}
                })
            }
        }
        
        CatService.insertCategory(req.app.get('db'), newCat)
            .then(cat => {
                res
                    .status(201)
                    .location(path.posix.join(req.originalUrl, `/${cat.id}`))
                    .json(cat)
            })
            .catch(err => {
                return res.status(404).json({
                    error: { message: 'Error adding to database.' }
                })
            })
    })

module.exports = CatRouter