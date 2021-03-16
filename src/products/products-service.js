const ProdService = {
    getAllProducts(knex) {
      return knex.select('*').from('products')
    },
  
    insertComment(knex, newComment) {
      return knex
        .insert(newComment)
        .into('products')
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
  
    deleteComment(knex, id) {
      return knex('products')
        .where({ id })
        .delete()
    },
  
    updateComment(knex, id, newCommentFields) {
      return knex('products')
        .where({ id })
        .update(newCommentFields)
    },
  }
  
  module.exports = ProdService