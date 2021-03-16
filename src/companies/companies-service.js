const CompService = {
    getAllCompanies(knex) {
      return knex.select('*').from('companies')
    },
  
    insertComment(knex, newComment) {
      return knex
        .insert(newComment)
        .into('companies')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
  
    getById(knex, id) {
      return knex
        .from('companies')
        .select('*')
        .where('id', id)
        .first()
    },
  
    deleteComment(knex, id) {
      return knex('companies')
        .where({ id })
        .delete()
    },
  
    updateComment(knex, id, newCommentFields) {
      return knex('companies')
        .where({ id })
        .update(newCommentFields)
    },
  }
  
  module.exports = CompService