const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const { makeTestComp } = require('./companies.fixtures')
const { makeProdsArray, makeProdFeatsArray } = require('./products.fixtures')
const { makeFeatArray } = require('./features.fixtures')
const { makeCatArray } = require('./categories.fixtures')

describe('Companies Endpoints', () => {
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
        const testComp = makeTestComp()

        it('responds with 201 and new company data', () => {
            return supertest(app)
                .post('/api/companies')
                .send(testComp)
                .expect(201)
                .expect(res => {
                    const comp = res.body
                    expect(comp).to.have.property('id')
                    expect(comp).to.have.property('title')
                    expect(comp).to.have.property('pathname')
                    expect(comp).to.not.have.property('password')
                    expect(comp.title).to.eql(testComp.title)
                    expect(comp.pathname).to.eql(testComp.pathname)
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

                    const comp = r.company
                    expect(comp).to.have.property('id')
                    expect(comp).to.have.property('title')
                    expect(comp).to.have.property('email')

                    const products = r.products
                    expect(products.length).to.equal(testProds.length)
                    expect(products).to.be.an('array')
                    
                    const categories = r.categories
                    expect(categories.length).to.eql(testCats.length)
                    expect(categories).to.be.an('array')
                })
        })
    })
})