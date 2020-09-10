exports.seed = function(knex) {
    return knex('steps').insert([
      {
          recipe_id: 1,
          instructions: "Combine Lemon and Meringue",
          step_number: 1
      },
    ]);
  };
  