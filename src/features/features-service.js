const FeatService = {
    getAllFeatures(knex) {
      return knex.select('*').from('features')
    },
  
    insertComment(knex, newComment) {
      return knex
        .insert(newComment)
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
  
    deleteComment(knex, id) {
      return knex('features')
        .where({ id })
        .delete()
    },
  
    updateComment(knex, id, newCommentFields) {
      return knex('features')
        .where({ id })
        .update(newCommentFields)
    },
  }
  
  module.exports = FeatService