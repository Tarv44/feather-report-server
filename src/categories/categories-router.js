const path = require('path')
const express = require('express')
const jsonParser = express.json()
const CatService = require('./categories-service')
const FeatService = require('../features/features-service')
const FeatRouter = require('../features/features-router')

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

CatRouter
    .route('/:cat_id/features')
    .get((req, res, next) => {
        const db = req.app.get('db')
        const catId = req.params.cat_id

        FeatService
            .getByCategory(db, catId)
            .then(feats => {
                if (feats.length === 0) {
                    return res.status(200).json({
                        message: "No features in category or category doesn't exist."
                    })
                }
                return res.status(200).json(feats)
            })
    })

module.exports = CatRouter