const CompService = {
    getAllCompany(knex) {
      return knex.select('*').from('companies')
    },
  
    insertCompany(knex, newCompany) {
      return knex
        .insert(newCompany)
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

    getByPathname(knex, pathname) {
        return knex
          .from('companies')
          .select('*')
          .where('pathname', pathname)
          .first()
      },
  
    deleteCompany(knex, id) {
      return knex('companies')
        .where({ id })
        .delete()
    },
  
    updateCompany(knex, id, newCompanyFields) {
      return knex('companies')
        .where({ id })
        .update(newCompanyFields)
    },
  }
  
  module.exports = CompService