const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')

const { makeTestComp } = require('./companies.fixtures')
const { makeFeatArray } = require('./features.fixtures')
const { makeCatArray } = require('./categories.fixtures')

describe('Categories Endpoints', () => {
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

    describe('POST /api/categories', () => {
        const testComp = makeTestComp()

        beforeEach('insert company', () => {
            return db
                .into('companies')
                .insert(testComp)
        })

        it('creates new category and returns category', () => {
            const newCat = {
                title: "New Category",
                company: 1
            }

            return supertest(app)
                .post('/api/categories/')
                .send(newCat)
                .expect(201)
                .expect(res => {
                    const cat = res.body
                    expect(cat.title).to.eql(newCat.title)
                })
        })
    })

    describe('GET /api/categories/:cat_id/features', () => {
        const testComp = makeTestComp()
        const testCats = makeCatArray()
        const testFeats = makeFeatArray()

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
                                .into('features')
                                .insert(testFeats)
                        })
                })
        })

        it('returns all features in category', () => {
            const cat_id = 1
            const catFeats = testFeats.filter(f => f.category === cat_id)

            return supertest(app)
                .get(`/api/categories/${cat_id}/features`)
                .expect(200)
                .then(res => {
                    feats = res.body
                    expect(feats.length).to.eql(catFeats.length)
                    expect(feats[0].title).to.eql(catFeats[0].title)
                })
        })
    })

})
