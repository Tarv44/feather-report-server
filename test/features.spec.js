const { expect } = require('chai')
const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const { makeTestComp } = require('./companies.fixtures')
const { makeCatArray } = require('./categories.fixtures')

describe('Features Endpoints', () => {
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
    
    beforeEach('insert Products', () => {
        return db
            .into('companies')
            .insert(testComp)
            .then(() => {
                return db
                    .into('categories')
                    .insert(testCats)
            })
    })

    afterEach('cleanup',() => db.raw('TRUNCATE companies, categories, products, features, product_features RESTART IDENTITY CASCADE'))

    describe('POST /api/features', () => {
        const newFeat = {
            title: "New Feature",
            category: 1
        }

        it('creates new feature and returns feature', () => {
            return supertest(app)
                .post('/api/features')
                .send(newFeat)
                .expect(201)
                .expect(res => {
                    const feat = res.body
                    expect(feat).to.be.an('object')
                    expect(feat).to.have.property('id')
                    expect(feat).to.have.property('title')
                })
        })
    })
})
