const path = require('path')
const express = require('express')
const jsonParser = express.json()
const FeatService = require('./features-service')

const FeatRouter = express.Router()

FeatRouter
    .route('/')
    .post(jsonParser, (req, res, next) => {
        const { title, category } = req.body
        const newFeat = { title, category}
        for (const [key, value] of Object.entries(newFeat)) {
            if (!value) {
                return res.status(401).json({
                    error: { message: `Missing ${key} in request body.`}
                })
            }
        }
        
        FeatService.insertFeature(req.app.get('db'), newFeat)
            .then(feat => {
                res
                    .status(201)
                    .location(path.posix.join(req.originalUrl, `/${feat.id}`))
                    .json(feat)
            })
            .catch(err => {
                return res.status(404).json({
                    error: { message: 'Error adding to database.' }
                })
            })
    })

module.exports = FeatRouter