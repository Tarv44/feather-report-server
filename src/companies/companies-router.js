const path = require('path')
const bcrypt = require('bcrypt')
const saltRounds = 10
const express = require('express')
const CompanyService = require('./companies-service')
const ProductService = require('../products/products-service')
const FeaturesService = require('../features/features-service')
const CategoryService = require('../categories/categories-service')
const FeatService = require('../features/features-service')

const CompRouter = express.Router()
const jsonParser = express.json()

CompRouter
    .route('/')
    .post(jsonParser, (req, res, next) => {
        const db = req.app.get('db')

        const { title, email, pathname, password } = req.body
        const newComp = { title, pathname, password, email}

        for (const [key, value] of Object.entries(newComp)) {
            if (!value) {
                return res.status(400).json({
                    error: { message: `Missing ${key} in request body.` }
                })
            }
        }

        newComp.email = email.toLowerCase()

        CompanyService.getByPathname(db, pathname)
            .then(co_from_path => {
                if (co_from_path) {
                    throw new Error('Pathname unavailable.')
                }
                CompanyService.getByEmail(db, newComp.email)
                    .then(co_from_email => {
                        if (co_from_email) {
                            throw new Error('Account with email already exists')
                        }
                        bcrypt.hash(password, saltRounds)
                            .then(hash => {
                                newComp.password = hash
                                CompanyService.insertCompany(db, newComp)
                                    .then(comp => {
                                        const { id, title, pathname, email } = comp
                                        const response = { id, title, pathname, email }
                                        res
                                            .status(201)
                                            .location(path.posix.join(req.originalUrl, `/${id}`))
                                            .json(response)
                                    })
                                    .catch(next)
                            })
                            .catch(next)
                    })
                    .catch(err => res.status(404).json({
                        error: { message: err.message }
                    }))
            })
            .catch(err => res.status(404).json({
                error: { message: err.message }
            }))
    })

CompRouter
    .route('/login')
    .post(jsonParser, (req, res, next) => {
        CompanyService.getByEmail(
            req.app.get('db'),
            req.body.email.toLowerCase() 
        )
            .then(comp => {
                if (!comp) {
                    throw new Error('Business with email does not exist.')
                }
                return comp
            })
            .then(comp => {
                bcrypt
                    .compare(req.body.password, comp.password)
                    .then(result => {
                        if (!result) {
                            return res.status(401).json({
                                error: { message: 'Incorrect Password.' }
                            })
                        }
                        const response = {
                            id: comp.id,
                            pathname: comp.pathname,
                            title: comp.title
                        }
                        res.status(201).json(response)
                    })
                    .catch(next)
            })
            .catch(err => {
                return res.status(401).json({
                    error: { message: err.message }
                })
            })
    })

CompRouter
    .route('/:pathname')
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
                                    const CatFeatures = cats.map(c => {
                                        return FeatService.getByCategory(db, c.id)
                                            .then(feats => {
                                                c.features = feats
                                            })
                                    })
                                    Promise.all(CatFeatures).then(() => {
                                        response.categories = cats
                                        res.status(200).json(response)
                                    })
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

module.exports = CompRouter