exports.seed = function(knex) {
    return knex('ingredients').insert([
      {ingredient_name: 'Lemon'},
      {ingredient_name: 'Meringue'},
    ]);
  };
  