const CatService = {
    getAllCategories(knex) {
      return knex.select('*').from('categories')
    },
  
    insertComment(knex, newComment) {
      return knex
        .insert(newComment)
        .into('categories')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
  
    getById(knex, id) {
      return knex
        .from('categories')
        .select('*')
        .where('id', id)
        .first()
    },
  
    deleteComment(knex, id) {
      return knex('categories')
        .where({ id })
        .delete()
    },
  
    updateComment(knex, id, newCommentFields) {
      return knex('categories')
        .where({ id })
        .update(newCommentFields)
    },
  }
  
  module.exports = CatService