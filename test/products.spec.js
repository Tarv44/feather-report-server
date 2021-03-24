const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const { makeTestComp } = require('./companies.fixtures')
const { makeNewProd, makeProdsArray, makeProdFeatsArray } = require('./products.fixtures')
const { makeFeatArray } = require('./features.fixtures')
const { makeCatArray } = require('./categories.fixtures')

describe('Products Endpoints', () => {
    let db

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DATABASE_URL
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('clean the table', () => db.raw('TRUNCATE companies, categories, products, features, product_features RESTART IDENTITY CASCADE'))
    
    const testComp = makeTestComp()
    const testCats = makeCatArray()
    const testProds = makeProdsArray()
    const testFeats = makeFeatArray()
    const testProdFeats = makeProdFeatsArray()

    beforeEach('insert Products', () => {
        return db
            .into('companies')
            .insert(testComp)
            .then(() => {
                return db
                    .into('categories')
                    .insert(testCats)
                    .then(() => {
                        return db
                            .into('products')
                            .insert(testProds)
                            .then(() => {
                                return db
                                    .into('features')
                                    .insert(testFeats)
                                    .then(() => {
                                        return db
                                            .into('product_features')
                                            .insert(testProdFeats)
                                    })
                            })
                    })
            })
    })

    afterEach('cleanup',() => db.raw('TRUNCATE companies, categories, products, features, product_features RESTART IDENTITY CASCADE'))

    describe('POST /api/products', () => {

        it('creates new product, responding with 201 and new product data', () => {
            const testProd = makeNewProd()
            return supertest(app)
                .post('/api/products/')
                .send(testProd)
                .expect(201)
                .expect(res => {
                    const prod = res.body
                    expect(prod).to.have.property('id')
                    expect(prod).to.have.property('title')
                    expect(prod).to.have.property('brand')
                    expect(prod).to.have.property('price')
                    expect(prod).to.have.property('description')
                    expect(prod).to.have.property('link')
                    expect(prod).to.have.property('company')
                    expect(prod).to.have.property('category')
                    expect(prod).to.have.property('features')
                    expect(prod.features[0]).to.be.an('object')
                })
        })
    })

    describe('PATCH /api/products', () => {
        const testProd = makeNewProd()
        const feats = testProd.features
        beforeEach('insert test product', () => {
            delete testProd.features
            return db
                .insert(testProd)
                .into('products')
        })

        it('changes product data and returns updated product', () => {
            testProd.features = feats
            testProd.title = "Altered Title"
            testProd.id = 4
            return supertest(app)
                .patch('/api/products/')
                .send(testProd)
                .expect(201)
                .expect(res => {
                    const prod = res.body
                    expect(prod.title).to.eql(testProd.title)
                })
        })
    })
})