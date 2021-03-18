const path = require('path')
const express = require('express')
const jsonParser = express.json()
const ProdService = require('./products-service')
const FeatService = require('../features/features-service')

const ProdRouter = express.Router()

ProdRouter
    .route('/')
    .post(jsonParser, (req, res, next) => {
        const db = req.app.get('db')

        const { title, price, brand, category, link, description, company, features} = req.body
        const newProduct = { title, price, company, category }

        for (const [key, value] of Object.entries(newProduct)) {
            if (!value) {
                return res.status(401).json({
                    error: { message: `Missing ${key} in request body.`}
                })
            }
        }

        newProduct.brand = brand
        newProduct.link = link
        newProduct.description = description

        ProdService.insertProduct(db, newProduct)
            .then(prod => {
                const response = prod
                const FeatInserts = features
                    .map(feature => {
                        const newFeat = { feature, product: prod.id }
                        return ProdService.insertProductFeatures(db, newFeat)
                    })
                Promise
                    .all(FeatInserts)
                    .then(()=> {
                        FeatService.getByProduct(db, prod.id)
                            .then(feats => {
                                response.features = feats
                                return res.status(201).json(response)
                            })
                    })
            })
    })

module.exports = ProdRouter