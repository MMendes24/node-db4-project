exports.seed = function(knex) {
    return knex('ingredients').insert([
      {ingredient: 'Lemon'},
      {ingredient: 'Meringue'},
    ]);
  };
  