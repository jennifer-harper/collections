/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('collections').del()
  await knex('collections').insert([
    { id: 1, title: 'Reading', content:'xx xxx xxx', category: 'new' },
    { id: 2, title: 'Cooking', content:'ccc ccc ccc', category: 'new' },
    { id: 3, title: 'Restaurants', content:'rrrrrrr', category: 'new'},
  ])
}
