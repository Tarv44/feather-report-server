const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const { makeTestComp } = require('./companies.fixtures')
const { makeProdsArray, makeProdFeatsArray } = require('./products.fixtures')
const { makeFeatArray } = require('./features.fixtures')
const { makeCatArray } = require('./categories.fixtures')

describe('Companies Endpoints', function() {
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

    afterEach('cleanup',() => db.raw('TRUNCATE companies, categories, products, features, product_features RESTART IDENTITY CASCADE'))

    describe('POST /api/companies', () => {
        it('creates a user, responding with 201 and the new user', () => {
            const newComp = makeTestComp()

            return supertest(app)
                .post('/api/companies')
                .send(newComp)
                .expect(201)
                .expect(res => {
                    expect(res.body.username).to.eql(newComp.username)
                    expect(res.body).to.have.property('id')
                })
        })
    })

    describe('POST /api/companies/login', () => {
        const testComp = makeTestComp()

        beforeEach('insert company', () => {
            return db
                .into('companies')
                .insert(testComp)
        })

        it('sends correct login info, responding with 201 and company', () => {
            const login = {
                email: testComp.email,
                password: testComp.password
            }

            return supertest(app)
                .post('/api/companies/login')
                .send(login)
                .expect(201)
                .expect(res => {
                    expect(res.body.title).to.eql(testComp.title)
                    expect(res.body.pathname).to.eql(testComp.pathname)
                    expect(res.body.id).to.eql(testComp.id)
                })
        })
    })

    describe('GET /api/companies/:pathname/products', () => {
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

        it('responds with 200 and company products', () => {
            return supertest(app)
                .get(`/api/companies/${testComp.pathname}/products`)
                .expect(200)
                .expect(res => {
                    const r = res.body
                    expect(r).to.have.property('categories')
                    expect(r).to.have.property('company')
                    expect(r).to.have.property('products')
                    // const exchanges = testExchanges.filter(ex => ex.created_by === user_id)
                    // expect(res.body.length).to.eql(exchanges.length)
                    // expect(res.body[0].id).to.eql(exchanges[0].id)
                    // expect(res.body[0].title).to.eql(exchanges[0].title)
                    // expect(res.body[0].created_by).to.eql(exchanges[0].created_by)
                    // expect(res.body[0].description).to.eql(exchanges[0].description)
                })
        })
    })
})