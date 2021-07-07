exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe: 'Lemon Meringue'},
    {recipe: 'Lemon Tart'},
  ]);
};
