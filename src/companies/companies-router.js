const path = require('path') //.location(path.posix.join(req.originalUrl, `/${user.id}`))
const express = require('express')
const CompanyService = require('./companies-service')
const ProductService = require('../products/products-service')
const FeaturesService = require('../features/features-service')
const CategoryService = require('../categories/categories-service')

const compRouter = express.Router()

compRouter
    .route('/:pathname/products')
    .get((req, res, next) => {
        const db = req.app.get('db')
        const response = {}
        CompanyService.getByPathname(db, req.params.pathname)
            .then(co => {
                if (!co) {
                    throw new Error('Could not find company with given pathname.')
                }
                const { id, title, email } = co
                response.id = id, response.title = title, response.email = email
                ProductService.getByCompany(db, id)
                    .then(prods => {
                        const ProductFeatures = prods.map(p => {
                            return FeaturesService.getByProduct(db, p.id)
                                .then(features => {
                                    p.features = features
                                })
                        })
                        Promise.all(ProductFeatures).then(() => {
                            response.products = prods
                            CategoryService.getByCompany(db, id)
                                .then(cats => {
                                    response.categories = cats
                                    res.status(200).json(response)
                                })
                                .catch(next)
                        })
                        .catch(next)
                    })
                    .catch(next)
            })
            .catch(err => res.status(404).json({
                error: { message: err.message }
            }))
    })

module.exports = compRouter