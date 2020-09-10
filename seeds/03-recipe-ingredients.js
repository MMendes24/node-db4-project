exports.seed = function (knex) {
    return knex('recipe_ingredients').insert([
        {
            ingredient_id: 1,
            recipe_id: 1,
            quantity: 1
        },
        {
            ingredient_id: 2,
            recipe_id: 1,
            quantity: 1
        },
    ]);
};
