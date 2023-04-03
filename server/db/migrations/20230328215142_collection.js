/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('collections', (table) => {
      table.increments('id').primary()
      table.string('title')
      table.string('content')
      table.string('category').defaultTo(null)
    })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('collections')
  }