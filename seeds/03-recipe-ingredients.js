exports.seed = function (knex) {
    return knex('ingredients').insert([
        {
            ingredient_id: 1,
            recipe_id: 1,
            quanity: 1
        },
        {
            ingredient_id: 2,
            recipe_id: 1,
            quanity: 1
        },
    ]);
};
