const FeatService = {
    getAllFeatures(knex) {
      return knex.select('*').from('features')
    },
  
    insertFeature(knex, newFeature) {
      return knex
        .insert(newFeature)
        .into('features')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
  
    getById(knex, id) {
      return knex
        .from('features')
        .select('*')
        .where('id', id)
        .first()
    },

    getByProduct(knex, product) {
      return knex
        .from('product_features')
        .join('features', 'product_features.feature', 'features.id' )
        .select('title', 'features.id')
        .where('product_features.product', product)
    },
  
    deleteFeature(knex, id) {
      return knex('features')
        .where({ id })
        .delete()
    },
  
    updateFeature(knex, id, newFeatureFields) {
      return knex('features')
        .where({ id })
        .update(newFeatureFields)
    },
  }
  
  module.exports = FeatService