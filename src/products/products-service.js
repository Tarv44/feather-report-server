const ProdService = {
    getAllProducts(knex) {
      return knex.select('*').from('products')
    },
  
    insertProduct(knex, newProduct) {
      return knex
        .insert(newProduct)
        .into('products')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },

    insertProductFeature(knex, feature) {
      return knex
        .insert(feature)
        .into('product_features')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
  
    getById(knex, id) {
      return knex
        .from('products')
        .select('*')
        .where('id', id)
        .first()
    },

    getByCompany(knex, company) {
      return knex
        .from('products')
        .select('*')
        .where('company', company)
    },
  
    deleteProduct(knex, id) {
      return knex('products')
        .where({ id })
        .delete()
    },

    deleteProductFeature(knex, feature, product) {
      return knex('product_features')
        .where({feature, product})
        .delete()
    },
  
    updateProduct(knex, id, newProductFields) {
      return knex('products')
        .where({ id })
        .update(newProductFields)
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
  }
  
  module.exports = ProdService